import type { NextConfig } from "next";
import { defaultLocale } from "./src/i18n/config";

const nextConfig: NextConfig = {
  /** Evita ambigüedad cuando existen lockfiles fuera de esta carpeta. */
  turbopack: {
    root: process.cwd(),
  },
  /**
   * El idioma por defecto (inglés) vive en `/` sin prefijo: se sirve internamente
   * desde `/en` y `/en` redirige a `/` para no duplicar URLs.
   */
  async rewrites() {
    return [{ source: "/", destination: `/${defaultLocale}` }];
  },
  async redirects() {
    return [
      { source: `/${defaultLocale}`, destination: "/", permanent: false },
    ];
  },
};

export default nextConfig;
