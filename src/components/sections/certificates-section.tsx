import { certificateItems } from "@/data/certificates";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function CertificatesSection() {
  return (
    <section
      id="certificaciones"
      className="scroll-mt-24 border-border border-t bg-zinc-50/80 py-20 dark:bg-zinc-950/40 sm:py-24"
    >
      <Container>
        <SectionHeading
          className="mb-12"
          eyebrow="Certificaciones"
          title="Formación continua"
          description="Espacio dedicado a certificaciones (incluidas las de Cursor). Sustituye los placeholders en src/data/certificates.ts y enlaza PDFs o credenciales cuando las tengas."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {certificateItems.map((c) => (
            <article
              key={c.id}
              className="border-border bg-surface/80 flex flex-col rounded-2xl border p-6"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-accent text-xs font-semibold uppercase tracking-wide">
                    {c.issuer}
                  </p>
                  <h3 className="text-foreground mt-1 text-lg font-semibold tracking-tight">
                    {c.title}
                  </h3>
                </div>
                <span className="text-muted shrink-0 text-xs font-medium">
                  {c.completedAt}
                </span>
              </div>
              {c.notes ? (
                <p className="text-muted mt-3 text-sm">{c.notes}</p>
              ) : null}
              <div className="mt-6">
                {c.url ? (
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-accent/80 text-sm font-medium underline-offset-4 hover:underline"
                  >
                    Ver credencial
                  </a>
                ) : (
                  <p className="text-muted text-sm">
                    <span className="text-accent font-medium">Pendiente:</span> añade{" "}
                    <code className="text-foreground/80 text-xs">url</code> en los datos
                    cuando tengas el enlace público o el PDF alojado.
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
