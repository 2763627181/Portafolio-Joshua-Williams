import type { MetadataRoute } from "next";
import { localePath, locales } from "@/i18n/config";
import { getSiteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const urlFor = (path: string) => (path === "/" ? base : `${base}${path}`);
  const languages = Object.fromEntries(
    locales.map((locale) => [locale, urlFor(localePath(locale))]),
  );

  return locales.map((locale) => ({
    url: urlFor(localePath(locale)),
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 1,
    alternates: { languages },
  }));
}
