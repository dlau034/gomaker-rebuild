"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { CATEGORIES } from "@/lib/products";

export default function CategoryFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const current = searchParams.get("category") ?? "all";

  function handleSelect(value: string) {
    if (value === "all") {
      router.push("/shop");
    } else {
      router.push(`/shop?category=${value}`);
    }
  }

  return (
    <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
      {CATEGORIES.map((cat) => {
        const active = current === cat.value;
        return (
          <button
            key={cat.value}
            onClick={() => handleSelect(cat.value)}
            className="shrink-0 px-5 py-2 rounded-full text-sm font-medium uppercase tracking-wide transition-all"
            style={{
              backgroundColor: active ? "#06A0B4" : "#f0f0f0",
              color: active ? "#ffffff" : "#444444",
            }}
          >
            {cat.label}
          </button>
        );
      })}
    </div>
  );
}
