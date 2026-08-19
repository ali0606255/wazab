/**
 * Cross-promotion credit for SPOT (spotsa.app) in the site footer. The dot mark and
 * "spot" wordmark are built directly from SPOT's own brand guidelines rather than an
 * embedded image: the guideline's source PDF only exposes its logo as a raster image
 * with a soft-masked gradient background that would not decode cleanly through any
 * available extraction path, so a pixel-perfect crop was not something we could verify
 * as correct. The guideline itself is precise enough (exact hex stops, exact gradient
 * angle, minimum clear height) to reproduce faithfully in code instead.
 *
 * Per the guideline: primary usage is on a dark ground, which is exactly this footer
 * (--color-ink). Signature gradient, left→right: Orange -> Pink -> Purple.
 */
const SPOT_ORANGE = "#FF5A00";
const SPOT_PINK = "#FF27B0";
const SPOT_PURPLE = "#6A00FF";

interface SpotCreditProps {
  label: string;
}

export function SpotCredit({ label }: SpotCreditProps) {
  return (
    <a
      href="https://spotsa.app"
      target="_blank"
      rel="noopener noreferrer"
      className="text-canvas/50 hover:text-canvas/85 mt-4 inline-flex min-h-11 items-center gap-2 text-[0.8125rem] transition-colors"
    >
      <span>{label}</span>
      <span className="inline-flex items-center gap-1.5" style={{ height: 22 }}>
        <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true">
          <defs>
            <linearGradient id="spot-credit-dot" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor={SPOT_ORANGE} />
              <stop offset="50%" stopColor={SPOT_PINK} />
              <stop offset="100%" stopColor={SPOT_PURPLE} />
            </linearGradient>
          </defs>
          <circle cx="11" cy="11" r="11" fill="url(#spot-credit-dot)" />
        </svg>
        <span className="text-base leading-none font-bold tracking-tight text-[#EDEAE6]">spot</span>
      </span>
    </a>
  );
}
