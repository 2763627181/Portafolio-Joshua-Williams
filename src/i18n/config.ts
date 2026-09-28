export const locales = ["en", "es"] as const;

export type Locale = (typeof locales)[number];

/** Idioma al entrar al sitio: se sirve en `/` (sin prefijo). */
export const defaultLocale: Locale = "en";

/** Contenido con una versión por idioma. */
export type Localized<T> = Record<Locale, T>;

export const openGraphLocales: Record<Locale, string> = {
  en: "en_US",
  es: "es_ES",
};

export function hasLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function otherLocale(locale: Locale): Locale {
  return locale === "en" ? "es" : "en";
}

/** Ruta pública de cada idioma: inglés en `/`, español en `/es`. */
export function localePath(locale: Locale): string {
  return locale === defaultLocale ? "/" : `/${locale}`;
}
