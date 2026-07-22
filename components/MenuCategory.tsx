import type { Locale, MenuCategory as MenuCategoryType } from "@/lib/types";

import { MenuItemCard } from "./MenuItemCard";

interface MenuCategoryProps {
  category: MenuCategoryType;
  locale: Locale;
}

export function MenuCategory({ category, locale }: MenuCategoryProps) {
  const headingId = `category-${category.id}`;

  return (
    <section id={category.id} aria-labelledby={headingId} className="scroll-mt-32">
      <header className="border-ink/15 border-b pb-4">
        <h2 id={headingId} className="font-display text-h2">
          {category.name}
        </h2>
        {category.description ? (
          <p className="text-caption text-ink/65 mt-2 max-w-prose">{category.description}</p>
        ) : null}
      </header>

      <ul className="divide-ink/10 divide-y">
        {category.items.map((item) => (
          <MenuItemCard key={item.id} item={item} locale={locale} />
        ))}
      </ul>
    </section>
  );
}
