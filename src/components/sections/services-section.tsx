import type { ServiceItem } from "@/data/types";
import type { Dictionary } from "@/i18n/dictionary";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function ServicesSection({
  items,
  dict,
}: {
  items: ServiceItem[];
  dict: Dictionary["services"];
}) {
  return (
    <section id="services" className="scroll-mt-24 py-20 sm:py-24">
      <Container>
        <SectionHeading
          className="mb-12"
          eyebrow={dict.eyebrow}
          title={dict.title}
          description={dict.description}
        />
        <div className="grid gap-6 sm:grid-cols-2">
          {items.map((s) => (
            <div
              key={s.id}
              className="group border-border bg-surface/50 hover:border-accent/25 relative rounded-2xl border p-6 transition"
            >
              <div className="bg-accent/10 text-accent mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl text-sm font-bold">
                {s.title.slice(0, 1)}
              </div>
              <h3 className="text-foreground text-lg font-semibold">{s.title}</h3>
              <p className="text-muted mt-3 text-sm leading-relaxed">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
