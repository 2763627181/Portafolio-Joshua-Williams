import type { Project } from "@/data/types";
import type { Dictionary } from "@/i18n/dictionary";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProjectCard } from "@/components/ui/project-card";

export function ProjectsSection({
  projects,
  dict,
}: {
  projects: Project[];
  dict: Dictionary["projects"];
}) {
  return (
    <section id="projects" className="scroll-mt-24 py-20 sm:py-24">
      <Container>
        <SectionHeading
          className="mb-12 max-w-3xl"
          eyebrow={dict.eyebrow}
          title={dict.title}
          description={dict.description}
        />
        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              labels={dict.card}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
