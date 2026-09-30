import { categoryGroup } from "./localize";
import { STORES_BY_GROUP, storeById, type StoreDef } from "./stores";
import type { Product } from "./catalog-types";

export type Offer = {
  id: string;
  storeId: string;
  storeName: string;
  storeShort: string;
  storeKind: StoreDef["kind"];
  listPrice: number;
  price: number;
  pixPrice: number;
  pixDiscount: number;
  shipping: number;
  daysMin: number;
  daysMax: number;
  installments: number;
  installmentValue: number;
  rating: number;
  reviews: number;
  official: boolean;
  inStock: boolean;
  totalPix: number;
  totalCard: number;
};

export type PricePoint = { day: string; price: number };

function mulberry32(seed: number) {
  let a = seed >>> 0;
  return function rand() {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function money(value: number) {
  if (value <= 0) return 0;
  if (value < 20) return Math.round(value * 2) / 2;
  if (value < 80) return Math.round(value) - 0.01;
  if (value < 400) return Math.round(value) - 0.1;
  return Math.round(value);
}

export function buildOffers(product: Product): Offer[] {
  const rand = mulberry32(product.id * 9973 + 17);
  const pool = STORES_BY_GROUP[categoryGroup(product.category)] ?? STORES_BY_GROUP.eletronicos;
  const count = 4 + Math.floor(rand() * 3);
  const chosen = pool.slice(0, Math.min(count + 1, pool.length));

  const offers: Offer[] = [];
  for (const storeId of chosen) {
    const store = storeById(storeId);
    if (!store) continue;
    const jitter = 0.92 + rand() * 0.16;
    const price = money(product.basePrice * store.personality.price * jitter);
    const listPrice = money(Math.max(price * (1 + product.discountRate * 0.8 + rand() * 0.12), price + 1));
    const pixDiscount = store.personality.pix;
    const pixPrice = money(price * (1 - pixDiscount));
    const freeShip = store.personality.shipping === 0 || rand() > store.personality.shipping;
    let shipping = 0;
    if (!freeShip) {
      const shipBase = product.basePrice > 800 ? 0 : 12.9 + rand() * 22;
      shipping = money(shipBase);
    }
    const speed = store.personality.speed;
    const daysMin = speed > 0.85 ? 1 : speed > 0.7 ? 2 : speed > 0.5 ? 3 : 5;
    const daysMax = daysMin + (speed > 0.8 ? 1 : speed > 0.6 ? 3 : 7);
    const installments = store.personality.installments;
    const installmentValue = money(price / installments);
    const official = store.kind === "oficial" || rand() > 0.45;
    const inStock = rand() > 0.08;
    const rating = Math.round((4.1 + rand() * 0.8) * 10) / 10;
    const reviews = 80 + Math.floor(rand() * 18000);

    offers.push({
      id: `${product.id}-${store.id}`,
      storeId: store.id,
      storeName: store.name,
      storeShort: store.short,
      storeKind: store.kind,
      listPrice,
      price,
      pixPrice,
      pixDiscount,
      shipping,
      daysMin,
      daysMax,
      installments,
      installmentValue,
      rating,
      reviews,
      official,
      inStock,
      totalPix: money(pixPrice + shipping),
      totalCard: money(price + shipping),
    });
  }

  return offers.sort((a, b) => a.totalPix - b.totalPix);
}

export function bestOffer(offers: Offer[]) {
  return offers.find((o) => o.inStock) ?? offers[0];
}

export function savings(offers: Offer[]) {
  if (offers.length < 2) return 0;
  const best = bestOffer(offers);
  const worst = offers[offers.length - 1];
  if (!best || !worst) return 0;
  return Math.max(0, worst.totalPix - best.totalPix);
}

export function buildHistory(product: Product, best: Offer): PricePoint[] {
  const rand = mulberry32(product.id * 4243 + 91);
  const points: PricePoint[] = [];
  const today = new Date();
  let price = best.pixPrice * (1.08 + rand() * 0.1);
  for (let i = 29; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(today.getDate() - i);
    const drift = (rand() - 0.48) * product.basePrice * 0.012;
    price = Math.max(best.pixPrice * 0.96, price + drift);
    if (i === 4) price = best.pixPrice;
    points.push({
      day: d.toISOString().slice(5, 10),
      price: money(price),
    });
  }
  return points;
}

export type OfferFilter = "todas" | "frete" | "prazo" | "pix";

export function filterOffers(offers: Offer[], filter: OfferFilter) {
  if (filter === "frete") return offers.filter((o) => o.shipping === 0);
  if (filter === "prazo") return [...offers].sort((a, b) => a.daysMin - b.daysMin || a.totalPix - b.totalPix);
  if (filter === "pix") return [...offers].sort((a, b) => b.pixDiscount - a.pixDiscount || a.totalPix - b.totalPix);
  return offers;
}
