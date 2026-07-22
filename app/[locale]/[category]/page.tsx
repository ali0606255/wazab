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
    <main id="menu" className="mx-auto max-w-3xl px-4 py-14">
      <Link
        href={`/${locale}`}
        className="text-eyebrow text-ink/55 hover:text-botanical inline-flex min-h-11 items-center uppercase transition-colors"
      >
        {t.backToMenu}
      </Link>

      <div className="mt-6">
        <MenuCategory category={category} locale={locale} />
      </div>

      <p className="text-caption border-ink/10 text-ink/45 mt-20 border-t pt-6">
        {t.placeholderNotice}
      </p>
    </main>
  );
}
