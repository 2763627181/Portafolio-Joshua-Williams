import type { CertificateItem } from "./types";

/**
 * Certificaciones Cursor (u otras) — añade filas o enlaza PDFs cuando los tengas.
 * Deja url vacío si aún no hay enlace público.
 */
export const certificateItems: CertificateItem[] = [
  {
    id: "cert-placeholder-1",
    title: "[PLACEHOLDER_TÍTULO_CURSO_CURSOR]",
    issuer: "Cursor",
    completedAt: "[PLACEHOLDER_FECHA]",
    notes: "Reemplaza por el nombre exacto del certificado.",
  },
  {
    id: "cert-placeholder-2",
    title: "[PLACEHOLDER_OTRO_CERTIFICADO]",
    issuer: "Cursor",
    completedAt: "[PLACEHOLDER_FECHA]",
  },
];
