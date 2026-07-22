import { badgeLabel } from "@/lib/i18n";
import type { Badge as BadgeType, Locale } from "@/lib/types";

/**
 * Dietary and highlight markers. Botanical Green is the brand's accent colour and is
 * capped at ~10% of any surface, so only the two attention badges carry it; dietary
 * markers stay in charcoal on cream.
 */
const ACCENTED: ReadonlySet<BadgeType> = new Set<BadgeType>(["new", "popular"]);

interface BadgeProps {
  badge: BadgeType;
  locale: Locale;
}

export function Badge({ badge, locale }: BadgeProps) {
  const accented = ACCENTED.has(badge);

  return (
    <span
      className={[
        "inline-flex items-center rounded-full px-2.5 py-1 text-[0.6875rem] leading-none font-semibold tracking-[0.04em] whitespace-nowrap uppercase",
        accented ? "bg-botanical text-canvas" : "border-ink/15 bg-cream/70 text-ink/70 border",
      ].join(" ")}
    >
      {badgeLabel(locale, badge)}
    </span>
  );
}
