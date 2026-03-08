/**
 * Homepage Image Migration
 * Downloads hero, category, and studio images from gomaker.co.uk CDN
 *
 * Usage: node scripts/migrate-homepage-images.mjs
 */

import { writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const CDN = "https://gomaker.co.uk/cdn/shop/files/";

// Strip width/version params to get full-res
function fullRes(filename) {
  return `${CDN}${filename}`;
}

// Download a URL to disk
async function download(url, destPath) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status} — ${url}`);
  const buf = await res.arrayBuffer();
  writeFileSync(destPath, Buffer.from(buf));
}

async function run(label, url, destPath) {
  try {
    await download(url, destPath);
    console.log(`✅ ${label}`);
    return true;
  } catch (e) {
    console.log(`❌ ${label} — ${e.message}`);
    return false;
  }
}

async function main() {
  console.log("🚀 Homepage Image Migration\n");

  // ─── HERO CAROUSEL (5 slides) ─────────────────────────────────────────────
  const heroDir = join(ROOT, "public", "images", "hero");
  mkdirSync(heroDir, { recursive: true });
  console.log("📸 Hero slides:");

  const heroImages = [
    { file: "490223563_619155284453487_7787284776520222947_n.jpg", dest: "slide-1.jpg" },
    { file: "20241014_145555.webp",                                dest: "slide-2.webp" },
    { file: "Untitled_1.png",                                      dest: "slide-3.png"  },
    { file: "20240304_230000.jpg",                                 dest: "slide-4.jpg"  },
    { file: "il_1588xN.6665000029_32ew.webp",                     dest: "slide-5.webp" },
  ];

  for (const img of heroImages) {
    await run(img.dest, fullRes(img.file), join(heroDir, img.dest));
  }

  // ─── WHAT WE PRINT (11 categories) ────────────────────────────────────────
  const catDir = join(ROOT, "public", "images", "categories");
  mkdirSync(catDir, { recursive: true });
  console.log("\n🖼  Category images:");

  const catImages = [
    { file: "WhatsApp_Image_2024-03-20_at_4.33.47_pm.jpg",              dest: "pop-figures.jpg"    },
    { file: "Ai_to_3d_print_20250528_131058_0000.png",                  dest: "ai-models.png"      },
    { file: "WhatsApp_Image_2024-03-20_at_4.23.22_pm.jpg",              dest: "led-lamps.jpg"      },
    { file: "il_1588xN.6682301923_dxfp.jpg",                            dest: "night-lights.jpg"   },
    { file: "WhatsApp_Image_2024-03-20_at_4.27.57_pm.jpg",              dest: "cosplay-props.jpg"  },
    { file: "WhatsApp_Image_2024-03-20_at_4.24.43_pm.jpg",              dest: "scifi-models.jpg"   },
    { file: "WhatsApp_Image_2024-03-20_at_4.24.53_pm.jpg",              dest: "custom-signs.jpg"   },
    { file: "WhatsApp_Image_2024-03-20_at_4.26.02_pm.jpg",              dest: "car-parts.jpg"      },
    { file: "WhatsApp_Image_2024-03-20_at_4.40.10_pm.jpg",              dest: "character-busts.jpg"},
    { file: "489459267_1067686355180998_1687621890851696601_n.jpg",      dest: "party-favours.jpg"  },
    { file: "490223563_619155284453487_7787284776520222947_n.jpg",       dest: "flexi-figurines.jpg"},
  ];

  for (const img of catImages) {
    await run(img.dest, fullRes(img.file), join(catDir, img.dest));
  }

  // ─── STUDIO / ABOUT SECTION ───────────────────────────────────────────────
  const studioDir = join(ROOT, "public", "images", "studio");
  mkdirSync(studioDir, { recursive: true });
  console.log("\n🏭 Studio images:");

  const studioImages = [
    { file: "20231205_083339.jpg",    dest: "studio-1.jpg" },
    { file: "20230817_213039.jpg",    dest: "studio-2.jpg" },
  ];

  for (const img of studioImages) {
    await run(img.dest, fullRes(img.file), join(studioDir, img.dest));
  }

  console.log("\n✅ Done!\n");
  console.log("Paths to use in components:");
  console.log("  Hero:       /images/hero/slide-1.jpg … slide-5.*");
  console.log("  Categories: /images/categories/pop-figures.jpg … flexi-figurines.jpg");
  console.log("  Studio:     /images/studio/studio-1.jpg, studio-2.jpg");
}

main().catch(console.error);
