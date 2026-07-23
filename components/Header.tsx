import Link from "next/link";

import { getSiteCopy } from "@/content/site";
import { getDictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/types";

import { BrandMark } from "./BrandMark";
import { LocaleSwitcher } from "./LocaleSwitcher";

interface HeaderProps {
  locale: Locale;
}

export function Header({ locale }: HeaderProps) {
  const copy = getSiteCopy(locale);
  const t = getDictionary(locale);

  return (
    <header className="border-ink/10 bg-canvas/90 sticky top-0 z-20 border-b backdrop-blur-md">
      <div className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-4 py-3">
        {/* The wordmark is the actual brand lettering (SVG), so the name in the bar
            matches the logo exactly rather than approximating it with a text font. */}
        <Link
          href={`/${locale}`}
          className="flex items-center gap-2.5"
          aria-label={`${copy.name} — ${t.menu}`}
        >
          <BrandMark variant="icon" height={34} alt="" priority className="text-ink" />
          <span className="flex flex-col gap-1">
            <BrandMark variant="wordmark" height={22} alt="" priority className="text-ink" />
            <span className="text-ink/55 text-[0.625rem] leading-none tracking-[0.08em] uppercase">
              {copy.kicker}
            </span>
          </span>
        </Link>

        <LocaleSwitcher locale={locale} />
      </div>
    </header>
  );
}
