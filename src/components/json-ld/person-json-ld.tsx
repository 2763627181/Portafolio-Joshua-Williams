import type { Profile } from "@/data/types";
import type { Dictionary } from "@/i18n/dictionary";
import { getSiteUrl } from "@/lib/site";

export function PersonJsonLd({
  profile,
  knowsAbout,
}: {
  profile: Profile;
  knowsAbout: Dictionary["meta"]["knowsAbout"];
}) {
  const url = getSiteUrl();
  const sameAs = [profile.github, profile.linkedin].filter(Boolean);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.role,
    email: profile.email,
    url,
    sameAs,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Santo Domingo Oeste",
      addressCountry: "DO",
    },
    knowsAbout,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
