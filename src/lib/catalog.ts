import raw from "./data/catalog.json";
import type { Product } from "./catalog-types";
import {
  CATEGORY_META,
  DESCRIPTION_PT,
  TITLE_PT,
  categoryGroup,
  categoryLabel,
} from "./localize";
import { normalizeQuery } from "./utils";

type RawProduct = {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  tags: string[];
  images: string[];
  thumbnail: string;
};

const USD_TO_BRL = 5.48;

function toBRL(usd: number) {
  const rawValue = usd * USD_TO_BRL;
  if (rawValue < 20) return Math.round(rawValue * 2) / 2;
  if (rawValue < 80) return Math.round(rawValue) - 0.01;
  if (rawValue < 500) return Math.round(rawValue) - 0.1;
  return Math.round(rawValue);
}

function describe(item: RawProduct, title: string, brand: string) {
  if (DESCRIPTION_PT[item.id]) return DESCRIPTION_PT[item.id];
  const cat = categoryLabel(item.category);
  const who = brand ? `${brand} · ${cat}` : cat;
  return `${title} no Radar. Comparamos ofertas de ${who.toLowerCase()} em lojas do Brasil, com PIX, frete e prazo lado a lado.`;
}

const PRODUCTS: Product[] = (raw as RawProduct[]).map((item) => {
  const title = TITLE_PT[item.id] ?? item.title;
  const brand = item.brand || "Marca própria";
  const discountRate = Math.max(0.04, (item.discountPercentage ?? 10) / 100);
  const basePrice = toBRL(item.price);
  const listPrice = toBRL(item.price / (1 - Math.min(discountRate, 0.35)));
  const aliases = CATEGORY_META[item.category]?.aliases ?? [];
  const searchText = normalizeQuery(
    [
      title,
      item.title,
      brand,
      item.category,
      categoryLabel(item.category),
      ...(item.tags ?? []),
      ...aliases,
    ].join(" "),
  );

  return {
    id: item.id,
    title,
    titleEn: item.title,
    description: describe(item, title, brand),
    category: item.category,
    categoryLabel: categoryLabel(item.category),
    group: categoryGroup(item.category),
    brand,
    rating: item.rating,
    stock: item.stock,
    tags: item.tags ?? [],
    images: item.images?.length ? item.images : [item.thumbnail],
    thumbnail: item.thumbnail,
    listPrice: Math.max(listPrice, basePrice + 1),
    basePrice,
    discountRate,
    searchText,
  };
});

const BY_ID = new Map(PRODUCTS.map((p) => [p.id, p]));

export function allProducts() {
  return PRODUCTS;
}

export function getProduct(id: number) {
  return BY_ID.get(id);
}

export function productsByCategory(category: string) {
  return PRODUCTS.filter((p) => p.category === category);
}

export function featuredProducts(limit = 8) {
  return [...PRODUCTS].sort((a, b) => b.discountRate - a.discountRate).slice(0, limit);
}

export function topRated(limit = 8) {
  return [...PRODUCTS].sort((a, b) => b.rating - a.rating).slice(0, limit);
}

export type SearchHit = Product & { score: number };

export function searchProducts(query: string, category?: string): SearchHit[] {
  const q = normalizeQuery(query);
  const pool = category
    ? PRODUCTS.filter((p) => p.category === category || p.group === category)
    : PRODUCTS;
  if (!q) {
    return pool
      .map((p) => ({ ...p, score: p.discountRate + p.rating / 10 }))
      .sort((a, b) => b.score - a.score);
  }

  const tokens = q.split(/\s+/).filter(Boolean);
  const hits: SearchHit[] = [];
  for (const product of pool) {
    let score = 0;
    const titleN = normalizeQuery(product.title);
    const brandN = normalizeQuery(product.brand);
    if (titleN === q) score += 100;
    else if (titleN.startsWith(q)) score += 60;
    else if (titleN.includes(q)) score += 40;
    if (brandN === q) score += 30;
    else if (brandN.includes(q)) score += 18;
    let tokensHit = 0;
    for (const token of tokens) {
      if (product.searchText.includes(token)) tokensHit += 1;
    }
    if (tokens.length && tokensHit === tokens.length) score += 24;
    else if (tokensHit) score += tokensHit * 6;
    if (score <= 0 && product.searchText.includes(q)) score += 8;
    if (score > 0) hits.push({ ...product, score });
  }
  return hits.sort((a, b) => b.score - a.score || a.basePrice - b.basePrice);
}

export function relatedProducts(product: Product, limit = 4) {
  return PRODUCTS.filter((p) => p.category === product.category && p.id !== product.id)
    .sort((a, b) => b.rating - a.rating)
    .slice(0, limit);
}

export function categoryCounts() {
  const map = new Map<string, { category: string; label: string; group: string; count: number }>();
  for (const product of PRODUCTS) {
    const current = map.get(product.category);
    if (current) current.count += 1;
    else {
      map.set(product.category, {
        category: product.category,
        label: product.categoryLabel,
        group: product.group,
        count: 1,
      });
    }
  }
  return [...map.values()].sort((a, b) => b.count - a.count);
}

export const SUGGESTED_SEARCHES = [
  "iPhone",
  "notebook",
  "AirPods",
  "perfume",
  "Nike",
  "liquidificador",
  "iPad",
  "Galaxy",
  "Rolex",
  "café",
];
