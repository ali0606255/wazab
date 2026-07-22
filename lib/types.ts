export const LOCALES = ["ar", "en"] as const;
export type Locale = (typeof LOCALES)[number];

export const BADGES = ["new", "popular", "vegetarian", "vegan", "spicy", "gluten-free"] as const;
export type Badge = (typeof BADGES)[number];

export interface Money {
  amount: number;
  currency: "SAR";
}

export interface MenuItem {
  id: string;
  name: string;
  description?: string;
  /**
   * Optional: the WZZAB menu is currently presented without prices. When a price is
   * supplied it renders automatically once SHOW_PRICES is enabled (see lib/config.ts).
   */
  price?: Money;
  /** Energy in kilocalories, as printed on the menu. Rendered when SHOW_CALORIES is on. */
  calories?: number;
  /** Path under /public/menu. Cards are designed to read correctly without one. */
  image?: string;
  badges?: Badge[];
  /** Defaults to true when omitted. */
  available?: boolean;
}

export interface MenuCategory {
  id: string;
  name: string;
  description?: string;
  items: MenuItem[];
}

/**
 * A full localized menu. Content files export this shape; nothing else in the app
 * is allowed to know how or where the content is stored.
 */
export type Menu = MenuCategory[];
