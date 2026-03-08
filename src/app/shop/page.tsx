import type { Metadata } from "next";
import { Suspense } from "react";
import { getAllProducts } from "@/lib/products";
import ShopClient from "./ShopClient";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Browse all 3D printed products — dragons, flexi animals, geometric lamps, accessories and magnets. Made to order in SE London.",
};

export default function ShopPage() {
  const products = getAllProducts();

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="text-3xl font-bold text-stone-900 mb-2">Shop</h1>
      <p className="text-stone-500 mb-8">All products made to order in SE London.</p>

      <Suspense fallback={<div className="h-10" />}>
        <ShopClient products={products} />
      </Suspense>
    </div>
  );
}
