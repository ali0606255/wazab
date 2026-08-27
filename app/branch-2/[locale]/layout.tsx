import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { getSiteCopy, site } from "@/content/site";
import { plexArabic, playfair } from "@/lib/fonts";
import { dir, getDictionary, isLocale, otherLocale } from "@/lib/i18n";
import { LOCALES } from "@/lib/types";

import "../../globals.css";

/**
 * Second WZZAB branch — same design and content source as the main site
 * (app/[locale]), filtered to the "branch-2" menu (see lib/branches.ts and the
 * `excludeFrom` tags in content/menu.*.ts). Kept as its own route tree instead of
 * a segment under app/[locale] so the main branch's live URLs (/ar, /en, ...)
 * never change.
 */
const BASE_PATH = "/branch-2";

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export const dynamicParams = false;

export const viewport: Viewport = {
  themeColor: "#f8e9d1",
};

export async function generateMetadata({
  params,
}: LayoutProps<"/branch-2/[locale]">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};

  const copy = getSiteCopy(locale);
  const other = otherLocale(locale);

  return {
    metadataBase: new URL(site.url),
    title: {
      default: copy.metaTitle,
      template: `%s · ${copy.name}`,
    },
    description: copy.metaDescription,
    applicationName: copy.name,
    alternates: {
      canonical: `${BASE_PATH}/${locale}`,
      languages: {
        ar: `${BASE_PATH}/ar`,
        en: `${BASE_PATH}/en`,
        "x-default": `${BASE_PATH}/${locale === "ar" ? "ar" : "en"}`,
      },
    },
    openGraph: {
      type: "website",
      siteName: copy.name,
      title: copy.metaTitle,
      description: copy.metaDescription,
      url: `${BASE_PATH}/${locale}`,
      locale: locale === "ar" ? "ar_SA" : "en_US",
      alternateLocale: other === "ar" ? "ar_SA" : "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: copy.metaTitle,
      description: copy.metaDescription,
    },
    robots: { index: true, follow: true },
  };
}

export default async function Branch2LocaleLayout({
  children,
  params,
}: LayoutProps<"/branch-2/[locale]">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const t = getDictionary(locale);

  return (
    <html lang={locale} dir={dir(locale)} className={`${playfair.variable} ${plexArabic.variable}`}>
      <body className="flex min-h-dvh flex-col">
        <a
          href="#menu"
          className="bg-ink text-canvas sr-only rounded-full px-5 py-3 focus:not-sr-only focus:absolute focus:start-4 focus:top-4 focus:z-50"
        >
          {t.skipToContent}
        </a>

        <Header locale={locale} basePath={BASE_PATH} />
        <div className="flex-1">{children}</div>
        <Footer locale={locale} />
      </body>
    </html>
  );
}
