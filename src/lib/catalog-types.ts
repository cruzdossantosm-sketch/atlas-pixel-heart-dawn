export type Product = {
  id: number;
  title: string;
  titleEn: string;
  description: string;
  category: string;
  categoryLabel: string;
  group: string;
  brand: string;
  rating: number;
  stock: number;
  tags: string[];
  images: string[];
  thumbnail: string;
  listPrice: number;
  basePrice: number;
  discountRate: number;
  searchText: string;
};
