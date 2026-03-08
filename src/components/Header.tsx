"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 flex items-center justify-between h-[90px]">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Go Maker"
            width={180}
            height={42}
            className="h-12 w-auto"
            priority
          />
        </Link>

          {/* Desktop nav */}
          <nav className="hidden sm:flex items-center gap-8 text-[#1a1a1a]">
            <Link href="/shop" className="hover:text-[#06A0B4] transition-colors font-light text-base">
              Products
            </Link>
            <Link href="/about" className="hover:text-[#06A0B4] transition-colors font-light text-base">
              About Us
            </Link>
            <Link href="/contact" className="hover:text-[#06A0B4] transition-colors font-light text-base">
              Contact
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="sm:hidden p-2 text-gray-600 hover:text-[#06A0B4] transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="sm:hidden border-t border-gray-100 bg-white px-4 py-4 flex flex-col gap-4">
            {[
              { href: "/shop", label: "Products" },
              { href: "/about", label: "About Us" },
              { href: "/contact", label: "Contact" },
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-light text-[#1a1a1a] hover:text-[#06A0B4] transition-colors py-1"
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
    </header>
  );
}
