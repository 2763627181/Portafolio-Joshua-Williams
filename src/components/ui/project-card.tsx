"use client";

import { motion } from "framer-motion";
import type { Project } from "@/data/types";
import { cn } from "@/lib/utils";
import { ButtonLink } from "@/components/ui/button-link";

const accentStyles: Record<Project["accent"], string> = {
  cyan: "from-cyan-500/25 via-cyan-400/10 to-transparent",
  emerald: "from-emerald-500/25 via-emerald-400/10 to-transparent",
  violet: "from-violet-500/25 via-violet-400/10 to-transparent",
  amber: "from-amber-500/25 via-amber-400/10 to-transparent",
  rose: "from-rose-500/25 via-rose-400/10 to-transparent",
  sky: "from-sky-500/25 via-sky-400/10 to-transparent",
};

export function ProjectCard({
  project,
  index = 0,
}: {
  project: Project;
  index?: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.05 }}
      className="border-border bg-surface/60 group hover:border-accent/30 relative flex h-full flex-col overflow-hidden rounded-2xl border shadow-sm backdrop-blur-sm transition"
    >
      <div
        className={cn(
          "relative h-36 bg-gradient-to-br",
          accentStyles[project.accent],
        )}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.12),transparent_45%)]" />
        <div className="text-foreground absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
          <div>
            <p className="text-muted text-xs font-medium uppercase tracking-wider">
              {project.subtitle}
            </p>
            <h3 className="mt-1 text-xl font-semibold tracking-tight">
              {project.title}
            </h3>
          </div>
          {project.featured ? (
            <span className="bg-background/70 text-accent border-border rounded-full border px-2 py-1 text-[10px] font-semibold uppercase tracking-wide">
              Destacado
            </span>
          ) : null}
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <p className="text-foreground text-sm leading-relaxed">{project.description}</p>
        <div className="space-y-2 text-sm">
          <p>
            <span className="text-muted font-medium">Problema: </span>
            <span className="text-foreground/90">{project.problem}</span>
          </p>
          <p>
            <span className="text-muted font-medium">Impacto: </span>
            <span className="text-foreground/90">{project.value}</span>
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="border-border bg-background/60 text-muted rounded-full border px-2.5 py-1 text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-auto flex flex-wrap gap-2 pt-2">
          {project.links.map((link) => (
            <ButtonLink
              key={link.href + link.type}
              href={link.href}
              variant={link.type === "live" ? "primary" : "secondary"}
              external
              className="text-xs"
            >
              {link.label}
            </ButtonLink>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
