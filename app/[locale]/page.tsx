import { notFound } from "next/navigation";

import { BrandMark } from "@/components/BrandMark";
import { CategoryNav } from "@/components/CategoryNav";
import { MenuCategory } from "@/components/MenuCategory";
import { SearchFilter } from "@/components/SearchFilter";
import { ENABLE_SEARCH } from "@/lib/config";
import { getSiteCopy } from "@/content/site";
import { getDictionary, isLocale } from "@/lib/i18n";
import { getMenu } from "@/lib/menu";
import { buildRestaurantSchema } from "@/lib/schema";
import { BADGES, type Badge } from "@/lib/types";

export default async function MenuPage({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const menu = await getMenu(locale);
  const copy = getSiteCopy(locale);
  const t = getDictionary(locale);

  const categories = menu.map(({ id, name }) => ({ id, name }));
  const usedBadges = BADGES.filter((badge) =>
    menu.some((category) => category.items.some((item) => item.badges?.includes(badge))),
  ) satisfies Badge[];

  return (
    <>
      <script
        type="application/ld+json"
        // Static, build-time content derived from our own data layer.
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildRestaurantSchema(locale, menu)),
        }}
      />

      {/* Transparent hero: the leaf pattern shows through and frames the wordmark. */}
      <section>
        <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:py-24">
          <BrandMark
            variant="full"
            height={132}
            alt={copy.name}
            priority
            className="text-ink mx-auto"
          />
          <p className="text-eyebrow text-botanical mt-8 uppercase">{copy.tagline}</p>
          <h1 className="font-display text-h2 sm:text-h1 mt-3">{t.menu}</h1>

          <div className="mx-auto mt-8 max-w-md">
            <h2 className="text-eyebrow text-ink/50 uppercase">{copy.storyTitle}</h2>
            <p className="text-caption text-ink/70 mt-2">{copy.storyBody}</p>
          </div>
        </div>
      </section>

      <div className="sticky top-[3.75rem] z-10">
        <CategoryNav categories={categories} label={t.categories} locale={locale} />
      </div>

      <main id="menu" className="mx-auto max-w-3xl px-4 pt-6 pb-16 sm:pt-8">
        {/* The menu itself sits on a Crisp White "paper" so text never reads over the
            pattern; the card floats above the cream leaf field with a soft shadow. */}
        <div className="bg-canvas border-ink/10 rounded-2xl border p-5 shadow-[0_1px_2px_rgba(28,28,28,0.05),0_12px_32px_-14px_rgba(28,28,28,0.18)] sm:p-8">
          {ENABLE_SEARCH ? (
            <SearchFilter menu={menu} locale={locale} availableBadges={usedBadges} />
          ) : (
            <div className="space-y-16">
              {menu.map((category) => (
                <MenuCategory key={category.id} category={category} locale={locale} />
              ))}
            </div>
          )}

          <p className="text-caption border-ink/10 text-ink/45 mt-20 border-t pt-6">
            {t.placeholderNotice}
          </p>
        </div>
      </main>
    </>
  );
}
