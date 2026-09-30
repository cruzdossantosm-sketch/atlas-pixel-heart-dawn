import { TITLE_PT as TITLES } from "./titles-pt";

export const TITLE_PT = TITLES;

export const CATEGORY_META: Record<
  string,
  { label: string; group: string; aliases: string[] }
> = {
  smartphones: {
    label: "Celulares",
    group: "eletronicos",
    aliases: ["celular", "celulares", "smartphone", "smartphones"],
  },
  laptops: {
    label: "Notebooks",
    group: "eletronicos",
    aliases: ["notebook", "notebooks", "laptop", "computador"],
  },
  tablets: {
    label: "Tablets",
    group: "eletronicos",
    aliases: ["tablet", "tablets"],
  },
  "mobile-accessories": {
    label: "Áudio e acessórios",
    group: "eletronicos",
    aliases: ["fone", "fones", "carregador", "acessorio", "acessorios", "audio"],
  },
  beauty: {
    label: "Maquiagem",
    group: "beleza",
    aliases: ["maquiagem", "batom", "mascara", "sombra", "esmalte"],
  },
  fragrances: {
    label: "Perfumes",
    group: "beleza",
    aliases: ["perfume", "perfumes", "fragrance", "colonia"],
  },
  "skin-care": {
    label: "Cuidados com a pele",
    group: "beleza",
    aliases: ["pele", "sabonete", "locao", "hidratante"],
  },
  furniture: {
    label: "Móveis",
    group: "casa",
    aliases: ["movel", "moveis", "sofa", "cama", "cadeira"],
  },
  "home-decoration": {
    label: "Decoração",
    group: "casa",
    aliases: ["decoracao", "vaso", "abajur", "planta"],
  },
  "kitchen-accessories": {
    label: "Cozinha",
    group: "casa",
    aliases: ["cozinha", "liquidificador", "panela", "microondas", "fogao"],
  },
  groceries: {
    label: "Mercado",
    group: "mercado",
    aliases: ["mercado", "alimento", "comida", "feira"],
  },
  "mens-shirts": {
    label: "Camisas",
    group: "moda",
    aliases: ["camisa", "camiseta", "roupa"],
  },
  "mens-shoes": {
    label: "Tênis e calçados",
    group: "moda",
    aliases: ["tenis", "sapato", "calcado"],
  },
  "mens-watches": {
    label: "Relógios",
    group: "moda",
    aliases: ["relogio", "relogios"],
  },
  "womens-watches": {
    label: "Relógios femininos",
    group: "moda",
    aliases: ["relogio", "relogios"],
  },
  "womens-dresses": {
    label: "Vestidos",
    group: "moda",
    aliases: ["vestido", "vestidos"],
  },
  tops: {
    label: "Roupas",
    group: "moda",
    aliases: ["roupa", "roupas", "moda"],
  },
  "womens-bags": {
    label: "Bolsas",
    group: "moda",
    aliases: ["bolsa", "bolsas", "mochila"],
  },
  "womens-shoes": {
    label: "Calçados femininos",
    group: "moda",
    aliases: ["sapato", "salto", "chinelo"],
  },
  "womens-jewellery": {
    label: "Joias",
    group: "moda",
    aliases: ["brinco", "joia", "joias"],
  },
  sunglasses: {
    label: "Óculos de sol",
    group: "moda",
    aliases: ["oculos"],
  },
  "sports-accessories": {
    label: "Esportes",
    group: "esporte",
    aliases: ["esporte", "esportes", "bola", "futebol"],
  },
  motorcycle: {
    label: "Motos",
    group: "auto",
    aliases: ["moto", "motos", "motocicleta"],
  },
  vehicle: {
    label: "Carros",
    group: "auto",
    aliases: ["carro", "carros", "automovel"],
  },
};

export const GROUP_LABEL: Record<string, string> = {
  eletronicos: "Eletrônicos",
  beleza: "Beleza",
  casa: "Casa",
  mercado: "Mercado",
  moda: "Moda",
  esporte: "Esportes",
  auto: "Auto",
};

export const GROUPS = [
  "eletronicos",
  "beleza",
  "casa",
  "mercado",
  "moda",
  "esporte",
  "auto",
] as const;

export const DESCRIPTION_PT: Record<number, string> = {
  6: "CK One, o clássico unissex cítrico-aromático de Calvin Klein.",
  7: "Coco Noir da Chanel: oriental amadeirado, sofisticado e noturno.",
  8: "J'adore Dior, floral luminoso com assinatura inconfundível.",
  9: "Dolce Shine, floral frutado solar da Dolce & Gabbana.",
  10: "Gucci Bloom, buquê branco de tuberosa, jasmim e rangoon creeper.",
  78: "MacBook Pro de 14 polegadas em cinza-espacial, desempenho profissional.",
  79: "Zenbook Pro com tela dupla para criação e produtividade.",
  80: "MateBook X Pro, notebook fino com tela de alto contraste.",
  81: "Yoga 920 conversível, do notebook ao tablet em um giro.",
  82: "Dell XPS 13 9300, ultraportátil com construção premium.",
  100: "AirPods com estojo de recarga e áudio Apple.",
  101: "AirPods Max prata, fone over-ear com cancelamento de ruído.",
  123: "iPhone 13 Pro, câmera Pro e tela Super Retina XDR.",
  133: "Galaxy S10, tela Infinity e conjunto de câmeras versátil.",
  159: "iPad Mini 2021 Starlight, compacto com chip da linha A.",
};

export function categoryLabel(category: string) {
  return CATEGORY_META[category]?.label ?? category;
}

export function categoryGroup(category: string) {
  return CATEGORY_META[category]?.group ?? "outros";
}

export function categoriesForAlias(token: string) {
  const cats: string[] = [];
  for (const [category, meta] of Object.entries(CATEGORY_META)) {
    if (meta.aliases.includes(token) || token === category) cats.push(category);
  }
  return cats;
}
