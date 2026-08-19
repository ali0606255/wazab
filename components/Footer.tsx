import { getSiteCopy } from "@/content/site";
import { getDictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/types";

import { BrandMark } from "./BrandMark";
import { SpotCredit } from "./SpotCredit";

interface FooterProps {
  locale: Locale;
}

export function Footer({ locale }: FooterProps) {
  const copy = getSiteCopy(locale);
  const t = getDictionary(locale);
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-canvas mt-20">
      <div className="mx-auto max-w-3xl px-4 py-14">
        <BrandMark variant="full" height={92} alt="" className="text-canvas" />

        <p className="font-display text-h3 mt-6">{copy.tagline}</p>

        <dl className="text-caption text-canvas/70 mt-8 grid gap-x-8 gap-y-3 sm:grid-cols-2">
          <div>
            <dt className="sr-only">{copy.kicker}</dt>
            <dd>{copy.address}</dd>
          </div>
          <div>
            <dt className="sr-only">{copy.kicker}</dt>
            <dd>{copy.hours}</dd>
          </div>
        </dl>

        <SpotCredit siteByLabel={t.siteBy} contactLabel={t.spotContactUs} />

        <p className="text-caption text-canvas/45 mt-10">
          © {year} {copy.name} — {copy.rights}
        </p>
      </div>
    </footer>
  );
}
