import { profile } from "@/data/profile";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ButtonLink } from "@/components/ui/button-link";

export function ContactSection() {
  return (
    <section id="contacto" className="scroll-mt-24 py-20 sm:py-24">
      <Container>
        <div className="border-border from-accent/15 via-background to-background relative overflow-hidden rounded-3xl border bg-gradient-to-br p-10 sm:p-14">
          <div
            className="pointer-events-none absolute -right-20 top-0 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl"
            aria-hidden
          />
          <SectionHeading
            align="center"
            eyebrow="Contacto"
            title="¿Tienes un producto que escalar o un equipo al que sumar un full stack?"
            description="Escríbeme con contexto del proyecto, stack y ventana temporal. Respondo con honestidad sobre encaje, alcance y siguiente paso."
          />
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <ButtonLink
              href={`mailto:${profile.email}?subject=Contacto%20desde%20portafolio`}
              variant="primary"
              external
              className="min-w-[200px]"
            >
              Enviar email
            </ButtonLink>
            <ButtonLink href={profile.linkedin} variant="secondary" external>
              LinkedIn
            </ButtonLink>
            <ButtonLink href={profile.github} variant="ghost" external>
              GitHub
            </ButtonLink>
          </div>
          <p className="text-muted mx-auto mt-8 max-w-xl text-center text-sm">
            Si más adelante quieres formulario con backend (Resend, Server Actions,
            etc.), esta sección ya está aislada para sustituir el CTA sin rediseñar la
            página.
          </p>
        </div>
      </Container>
    </section>
  );
}
