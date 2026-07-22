import type { Badge, Locale, Money } from "./types";

import { LOCALES } from "./types";

/** Arabic is the primary locale; `/` redirects here (see next.config.ts). */
export const DEFAULT_LOCALE: Locale = "ar";

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

export function dir(locale: Locale): "rtl" | "ltr" {
  return locale === "ar" ? "rtl" : "ltr";
}

export function otherLocale(locale: Locale): Locale {
  return locale === "ar" ? "en" : "ar";
}

/*
 * Every user-facing string in the UI chrome lives here. Menu content (category and
 * item names, descriptions) lives in `content/` instead — see CONTENT.md.
 * Components must never inline a literal.
 */
const dictionaries = {
  ar: {
    localeName: "العربية",
    switchTo: "English",
    switchToAria: "التبديل إلى الإنجليزية",
    skipToContent: "تخطَّ إلى القائمة",
    menu: "قائمة الطعام",
    categories: "الأقسام",
    currency: "ر.س",
    caloriesUnit: "سعرة",
    unavailable: "غير متوفر حالياً",
    searchLabel: "ابحث في القائمة",
    searchPlaceholder: "ابحث عن صنف…",
    clearSearch: "مسح البحث",
    filterLabel: "تصفية حسب",
    allItems: "الكل",
    noResults: "لا توجد أصناف مطابقة",
    noResultsHint: "جرّب كلمة أخرى أو أزِل التصفية.",
    resultsCount: (n: number) => (n === 1 ? "صنف واحد" : n === 2 ? "صنفان" : `${n} أصناف`),
    backToMenu: "العودة إلى القائمة",
    notFoundTitle: "الصفحة غير موجودة",
    notFoundBody: "الرابط الذي فتحته غير صحيح أو تم نقل الصفحة.",
    placeholderNotice: "الأصناف والأسعار المعروضة مبدئية للعرض فقط، وسيتم اعتمادها من المطعم.",
    badges: {
      new: "جديد",
      popular: "الأكثر طلباً",
      vegetarian: "نباتي",
      vegan: "نباتي صرف",
      spicy: "حار",
      "gluten-free": "خالٍ من الجلوتين",
    },
  },
  en: {
    localeName: "English",
    switchTo: "العربية",
    switchToAria: "Switch to Arabic",
    skipToContent: "Skip to menu",
    menu: "Menu",
    categories: "Categories",
    currency: "SAR",
    caloriesUnit: "cal",
    unavailable: "Currently unavailable",
    searchLabel: "Search the menu",
    searchPlaceholder: "Search for an item…",
    clearSearch: "Clear search",
    filterLabel: "Filter by",
    allItems: "All",
    noResults: "No matching items",
    noResultsHint: "Try a different word or clear the filters.",
    resultsCount: (n: number) => `${n} ${n === 1 ? "item" : "items"}`,
    backToMenu: "Back to menu",
    notFoundTitle: "Page not found",
    notFoundBody: "That link is not valid, or the page has moved.",
    placeholderNotice: "Items and prices shown are provisional placeholders pending sign-off.",
    badges: {
      new: "New",
      popular: "Popular",
      vegetarian: "Vegetarian",
      vegan: "Vegan",
      spicy: "Spicy",
      "gluten-free": "Gluten free",
    },
  },
} as const;

export type Dictionary = (typeof dictionaries)[Locale];

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export function badgeLabel(locale: Locale, badge: Badge): string {
  return dictionaries[locale].badges[badge];
}

/**
 * Prices render with locale-correct digits and grouping. Arabic uses Arabic-Indic
 * numerals to match the rest of the Arabic typography.
 */
export function formatPrice(locale: Locale, price: Money): string {
  const amount = new Intl.NumberFormat(locale === "ar" ? "ar-SA" : "en-US", {
    minimumFractionDigits: Number.isInteger(price.amount) ? 0 : 2,
    maximumFractionDigits: 2,
  }).format(price.amount);

  return `${amount} ${dictionaries[locale].currency}`;
}

/** Calorie counts, with locale-correct digits to match the surrounding typography. */
export function formatCalories(locale: Locale, calories: number): string {
  const value = new Intl.NumberFormat(locale === "ar" ? "ar-SA" : "en-US").format(calories);
  return locale === "ar"
    ? `${value} ${dictionaries.ar.caloriesUnit}`
    : `${value} ${dictionaries.en.caloriesUnit}`;
}
