import type { Locale } from "@/i18n/config";
import { localize } from "@/i18n/localize";
import type { ExperienceItem, ExperienceSource } from "./types";

/** Narrativa profesional — sustituye por roles y fechas reales. */
const experienceSources: ExperienceSource[] = [
  {
    id: "exp-1",
    copy: {
      en: {
        title: "Full stack development on real products",
        period: "2024 — present",
        summary:
          "Involvement across the full cycle: discovery, implementation, testing and production rollout of business-oriented applications.",
        highlights: [
          "Responsive interfaces and consistent design systems",
          "Frontend–backend integration and continuous deployment",
          "Performance and user-experience optimization",
        ],
      },
      es: {
        title: "Desarrollo full stack en productos reales",
        period: "2024 — presente",
        summary:
          "Participación en el ciclo completo: descubrimiento, implementación, pruebas y puesta en producción de aplicaciones orientadas a negocio.",
        highlights: [
          "Interfaces responsivas y sistemas de diseño coherentes",
          "Integración frontend–backend y despliegue continuo",
          "Optimización de rendimiento y experiencia de usuario",
        ],
      },
    },
  },
  {
    id: "exp-2",
    copy: {
      en: {
        title: "Industry platforms and user trust",
        period: "Recent projects",
        summary:
          "Sites and applications for regulated services, retail and operations with a high bar for clarity and conversion.",
        highlights: [
          "Critical forms and flows following UX best practices",
          "Structured content for SEO and conversion",
          "Technical foundation ready to evolve without constant rewrites",
        ],
      },
      es: {
        title: "Plataformas sectoriales y confianza del usuario",
        period: "Proyectos recientes",
        summary:
          "Sitios y aplicaciones para servicios regulados, retail y operaciones con alto estándar de claridad y conversión.",
        highlights: [
          "Formularios y flujos críticos con buenas prácticas de UX",
          "Contenido estructurado para SEO y conversión",
          "Base técnica preparada para evolucionar sin reescrituras constantes",
        ],
      },
    },
  },
];

export function getExperienceItems(locale: Locale): ExperienceItem[] {
  return experienceSources.map((source) => localize(source, locale));
}
