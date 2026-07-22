/**
 * Feature flags. Each is a single boolean so behaviour can be flipped without touching
 * component code — see CONTENT.md for the plain-language version.
 */

/**
 * Show prices on item cards. Prices come from the official WZZAB menu. An item without
 * a price (e.g. the chef dishes, pending pricing) simply renders without one.
 */
export const SHOW_PRICES = true;

/**
 * Show per-item calorie counts, as printed on the WZZAB menu (and required for menus in
 * Saudi Arabia). Items without a calorie value simply omit it.
 */
export const SHOW_CALORIES = true;

/**
 * Client-side search + dietary filter above the menu. Turn off for a browse-only menu;
 * the categories then render directly with no behavioural change.
 */
export const ENABLE_SEARCH = true;
