import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { MenuCategory } from "@/components/MenuCategory";
import { getDictionary, isLocale } from "@/lib/i18n";
import { getCategory, getCategoryIds } from "@/lib/menu";
import { LOCALES } from "@/lib/types";

/** One prerendered page per category per locale — deep-linkable from a QR or a post. */
export async function generateStaticParams() {
  const params = await Promise.all(
    LOCALES.map(async (locale) => {
      const ids = await getCategoryIds(locale);
      return ids.map((category) => ({ locale, category }));
    }),
  );

  return params.flat();
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/[category]">): Promise<Metadata> {
  const { locale, category: categoryId } = await params;
  if (!isLocale(locale)) return {};

  const category = await getCategory(locale, categoryId);
  if (!category) return {};

  return {
    title: category.name,
    description: category.description,
    alternates: {
      canonical: `/${locale}/${categoryId}`,
      languages: { ar: `/ar/${categoryId}`, en: `/en/${categoryId}` },
    },
  };
}

export default async function CategoryPage({ params }: PageProps<"/[locale]/[category]">) {
  const { locale, category: categoryId } = await params;
  if (!isLocale(locale)) notFound();

  const category = await getCategory(locale, categoryId);
  if (!category) notFound();

  const t = getDictionary(locale);

  return (
    <main id="menu" className="mx-auto max-w-3xl px-4 py-10 sm:py-14">
      <Link
        href={`/${locale}`}
        className="text-eyebrow text-ink/55 hover:text-botanical inline-flex min-h-11 items-center uppercase transition-colors"
      >
        {t.backToMenu}
      </Link>

      {/* Menu content on Crisp White paper, floating over the cream leaf field. */}
      <div className="bg-canvas border-ink/10 mt-4 rounded-2xl border p-5 shadow-[0_1px_2px_rgba(28,28,28,0.05),0_12px_32px_-14px_rgba(28,28,28,0.18)] sm:p-8">
        <MenuCategory category={category} locale={locale} />

        <p className="text-caption border-ink/10 text-ink/45 mt-20 border-t pt-6">
          {t.placeholderNotice}
        </p>
      </div>
    </main>
  );
}
