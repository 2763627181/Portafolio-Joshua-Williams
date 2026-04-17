# Portafolio — Joshua Williams

Portafolio profesional construido con **Next.js (App Router)**, **TypeScript** y **Tailwind CSS v4**, pensado para despliegue en **Vercel** y evolución del contenido sin reescribir la base.

## Arquitectura (resumen)

| Área | Ubicación | Propósito |
|------|-----------|-----------|
| Páginas y metadata | `src/app/` | Rutas, `layout.tsx`, SEO, `robots.ts`, `sitemap.ts` |
| Secciones | `src/components/sections/` | Hero, Sobre mí, Stack, Proyectos, etc. |
| Layout | `src/components/layout/` | Cabecera, pie |
| UI reutilizable | `src/components/ui/` | Botones, cards, contenedor |
| Datos editables | `src/data/` | Perfil, proyectos, certificados (fuente única de verdad) |
| Utilidades | `src/lib/` | `cn()`, URL canónica del sitio |
| Configuración de navegación | `src/config/` | Enlaces del menú |

**Decisiones clave**

- **Datos en TypeScript** (`src/data/`): tipado fuerte, sin CMS de momento; puedes migrar a CMS o MDX más adelante sin tocar la UI.
- **Tema**: `next-themes` con clase `.dark` en `<html>` y tokens CSS en `globals.css` para un modo claro/oscuro coherente.
- **SEO**: `metadata` central en `layout.tsx`, `PersonJsonLd` (JSON-LD), `sitemap.xml` y `robots.txt` generados.
- **URL canónica**: `getSiteUrl()` en `src/lib/site.ts` usa `NEXT_PUBLIC_SITE_URL`, o `VERCEL_URL` en preview/producción, o `localhost` en desarrollo.

## Estructura de carpetas

```
src/
  app/
    globals.css
    layout.tsx
    page.tsx
    robots.ts
    sitemap.ts
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

1. **`src/data/profile.ts`** — bio, ubicación (`[PLACEHOLDER_*]`), disponibilidad.
2. **`src/data/projects.ts`** — textos, enlaces y stack por proyecto.
3. **`src/data/certificates.ts`** — certificaciones Cursor u otras; añade `url` cuando tengas el enlace o PDF público.
4. **`src/data/experience.ts`** y **`src/data/stack.ts`** — experiencia y tecnologías.
5. **`.env.local`** (opcional) — copia de `.env.example` y define `NEXT_PUBLIC_SITE_URL` con tu dominio final.

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

Puedes añadir `src/app/opengraph-image.tsx` o un archivo estático `opengraph-image.png` en `app/`; Next.js lo enlazará automáticamente. Mientras tanto, los metadatos en `layout.tsx` ya definen título y descripción.

## Licencia

Uso personal del portafolio; ajusta la licencia si publicas plantilla o código reutilizable.
