"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

type Props = {
  images: string[];
  activeImage?: string;
  productName: string;
};

export default function ImageGallery({ images, activeImage, productName }: Props) {
  const [mainImage, setMainImage] = useState(activeImage ?? images[0]);

  useEffect(() => {
    if (activeImage) setMainImage(activeImage);
  }, [activeImage]);

  return (
    <div className="flex flex-col gap-3">
      {/* Main image */}
      <div className="aspect-square bg-stone-50 rounded-2xl overflow-hidden relative">
        <Image
          src={mainImage ?? "/images/placeholder.jpg"}
          alt={productName}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-2">
          {images.map((img, i) => {
            const isActive = img === mainImage;
            return (
              <button
                key={i}
                onClick={() => setMainImage(img)}
                className={`relative w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                  isActive ? "border-stone-900" : "border-transparent hover:border-stone-300"
                }`}
              >
                <Image
                  src={img}
                  alt={`${productName} view ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
