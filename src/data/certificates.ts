import type { Locale } from "@/i18n/config";
import { localize } from "@/i18n/localize";
import type { CertificateItem, CertificateSource } from "./types";

const certificateSources: CertificateSource[] = [
  {
    id: "cert-indotel-fullstack",
    issuer: "INDOTEL · BID · Cymetria (Talento Digital)",
    completedAt: "2026-01",
    url: "/certificates/desarrollo-web-full-stack-indotel.pdf",
    copy: {
      en: {
        title: "Full Stack Web Development — Intermediate Level",
        notes: "80 hours. Full stack web development training program.",
      },
      es: {
        title: "Desarrollo Web Full Stack — Nivel Intermedio",
        notes: "80 horas. Programa de formación en desarrollo web full stack.",
      },
    },
  },
  {
    id: "cert-coursera-swe",
    issuer: "Coursera · IBM",
    completedAt: "2025-11",
    url: "https://www.coursera.org/verify/FFCC8P8HR7OX",
    copy: {
      en: {
        title: "Introduction to Software Engineering",
        notes: "Verifiable credential on Coursera.",
      },
      es: {
        title: "Introduction to Software Engineering",
        notes: "Credencial verificable en Coursera.",
      },
    },
  },
  {
    id: "cert-coursera-it",
    issuer: "Coursera · IBM",
    completedAt: "2026-01",
    url: "https://www.coursera.org/verify/HTZXWHKJ1M49",
    copy: {
      en: { title: "Information Technology (IT) Fundamentals for Everyone" },
      es: { title: "Information Technology (IT) Fundamentals for Everyone" },
    },
  },
  {
    id: "cert-coursera-agile",
    issuer: "Coursera · University of Minnesota",
    completedAt: "2026-01",
    url: "https://www.coursera.org/verify/46QQOE2DHTPJ",
    copy: {
      en: { title: "Agile Software Development" },
      es: { title: "Agile Software Development" },
    },
  },
  {
    id: "cert-cpe-logica",
    issuer: "Capacítate para el Empleo",
    completedAt: "2026-02",
    url: "https://capacitateparaelempleo.org/verifica/0d5ea9a2-4bf4-4881-a49d-43ff38fb6b50/2a55f562-7a7e-4900-99c2-35338d3ca3a3",
    copy: {
      en: {
        title: "Programming Logic",
        notes: "60 equivalent hours. Score: 8.38.",
      },
      es: {
        title: "Lógica de programación",
        notes: "60 horas equivalentes. Puntaje: 8.38.",
      },
    },
  },
  {
    id: "cert-cpe-intro",
    issuer: "Capacítate para el Empleo",
    completedAt: "2026-02",
    url: "https://capacitateparaelempleo.org/verifica/0d5ea9a2-4bf4-4881-a49d-43ff38fb6b50/29c60c3a-1e17-4917-96f0-c1f655c92821",
    copy: {
      en: {
        title: "Introduction to Programming",
        notes: "28 equivalent hours. Score: 8.0.",
      },
      es: {
        title: "Introducción a la programación",
        notes: "28 horas equivalentes. Puntaje: 8.0.",
      },
    },
  },
  {
    id: "cert-cpe-paradigma",
    issuer: "Capacítate para el Empleo",
    completedAt: "2026-02",
    url: "https://capacitateparaelempleo.org/verifica/0d5ea9a2-4bf4-4881-a49d-43ff38fb6b50/48de1b5e-bdad-4679-b508-fd92a8b55261",
    copy: {
      en: {
        title: "Programming Paradigm (Object-Oriented)",
        notes: "40 equivalent hours. Score: 9.2.",
      },
      es: {
        title: "Paradigma de programación (orientado a objetos)",
        notes: "40 horas equivalentes. Puntaje: 9.2.",
      },
    },
  },
  {
    id: "cert-cpe-programador",
    issuer: "Capacítate para el Empleo",
    completedAt: "2026-02",
    url: "https://capacitateparaelempleo.org/verifica/0d5ea9a2-4bf4-4881-a49d-43ff38fb6b50/df688f86-076b-44d2-9dea-67ccb110bf4c",
    copy: {
      en: {
        title: "Programmer (Object-Oriented)",
        notes: "82 equivalent hours. Score: 8.85.",
      },
      es: {
        title: "Programador (orientado a objetos)",
        notes: "82 horas equivalentes. Puntaje: 8.85.",
      },
    },
  },
];

export function getCertificateItems(locale: Locale): CertificateItem[] {
  return certificateSources.map((source) => localize(source, locale));
}
