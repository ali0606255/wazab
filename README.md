# WZZAB — وزّاب · Digital Menu

A premium, bilingual (Arabic / English, RTL-first) digital menu for **WZZAB — وزّاب**, a
cafe & local bakery. Customers open it from a QR code on their phone. The site is fully
static, fast, accessible, and on-brand to the pixel.

- **Arabic-first**, with full RTL support and an English (LTR) locale.
- **Content lives in data files**, not in components — the client can edit the menu
  without touching code (see [CONTENT.md](./CONTENT.md)).
- **Static output** — every page is prerendered; there is no database and no runtime
  data fetching.

## Tech stack

|           |                                                                            |
| --------- | -------------------------------------------------------------------------- |
| Framework | Next.js 16 (App Router) + React 19                                         |
| Language  | TypeScript (strict)                                                        |
| Styling   | Tailwind CSS v4 (brand tokens in `app/globals.css`)                        |
| Fonts     | Self-hosted via `next/font/local` — Playfair Display, IBM Plex Sans Arabic |
| Rendering | Static Site Generation (SSG)                                               |
| Hosting   | Vercel                                                                     |

## Getting started

Requires Node.js 20+.

```bash
npm install
npm run dev
```

Open **http://localhost:3000** — it redirects to `/ar` (the default locale). English is
at `/en`.

## Scripts

| Command             | What it does                                |
| ------------------- | ------------------------------------------- |
| `npm run dev`       | Start the dev server                        |
| `npm run build`     | Production build (also runs the type check) |
| `npm start`         | Serve the production build locally          |
| `npm run lint`      | ESLint                                      |
| `npm run typecheck` | TypeScript, no emit                         |
| `npm run format`    | Format with Prettier                        |

## Project structure

```
app/
  [locale]/
    layout.tsx          # <html lang dir>, fonts, header/footer, per-locale metadata
    page.tsx            # menu landing (hero + category nav + all categories)
    [category]/page.tsx # single-category page (SSG per category), deep-linkable
    opengraph-image.tsx # branded per-locale share image
    not-found.tsx
  globals.css           # brand tokens (colours, type scale) — the design source of truth
  icon.svg              # favicon (brand mark)
  sitemap.ts, robots.ts
content/                # ← the client edits these
  menu.ar.ts            # Arabic menu data
  menu.en.ts            # English menu data
  site.ts               # brand strings, story, contact
lib/
  types.ts              # MenuCategory, MenuItem, Money, Badge, Locale
  menu.ts               # the ONLY module that reads content/ (the data-source seam)
  i18n.ts               # locale config, UI dictionary, price/calorie formatting
  config.ts             # feature flags (prices, calories, search)
  fonts.ts, schema.ts
components/             # presentational components
public/
  brand/                # logo variants + favicon source (SVG)
  menu/                 # item photos (added later)
```

## Architecture notes

**The data layer.** Components never import a `content/` file directly — they call
`lib/menu.ts`, the single module that reads content. That is the deliberate seam where a
CMS, a database, or a Foodics POS source can be swapped in later without touching a single
component. The selectors are already async for that reason.

**Brand values flow from tokens.** Every colour and font size is a token in
`app/globals.css`. Components reference tokens (`bg-cream`, `text-h2`), never raw hex.

**Out of scope, by design.** No cart, checkout, ordering, auth, or database in this phase.
The architecture leaves clean extension points for them; nothing is stubbed.

## Deployment

See [DEPLOY.md](./DEPLOY.md) for the GitHub → Vercel steps and project settings.

## Editing the menu

See [CONTENT.md](./CONTENT.md) — a plain-language guide for non-developers to add or edit
categories, items, prices, calories, badges, and photos.
