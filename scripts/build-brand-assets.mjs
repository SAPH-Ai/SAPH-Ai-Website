// Builds every logo file the site uses from the official PNG artwork in assets-source/.
// Usage: npm run brand   (re-run after replacing any of the source PNGs)
import { mkdirSync } from "node:fs";
import sharp from "sharp";

const SRC = "assets-source";
mkdirSync("public/brand", { recursive: true });
mkdirSync("public/icons", { recursive: true });

// Cut away the transparent padding so the image edge is the logo edge.
const trimmed = (file) => sharp(`${SRC}/${file}`).trim({ threshold: 1 }).toBuffer();
const png = (input, width) =>
  sharp(input).resize({ width }).png({ compressionLevel: 9, palette: true, quality: 95 });

const mark = await trimmed("mark-color.png");

// Site images
await png(mark, 1024).toFile("public/brand/saph-mark.png");
await png(await trimmed("mark-white.png"), 256).toFile("public/brand/saph-mark-white.png");
await png(await trimmed("mark-black.png"), 256).toFile("public/brand/saph-mark-black.png");
await png(await trimmed("wordmark-dark.png"), 1200).toFile("public/brand/saph-wordmark-dark.png");
await png(await trimmed("wordmark-light.png"), 1200).toFile("public/brand/saph-wordmark-light.png");

// Favicon and app icons
await png(mark, 96).toFile("app/icon.png");
for (const size of [192, 512]) await png(mark, size).toFile(`public/icons/icon-${size}.png`);
const onWhite = async (size, markSize, file) =>
  sharp({ create: { width: size, height: size, channels: 4, background: "#ffffff" } })
    .composite([
      { input: await sharp(mark).resize({ width: markSize }).toBuffer(), gravity: "center" },
    ])
    .png()
    .toFile(file);
await onWhite(180, 148, "app/apple-icon.png");
await onWhite(512, 360, "public/icons/icon-maskable-512.png");

console.log("Brand assets built.");
