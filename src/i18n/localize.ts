import type { Locale, Localized } from "./config";

/** Fuente con un bloque `copy` por idioma (los campos no traducibles quedan fuera de `copy`). */
export type LocalizedSource = { copy: Localized<object> };

/** Forma final de una fuente ya resuelta a un solo idioma. */
export type Resolved<S extends LocalizedSource> = Omit<S, "copy"> &
  S["copy"][Locale];

export function localize<S extends LocalizedSource>(
  source: S,
  locale: Locale,
): Resolved<S> {
  const { copy, ...rest } = source;
  return { ...rest, ...copy[locale] };
}
