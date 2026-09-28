import type { Locale } from "./config";
import { en, type Dictionary } from "./en";
import { es } from "./es";

export type { Dictionary };

const dictionaries: Record<Locale, Dictionary> = { en, es };

/** Solo para Server Components: los Client Components reciben la parte que necesitan por props. */
export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
