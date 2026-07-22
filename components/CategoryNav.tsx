"use client";

import { useEffect, useRef, useState } from "react";

import type { Locale } from "@/lib/types";

interface CategoryNavProps {
  categories: { id: string; name: string }[];
  label: string;
  locale: Locale;
}

/**
 * Sticky rail of category chips. Highlights the section currently in view and keeps
 * the active chip scrolled into the rail, which matters on a 360px phone where only
 * three chips fit at a time.
 */
export function CategoryNav({ categories, label, locale }: CategoryNavProps) {
  const [activeId, setActiveId] = useState(categories[0]?.id ?? "");
  const railRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const sections = categories
      .map(({ id }) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    // The band sits just under the sticky header: whichever section crosses it wins.
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-140px 0px -65% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [categories]);

  useEffect(() => {
    const rail = railRef.current;
    const chip = rail?.querySelector<HTMLElement>(`[data-chip="${activeId}"]`);
    if (!rail || !chip) return;

    const offset = chip.offsetLeft - rail.offsetLeft - rail.clientWidth / 2 + chip.clientWidth / 2;
    rail.scrollTo({ left: offset, behavior: "smooth" });
  }, [activeId]);

  return (
    <nav aria-label={label} className="border-ink/10 bg-canvas/95 border-b backdrop-blur-sm">
      <ul
        ref={railRef}
        dir={locale === "ar" ? "rtl" : "ltr"}
        className="no-scrollbar mx-auto flex max-w-3xl gap-2 overflow-x-auto px-4 py-3"
      >
        {categories.map((category) => {
          const active = category.id === activeId;
          return (
            <li key={category.id} className="shrink-0">
              <a
                href={`#${category.id}`}
                data-chip={category.id}
                aria-current={active ? "true" : undefined}
                className={[
                  "text-caption inline-flex min-h-11 items-center rounded-full px-4 whitespace-nowrap transition-colors duration-200",
                  active
                    ? "bg-ink text-canvas"
                    : "border-ink/15 text-ink/70 hover:border-ink/40 hover:text-ink border",
                ].join(" ")}
              >
                {category.name}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
