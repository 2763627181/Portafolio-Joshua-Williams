import { projects } from "@/data/projects";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProjectCard } from "@/components/ui/project-card";

export function ProjectsSection() {
  return (
    <section id="proyectos" className="scroll-mt-24 py-20 sm:py-24">
      <Container>
        <SectionHeading
          className="mb-12 max-w-3xl"
          eyebrow="Proyectos"
          title="Productos reales, problemas reales"
          description="Selección de trabajos con impacto en conversión, operaciones o confianza del usuario. Cada bloque resume el contexto, el reto y el valor entregado."
        />
        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
