# SAPH.Ai website

The official website of **SAPH.Ai** (সাফ.ই), a youth-led robotics organization in Bangladesh
working on sanitation, water and drainage with robotics and AI.

Built with Next.js (App Router, static export), TypeScript, Tailwind CSS and Framer Motion.
No database, no server, no paid services.

> **Editing content?** You don't need to touch code. Read [CONTENT_GUIDE.md](CONTENT_GUIDE.md).

## Quick start

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static site in /out
npm start          # preview /out locally
```

| Script                        | What it does                                          |
| ----------------------------- | ----------------------------------------------------- |
| `npm run dev`                 | Development server with hot reload                    |
| `npm run build`               | Production build → `out/` (plain HTML/CSS/JS)         |
| `npm run lint` / `typecheck`  | ESLint / TypeScript checks                            |
| `npm run format`              | Format everything with Prettier                       |
| `npm run images:optimize`     | Convert JPG/PNG in `public/images` to resized WebP    |
| `npm run images:placeholders` | Create placeholder images for any missing image paths |
| `npm run icons`               | Rebuild favicon/app icons from the SVG logo           |

## Project structure

```
app/                     Routes: / , /projects, /projects/[slug], /team, /achievements, 404
  og.png/route.tsx       Social sharing image (rendered at build time)
  sitemap.ts robots.ts manifest.ts icon.svg apple-icon.png
components/
  brand/                 Logo (SVG, color/white/black), AnimatedLogo, Wordmark (EN + বাংলা)
  layout/                Navbar, Footer, Container, Section, PageHeader, WaveDivider
  sections/              Home page sections (Hero, About, WhatWeDo, ... Contact)
  projects/ team/ achievements/ gallery/ contact/   Feature components
  ui/                    Card, Button, Icons, Reveal (scroll animation), badges
data/*.json              ALL editable content (see CONTENT_GUIDE.md)
lib/                     Typed content loaders, nav config, types
public/images/           Photos: members/ projects/ achievements/ gallery/
scripts/                 Image + icon tooling
assets-source/           Original brand artwork (reference only, not shipped) + fonts for og.png
```

## Configuration

- **Contact form:** set `NEXT_PUBLIC_FORM_ENDPOINT` (see `.env.example`) to a Formspree endpoint.
  Without it, the form opens the visitor's email app addressed to `contact.email` in `data/site.json`.
- **Domain:** `url` in `data/site.json` is used for canonical URLs, the sitemap and social cards.
- **Brand colors** are tokens in `app/globals.css` (`--color-brand-bright`, `--color-brand-mid`,
  `--color-brand-navy`, mist shades); use them as Tailwind classes, e.g. `bg-brand-navy`.

## Deploy

Vercel: import the GitHub repo, keep the defaults, deploy. Netlify: `netlify.toml` is included.
Any static host works: upload the `out/` folder.

Troubleshooting: if a new Tailwind color or class doesn't show up, delete the `.next` folder and rebuild.
