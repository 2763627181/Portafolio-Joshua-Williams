import type { Locale } from "@/i18n/config";
import { localize } from "@/i18n/localize";
import type { StackCategory, StackSource } from "./types";

/** Agrupa tecnologías por capa — amplía o recorta según tu stack real. */
const stackSources: StackSource[] = [
  {
    id: "frontend",
    copy: {
      en: {
        category: "Frontend",
        items: [
          "Next.js",
          "React",
          "TypeScript",
          "Tailwind CSS",
          "Animations and UX",
        ],
      },
      es: {
        category: "Frontend",
        items: [
          "Next.js",
          "React",
          "TypeScript",
          "Tailwind CSS",
          "Animaciones y UX",
        ],
      },
    },
  },
  {
    id: "backend",
    copy: {
      en: {
        category: "Backend & data",
        items: [
          "Node.js",
          "REST APIs",
          "Supabase",
          "Authentication and authorization",
          "Data modeling",
        ],
      },
      es: {
        category: "Backend & datos",
        items: [
          "Node.js",
          "APIs REST",
          "Supabase",
          "Autenticación y autorización",
          "Modelado de datos",
        ],
      },
    },
  },
  {
    id: "quality",
    copy: {
      en: {
        category: "Quality & delivery",
        items: [
          "Modular architecture",
          "SEO and performance",
          "Accessibility",
          "CI/CD",
          "Vercel and deployment",
        ],
      },
      es: {
        category: "Calidad & entrega",
        items: [
          "Arquitectura modular",
          "SEO y performance",
          "Accesibilidad",
          "CI/CD",
          "Vercel y despliegue",
        ],
      },
    },
  },
];

export function getStackCategories(locale: Locale): StackCategory[] {
  return stackSources.map((source) => localize(source, locale));
}
