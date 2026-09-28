import type { ExperienceItem } from "@/data/types";
import type { Dictionary } from "@/i18n/dictionary";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function ExperienceSection({
  items,
  dict,
}: {
  items: ExperienceItem[];
  dict: Dictionary["experience"];
}) {
  return (
    <section id="experience" className="scroll-mt-24 border-border border-y py-20 sm:py-24">
      <Container>
        <SectionHeading
          className="mb-12"
          eyebrow={dict.eyebrow}
          title={dict.title}
          description={dict.description}
        />
        <div className="space-y-8">
          {items.map((item) => (
            <article
              key={item.id}
              className="border-border bg-surface/60 relative overflow-hidden rounded-2xl border p-8"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-foreground text-xl font-semibold tracking-tight">
                  {item.title}
                </h3>
                <p className="text-accent text-sm font-medium">{item.period}</p>
              </div>
              <p className="text-muted mt-4 text-sm leading-relaxed sm:text-base">
                {item.summary}
              </p>
              <ul className="text-foreground/90 mt-6 space-y-2 text-sm">
                {item.highlights.map((h) => (
                  <li key={h} className="flex gap-2">
                    <span className="text-accent mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-current" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
