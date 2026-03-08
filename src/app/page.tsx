import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getFeaturedProducts, formatPrice, getMinPrice } from "@/lib/products";
import HeroCarousel from "@/components/HeroCarousel";
import WhatWePrint from "@/components/WhatWePrint";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "Gomaker — 3D Printed Goods from SE London",
  description:
    "Handmade 3D printed dragons, flexi animals, lamps and accessories. Made to order in SE London. Ships in 1–3 days.",
};

export default function HomePage() {
  const featured = getFeaturedProducts();

  return (
    <>
      {/* Hero carousel */}
      <HeroCarousel />

      {/* What we 3D print */}
      <WhatWePrint />

      {/* Most Popular */}
      <section className="bg-white py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl sm:text-3xl font-medium text-[#1a1a1a]">Most Popular</h2>
            <Link
              href="/shop"
              className="text-sm font-medium uppercase tracking-wide text-[#06A0B4] hover:text-[#0589A0] transition-colors"
            >
              See Full Range
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {featured.map((product) => (
              <Link
                key={product.slug}
                href={`/product/${product.slug}`}
                className="group block bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-[#06A0B4] hover:shadow-md transition-all duration-200"
              >
                <div className="aspect-square bg-[#f5f5f5] relative overflow-hidden">
                  <Image
                    src={product.images[0] ?? "/images/placeholder.jpg"}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                </div>
                <div className="p-3">
                  <h3 className="font-medium text-[#1a1a1a] text-sm leading-snug">{product.name}</h3>
                  <p className="mt-1 text-sm font-medium text-[#06A0B4]">
                    From {formatPrice(getMinPrice(product))}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Studio blurb */}
      <section className="bg-[#f5f5f5] py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row gap-10 items-center">
            <div className="w-full sm:w-72 aspect-square rounded-2xl overflow-hidden shrink-0 relative">
              <Image
                src="/images/studio/studio-1.jpg"
                alt="Go Maker studio"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 288px"
              />
            </div>
            <div className="max-w-xl">
              <h2 className="text-2xl sm:text-3xl font-medium text-[#1a1a1a] mb-4">
                3D printing is our jam!
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                We are a small design and 3D printing shop based in South East London. Our focus is on creating and selling cool, interesting 3D printed creations using a variety of materials to get the job done.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/about"
                  className="inline-block font-medium text-sm px-6 py-3 rounded-full border-2 border-[#06A0B4] text-[#06A0B4] hover:bg-[#06A0B4] hover:text-white uppercase tracking-wide transition-colors"
                >
                  See it yourself
                </Link>
                <Link
                  href="/contact"
                  className="inline-block font-medium text-sm text-white px-6 py-3 rounded-full uppercase tracking-wide bg-[#06A0B4] hover:bg-[#0589A0] transition-colors"
                >
                  Get in touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom print CTA */}
      <section className="bg-[#278996] py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center gap-8">
          <div className="w-full sm:w-56 aspect-square rounded-2xl overflow-hidden shrink-0 relative">
            <Image
              src="/images/studio/studio-2.jpg"
              alt="Go Maker 3D printing studio"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 224px"
            />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-medium text-white mb-3">
              Want something custom printed?
            </h2>
            <p className="text-white/80 leading-relaxed mb-6 max-w-lg">
              Would you like something designed or have your own model you&apos;d like to 3D print? We&apos;d love to help.
            </p>
            <Link
              href="/contact?type=custom"
              className="inline-block font-medium text-sm text-white px-8 py-3.5 rounded-full uppercase tracking-wide border-2 border-white/60 hover:bg-white/20 transition-colors"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ />
    </>
  );
}
