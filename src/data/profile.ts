import type { Locale } from "@/i18n/config";
import { localize } from "@/i18n/localize";
import type { Profile, ProfileSource } from "./types";

/** Perfil central — edita aquí nombre, bio y enlaces (texto en `copy`, por idioma). */
const profileSource: ProfileSource = {
  name: "Joshua Williams",
  email: "joshuasteven486@gmail.com",
  github: "https://github.com/2763627181",
  linkedin: "https://www.linkedin.com/in/joshua-williams-ortiz-8086aa288/",
  copy: {
    en: {
      role: "Full Stack Developer",
      bio: "I build complete web products: clear interfaces, solid APIs and reliable deployments. I work with teams and clients to turn ambiguous requirements into maintainable software, with a focus on performance, accessibility and architecture that scales.",
      tagline:
        "Full stack developer with experience in business platforms, integrations and high-quality user experiences.",
      location: "Santo Domingo Oeste, Dominican Republic",
      availability:
        "Open to select projects and ambitious technical collaborations.",
    },
    es: {
      role: "Desarrollador Full Stack",
      bio: "Construyo productos web completos: interfaces claras, APIs sólidas y despliegues confiables. Trabajo con equipos y clientes para convertir requisitos ambiguos en software mantenible, con foco en rendimiento, accesibilidad y arquitectura que escala.",
      tagline:
        "Full stack con experiencia en plataformas de negocio, integraciones y experiencias de usuario de alto nivel.",
      location: "Santo Domingo Oeste, República Dominicana",
      availability:
        "Abierto a proyectos selectos y colaboraciones técnicas ambiciosas.",
    },
  },
};

export function getProfile(locale: Locale): Profile {
  return localize(profileSource, locale);
}
