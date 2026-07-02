import { profile } from "@/data/profile";
import { getSiteUrl } from "@/lib/site";

export function PersonJsonLd() {
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
    knowsAbout: [
      "Desarrollo web full stack",
      "Next.js",
      "React",
      "TypeScript",
      "Arquitectura de software",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
