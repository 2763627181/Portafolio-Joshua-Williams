import type { Locale } from "@/i18n/config";
import { localize } from "@/i18n/localize";
import type { ServiceItem, ServiceSource } from "./types";

const serviceSources: ServiceSource[] = [
  {
    id: "svc-1",
    copy: {
      en: {
        title: "Web applications and dashboards",
        description:
          "Products built with Next.js/React: routing, state, remote data and fast experiences on desktop and mobile.",
      },
      es: {
        title: "Aplicaciones web y paneles",
        description:
          "Productos con Next.js/React: rutas, estado, datos remotos y experiencias rápidas en desktop y móvil.",
      },
    },
  },
  {
    id: "svc-2",
    copy: {
      en: {
        title: "APIs and integrations",
        description:
          "API contract design, authentication, persistence and connections to third-party services.",
      },
      es: {
        title: "APIs e integraciones",
        description:
          "Diseño de contratos de API, autenticación, persistencia y conexión con servicios de terceros.",
      },
    },
  },
  {
    id: "svc-3",
    copy: {
      en: {
        title: "Architecture and maintainability",
        description:
          "Clear folder structure, strong typing, reusable components and documented decisions for teams.",
      },
      es: {
        title: "Arquitectura y mantenibilidad",
        description:
          "Estructura de carpetas clara, tipado fuerte, componentes reutilizables y decisiones documentadas para equipos.",
      },
    },
  },
  {
    id: "svc-4",
    copy: {
      en: {
        title: "Performance, SEO and accessibility",
        description:
          "Metadata, Core Web Vitals, semantic HTML and accessible patterns to reach more users with less friction.",
      },
      es: {
        title: "Performance, SEO y accesibilidad",
        description:
          "Metadata, Core Web Vitals, semántica HTML y patrones accesibles para llegar a más usuarios con menos fricción.",
      },
    },
  },
];

export function getServiceItems(locale: Locale): ServiceItem[] {
  return serviceSources.map((source) => localize(source, locale));
}
