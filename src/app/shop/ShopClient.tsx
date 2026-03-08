"use client";

import { useSearchParams } from "next/navigation";
import { Product } from "@/lib/products";
import CategoryFilter from "@/components/CategoryFilter";
import ProductGrid from "@/components/ProductGrid";

type Props = {
  products: Product[];
};

export default function ShopClient({ products }: Props) {
  const searchParams = useSearchParams();
  const category = searchParams.get("category") ?? "all";

  const filtered =
    category === "all"
      ? products
      : products.filter((p) => p.category === category);

  return (
    <div className="space-y-8">
      <CategoryFilter />
      <ProductGrid products={filtered} />
    </div>
  );
}
