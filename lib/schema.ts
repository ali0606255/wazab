import { getSiteCopy, site } from "@/content/site";

import type { Locale, Menu } from "./types";

/**
 * schema.org markup so search engines can surface the menu directly. Emitted as a
 * plain object and serialized by the page — see the Next.js JSON-LD guidance.
 */
export function buildRestaurantSchema(locale: Locale, menu: Menu) {
  const copy = getSiteCopy(locale);

  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "@id": `${site.url}/${locale}#restaurant`,
    name: copy.name,
    description: copy.metaDescription,
    url: `${site.url}/${locale}`,
    servesCuisine: locale === "ar" ? "مخبوزات وقهوة" : "Bakery & Coffee",
    telephone: site.contact.phone,
    address: {
      "@type": "PostalAddress",
      addressCountry: "SA",
      addressLocality: copy.address,
    },
    sameAs: [site.contact.instagram],
    hasMenu: {
      "@type": "Menu",
      name: copy.metaTitle,
      inLanguage: locale,
      hasMenuSection: menu.map((category) => ({
        "@type": "MenuSection",
        name: category.name,
        ...(category.description ? { description: category.description } : {}),
        hasMenuItem: category.items.map((item) => ({
          "@type": "MenuItem",
          name: item.name,
          ...(item.description ? { description: item.description } : {}),
          // Offers are only emitted when an item actually carries a price.
          ...(item.price
            ? {
                offers: {
                  "@type": "Offer",
                  price: item.price.amount,
                  priceCurrency: item.price.currency,
                  availability:
                    item.available === false
                      ? "https://schema.org/OutOfStock"
                      : "https://schema.org/InStock",
                },
              }
            : {}),
        })),
      })),
    },
  };
}
