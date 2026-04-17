import type { StackCategory } from "./types";

/** Agrupa tecnologías por capa — amplía o recorta según tu stack real. */
export const stackCategories: StackCategory[] = [
  {
    category: "Frontend",
    items: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Animaciones y UX",
    ],
  },
  {
    category: "Backend & datos",
    items: [
      "Node.js",
      "APIs REST",
      "Supabase",
      "Autenticación y autorización",
      "Modelado de datos",
    ],
  },
  {
    category: "Calidad & entrega",
    items: [
      "Arquitectura modular",
      "SEO y performance",
      "Accesibilidad",
      "CI/CD",
      "Vercel y despliegue",
    ],
  },
];
