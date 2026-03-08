import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#278996" }} className="text-white mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-12 pb-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <p className="font-bold text-xl mb-3">GO MAKER</p>
            <p className="text-sm text-white/80 leading-relaxed">
              We are a small design and 3D printing shop based in South East London. Creating and selling cool, interesting 3D printed creations.
            </p>
            <a
              href="https://instagram.com/gomaker_shop"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-sm text-white/80 hover:text-white transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              @gomaker_shop
            </a>
          </div>

          {/* Quick links */}
          <div>
            <p className="font-bold text-sm uppercase tracking-wider mb-4">Quick Links</p>
            <ul className="space-y-2.5 text-sm text-white/80">
              <li><Link href="/shop" className="hover:text-white transition-colors">All Products</Link></li>
              <li><Link href="/shop?category=dragons" className="hover:text-white transition-colors">Dragons</Link></li>
              <li><Link href="/shop?category=animals" className="hover:text-white transition-colors">Animals</Link></li>
              <li><Link href="/shop?category=lamps" className="hover:text-white transition-colors">Lamps</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <p className="font-bold text-sm uppercase tracking-wider mb-4">Info</p>
            <ul className="space-y-2.5 text-sm text-white/80">
              <li>📍 SE London, UK</li>
              <li>🖨️ Bambu Lab FDM Printers</li>
              <li>♻️ PLA — biodegradable material</li>
              <li>🚚 Standard UK delivery: £2.99</li>
              <li>🎁 Free over £40</li>
              <li>✅ Ships in 1–3 working days</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/20 pt-6">
          <p className="text-xs text-white/60 text-center sm:text-left">
            © {new Date().getFullYear()} Gomaker. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
