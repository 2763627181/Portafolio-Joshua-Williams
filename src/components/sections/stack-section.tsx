import { stackCategories } from "@/data/stack";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function StackSection() {
  return (
    <section id="stack" className="scroll-mt-24 border-border border-y bg-zinc-50/80 py-20 dark:bg-zinc-950/40 sm:py-24">
      <Container>
        <SectionHeading
          className="mb-12"
          eyebrow="Stack"
          title="Tecnologías y disciplinas"
          description="Un stack moderno centrado en TypeScript, con énfasis en arquitectura limpia, DX y resultados en producción."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {stackCategories.map((group) => (
            <div
              key={group.category}
              className="border-border bg-surface/80 flex flex-col rounded-2xl border p-6 shadow-sm"
            >
              <h3 className="text-foreground text-lg font-semibold tracking-tight">
                {group.category}
              </h3>
              <ul className="text-muted mt-4 space-y-2.5 text-sm">
                {group.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-accent" aria-hidden>
                      ·
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
