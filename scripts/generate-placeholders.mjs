// Generates neutral, blue-toned placeholder photos for every image path referenced
// in /data/*.json. Existing files are never overwritten, so real photos are safe.
// Usage: npm run images:placeholders
import { existsSync, mkdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import sharp from "sharp";

const root = process.cwd();
const read = (f) => JSON.parse(readFileSync(join(root, "data", f), "utf8"));

const jobs = [];
for (const p of read("projects.json")) jobs.push({ src: p.image, w: 1200, h: 800, kind: "photo" });
for (const a of read("achievements.json"))
  if (a.image) jobs.push({ src: a.image, w: 1200, h: 800, kind: "photo" });
for (const m of read("members.json")) jobs.push({ src: m.photo, w: 800, h: 800, kind: "person" });
for (const e of read("events.json")) {
  jobs.push({ src: e.cover, w: 1200, h: 800, kind: "photo" });
  for (const ph of e.photos ?? []) jobs.push({ src: ph.src, w: 1200, h: 800, kind: "photo" });
}
for (const g of read("gallery.json"))
  jobs.push({ src: g.src, w: g.width, h: g.height, kind: "photo" });

const svg = ({ w, h, kind }, i) => {
  const hueShift = (i * 37) % 60;
  const wave = (y, amp) =>
    `M0 ${y} C ${w * 0.25} ${y - amp}, ${w * 0.5} ${y + amp}, ${w * 0.75} ${y} S ${w * 1.1} ${y - amp}, ${w * 1.2} ${y}`;
  const person =
    kind === "person"
      ? `<circle cx="${w / 2}" cy="${h * 0.36}" r="${w * 0.15}" fill="#ffffff" fill-opacity="0.28"/>
         <path d="M${w * 0.14} ${h} C ${w * 0.16} ${h * 0.6}, ${w * 0.84} ${h * 0.6}, ${w * 0.86} ${h} Z" fill="#ffffff" fill-opacity="0.28"/>`
      : "";
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="hsl(${200 + hueShift / 3} 45% 72%)"/>
        <stop offset="0.55" stop-color="#2c6381"/>
        <stop offset="1" stop-color="#072739"/>
      </linearGradient>
    </defs>
    <rect width="${w}" height="${h}" fill="url(#g)"/>
    ${
      person ||
      `<path d="${wave(h * 0.62, h * 0.08)}" stroke="#ffffff" stroke-opacity="0.18" stroke-width="${h * 0.05}" fill="none"/>
    <path d="${wave(h * 0.78, h * 0.06)}" stroke="#ffffff" stroke-opacity="0.12" stroke-width="${h * 0.04}" fill="none"/>`
    }
    <text x="${w / 2}" y="${kind === "person" ? h * 0.9 : h / 2}" text-anchor="middle" font-family="Helvetica, Arial, sans-serif"
      font-size="${Math.round(Math.min(w, h) * 0.05)}" font-weight="600" fill="#ffffff" fill-opacity="0.85">Photo placeholder</text>
  </svg>`;
};

let created = 0;
for (const [i, job] of jobs.entries()) {
  if (!job.src) continue;
  const out = join(root, "public", job.src);
  if (existsSync(out)) continue;
  mkdirSync(dirname(out), { recursive: true });
  await sharp(Buffer.from(svg(job, i)))
    .webp({ quality: 72 })
    .toFile(out);
  created++;
}
console.log(`Placeholders: ${created} created, ${jobs.length - created} already present.`);
