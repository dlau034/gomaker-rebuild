import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
  description:
    "Gomaker is a small 3D printing studio in SE London. We use Bambu Lab FDM printers and PLA to make articulated dragons, flexi animals, lamps and custom prints.",
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-3xl font-bold text-stone-900 mb-8">About Gomaker</h1>

      {/* Studio story */}
      <section className="mb-12">
        <p className="text-stone-700 text-lg leading-relaxed mb-4">
          Gomaker is a small 3D printing studio based in South East London. We make articulated dragons, flexi animals, geometric lamps, and accessories — all designed to be satisfying to hold and worth keeping.
        </p>
        <p className="text-stone-600 leading-relaxed mb-4">
          Every item is printed to order. Nothing sits in a warehouse gathering dust. When you order, we print. That means fresher prints, no overproduction, and a product that&apos;s genuinely made for you.
        </p>
        <p className="text-stone-600 leading-relaxed">
          We started Gomaker because we love the process — watching a design come to life layer by layer is endlessly satisfying. We wanted to share that with people who appreciate well-made objects.
        </p>
      </section>

      {/* Studio photos */}
      <div className="mb-12 space-y-3">
        <div className="relative aspect-video rounded-2xl overflow-hidden">
          <Image
            src="/images/studio/studio-2.webp"
            alt="Go Maker workshop setup"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 768px"
          />
        </div>
        <div className="relative aspect-video rounded-2xl overflow-hidden">
          <Image
            src="/images/studio/studio-3.webp"
            alt="Go Maker market stall"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 768px"
          />
        </div>
      </div>

      {/* Equipment */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-stone-900 mb-4">How we print</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-stone-50 rounded-xl p-6">
            <p className="font-medium text-stone-900 mb-1">Bambu Lab FDM Printers</p>
            <p className="text-sm text-stone-600 leading-relaxed">
              We use Bambu Lab FDM printers — some of the fastest and most accurate consumer printers available. Tight dimensional tolerances mean our articulated parts always move the way they should.
            </p>
          </div>
          <div className="bg-stone-50 rounded-xl p-6">
            <p className="font-medium text-stone-900 mb-1">PLA Material</p>
            <p className="text-sm text-stone-600 leading-relaxed">
              We print in PLA — a plant-based bioplastic that&apos;s strong, lightweight, and available in a wide range of colours. It&apos;s the right material for decorative and fidget pieces.
            </p>
          </div>
        </div>
      </section>

      {/* Custom / AI service */}
      <section className="mb-12 bg-stone-900 text-white rounded-2xl p-8">
        <h2 className="text-xl font-bold mb-3">AI Image to 3D Print</h2>
        <p className="text-stone-300 leading-relaxed mb-5">
          Got an AI-generated image you love? We can turn it into a real 3D print. Send us your image and a description of what you want, and we&apos;ll work with you to bring it to life. It&apos;s a fun way to make something truly one-of-a-kind.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-white text-stone-900 font-medium px-6 py-2.5 rounded-full hover:bg-stone-100 transition-colors text-sm"
        >
          Request a custom print
        </Link>
      </section>

      {/* Instagram + CTA */}
      <section className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <a
          href="https://instagram.com/gomaker_shop"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-stone-700 font-medium hover:text-stone-900 transition-colors"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
          @gomaker_shop
        </a>
        <span className="hidden sm:block text-stone-300">·</span>
        <Link
          href="/contact"
          className="text-stone-600 font-medium hover:text-stone-900 transition-colors"
        >
          Send us a message →
        </Link>
      </section>
    </div>
  );
}
