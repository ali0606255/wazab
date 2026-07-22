import Image from "next/image";

import { SHOW_CALORIES, SHOW_PRICES } from "@/lib/config";
import { formatCalories, formatPrice, getDictionary } from "@/lib/i18n";
import type { Locale, MenuItem } from "@/lib/types";

import { Badge } from "./Badge";

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
      {item.image ? (
        <Image
          src={item.image}
          alt=""
          width={96}
          height={96}
          sizes="96px"
          loading="lazy"
          className="size-20 shrink-0 rounded-lg object-cover sm:size-24"
        />
      ) : null}

      <div className="min-w-0 flex-1">
        <div className="flex items-baseline gap-2">
          <h3 className="text-h4 font-semibold">{item.name}</h3>
          {showPrice ? (
            <>
              <span aria-hidden className="menu-leader" />
              <p className="shrink-0 font-semibold tabular-nums">
                {formatPrice(locale, item.price!)}
              </p>
            </>
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
