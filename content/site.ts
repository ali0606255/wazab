import type { Locale } from "@/lib/types";

/**
 * Brand-level strings and contact details. Edit these to change what appears in the
 * header, the footer, the browser tab and link previews. See CONTENT.md.
 */

interface SiteCopy {
  name: string;
  /** Descriptor under the wordmark, e.g. "cafe & local bakery". */
  kicker: string;
  tagline: string;
  /** The brand story shown beneath the hero. */
  storyTitle: string;
  storyBody: string;
  /** Used for <title>, meta description and link previews. */
  metaTitle: string;
  metaDescription: string;
  address: string;
  hours: string;
  rights: string;
}

export const site = {
  /** Production origin — update once the domain is live, then redeploy. */
  url: "https://wzzab.vercel.app",

  contact: {
    phone: "+966500000000", // TODO: confirm with client
    instagram: "https://instagram.com/wzzab", // TODO: confirm with client
    /** Optional — leave empty to hide the maps link in the footer. */
    mapsUrl: "",
  },

  copy: {
    ar: {
      name: "وزّاب",
      kicker: "مقهى ومخبز محلي",
      tagline: "من الطبيعة",
      storyTitle: "من مخبزنا… تبدأ الحكاية",
      storyBody:
        "في وزّاب، نؤمن أن الخبز ليس مجرد مرافق للطبق، بل جزء من هويته. لهذا نُحضّر قرص وزّاب يومياً داخل مخبزنا الخاص، بعجينة مخمّرة طبيعياً، ثم يُخبز على الطلب.",
      metaTitle: "وزّاب | مقهى ومخبز محلي",
      metaDescription:
        "قائمة وزّاب — خبز يُخبز طازجاً كل يوم عند الطلب، ومكوّنات طبيعية. تصفّح القهوة والمخبوزات والحلويات والوجبات.",
      address: "المملكة العربية السعودية", // TODO: confirm with client
      hours: "يومياً ٧:٠٠ ص – ١١:٠٠ م", // TODO: confirm with client
      rights: "جميع الحقوق محفوظة",
    },
    en: {
      name: "WZZAB",
      kicker: "cafe & local bakery",
      tagline: "From Nature",
      storyTitle: "From our bakery… the story begins",
      storyBody:
        "At WZZAB we believe bread is not a mere companion to the dish, but part of its identity. That is why we make the WZZAB disc fresh every day in our own bakery — from naturally leavened dough, baked to order.",
      metaTitle: "WZZAB | Cafe & Local Bakery",
      metaDescription:
        "The WZZAB menu — bread baked fresh every day to order, with natural ingredients. Browse coffee, bakery, desserts and meals.",
      address: "Saudi Arabia", // TODO: confirm with client
      hours: "Daily 7:00 AM – 11:00 PM", // TODO: confirm with client
      rights: "All rights reserved",
    },
  } satisfies Record<Locale, SiteCopy>,
} as const;

export function getSiteCopy(locale: Locale): SiteCopy {
  return site.copy[locale];
}
