import type { Localized } from "@/i18n/config";
import type { Resolved } from "@/i18n/localize";

/*
 * Cada entidad tiene una "fuente" (`*Source`) con los campos que no cambian por
 * idioma y un bloque `copy` con el texto en cada idioma. El tipo resuelto
 * (Project, ExperienceItem…) es lo que reciben los componentes.
 */

export interface ProfileCopy {
  role: string;
  bio: string;
  tagline: string;
  location: string;
  availability: string;
}

export interface ProfileSource {
  name: string;
  email: string;
  github: string;
  linkedin: string;
  copy: Localized<ProfileCopy>;
}

export type Profile = Resolved<ProfileSource>;

export type ProjectLinkType = "live" | "repo" | "case";

export interface ProjectLink {
  href: string;
  type: ProjectLinkType;
}

export interface ProjectCopy {
  subtitle: string;
  description: string;
  problem: string;
  value: string;
  stack: string[];
}

export interface ProjectSource {
  id: string;
  title: string;
  links: ProjectLink[];
  featured?: boolean;
  /** Clave visual para el degradado del thumbnail (sin imagen externa). */
  accent: "cyan" | "emerald" | "violet" | "amber" | "rose" | "sky";
  copy: Localized<ProjectCopy>;
}

export type Project = Resolved<ProjectSource>;

export interface ExperienceCopy {
  title: string;
  period: string;
  summary: string;
  highlights: string[];
}

export interface ExperienceSource {
  id: string;
  copy: Localized<ExperienceCopy>;
}

export type ExperienceItem = Resolved<ExperienceSource>;

export interface ServiceCopy {
  title: string;
  description: string;
}

export interface ServiceSource {
  id: string;
  copy: Localized<ServiceCopy>;
}

export type ServiceItem = Resolved<ServiceSource>;

export interface CertificateCopy {
  title: string;
  notes?: string;
}

export interface CertificateSource {
  id: string;
  issuer: string;
  /** ISO date o texto libre, ej. "2025-03" */
  completedAt: string;
  /** URL al certificado PDF o página; vacío = pendiente de enlazar */
  url?: string;
  copy: Localized<CertificateCopy>;
}

export type CertificateItem = Resolved<CertificateSource>;

export interface StackCopy {
  category: string;
  items: string[];
}

export interface StackSource {
  id: string;
  copy: Localized<StackCopy>;
}

export type StackCategory = Resolved<StackSource>;
