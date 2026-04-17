import type { Project } from "./types";

/**
 * Proyectos destacados — URLs y copy basados en sitios públicos.
 * Ajusta stack/repos si difieren en tu implementación real.
 */
export const projects: Project[] = [
  {
    id: "highlight-tax",
    title: "Highlight Tax Services",
    subtitle: "Servicios de preparación de impuestos (EE. UU.)",
    description:
      "Sitio orientado a conversión para temporada fiscal: servicios personales y de negocio, atención bilingüe y canales de contacto claros (formulario, teléfono, WhatsApp).",
    problem:
      "Comunicar credibilidad y urgencia de la temporada fiscal sin sacrificar claridad ni confianza en datos sensibles.",
    value:
      "Estructura de servicios por segmento, mensajes orientados a resultados y experiencia móvil consistente para captar leads.",
    stack: ["Next.js", "React", "UX conversión", "SEO", "Integración de contacto"],
    links: [
      { label: "Ver proyecto", href: "https://www.highlighttax.com/", type: "live" },
      {
        label: "Ver código",
        href: "https://github.com/2763627181/highlight-tax-services",
        type: "repo",
      },
    ],
    featured: true,
    accent: "cyan",
  },
  {
    id: "jamcob-electric",
    title: "JAMCOB Electric",
    subtitle: "Contratista eléctrico (NYC y Westchester)",
    description:
      "Presencia digital para contratista licenciado: servicios residenciales y comerciales, prueba social y rutas claras a cotización.",
    problem:
      "Transmitir autoridad técnica y cumplimiento normativo mientras se facilita el contacto rápido en mercados competitivos.",
    value:
      "Jerarquía de servicios, testimonios y CTAs repetidos para solicitar cotización; base preparada para crecer en contenido.",
    stack: ["Next.js", "React", "Tailwind", "SEO local", "UI sector servicios"],
    links: [
      { label: "Ver proyecto", href: "https://www.jamcobelectric.com/", type: "live" },
    ],
    featured: true,
    accent: "amber",
  },
  {
    id: "jhenson-supply",
    title: "Jhenson Supply",
    subtitle: "Distribución de belleza capilar",
    description:
      "Catálogo y marca para distribución B2B/B2C: propuesta de valor, ubicaciones en Santo Domingo Este y canales para suministrar tiendas.",
    problem:
      "Presentar catálogo y confianza de marca en un sector visualmente exigente, con información de contacto y ubicación accesible.",
    value:
      "Narrativa de producto premium, secciones de catálogo y ubicación pensadas para conversión y visitas presenciales.",
    stack: ["Next.js", "React", "E-commerce narrativo", "SEO"],
    links: [
      { label: "Ver proyecto", href: "https://www.jhensonsupply.com/", type: "live" },
    ],
    featured: true,
    accent: "rose",
  },
  {
    id: "exentry",
    title: "Exentry",
    subtitle: "Trámites de visa y pasaporte (RD → EE. UU.)",
    description:
      "Landing y flujo de captación para servicios de visado: propuesta de valor, precios transparentes, FAQ y confianza antes del pago.",
    problem:
      "Reducir fricción y dudas en un servicio de alto compromiso financiero y regulatorio.",
    value:
      "Secciones de servicios con precios, prueba social y llamados a la acción alineados con el embudo de conversión.",
    stack: ["Next.js", "React", "Formularios", "UX legal/financiera"],
    links: [
      { label: "Ver proyecto", href: "https://www.exentry.com.do/", type: "live" },
    ],
    accent: "violet",
  },
  {
    id: "elicar",
    title: "Prestamos App (Elicar)",
    subtitle: "Panel de microfinanzas",
    description:
      "Aplicación con autenticación Supabase para gestión de empresas, clientes, préstamos y cobranza — enfoque operativo para equipos financieros.",
    problem:
      "Centralizar operaciones de microfinanzas con acceso seguro y flujos de trabajo repetibles.",
    value:
      "Base para escalar procesos de originación y cobranza con control de acceso y datos consistentes.",
    stack: ["Next.js", "React", "Supabase", "Auth", "Panel de datos"],
    links: [{ label: "Ver proyecto", href: "https://www.elicar.dev/", type: "live" }],
    accent: "emerald",
  },
  {
    id: "skydream-realty",
    title: "Sky Dream Realty",
    subtitle: "Inmobiliaria — propiedades sostenibles",
    description:
      "Marca y mensaje para propiedades con enfoque de sostenibilidad; presencia web orientada a posicionamiento internacional.",
    problem:
      "Comunicar propuesta de valor distintiva en un vertical altamente competitivo.",
    value:
      "Mensaje claro de marca y línea base para expandir catálogo y SEO inmobiliario.",
    stack: ["Next.js", "React", "Branding web", "SEO"],
    links: [
      { label: "Ver proyecto", href: "https://www.skydreamrealty.biz/", type: "live" },
    ],
    accent: "sky",
  },
];

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}
