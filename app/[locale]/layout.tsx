import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { getSiteCopy, site } from "@/content/site";
import { plexArabic, playfair } from "@/lib/fonts";
import { dir, getDictionary, isLocale, otherLocale } from "@/lib/i18n";
import { LOCALES } from "@/lib/types";

import "../globals.css";

/** Both locales are prerendered at build time; nothing is resolved per request. */
export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export const dynamicParams = false;

export const viewport: Viewport = {
  themeColor: "#f5e6cc",
};

export async function generateMetadata({ params }: LayoutProps<"/[locale]">): Promise<Metadata> {
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
      canonical: `/${locale}`,
      languages: {
        ar: "/ar",
        en: "/en",
        "x-default": `/${locale === "ar" ? "ar" : "en"}`,
      },
    },
    openGraph: {
      type: "website",
      siteName: copy.name,
      title: copy.metaTitle,
      description: copy.metaDescription,
      url: `/${locale}`,
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

export default async function LocaleLayout({ children, params }: LayoutProps<"/[locale]">) {
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

        <Header locale={locale} />
        <div className="flex-1">{children}</div>
        <Footer locale={locale} />
      </body>
    </html>
  );
}
