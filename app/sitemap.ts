import type { MetadataRoute } from "next";

import { site } from "@/content/site";
import { getCategoryIds } from "@/lib/menu";
import { LOCALES } from "@/lib/types";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of LOCALES) {
    entries.push({
      url: `${site.url}/${locale}`,
      changeFrequency: "weekly",
      priority: 1,
      alternates: {
        languages: Object.fromEntries(LOCALES.map((l) => [l, `${site.url}/${l}`])),
      },
    });

    for (const category of await getCategoryIds(locale)) {
      entries.push({
        url: `${site.url}/${locale}/${category}`,
        changeFrequency: "weekly",
        priority: 0.7,
        alternates: {
          languages: Object.fromEntries(LOCALES.map((l) => [l, `${site.url}/${l}/${category}`])),
        },
      });
    }
  }

  return entries;
}
