"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { getDictionary, otherLocale } from "@/lib/i18n";
import type { Locale } from "@/lib/types";

interface LocaleSwitcherProps {
  locale: Locale;
  /** URL segment before the locale, e.g. "/branch-2" for a branch menu. Omit for main. */
  basePath?: string;
}

/**
 * Swaps only the locale segment, so the reader stays on the same view — /ar/desserts
 * becomes /en/desserts rather than dropping back to the menu root.
 */
export function LocaleSwitcher({ locale, basePath = "" }: LocaleSwitcherProps) {
  const pathname = usePathname();
  const target = otherLocale(locale);
  const t = getDictionary(locale);

  const prefix = `${basePath}/${locale}`;
  const rest = pathname.startsWith(prefix) ? pathname.slice(prefix.length) : "";
  const href = `${basePath}/${target}${rest}`;

  return (
    <Link
      href={href}
      hrefLang={target}
      aria-label={t.switchToAria}
      className="text-eyebrow border-ink/20 hover:border-ink/50 hover:text-botanical inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border px-4 uppercase transition-colors duration-200"
    >
      {t.switchTo}
    </Link>
  );
}
