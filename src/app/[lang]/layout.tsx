import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "../globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { PersonJsonLd } from "@/components/json-ld/person-json-ld";
import { getProfile } from "@/data/profile";
import {
  defaultLocale,
  hasLocale,
  localePath,
  locales,
  openGraphLocales,
} from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionary";
import { getSiteUrl } from "@/lib/site";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = getSiteUrl();

/** Solo existen los idiomas de `locales`; cualquier otro segmento responde 404. */
export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const dict = getDictionary(lang);
  const profile = getProfile(lang);
  const title = `${profile.name} · ${profile.role}`;
  const path = localePath(lang);

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: title,
      template: `%s · ${profile.name}`,
    },
    description: profile.tagline,
    keywords: dict.meta.keywords,
    authors: [{ name: profile.name, url: siteUrl }],
    creator: profile.name,
    openGraph: {
      type: "website",
      locale: openGraphLocales[lang],
      alternateLocale: locales
        .filter((l) => l !== lang)
        .map((l) => openGraphLocales[l]),
      url: path,
      siteName: `${profile.name} · ${dict.meta.siteName}`,
      title,
      description: profile.tagline,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: profile.tagline,
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: path,
      languages: {
        ...Object.fromEntries(locales.map((l) => [l, localePath(l)])),
        "x-default": localePath(defaultLocale),
      },
    },
  };
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
};

export default async function RootLayout({
  children,
  params,
}: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const dict = getDictionary(lang);
  const profile = getProfile(lang);

  return (
    <html
      lang={lang}
      className={`${sans.variable} ${mono.variable} h-full scroll-smooth antialiased`}
      suppressHydrationWarning
    >
      <body className="bg-background text-foreground min-h-full flex flex-col">
        <a
          href="#main-content"
          className="bg-background text-foreground focus:ring-accent sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:px-4 focus:py-2 focus:shadow-lg focus:ring-2"
        >
          {dict.skipToContent}
        </a>
        <PersonJsonLd profile={profile} knowsAbout={dict.meta.knowsAbout} />
        <ThemeProvider>
          <SiteHeader locale={lang} name={profile.name} dict={dict} />
          <div className="flex flex-1 flex-col">{children}</div>
          <SiteFooter profile={profile} dict={dict} />
        </ThemeProvider>
      </body>
    </html>
  );
}
