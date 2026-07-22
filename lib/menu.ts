import "server-only";

import { menuAr } from "@/content/menu.ar";
import { menuEn } from "@/content/menu.en";

import type { Locale, Menu, MenuCategory, MenuItem } from "./types";

/*
 * ─── The data layer ──────────────────────────────────────────────────────────────
 * This module is the ONLY place in the app that reads from `content/`. Components and
 * pages call the selectors below and never import a content file directly.
 *
 * EXTENSION SEAM: to move the menu off flat files (a CMS, a database, the Foodics POS)
 * replace the body of `getMenu` with that fetch and keep the signature. Every selector
 * and every component keeps working unchanged. Selectors are async for exactly this
 * reason — an async source can be dropped in without touching a single call site.
 */

const SOURCES: Record<Locale, Menu> = {
  ar: menuAr,
  en: menuEn,
};

/** The whole menu for a locale, categories in presentation order. */
export async function getMenu(locale: Locale): Promise<Menu> {
  return SOURCES[locale];
}

/** Category ids in menu order — used for static generation and the category rail. */
export async function getCategoryIds(locale: Locale): Promise<string[]> {
  const menu = await getMenu(locale);
  return menu.map((category) => category.id);
}

export async function getCategory(locale: Locale, id: string): Promise<MenuCategory | undefined> {
  const menu = await getMenu(locale);
  return menu.find((category) => category.id === id);
}

/** Every item across every category, flattened — used by search and by JSON-LD. */
export async function getAllItems(locale: Locale): Promise<MenuItem[]> {
  const menu = await getMenu(locale);
  return menu.flatMap((category) => category.items);
}

/** Items are available unless a content file explicitly marks them otherwise. */
export function isAvailable(item: MenuItem): boolean {
  return item.available !== false;
}
