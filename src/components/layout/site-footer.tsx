import Link from "next/link";
import { siteNav } from "@/config/site-nav";
import { profile } from "@/data/profile";
import { Container } from "@/components/ui/container";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-border bg-surface/40 border-t">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="space-y-3">
            <p className="text-foreground text-lg font-semibold tracking-tight">
              {profile.name}
            </p>
            <p className="text-muted max-w-sm text-sm leading-relaxed">
              {profile.role}. Desarrollo full stack para productos web con foco en
              claridad, rendimiento y entrega continua.
            </p>
          </div>
          <div>
            <p className="text-foreground mb-3 text-sm font-semibold">Navegación</p>
            <ul className="space-y-2">
              {siteNav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-muted hover:text-foreground text-sm transition"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-foreground mb-3 text-sm font-semibold">Contacto</p>
            <ul className="text-muted space-y-2 text-sm">
              <li>
                <a
                  className="hover:text-foreground transition"
                  href={`mailto:${profile.email}`}
                >
                  {profile.email}
                </a>
              </li>
              <li>
                <a
                  className="hover:text-foreground transition"
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  className="hover:text-foreground transition"
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-border mt-12 flex flex-col gap-3 border-t pt-8 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between dark:text-zinc-400">
          <p>
            © {year} {profile.name}. Todos los derechos reservados.
          </p>
          <p className="flex gap-4">
            <Link className="hover:text-foreground transition" href="#inicio">
              Volver arriba
            </Link>
          </p>
        </div>
      </Container>
    </footer>
  );
}
