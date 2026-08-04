import { SHOW_CALORIES, SHOW_PRICES } from "@/lib/config";
import { formatCalories, formatPrice, getDictionary } from "@/lib/i18n";
import type { Locale, MenuItem } from "@/lib/types";

import { Badge } from "./Badge";
import { MenuItemImage } from "./MenuItemImage";

interface MenuItemCardProps {
  item: MenuItem;
  locale: Locale;
}

/**
 * A single menu line. Deliberately designed image-first *and* image-free: with no
 * image the row reads as classic printed-menu typography; add an image later and it
 * gains a thumbnail with nothing else shifting. The price and its dotted leader only
 * appear when prices are enabled (lib/config.ts) and the item carries one, so the
 * price-less WZZAB menu stays clean.
 */
export function MenuItemCard({ item, locale }: MenuItemCardProps) {
  const t = getDictionary(locale);
  const unavailable = item.available === false;
  const showPrice = SHOW_PRICES && item.price !== undefined;
  const showCalories = SHOW_CALORIES && item.calories !== undefined;

  return (
    <li
      className={[
        "group relative flex gap-4 py-5 transition-opacity duration-300",
        unavailable ? "opacity-55" : "",
      ].join(" ")}
    >
      {item.image ? <MenuItemImage src={item.image} name={item.name} locale={locale} /> : null}

      <div className="min-w-0 flex-1">
        {/* flex-wrap so a long dish name and its price/leader move as one unit onto a
            second line, rather than the leader's align-self:end splitting it away from
            the price when the name itself wraps (a real bug the bigger photo exposed by
            leaving less horizontal room on narrow screens). */}
        <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
          <h3 className="text-h4 font-semibold">{item.name}</h3>
          {showPrice ? (
            <span className="flex flex-1 items-baseline gap-2">
              <span aria-hidden className="menu-leader" />
              <p className="shrink-0 font-semibold tabular-nums">
                {formatPrice(locale, item.price!)}
              </p>
            </span>
          ) : null}
        </div>

        {item.description ? (
          <p className="text-caption text-ink/65 mt-1.5 max-w-prose">{item.description}</p>
        ) : null}

        {showCalories ? (
          <p className="text-ink/45 mt-1.5 text-[0.6875rem] tracking-[0.04em] uppercase tabular-nums">
            {formatCalories(locale, item.calories!)}
          </p>
        ) : null}

        {(item.badges?.length ?? 0) > 0 || unavailable ? (
          <div className="mt-3 flex flex-wrap items-center gap-1.5">
            {unavailable ? (
              <span className="text-ink/50 text-[0.6875rem] leading-none font-semibold tracking-[0.04em] uppercase">
                {t.unavailable}
              </span>
            ) : null}
            {item.badges?.map((badge) => (
              <Badge key={badge} badge={badge} locale={locale} />
            ))}
          </div>
        ) : null}
      </div>
    </li>
  );
}
