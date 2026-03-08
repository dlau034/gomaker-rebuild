"use client";

import { Colour } from "@/lib/products";

type Props = {
  colours: Colour[];
  selected: Colour;
  onSelect: (colour: Colour) => void;
};

export default function ColourPicker({ colours, selected, onSelect }: Props) {
  return (
    <div>
      <p className="text-sm font-medium text-stone-700 mb-2">
        Colour: <span className="text-stone-900">{selected.name}</span>
      </p>
      <div className="flex flex-wrap gap-3">
        {colours.map((colour) => {
          const isSelected = colour.name === selected.name;
          return (
            <button
              key={colour.name}
              onClick={() => onSelect(colour)}
              title={colour.name}
              className={`w-9 h-9 rounded-full border-2 transition-all ${
                isSelected
                  ? "border-stone-900 scale-110 shadow-md"
                  : "border-transparent hover:border-stone-400"
              }`}
              style={{ backgroundColor: colour.hex }}
              aria-label={`Select colour: ${colour.name}`}
              aria-pressed={isSelected}
            />
          );
        })}
      </div>
    </div>
  );
}
