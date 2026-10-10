// Converts every JPG/PNG inside public/images to a resized WebP next to it, then moves
// the original to assets-source/originals so it is not shipped with the site.
// Usage: npm run images:optimize   (then point the JSON files at the new .webp paths)
import { mkdirSync, readdirSync, renameSync, statSync } from "node:fs";
import { dirname, extname, join, relative } from "node:path";
import sharp from "sharp";

const root = process.cwd();
const imagesDir = join(root, "public", "images");
const MAX_WIDTH = { members: 800, default: 1600 };

const walk = (dir) =>
  readdirSync(dir).flatMap((name) => {
    const full = join(dir, name);
    return statSync(full).isDirectory() ? walk(full) : [full];
  });

let count = 0;
for (const file of walk(imagesDir)) {
  if (!/\.(jpe?g|png)$/i.test(file)) continue;
  const rel = relative(imagesDir, file);
  const folder = rel.split(/[\\/]/)[0];
  const out = file.slice(0, -extname(file).length) + ".webp";
  await sharp(file)
    .rotate()
    .resize({ width: MAX_WIDTH[folder] ?? MAX_WIDTH.default, withoutEnlargement: true })
    .webp({ quality: 78 })
    .toFile(out);
  const archived = join(root, "assets-source", "originals", rel);
  mkdirSync(dirname(archived), { recursive: true });
  renameSync(file, archived);
  console.log(`✓ ${rel} → ${relative(imagesDir, out)}`);
  count++;
}
console.log(count ? `Optimized ${count} image(s).` : "No JPG/PNG files found in public/images.");
