"use client";

import { useDeferredValue, useId, useMemo, useState } from "react";

import { badgeLabel, getDictionary } from "@/lib/i18n";
import type { Badge as BadgeType, Locale, Menu } from "@/lib/types";

import { MenuCategory } from "./MenuCategory";

interface SearchFilterProps {
  menu: Menu;
  locale: Locale;
  /** Badges actually present in the content — no empty filter chips. */
  availableBadges: BadgeType[];
}

/**
 * Client-side search and dietary filtering over the statically rendered menu. No
 * network, no index: the whole menu is a few kilobytes of already-hydrated data.
 *
 * The unfiltered menu is server-rendered by the parent, so the page is complete and
 * indexable before this component hydrates.
 */
export function SearchFilter({ menu, locale, availableBadges }: SearchFilterProps) {
  const t = getDictionary(locale);
  const searchId = useId();

  const [query, setQuery] = useState("");
  const [activeBadges, setActiveBadges] = useState<BadgeType[]>([]);
  const deferredQuery = useDeferredValue(query);

  const filtered = useMemo(() => {
    const needle = normalize(deferredQuery);
    if (!needle && activeBadges.length === 0) return menu;

    return menu
      .map((category) => ({
        ...category,
        items: category.items.filter((item) => {
          const matchesQuery =
            !needle ||
            normalize(item.name).includes(needle) ||
            normalize(item.description ?? "").includes(needle);

          const matchesBadges = activeBadges.every((badge) => item.badges?.includes(badge));

          return matchesQuery && matchesBadges;
        }),
      }))
      .filter((category) => category.items.length > 0);
  }, [menu, deferredQuery, activeBadges]);

  const resultCount = filtered.reduce((total, category) => total + category.items.length, 0);
  const isFiltering = query.trim().length > 0 || activeBadges.length > 0;

  function toggleBadge(badge: BadgeType) {
    setActiveBadges((current) =>
      current.includes(badge) ? current.filter((b) => b !== badge) : [...current, badge],
    );
  }

  return (
    <>
      <div className="mb-12">
        <label htmlFor={searchId} className="sr-only">
          {t.searchLabel}
        </label>
        <div className="relative">
          <input
            id={searchId}
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={t.searchPlaceholder}
            autoComplete="off"
            className="border-ink/20 bg-cream/40 text-body placeholder:text-ink/40 focus:border-botanical w-full rounded-full border py-3 ps-5 pe-5 focus:outline-none"
          />
        </div>

        {/* min-w-0 overrides the UA stylesheet's min-inline-size:min-content on
            fieldset, which would otherwise stop the rail below from scrolling and push
            the whole page into horizontal overflow. */}
        {availableBadges.length > 0 ? (
          <fieldset className="mt-4 min-w-0">
            <legend className="sr-only">{t.filterLabel}</legend>
            <div className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4">
              {availableBadges.map((badge) => {
                const active = activeBadges.includes(badge);
                return (
                  <button
                    key={badge}
                    type="button"
                    onClick={() => toggleBadge(badge)}
                    aria-pressed={active}
                    className={[
                      "text-caption inline-flex min-h-11 shrink-0 items-center rounded-full px-4 whitespace-nowrap transition-colors duration-200",
                      active
                        ? "bg-botanical text-canvas"
                        : "border-ink/15 text-ink/70 hover:border-ink/40 hover:text-ink border",
                    ].join(" ")}
                  >
                    {badgeLabel(locale, badge)}
                  </button>
                );
              })}
            </div>
          </fieldset>
        ) : null}

        <p aria-live="polite" className="text-caption text-ink/55 mt-4 h-5">
          {isFiltering ? t.resultsCount(resultCount) : ""}
        </p>
      </div>

      {filtered.length > 0 ? (
        <div className="space-y-16">
          {filtered.map((category) => (
            <MenuCategory key={category.id} category={category} locale={locale} />
          ))}
        </div>
      ) : (
        <div className="border-ink/10 bg-cream/50 rounded-xl border px-6 py-16 text-center">
          <p className="font-display text-h3">{t.noResults}</p>
          <p className="text-caption text-ink/60 mt-2">{t.noResultsHint}</p>
        </div>
      )}
    </>
  );
}

/**
 * Folds case, strips Arabic diacritics and tatweel, and unifies alef/yaa/taa-marbuta
 * variants so "شاورما" matches "شاورمة" and "احمر" matches "أحمر".
 */
function normalize(value: string): string {
  return value
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[ً-ْـ]/g, "")
    .replace(/[آأإ]/g, "ا")
    .replace(/ى/g, "ي")
    .replace(/ة/g, "ه")
    .trim();
}
