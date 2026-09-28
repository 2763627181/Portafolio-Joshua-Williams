"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { localePath, otherLocale, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionary";
import { cn } from "@/lib/utils";

/** Muestra el nombre del OTRO idioma y navega a su versión conservando la sección (#hash). */
export function LanguageToggle({
  locale,
  labels,
  className,
}: {
  locale: Locale;
  labels: Dictionary["language"];
  className?: string;
}) {
  const router = useRouter();
  const target = otherLocale(locale);
  const href = localePath(target);

  return (
    <Link
      href={href}
      hrefLang={target}
      aria-label={labels.switchLabel}
      title={labels.switchLabel}
      className={cn(
        "border-border bg-surface/80 text-foreground hover:bg-surface inline-flex h-10 items-center justify-center rounded-full border px-4 text-sm font-medium backdrop-blur-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className,
      )}
      onClick={(event) => {
        // Respeta abrir en pestaña nueva / clic medio.
        if (
          event.button !== 0 ||
          event.metaKey ||
          event.ctrlKey ||
          event.shiftKey ||
          event.altKey
        ) {
          return;
        }
        event.preventDefault();
        router.push(`${href}${window.location.hash}`);
      }}
    >
      <span lang={target}>{labels.name}</span>
    </Link>
  );
}
