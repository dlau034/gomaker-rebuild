/**
 * Image Migration Script
 * Downloads product images from gomaker.co.uk (Shopify) → public/images/products/[slug]/
 *
 * Usage: node scripts/migrate-images.mjs
 */

import { writeFileSync, mkdirSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const OUTPUT_DIR = join(ROOT, "public", "images", "products");
const BASE_URL = "https://gomaker.co.uk";

// Map our product slugs → Shopify product handles
// If slug matches the Shopify handle exactly, no entry needed (auto-tried)
const SLUG_TO_HANDLE = {
  "crystal-magic-dragon": "crystal-magic-dragon",
  "flexi-axolotl": "cute-animal-minis",
  "flexi-shark": "flexi-fidget-animal-minis-and-xl-individuals",
  "voronoi-lamp":
    "personalised-football-soccer-night-light-lamp-great-for-football-fans-gift-for-boys-and-dads-remote-control-usb-plug",
  "flexi-dragon-wyvern": "flexi-wing-tail-serpent",
  "fridge-magnet-set": "personalised-square-fridge-magnet-50mm-x-50mm",
  "cable-tidy-clip": null, // not on live site yet — skip
};

// Strip Shopify CDN size modifiers (e.g. _800x800) to get full-res URL
function fullResUrl(src) {
  return src.replace(/_(pico|icon|thumb|small|compact|medium|large|grande|\d+x\d*|\d*x\d+)(@\dx)?(?=\.\w+$)/, "");
}

// Derive a file extension from a Shopify CDN URL
function extFromUrl(url) {
  const clean = url.split("?")[0];
  const match = clean.match(/\.(jpg|jpeg|png|webp|gif)$/i);
  return match ? match[1].toLowerCase() : "jpg";
}

// Download a URL and save to disk
async function downloadFile(url, destPath) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  const buffer = await res.arrayBuffer();
  writeFileSync(destPath, Buffer.from(buffer));
}

async function fetchShopifyProduct(handle) {
  const url = `${BASE_URL}/products/${handle}.json`;
  const res = await fetch(url);
  if (!res.ok) return null;
  const data = await res.json();
  return data.product;
}

async function migrateProduct(slug, handle) {
  if (!handle) {
    console.log(`⏭  Skipping ${slug} (no Shopify handle mapped)`);
    return [];
  }

  console.log(`\n📦 ${slug} → /products/${handle}`);

  const product = await fetchShopifyProduct(handle);
  if (!product) {
    console.log(`   ❌ Not found on Shopify (404)`);
    return [];
  }

  const dir = join(OUTPUT_DIR, slug);
  mkdirSync(dir, { recursive: true });

  const savedPaths = [];

  for (let i = 0; i < product.images.length; i++) {
    const img = product.images[i];
    const url = fullResUrl(img.src);
    const ext = extFromUrl(url);
    const filename = `${i + 1}.${ext}`;
    const destPath = join(dir, filename);

    try {
      await downloadFile(url, destPath);
      const relativePath = `/images/products/${slug}/${filename}`;
      savedPaths.push(relativePath);
      console.log(`   ✅ [${i + 1}/${product.images.length}] ${filename}`);
    } catch (err) {
      console.log(`   ❌ [${i + 1}] Failed: ${err.message}`);
    }
  }

  return savedPaths;
}

async function main() {
  console.log("🚀 Gomaker Image Migration");
  console.log("==========================");
  mkdirSync(OUTPUT_DIR, { recursive: true });

  const results = {};

  for (const [slug, handle] of Object.entries(SLUG_TO_HANDLE)) {
    const paths = await migrateProduct(slug, handle);
    if (paths.length > 0) results[slug] = paths;
  }

  console.log("\n\n📋 Migration Summary");
  console.log("====================");
  for (const [slug, paths] of Object.entries(results)) {
    console.log(`\n${slug}: ${paths.length} images`);
    paths.forEach((p) => console.log(`  ${p}`));
  }

  console.log("\n\n📝 Copy-paste image paths for products.json:");
  console.log("============================================");
  console.log(JSON.stringify(results, null, 2));

  console.log("\n✅ Done!");
}

main().catch(console.error);
