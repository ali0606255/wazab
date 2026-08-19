import Image from "next/image";

/**
 * Cross-promotion credit for SPOT (spotsa.app) in the site footer: the real logo
 * lockup (LED-matrix icon + wordmark, extracted from SPOT's own brand guideline PDF
 * as public/brand/spot-icon.webp + spot-wordmark.webp) plus a "Contact Us" pill
 * button — SPOT's own documented UI component (PILL BUTTON, Electric Orange fill).
 *
 * Per the guideline: primary logo usage is on a dark ground, which is exactly this
 * footer (--color-ink).
 */
const SPOT_ORANGE = "#FF5A00";

interface SpotCreditProps {
  siteByLabel: string;
  contactLabel: string;
}

export function SpotCredit({ siteByLabel, contactLabel }: SpotCreditProps) {
  return (
    <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
      <a
        href="https://spotsa.app"
        target="_blank"
        rel="noopener noreferrer"
        className="text-canvas/50 hover:text-canvas/85 inline-flex min-h-11 items-center gap-2 text-[0.8125rem] transition-colors"
      >
        <span>{siteByLabel}</span>
        <span className="inline-flex items-center gap-1.5">
          <Image
            src="/brand/spot-icon.webp"
            alt=""
            width={22}
            height={22}
            className="size-[22px]"
          />
          <Image
            src="/brand/spot-wordmark.webp"
            alt="spot"
            width={44}
            height={17}
            className="h-[17px] w-auto"
          />
        </span>
      </a>

      <a
        href="https://spotsa.app"
        target="_blank"
        rel="noopener noreferrer"
        className="text-caption inline-flex min-h-11 items-center rounded-full px-5 font-semibold text-white transition-opacity hover:opacity-90"
        style={{ backgroundColor: SPOT_ORANGE }}
      >
        {contactLabel}
      </a>
    </div>
  );
}
