import { profile } from "@/data/profile";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function AboutSection() {
  return (
    <section id="sobre-mi" className="scroll-mt-24 py-20 sm:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <SectionHeading
            eyebrow="Sobre mí"
            title="De requisitos difusos a software que se sostiene en producción"
            description="Trabajo con equipos y stakeholders para traducir necesidades de negocio en experiencias web rápidas, accesibles y mantenibles. Me importa el detalle sin perder de vista el impacto medible."
          />
          <div className="border-border bg-surface/50 space-y-6 rounded-2xl border p-8">
            <p className="text-foreground text-base leading-relaxed sm:text-lg">
              {profile.bio}
            </p>
            <dl className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl bg-background/60 p-4">
                <dt className="text-muted text-xs font-semibold uppercase tracking-wide">
                  Ubicación
                </dt>
                <dd className="text-foreground mt-1 text-sm font-medium">
                  {profile.location}
                </dd>
              </div>
              <div className="rounded-xl bg-background/60 p-4">
                <dt className="text-muted text-xs font-semibold uppercase tracking-wide">
                  Rol
                </dt>
                <dd className="text-foreground mt-1 text-sm font-medium">
                  {profile.role}
                </dd>
              </div>
            </dl>
            <p className="text-muted border-border border-t pt-4 text-xs leading-relaxed">
              Formación continua en desarrollo de software, ingeniería ágil y
              programación orientada a objetos, complementada con proyectos
              reales desplegados en producción.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
