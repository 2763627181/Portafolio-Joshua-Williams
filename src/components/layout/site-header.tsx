"use client";

import * as React from "react";
import Link from "next/link";
import { siteNav } from "@/config/site-nav";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionary";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { LanguageToggle } from "@/components/ui/language-toggle";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

export function SiteHeader({
  locale,
  name,
  dict,
}: {
  locale: Locale;
  name: string;
  dict: Pick<Dictionary, "nav" | "header" | "theme" | "language">;
}) {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="border-border bg-background/80 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 border-b backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link
          href="#home"
          className="text-foreground group flex items-center gap-2 font-semibold tracking-tight"
        >
          <span className="bg-accent/15 text-accent ring-accent/30 group-hover:bg-accent/25 inline-flex h-8 w-8 items-center justify-center rounded-lg text-xs font-bold ring-1 transition">
            JW
          </span>
          <span className="hidden sm:inline">{name.split(" ")[0]}</span>
        </Link>

        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label={dict.header.mainNavLabel}
        >
          {siteNav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-muted hover:text-foreground rounded-full px-3 py-2 text-sm font-medium transition"
            >
              {dict.nav[item.key]}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageToggle locale={locale} labels={dict.language} />
          <ThemeToggle labels={dict.theme} className="hidden sm:inline-flex" />
          <ButtonLink
            href="#contact"
            variant="primary"
            className="hidden px-4 py-2 text-xs sm:inline-flex sm:text-sm"
          >
            {dict.header.cta}
          </ButtonLink>

          <button
            type="button"
            className="text-foreground hover:bg-surface inline-flex h-10 w-10 items-center justify-center rounded-full lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{dict.header.openMenu}</span>
            <span className="text-xl" aria-hidden>
              {open ? "×" : "≡"}
            </span>
          </button>
        </div>
      </Container>

      <div
        id="mobile-nav"
        className={cn(
          "border-border bg-background/95 lg:hidden",
          open ? "block border-t" : "hidden",
        )}
      >
        <Container className="flex flex-col gap-1 py-4">
          {siteNav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:bg-surface rounded-xl px-3 py-3 text-sm font-medium"
              onClick={() => setOpen(false)}
            >
              {dict.nav[item.key]}
            </a>
          ))}
          <div className="mt-2 flex items-center justify-between gap-2 px-1 pt-2">
            <ThemeToggle labels={dict.theme} />
            <ButtonLink href="#contact" variant="primary" className="flex-1">
              {dict.header.cta}
            </ButtonLink>
          </div>
        </Container>
      </div>
    </header>
  );
}
