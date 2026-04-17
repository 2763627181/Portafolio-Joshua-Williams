import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /** Evita ambigüedad cuando existen lockfiles fuera de esta carpeta. */
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
