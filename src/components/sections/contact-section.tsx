import type { Profile } from "@/data/types";
import type { Dictionary } from "@/i18n/dictionary";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ButtonLink } from "@/components/ui/button-link";

export function ContactSection({
  profile,
  dict,
}: {
  profile: Profile;
  dict: Dictionary["contact"];
}) {
  return (
    <section id="contact" className="scroll-mt-24 py-20 sm:py-24">
      <Container>
        <div className="border-border from-accent/15 via-background to-background relative overflow-hidden rounded-3xl border bg-gradient-to-br p-10 sm:p-14">
          <div
            className="pointer-events-none absolute -right-20 top-0 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl"
            aria-hidden
          />
          <SectionHeading
            align="center"
            eyebrow={dict.eyebrow}
            title={dict.title}
            description={dict.description}
          />
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <ButtonLink
              href={`mailto:${profile.email}?subject=${encodeURIComponent(dict.emailSubject)}`}
              variant="primary"
              external
              className="min-w-[200px]"
            >
              {dict.sendEmail}
            </ButtonLink>
            <ButtonLink href={profile.linkedin} variant="secondary" external>
              LinkedIn
            </ButtonLink>
            <ButtonLink href={profile.github} variant="ghost" external>
              GitHub
            </ButtonLink>
          </div>
          <p className="text-muted mx-auto mt-8 max-w-xl text-center text-sm">
            {dict.note}
          </p>
        </div>
      </Container>
    </section>
  );
}
