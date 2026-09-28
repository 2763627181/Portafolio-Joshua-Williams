import Link from "next/link";
import { siteNav } from "@/config/site-nav";
import type { Profile } from "@/data/types";
import type { Dictionary } from "@/i18n/dictionary";
import { Container } from "@/components/ui/container";

export function SiteFooter({
  profile,
  dict,
}: {
  profile: Profile;
  dict: Pick<Dictionary, "nav" | "footer">;
}) {
  const year = new Date().getFullYear();
  const { footer } = dict;

  return (
    <footer className="border-border bg-surface/40 border-t">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="space-y-3">
            <p className="text-foreground text-lg font-semibold tracking-tight">
              {profile.name}
            </p>
            <p className="text-muted max-w-sm text-sm leading-relaxed">
              {profile.role}. {footer.description}
            </p>
          </div>
          <div>
            <p className="text-foreground mb-3 text-sm font-semibold">
              {footer.navigation}
            </p>
            <ul className="space-y-2">
              {siteNav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-muted hover:text-foreground text-sm transition"
                  >
                    {dict.nav[item.key]}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-foreground mb-3 text-sm font-semibold">
              {footer.contact}
            </p>
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
            © {year} {profile.name}. {footer.rights}
          </p>
          <p className="flex gap-4">
            <Link className="hover:text-foreground transition" href="#home">
              {footer.backToTop}
            </Link>
          </p>
        </div>
      </Container>
    </footer>
  );
}
