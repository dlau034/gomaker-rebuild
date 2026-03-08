"use client";

import { useState } from "react";
import Link from "next/link";
import { Product, Colour, formatPrice } from "@/lib/products";
import ImageGallery from "@/components/ImageGallery";
import ColourPicker from "@/components/ColourPicker";
import BuyNowButton from "@/components/BuyNowButton";

type Props = {
  product: Product;
};

export default function ProductClient({ product }: Props) {
  const [selectedColour, setSelectedColour] = useState<Colour>(product.colours[0]);

  function handleColourSelect(colour: Colour) {
    setSelectedColour(colour);
  }

  // Collect all unique images: product images + selected colour image
  const allImages = Array.from(
    new Set([...product.images, selectedColour.image])
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.images,
    offers: product.colours.map((c) => ({
      "@type": "Offer",
      price: c.price.toFixed(2),
      priceCurrency: "GBP",
      availability: "https://schema.org/InStock",
      name: c.name,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        {/* Breadcrumb */}
        <nav className="text-sm text-stone-400 mb-8 flex gap-2">
          <Link href="/shop" className="hover:text-stone-600">Shop</Link>
          <span>/</span>
          <span className="capitalize">{product.category}</span>
          <span>/</span>
          <span className="text-stone-700">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
          {/* Left — gallery */}
          <ImageGallery
            images={allImages}
            activeImage={selectedColour.image}
            productName={product.name}
          />

          {/* Right — info */}
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-sm text-stone-400 capitalize mb-1">{product.category}</p>
              <h1 className="text-2xl sm:text-3xl font-bold text-stone-900 leading-tight">
                {product.name}
              </h1>
              <p className="text-2xl font-semibold text-stone-900 mt-3">
                {formatPrice(selectedColour.price)}
              </p>
            </div>

            <p className="text-stone-600 leading-relaxed">{product.description}</p>

            <ColourPicker
              colours={product.colours}
              selected={selectedColour}
              onSelect={handleColourSelect}
            />

            <BuyNowButton
              paymentLink={selectedColour.paymentLink}
              price={formatPrice(selectedColour.price)}
            />

            {/* Product details */}
            <div className="border-t border-stone-100 pt-6 space-y-3 text-sm text-stone-600">
              <div className="flex items-center gap-2">
                <span className="font-medium text-stone-900 w-36">Material</span>
                <span>{product.material}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium text-stone-900 w-36">Made to order</span>
                <span className="inline-flex items-center gap-1.5 bg-green-50 text-green-700 text-xs font-medium px-2.5 py-1 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  Yes — printed fresh for you
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium text-stone-900 w-36">Production time</span>
                <span>{product.productionDays} working day{product.productionDays === "1" ? "" : "s"}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium text-stone-900 w-36">UK shipping</span>
                <span>£2.99 · Free over £40</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
