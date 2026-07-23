import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { ImageResponse } from "next/og";

import { getSiteCopy } from "@/content/site";
import { isLocale } from "@/lib/i18n";
import { LOCALES } from "@/lib/types";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "WZZAB";

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

const OG_DIR = join(process.cwd(), "app", "og");

/**
 * Branded link preview, prerendered per locale at build time. Cream canvas, charcoal
 * type, botanical rule — the 60/30/10 ratio from the brand guidelines.
 */
export default async function OpengraphImage({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  const resolved = isLocale(locale) ? locale : "ar";
  const copy = getSiteCopy(resolved);

  const [playfair, plexArabic, plexLatin, iconSvg] = await Promise.all([
    readFile(join(OG_DIR, "playfair-700.woff")),
    readFile(join(OG_DIR, "plex-arabic-600.woff")),
    readFile(join(OG_DIR, "plex-latin-600.woff")),
    readFile(join(process.cwd(), "public", "brand", "logo-full.svg"), "utf8"),
  ]);

  // The stored vectors inherit their colour from CSS; the OG renderer needs it explicit.
  const logo = `data:image/svg+xml;base64,${Buffer.from(
    iconSvg.replaceAll("currentColor", "#1c1c1c"),
  ).toString("base64")}`;

  const displayFont = resolved === "ar" ? "PlexArabic" : "Playfair";

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f8e9d1",
        color: "#1c1c1c",
        fontFamily: displayFont,
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- satori renders plain <img> only */}
      <img src={logo} width={200} height={186} alt="" />

      <div style={{ display: "flex", fontSize: 76, marginTop: 40 }}>{copy.name}</div>

      <div
        style={{
          display: "flex",
          fontSize: 26,
          letterSpacing: 6,
          textTransform: "uppercase",
          color: "#426337",
          marginTop: 18,
        }}
      >
        {copy.tagline}
      </div>

      <div
        style={{ display: "flex", width: 90, height: 3, backgroundColor: "#426337", marginTop: 34 }}
      />

      <div style={{ display: "flex", fontSize: 24, marginTop: 34, opacity: 0.6 }}>
        {copy.kicker}
      </div>
    </div>,
    {
      ...size,
      fonts: [
        { name: "Playfair", data: playfair, weight: 700, style: "normal" },
        { name: "PlexArabic", data: plexArabic, weight: 600, style: "normal" },
        { name: "PlexLatin", data: plexLatin, weight: 600, style: "normal" },
      ],
    },
  );
}
