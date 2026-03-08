import Link from "next/link";
import Image from "next/image";

const categories = [
  { title: "Custom Pop Figures / Cake Toppers",  image: "/images/categories/pop-figures.jpg"     },
  { title: "AI Generated Models to 3D Print",    image: "/images/categories/ai-models.png"       },
  { title: "Personalised LED Lamps",             image: "/images/categories/led-lamps.jpg"       },
  { title: "Custom Night Lights",                image: "/images/categories/night-lights.jpg"    },
  { title: "Cosplay Props & Helmets",            image: "/images/categories/cosplay-props.jpg"   },
  { title: "Replica Sci-Fi Models",              image: "/images/categories/scifi-models.jpg"    },
  { title: "Custom Signs & Plaques",             image: "/images/categories/custom-signs.jpg"    },
  { title: "Car Parts & Accessories",            image: "/images/categories/car-parts.jpg"       },
  { title: "Marvel / DC Character Busts",        image: "/images/categories/character-busts.jpg" },
  { title: "Event Party Favours",                image: "/images/categories/party-favours.jpg"   },
  { title: "Custom Flexi Figurines",             image: "/images/categories/flexi-figurines.jpg" },
];

export default function WhatWePrint() {
  return (
    <section className="bg-[#f5f5f5] py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-medium text-[#1a1a1a] mb-8">
          What we 3D print!
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.title}
              href="/contact?type=custom"
              className="group bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md hover:border-[#06A0B4] transition-all duration-200"
            >
              <div className="aspect-square relative overflow-hidden bg-[#e8f7f9]">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </div>
              <div className="p-3">
                <p className="text-sm font-medium text-[#1a1a1a] leading-snug">{cat.title}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/contact?type=custom"
            className="inline-block font-medium text-white text-sm px-10 py-3.5 rounded-full uppercase tracking-wide bg-[#06A0B4] hover:bg-[#0589A0] transition-colors"
          >
            Enquiry Now!
          </Link>
        </div>
      </div>
    </section>
  );
}
