import localFont from "next/font/local";

/**
 * Brand typefaces, self-hosted from `app/fonts` — no third-party font requests at
 * runtime. `next/font/local` fingerprints the files, injects `font-display: swap`,
 * preloads the declared weights, and generates size-adjusted fallback metrics so
 * swapping in the real face causes no layout shift.
 *
 * Guidelines mapping:
 *   Playfair Display  -> display / large headings (H1, H2), Latin only
 *   Helvetica         -> body + UI. Helvetica is a licensed desktop face and cannot be
 *                        redistributed as a webfont, so it is referenced through the
 *                        system stack in `--font-sans` (globals.css) rather than bundled.
 *   IBM Plex Sans Arabic -> the full Arabic voice, display and body alike.
 */

export const playfair = localFont({
  variable: "--font-playfair",
  display: "swap",
  fallback: ["Georgia", "Times New Roman", "serif"],
  src: [
    { path: "../app/fonts/playfair-display-latin-600.woff2", weight: "600", style: "normal" },
    { path: "../app/fonts/playfair-display-latin-700.woff2", weight: "700", style: "normal" },
  ],
});

export const plexArabic = localFont({
  variable: "--font-plex-arabic",
  display: "swap",
  fallback: ["Segoe UI", "Tahoma", "sans-serif"],
  src: [
    { path: "../app/fonts/ibm-plex-sans-arabic-arabic-400.woff2", weight: "400", style: "normal" },
    { path: "../app/fonts/ibm-plex-sans-arabic-latin-400.woff2", weight: "400", style: "normal" },
    { path: "../app/fonts/ibm-plex-sans-arabic-arabic-500.woff2", weight: "500", style: "normal" },
    { path: "../app/fonts/ibm-plex-sans-arabic-latin-500.woff2", weight: "500", style: "normal" },
    { path: "../app/fonts/ibm-plex-sans-arabic-arabic-600.woff2", weight: "600", style: "normal" },
    { path: "../app/fonts/ibm-plex-sans-arabic-latin-600.woff2", weight: "600", style: "normal" },
    { path: "../app/fonts/ibm-plex-sans-arabic-arabic-700.woff2", weight: "700", style: "normal" },
    { path: "../app/fonts/ibm-plex-sans-arabic-latin-700.woff2", weight: "700", style: "normal" },
  ],
});
