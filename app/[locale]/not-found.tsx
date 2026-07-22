import Link from "next/link";

import { DEFAULT_LOCALE, getDictionary } from "@/lib/i18n";

/**
 * Rendered for unknown paths under a locale. `notFound()` unwinds past the dynamic
 * segment, so this file cannot read `params` — it speaks the default locale.
 */
export default function NotFound() {
  const t = getDictionary(DEFAULT_LOCALE);

  return (
    <main className="mx-auto flex max-w-3xl flex-col items-center px-4 py-28 text-center">
      <h1 className="font-display text-h2">{t.notFoundTitle}</h1>
      <p className="text-caption text-ink/60 mt-3 max-w-sm">{t.notFoundBody}</p>
      <Link
        href={`/${DEFAULT_LOCALE}`}
        className="text-eyebrow bg-ink text-canvas mt-10 inline-flex min-h-11 items-center rounded-full px-6 uppercase transition-opacity hover:opacity-85"
      >
        {t.backToMenu}
      </Link>
    </main>
  );
}
