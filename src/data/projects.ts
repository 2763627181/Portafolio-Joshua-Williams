import type { Locale } from "@/i18n/config";
import { localize } from "@/i18n/localize";
import type { Project, ProjectSource } from "./types";

/**
 * Proyectos destacados — URLs y copy basados en sitios públicos.
 * Ajusta stack/repos si difieren en tu implementación real.
 * Los enlaces se etiquetan según su `type` (ver `projects.card.links` en el diccionario).
 */
const projectSources: ProjectSource[] = [
  {
    id: "highlight-tax",
    title: "Highlight Tax Services",
    links: [
      { href: "https://www.highlighttax.com/", type: "live" },
      {
        href: "https://github.com/2763627181/highlight-tax-services",
        type: "repo",
      },
    ],
    featured: true,
    accent: "cyan",
    copy: {
      en: {
        subtitle: "Tax preparation services (U.S.)",
        description:
          "Conversion-focused site for tax season: personal and business services, bilingual support and clear contact channels (form, phone, WhatsApp).",
        problem:
          "Conveying credibility and tax-season urgency without sacrificing clarity or trust around sensitive data.",
        value:
          "Services structured by segment, results-oriented messaging and a consistent mobile experience to capture leads.",
        stack: [
          "Next.js",
          "React",
          "Conversion UX",
          "SEO",
          "Contact integration",
        ],
      },
      es: {
        subtitle: "Servicios de preparación de impuestos (EE. UU.)",
        description:
          "Sitio orientado a conversión para temporada fiscal: servicios personales y de negocio, atención bilingüe y canales de contacto claros (formulario, teléfono, WhatsApp).",
        problem:
          "Comunicar credibilidad y urgencia de la temporada fiscal sin sacrificar claridad ni confianza en datos sensibles.",
        value:
          "Estructura de servicios por segmento, mensajes orientados a resultados y experiencia móvil consistente para captar leads.",
        stack: [
          "Next.js",
          "React",
          "UX conversión",
          "SEO",
          "Integración de contacto",
        ],
      },
    },
  },
  {
    id: "jamcob-electric",
    title: "JAMCOB Electric",
    links: [{ href: "https://www.jamcobelectric.com/", type: "live" }],
    featured: true,
    accent: "amber",
    copy: {
      en: {
        subtitle: "Electrical contractor (NYC and Westchester)",
        description:
          "Digital presence for a licensed contractor: residential and commercial services, social proof and clear paths to a quote.",
        problem:
          "Projecting technical authority and regulatory compliance while making it easy to get in touch fast in competitive markets.",
        value:
          "Service hierarchy, testimonials and repeated CTAs to request a quote; a foundation ready to grow in content.",
        stack: [
          "Next.js",
          "React",
          "Tailwind",
          "Local SEO",
          "Service-industry UI",
        ],
      },
      es: {
        subtitle: "Contratista eléctrico (NYC y Westchester)",
        description:
          "Presencia digital para contratista licenciado: servicios residenciales y comerciales, prueba social y rutas claras a cotización.",
        problem:
          "Transmitir autoridad técnica y cumplimiento normativo mientras se facilita el contacto rápido en mercados competitivos.",
        value:
          "Jerarquía de servicios, testimonios y CTAs repetidos para solicitar cotización; base preparada para crecer en contenido.",
        stack: [
          "Next.js",
          "React",
          "Tailwind",
          "SEO local",
          "UI sector servicios",
        ],
      },
    },
  },
  {
    id: "jhenson-supply",
    title: "Jhenson Supply",
    links: [{ href: "https://www.jhensonsupply.com/", type: "live" }],
    featured: true,
    accent: "rose",
    copy: {
      en: {
        subtitle: "Hair beauty distribution",
        description:
          "Catalog and brand for B2B/B2C distribution: value proposition, locations in Santo Domingo Este and channels to supply stores.",
        problem:
          "Presenting the catalog and brand trust in a visually demanding sector, with contact and location details easy to find.",
        value:
          "Premium product storytelling, catalog and location sections designed for conversion and in-person visits.",
        stack: ["Next.js", "React", "Narrative e-commerce", "SEO"],
      },
      es: {
        subtitle: "Distribución de belleza capilar",
        description:
          "Catálogo y marca para distribución B2B/B2C: propuesta de valor, ubicaciones en Santo Domingo Este y canales para suministrar tiendas.",
        problem:
          "Presentar catálogo y confianza de marca en un sector visualmente exigente, con información de contacto y ubicación accesible.",
        value:
          "Narrativa de producto premium, secciones de catálogo y ubicación pensadas para conversión y visitas presenciales.",
        stack: ["Next.js", "React", "E-commerce narrativo", "SEO"],
      },
    },
  },
  {
    id: "exentry",
    title: "Exentry",
    links: [{ href: "https://www.exentry.com.do/", type: "live" }],
    accent: "violet",
    copy: {
      en: {
        subtitle: "Visa and passport processing (DR → U.S.)",
        description:
          "Landing page and lead-capture flow for visa services: value proposition, transparent pricing, FAQ and trust before payment.",
        problem:
          "Reducing friction and doubts in a service with high financial and regulatory commitment.",
        value:
          "Service sections with pricing, social proof and calls to action aligned with the conversion funnel.",
        stack: ["Next.js", "React", "Forms", "Legal/financial UX"],
      },
      es: {
        subtitle: "Trámites de visa y pasaporte (RD → EE. UU.)",
        description:
          "Landing y flujo de captación para servicios de visado: propuesta de valor, precios transparentes, FAQ y confianza antes del pago.",
        problem:
          "Reducir fricción y dudas en un servicio de alto compromiso financiero y regulatorio.",
        value:
          "Secciones de servicios con precios, prueba social y llamados a la acción alineados con el embudo de conversión.",
        stack: ["Next.js", "React", "Formularios", "UX legal/financiera"],
      },
    },
  },
  {
    id: "elicar",
    title: "Prestamos App (Elicar)",
    links: [{ href: "https://www.elicar.dev/", type: "live" }],
    accent: "emerald",
    copy: {
      en: {
        subtitle: "Microfinance dashboard",
        description:
          "Application with Supabase authentication to manage companies, clients, loans and collections — an operational focus for finance teams.",
        problem:
          "Centralizing microfinance operations with secure access and repeatable workflows.",
        value:
          "A foundation to scale origination and collection processes with access control and consistent data.",
        stack: ["Next.js", "React", "Supabase", "Auth", "Data dashboard"],
      },
      es: {
        subtitle: "Panel de microfinanzas",
        description:
          "Aplicación con autenticación Supabase para gestión de empresas, clientes, préstamos y cobranza — enfoque operativo para equipos financieros.",
        problem:
          "Centralizar operaciones de microfinanzas con acceso seguro y flujos de trabajo repetibles.",
        value:
          "Base para escalar procesos de originación y cobranza con control de acceso y datos consistentes.",
        stack: ["Next.js", "React", "Supabase", "Auth", "Panel de datos"],
      },
    },
  },
  {
    id: "skydream-realty",
    title: "Sky Dream Realty",
    links: [{ href: "https://www.skydreamrealty.biz/", type: "live" }],
    accent: "sky",
    copy: {
      en: {
        subtitle: "Real estate — sustainable properties",
        description:
          "Brand and messaging for sustainability-focused properties; web presence oriented toward international positioning.",
        problem:
          "Communicating a distinctive value proposition in a highly competitive vertical.",
        value:
          "Clear brand messaging and a baseline to expand the catalog and real-estate SEO.",
        stack: ["Next.js", "React", "Web branding", "SEO"],
      },
      es: {
        subtitle: "Inmobiliaria — propiedades sostenibles",
        description:
          "Marca y mensaje para propiedades con enfoque de sostenibilidad; presencia web orientada a posicionamiento internacional.",
        problem:
          "Comunicar propuesta de valor distintiva en un vertical altamente competitivo.",
        value:
          "Mensaje claro de marca y línea base para expandir catálogo y SEO inmobiliario.",
        stack: ["Next.js", "React", "Branding web", "SEO"],
      },
    },
  },
];

export function getProjects(locale: Locale): Project[] {
  return projectSources.map((source) => localize(source, locale));
}

export function getFeaturedProjects(locale: Locale): Project[] {
  return getProjects(locale).filter((p) => p.featured);
}
