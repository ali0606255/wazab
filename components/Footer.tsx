import { getSiteCopy, site } from "@/content/site";
import type { Locale } from "@/lib/types";

import { BrandMark } from "./BrandMark";

interface FooterProps {
  locale: Locale;
}

export function Footer({ locale }: FooterProps) {
  const copy = getSiteCopy(locale);
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

        <ul className="text-caption mt-6 flex flex-wrap gap-x-6 gap-y-2">
          <li>
            <a
              href={`tel:${site.contact.phone}`}
              dir="ltr"
              className="text-canvas/80 hover:text-canvas inline-flex min-h-11 items-center underline-offset-4 transition-colors hover:underline"
            >
              {site.contact.phone}
            </a>
          </li>
          <li>
            <a
              href={site.contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-canvas/80 hover:text-canvas inline-flex min-h-11 items-center underline-offset-4 transition-colors hover:underline"
            >
              Instagram
            </a>
          </li>
        </ul>

        <p className="text-caption text-canvas/45 mt-10">
          © {year} {copy.name} — {copy.rights}
        </p>
      </div>
    </footer>
  );
}
