"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";

type Slide = {
  heading: string;
  body: string;
  cta: string;
  href: string;
  bgImage?: string;
  bgColor: string;
};

const slides: Slide[] = [
  {
    heading: "Need to customise or personalise 3D printing?",
    body: "Whether you want one item 3D printed or a batch order, we can help!",
    cta: "CHAT TO US",
    href: "/contact?type=custom",
    bgImage: "/images/hero/slide-1.jpg",
    bgColor: "#1a6b7a",
  },
  {
    heading: "Animal Minis Advent Calendars",
    body: "24 Flexi Animals — the perfect gift. From £19.99.",
    cta: "ORDER NOW",
    href: "/shop?category=animals",
    bgImage: "/images/hero/slide-2.webp",
    bgColor: "#2d3a6e",
  },
  {
    heading: "AI Image to 3D Printing",
    body: "Turn any AI-generated image into a real 3D print. One-of-a-kind every time.",
    cta: "GET STARTED",
    href: "/contact?type=custom",
    bgImage: "/images/hero/slide-3.png",
    bgColor: "#1e5c48",
  },
  {
    heading: "Fidget Flexi Fun Dragons",
    body: "Starting from £12.50 — articulated, tactile, endlessly satisfying.",
    cta: "SEE THE RANGE",
    href: "/shop?category=dragons",
    bgImage: "/images/hero/slide-4.jpg",
    bgColor: "#4a2040",
  },
  {
    heading: "Made-to-order in the UK",
    body: "Every print made fresh in our SE London studio. Quality guaranteed.",
    cta: "ORDER NOW",
    href: "/shop",
    bgImage: "/images/hero/slide-5.webp",
    bgColor: "#0d5c6e",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  const goTo = useCallback((index: number) => {
    if (transitioning) return;
    setTransitioning(true);
    setTimeout(() => {
      setCurrent(index);
      setTransitioning(false);
    }, 250);
  }, [transitioning]);

  const prev = () => goTo((current - 1 + slides.length) % slides.length);
  const next = useCallback(() => goTo((current + 1) % slides.length), [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  return (
    <div
      className="relative overflow-hidden transition-colors duration-700"
      style={{ backgroundColor: slide.bgColor, minHeight: "600px" }}
    >
      {/* Background image (when provided) */}
      {slide.bgImage && (
        <Image
          src={slide.bgImage}
          alt=""
          fill
          className="object-cover transition-opacity duration-500"
          style={{ opacity: transitioning ? 0 : 1 }}
          priority
        />
      )}

      {/* Content card — bottom-left, matching original site layout */}
      <div className="relative z-10 flex items-end min-h-[600px] px-6 sm:px-16 pb-16">
        <div
          className="bg-white/92 backdrop-blur-sm rounded-2xl p-7 sm:p-9 max-w-sm shadow-2xl transition-opacity duration-250"
          style={{ opacity: transitioning ? 0 : 1 }}
        >
          <h2 className="text-xl sm:text-2xl font-medium text-[#1a1a1a] mb-3 leading-snug">
            {slide.heading}
          </h2>
          <p className="text-sm text-gray-600 mb-6 leading-relaxed">{slide.body}</p>
          <Link
            href={slide.href}
            className="inline-block font-medium text-sm text-white px-7 py-3 rounded-full transition-colors uppercase tracking-wide"
            style={{ backgroundColor: "#06A0B4" }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#0589A0")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#06A0B4")}
          >
            {slide.cta}
          </Link>
        </div>
      </div>

      {/* Prev / Next arrows */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow transition-colors text-xl font-light text-gray-700 z-10"
        aria-label="Previous slide"
      >
        ‹
      </button>
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow transition-colors text-xl font-light text-gray-700 z-10"
        aria-label="Next slide"
      >
        ›
      </button>

      {/* Dot navigation */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="transition-all rounded-full"
            style={{
              width: i === current ? "24px" : "10px",
              height: "10px",
              backgroundColor: i === current ? "#06A0B4" : "rgba(255,255,255,0.6)",
            }}
          />
        ))}
      </div>
    </div>
  );
}
