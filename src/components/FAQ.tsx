"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What material do we print with?",
    a: "Most products are printed with PLA (Polylactic acid). PLA is biodegradable, non-toxic, non-allergenic, and environmentally friendly. It doesn't commonly lead to health issues.",
  },
  {
    q: "Why do we make-to-order?",
    a: "In order to ensure that you get availability for a wide variety of colours and options for each product, we make-to-order, which takes 1–2 days. We will communicate with you if there are any delays. There are usually some items already in stock, which we will ship right away.",
  },
  {
    q: "What is our delivery policy?",
    a: "£2.99 for UK delivery using Evri or DPD UK. From when the print is ready, shipping is 2–4 business days.",
  },
  {
    q: "Where are we based?",
    a: "We are a small 3D printing studio based in South East London, UK.",
  },
  {
    q: "What kind of 3D printers do we use?",
    a: "We primarily use Bambu Lab FDM printers.",
  },
  {
    q: "Who are these for?",
    a: "Our items and creations, while fun, are not for young children. They have small parts and are designed for collectables, décor, and ornamental purposes.",
  },
  {
    q: "How do you get in touch with us?",
    a: "You can message us via the contact form on this site, or message us on Instagram @gomaker_shop.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-white py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1a1a] mb-8">
          Got questions?
        </h2>

        <div className="divide-y divide-gray-200 border-t border-gray-200">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={faq.q}>
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 py-4 text-left"
                  aria-expanded={isOpen}
                >
                  <h3 className="text-sm sm:text-base font-bold text-[#1a1a1a]">
                    {faq.q}
                  </h3>
                  <span
                    className="shrink-0 w-6 h-6 rounded-full bg-[#06A0B4] flex items-center justify-center transition-transform duration-200"
                    style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
                  >
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16M4 12h16" />
                    </svg>
                  </span>
                </button>

                {isOpen && (
                  <div className="pb-4 pr-10">
                    <p className="text-sm text-gray-600 leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
