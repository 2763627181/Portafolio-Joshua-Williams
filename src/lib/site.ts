/**
 * URL canónica del sitio.
 * - Producción: define NEXT_PUBLIC_SITE_URL con tu dominio (p. ej. https://tudominio.com).
 * - Vercel: si no hay env, se usa VERCEL_URL automáticamente.
 * - Local: http://localhost:3000
 */
export function getSiteUrl(): string {
  const custom = process.env.NEXT_PUBLIC_SITE_URL;
  if (custom && !custom.includes("[PLACEHOLDER")) {
    return custom.replace(/\/$/, "");
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return "http://localhost:3000";
}
