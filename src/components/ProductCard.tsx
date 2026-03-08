import Link from "next/link";
import Image from "next/image";
import { Product, getMinPrice, formatPrice } from "@/lib/products";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  const minPrice = getMinPrice(product);
  const image = product.images[0] ?? "/images/placeholder.jpg";

  return (
    <Link
      href={`/product/${product.slug}`}
      className="group block bg-white rounded-xl overflow-hidden border border-stone-100 hover:border-stone-300 hover:shadow-md transition-all duration-200"
    >
      <div className="aspect-square bg-stone-50 relative overflow-hidden">
        <Image
          src={image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
      </div>
      <div className="p-4">
        <p className="text-sm text-stone-500 capitalize mb-0.5">{product.category}</p>
        <h3 className="font-semibold text-stone-900 text-base leading-snug">{product.name}</h3>
        <p className="mt-1.5 text-stone-700 font-medium">From {formatPrice(minPrice)}</p>
      </div>
    </Link>
  );
}
