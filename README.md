# Portafolio — Joshua Williams

Portafolio profesional construido con **Next.js (App Router)**, **TypeScript** y **Tailwind CSS v4**, pensado para despliegue en **Vercel** y evolución del contenido sin reescribir la base.

## Arquitectura (resumen)

| Área | Ubicación | Propósito |
|------|-----------|-----------|
| Páginas y metadata | `src/app/` | Rutas por idioma (`[lang]/`), SEO, `robots.ts`, `sitemap.ts` |
| Idiomas (i18n) | `src/i18n/` | Configuración de idiomas y diccionarios de UI (`en.ts`, `es.ts`) |
| Secciones | `src/components/sections/` | Hero, Sobre mí, Stack, Proyectos, etc. |
| Layout | `src/components/layout/` | Cabecera, pie |
| UI reutilizable | `src/components/ui/` | Botones, cards, contenedor |
| Datos editables | `src/data/` | Perfil, proyectos, certificados (fuente única de verdad) |
| Utilidades | `src/lib/` | `cn()`, URL canónica del sitio |
| Configuración de navegación | `src/config/` | Enlaces del menú |

**Decisiones clave**

- **Datos en TypeScript** (`src/data/`): tipado fuerte, sin CMS de momento; puedes migrar a CMS o MDX más adelante sin tocar la UI.
- **Tema**: `next-themes` con clase `.dark` en `<html>` y tokens CSS en `globals.css` para un modo claro/oscuro coherente.
- **Idiomas**: el sitio abre en **inglés** (`/`) y tiene un botón en la cabecera para pasar a **español** (`/es`). Cada idioma es una página estática con su `<html lang>`, metadata y `hreflang`. El botón conserva la sección (`#hash`) al cambiar. `/` se sirve internamente desde `/en` (ver `rewrites`/`redirects` en `next.config.ts`).
- **SEO**: `generateMetadata` por idioma en `src/app/[lang]/layout.tsx`, `PersonJsonLd` (JSON-LD), `sitemap.xml` (con alternates por idioma) y `robots.txt` generados.
- **URL canónica**: `getSiteUrl()` en `src/lib/site.ts` usa `NEXT_PUBLIC_SITE_URL`, o `VERCEL_URL` en preview/producción, o `localhost` en desarrollo.

## Estructura de carpetas

```
src/
  app/
    [lang]/
      layout.tsx
      page.tsx
    globals.css
    robots.ts
    sitemap.ts
  i18n/
    config.ts
    dictionary.ts
    en.ts
    es.ts
    localize.ts
  components/
    json-ld/
    layout/
    providers/
    sections/
    ui/
  config/
    site-nav.ts
  data/
    certificates.ts
    experience.ts
    index.ts
    profile.ts
    projects.ts
    services.ts
    stack.ts
    types.ts
  lib/
    site.ts
    utils.ts
```

## Contenido que debes editar tú

Todo texto visible existe en **inglés y español**: en `src/data/*` cada ítem tiene un bloque `copy: { en, es }` (edita ambos idiomas juntos), y los textos de interfaz (títulos de sección, botones, menú) están en `src/i18n/en.ts` y `src/i18n/es.ts`. TypeScript avisa si a `es.ts` le falta una clave que existe en `en.ts`.

1. **`src/data/profile.ts`** — bio, ubicación (`[PLACEHOLDER_*]`), disponibilidad.
2. **`src/data/projects.ts`** — textos, enlaces y stack por proyecto.
3. **`src/data/certificates.ts`** — certificaciones Cursor u otras; añade `url` cuando tengas el enlace o PDF público.
4. **`src/data/experience.ts`** y **`src/data/stack.ts`** — experiencia y tecnologías.
5. **`src/i18n/en.ts` / `src/i18n/es.ts`** — textos de la interfaz.
6. **`.env.local`** (opcional) — copia de `.env.example` y define `NEXT_PUBLIC_SITE_URL` con tu dominio final.

## Desarrollo local

Requisitos: Node.js 20+ recomendado.

```bash
cd joshua-williams-portfolio
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

Otros comandos:

```bash
npm run build   # build de producción
npm run start   # sirve el build (tras build)
npm run lint    # ESLint
```

## Deploy en Vercel

1. Sube el repo a GitHub (raíz del proyecto = carpeta `joshua-williams-portfolio` o renómbrala como prefieras).
2. En [Vercel](https://vercel.com): **Add New Project** → importa el repositorio.
3. Framework: Next.js (detectado automáticamente). **Build command**: `npm run build`. **Output**: por defecto está bien.
4. **Environment variables**: añade `NEXT_PUBLIC_SITE_URL` con tu URL definitiva (por ejemplo `https://tu-dominio.com` o la URL de Vercel `https://tu-proyecto.vercel.app`) para metadata, Open Graph y JSON-LD coherentes.
5. Deploy.

## Dominio personalizado (después)

1. En el proyecto de Vercel: **Settings → Domains** → añade tu dominio y sigue las instrucciones de DNS (registro `A`/`CNAME` según indique Vercel).
2. Actualiza `NEXT_PUBLIC_SITE_URL` al dominio definitivo y vuelve a desplegar.
3. Opcional: en tu registrador, redirige `www` al dominio canónico o viceversa, según prefieras.

## Imagen Open Graph (opcional)

Puedes añadir `src/app/opengraph-image.tsx` o un archivo estático `opengraph-image.png` en `app/`; Next.js lo enlazará automáticamente. Mientras tanto, los metadatos en `src/app/[lang]/layout.tsx` ya definen título y descripción.

## Licencia

Uso personal del portafolio; ajusta la licencia si publicas plantilla o código reutilizable.
