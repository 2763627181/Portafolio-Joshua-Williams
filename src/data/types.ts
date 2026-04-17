export type ProjectLinkType = "live" | "repo" | "case";

export interface ProjectLink {
  label: string;
  href: string;
  type: ProjectLinkType;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  problem: string;
  value: string;
  stack: string[];
  links: ProjectLink[];
  featured?: boolean;
  /** Clave visual para el degradado del thumbnail (sin imagen externa). */
  accent: "cyan" | "emerald" | "violet" | "amber" | "rose" | "sky";
}

export interface ExperienceItem {
  id: string;
  title: string;
  period: string;
  summary: string;
  highlights: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  /** ISO date o texto libre, ej. "2025-03" */
  completedAt: string;
  /** URL al certificado PDF o página; vacío = pendiente de enlazar */
  url?: string;
  notes?: string;
}

export interface StackCategory {
  category: string;
  items: string[];
}
