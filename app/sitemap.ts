import type { MetadataRoute } from "next";

import { site } from "@/content/site";
import { BRANCHES, DEFAULT_BRANCH } from "@/lib/branches";
import { getCategoryIds } from "@/lib/menu";
import { LOCALES } from "@/lib/types";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const entries: MetadataRoute.Sitemap = [];

  for (const branch of BRANCHES) {
    // The main branch keeps its existing un-prefixed URLs; other branches live under
    // their own path, e.g. /branch-2/ar. See lib/branches.ts.
    const basePath = branch === DEFAULT_BRANCH ? "" : `/${branch}`;

    for (const locale of LOCALES) {
      entries.push({
        url: `${site.url}${basePath}/${locale}`,
        changeFrequency: "weekly",
        priority: branch === DEFAULT_BRANCH ? 1 : 0.9,
        alternates: {
          languages: Object.fromEntries(LOCALES.map((l) => [l, `${site.url}${basePath}/${l}`])),
        },
      });

      for (const category of await getCategoryIds(locale, branch)) {
        entries.push({
          url: `${site.url}${basePath}/${locale}/${category}`,
          changeFrequency: "weekly",
          priority: branch === DEFAULT_BRANCH ? 0.7 : 0.6,
          alternates: {
            languages: Object.fromEntries(
              LOCALES.map((l) => [l, `${site.url}${basePath}/${l}/${category}`]),
            ),
          },
        });
      }
    }
  }

  return entries;
}
