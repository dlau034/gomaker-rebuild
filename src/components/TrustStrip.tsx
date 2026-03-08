const items = [
  { icon: "🇬🇧", text: "Made to order in UK" },
  { icon: "🚚", text: "Free delivery over £40" },
  { icon: "📍", text: "SE London studio" },
  { icon: "🖨️", text: "Bambu Lab FDM printers" },
  { icon: "✅", text: "Ships in 1–3 days" },
];

export default function TrustStrip() {
  return (
    <div className="bg-[#06A0B4]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 overflow-x-auto scrollbar-none">
        <div className="flex items-center gap-8 min-w-max justify-center">
          {items.map((item, i) => (
            <div key={item.text} className="flex items-center gap-2 text-sm text-white whitespace-nowrap">
              <span className="text-base">{item.icon}</span>
              <span className="font-medium">{item.text}</span>
              {i < items.length - 1 && (
                <span className="ml-4 text-white/40 select-none">|</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
