import productsData from "../../data/products.json";

export type Colour = {
  name: string;
  hex: string;
  image: string;
  paymentLink: string;
  price: number;
};

export type Product = {
  slug: string;
  name: string;
  category: string;
  description: string;
  material: string;
  madeToOrder: boolean;
  productionDays: string;
  featured: boolean;
  images: string[];
  colours: Colour[];
};

export const CATEGORIES = [
  { value: "all", label: "All" },
  { value: "dragons", label: "Dragons" },
  { value: "animals", label: "Animals" },
  { value: "lamps", label: "Lamps" },
  { value: "accessories", label: "Accessories" },
  { value: "magnets", label: "Magnets" },
] as const;

export function getAllProducts(): Product[] {
  return productsData as Product[];
}

export function getProductBySlug(slug: string): Product | undefined {
  return (productsData as Product[]).find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  if (category === "all") return productsData as Product[];
  return (productsData as Product[]).filter((p) => p.category === category);
}

export function getFeaturedProducts(): Product[] {
  return (productsData as Product[]).filter((p) => p.featured);
}

export function getMinPrice(product: Product): number {
  return Math.min(...product.colours.map((c) => c.price));
}

export function formatPrice(price: number): string {
  return `£${price.toFixed(2)}`;
}

export function getAllSlugs(): string[] {
  return (productsData as Product[]).map((p) => p.slug);
}
