# Deploying WZZAB to Vercel

The site is a static Next.js app. Deployment is: **push to GitHub → import to Vercel →
deploy**. After the first setup, every `git push` publishes automatically.

## 1. Push to GitHub

The repository is already initialised. Set the remote and push:

```bash
git add .
git commit -m "feat: WZZAB bilingual digital menu"
git branch -M main
git remote add origin https://github.com/ali0606255/wazab.git   # or your repo URL
git push -u origin main
```

> If the remote already exists, use `git remote set-url origin <url>` instead of
> `git remote add`.

## 2. Import to Vercel

1. Sign in at [vercel.com](https://vercel.com) with the GitHub account.
2. **Add New… → Project**, then import the `wazab` repository.
3. Vercel auto-detects **Next.js**. Leave the defaults:
   - **Framework Preset:** Next.js
   - **Build Command:** `next build` (default)
   - **Output Directory:** default (managed by Next.js)
   - **Install Command:** `npm install` (default)
   - **Root Directory:** leave it as `./` (the repository root). The app lives at the
     root of the `wazab` repo — `package.json` is right there — so do **not** set this to
     `wzzab-menu` (that folder only exists locally; there is no such subfolder in the
     repo, and pointing Vercel at it fails the build with "Exited with code 2").
   - **Node.js Version:** 20 or later.
4. Click **Deploy**. The first build takes ~1 minute and gives you a
   `https://<project>.vercel.app` URL.

No environment variables are required — the menu has no backend, database, or secrets.

## 3. Verify the deployment

On the deployed URL, check:

- `/` redirects to `/ar` (Arabic, RTL).
- `/en` is English (LTR).
- The AR ⇄ EN switch keeps you on the same page.
- A category page loads, e.g. `/ar/sweets`.
- `/sitemap.xml` and `/robots.txt` respond.
- Share the link in WhatsApp/X — the branded preview image appears.

## 4. Production domain

Every push to the `main` branch is a production deploy. Pushes to other branches get a
preview URL for review before merging.

## 5. Custom domain

1. In Vercel: **Project → Settings → Domains → Add**, enter the domain (e.g.
   `menu.wzzab.com` or `wzzab.com`).
2. Vercel shows the DNS records to add at your registrar:
   - Apex domain (`wzzab.com`) → an **A** record to Vercel's IP, or an `ALIAS`/`ANAME`.
   - Subdomain (`menu.wzzab.com`) → a **CNAME** to `cname.vercel-dns.com`.
3. Wait for DNS to propagate; Vercel issues the HTTPS certificate automatically.
4. **After the domain is live**, update `site.url` in `content/site.ts` to the final
   origin (e.g. `https://menu.wzzab.com`) and push — this fixes the canonical URLs,
   `sitemap.xml`, and the social-share preview links. It is currently
   `https://wzzab.vercel.app`.

## 6. Updating the menu after launch

The client edits the files in `content/` (see [CONTENT.md](./CONTENT.md)), commits, and
pushes. Vercel rebuilds and republishes automatically. If a build ever fails, the previous
version stays live and Vercel emails the error.

## What's already configured in the repo

- **Static output** — all pages are prerendered (SSG); no serverless functions in the
  request path.
- **Caching headers** — brand assets are served `immutable` for a year (`next.config.ts`).
- **Image optimization** — item photos use `next/image`.
- **`/` → `/ar` redirect** and both locales (`/ar`, `/en`) reachable.
- **SEO** — per-locale titles, `hreflang`, Open Graph + Twitter cards, `Restaurant`/`Menu`
  JSON-LD, `sitemap.xml`, `robots.txt`.
