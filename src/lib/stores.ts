export type StoreKind = "oficial" | "marketplace" | "magazine";

export type StoreDef = {
  id: string;
  name: string;
  short: string;
  kind: StoreKind;
  personality: {
    price: number;
    pix: number;
    shipping: number;
    speed: number;
    installments: number;
  };
};

export const STORES: StoreDef[] = [
  {
    id: "magalu",
    name: "Magazine Luiza",
    short: "Magalu",
    kind: "magazine",
    personality: { price: 0.97, pix: 0.1, shipping: 0.2, speed: 0.85, installments: 10 },
  },
  {
    id: "amazon",
    name: "Amazon",
    short: "Amazon",
    kind: "oficial",
    personality: { price: 1.02, pix: 0.05, shipping: 0, speed: 0.92, installments: 12 },
  },
  {
    id: "mercadolivre",
    name: "Mercado Livre",
    short: "Mercado Livre",
    kind: "marketplace",
    personality: { price: 0.94, pix: 0.07, shipping: 0.45, speed: 0.7, installments: 12 },
  },
  {
    id: "americanas",
    name: "Americanas",
    short: "Americanas",
    kind: "magazine",
    personality: { price: 1.05, pix: 0.08, shipping: 0.35, speed: 0.55, installments: 10 },
  },
  {
    id: "casasbahia",
    name: "Casas Bahia",
    short: "Casas Bahia",
    kind: "magazine",
    personality: { price: 1.08, pix: 0.06, shipping: 0.3, speed: 0.6, installments: 12 },
  },
  {
    id: "kabum",
    name: "KaBuM!",
    short: "KaBuM!",
    kind: "oficial",
    personality: { price: 0.91, pix: 0.12, shipping: 0.55, speed: 0.75, installments: 10 },
  },
  {
    id: "shopee",
    name: "Shopee",
    short: "Shopee",
    kind: "marketplace",
    personality: { price: 0.88, pix: 0.04, shipping: 0.7, speed: 0.35, installments: 6 },
  },
  {
    id: "ponto",
    name: "Ponto",
    short: "Ponto",
    kind: "magazine",
    personality: { price: 1.04, pix: 0.09, shipping: 0.25, speed: 0.65, installments: 12 },
  },
  {
    id: "fastshop",
    name: "Fast Shop",
    short: "Fast Shop",
    kind: "oficial",
    personality: { price: 1.12, pix: 0.03, shipping: 0.1, speed: 0.9, installments: 12 },
  },
  {
    id: "netshoes",
    name: "Netshoes",
    short: "Netshoes",
    kind: "oficial",
    personality: { price: 0.99, pix: 0.08, shipping: 0.2, speed: 0.72, installments: 10 },
  },
  {
    id: "centauro",
    name: "Centauro",
    short: "Centauro",
    kind: "oficial",
    personality: { price: 1.01, pix: 0.07, shipping: 0.22, speed: 0.68, installments: 10 },
  },
  {
    id: "dafiti",
    name: "Dafiti",
    short: "Dafiti",
    kind: "oficial",
    personality: { price: 0.96, pix: 0.1, shipping: 0.28, speed: 0.62, installments: 6 },
  },
  {
    id: "belezanaweb",
    name: "Beleza na Web",
    short: "Beleza na Web",
    kind: "oficial",
    personality: { price: 1.0, pix: 0.08, shipping: 0.18, speed: 0.78, installments: 6 },
  },
  {
    id: "sephora",
    name: "Sephora",
    short: "Sephora",
    kind: "oficial",
    personality: { price: 1.14, pix: 0.05, shipping: 0.15, speed: 0.8, installments: 6 },
  },
  {
    id: "drogaraia",
    name: "Droga Raia",
    short: "Droga Raia",
    kind: "oficial",
    personality: { price: 1.06, pix: 0.06, shipping: 0.12, speed: 0.88, installments: 3 },
  },
  {
    id: "decathlon",
    name: "Decathlon",
    short: "Decathlon",
    kind: "oficial",
    personality: { price: 0.95, pix: 0.05, shipping: 0.32, speed: 0.66, installments: 6 },
  },
];

const STORE_BY_ID = new Map(STORES.map((s) => [s.id, s]));

export function storeById(id: string) {
  return STORE_BY_ID.get(id);
}

export const STORES_BY_GROUP: Record<string, string[]> = {
  eletronicos: [
    "kabum",
    "amazon",
    "magalu",
    "mercadolivre",
    "fastshop",
    "americanas",
    "ponto",
    "casasbahia",
  ],
  beleza: [
    "belezanaweb",
    "sephora",
    "amazon",
    "magalu",
    "mercadolivre",
    "drogaraia",
    "americanas",
  ],
  casa: [
    "casasbahia",
    "magalu",
    "amazon",
    "ponto",
    "mercadolivre",
    "americanas",
    "shopee",
  ],
  mercado: ["amazon", "magalu", "mercadolivre", "shopee", "americanas"],
  moda: [
    "dafiti",
    "netshoes",
    "amazon",
    "magalu",
    "mercadolivre",
    "shopee",
    "americanas",
  ],
  esporte: [
    "centauro",
    "netshoes",
    "decathlon",
    "amazon",
    "mercadolivre",
    "magalu",
  ],
  auto: ["mercadolivre", "amazon", "magalu", "casasbahia"],
};
