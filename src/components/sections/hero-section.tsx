"use client";

import { motion } from "framer-motion";
import type { Profile } from "@/data/types";
import type { Dictionary } from "@/i18n/dictionary";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";

export function HeroSection({
  profile,
  dict,
}: {
  profile: Profile;
  dict: Dictionary["hero"];
}) {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-transparent"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden
      >
        <div className="bg-accent/10 absolute -left-32 top-0 h-72 w-72 rounded-full blur-3xl" />
        <div className="absolute -right-24 top-40 h-80 w-80 rounded-full bg-fuchsia-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-px w-[120%] -translate-x-1/2 bg-gradient-to-r from-transparent via-zinc-300/40 to-transparent dark:via-zinc-600/40" />
      </div>

      <Container className="py-20 sm:py-28 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-accent mb-4 text-xs font-semibold uppercase tracking-[0.25em]"
            >
              {dict.eyebrow}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="text-foreground text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl"
            >
              {profile.name}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-accent mt-3 text-lg font-medium sm:text-xl"
            >
              {profile.role}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-muted mt-6 max-w-xl text-base leading-relaxed sm:text-lg"
            >
              {profile.tagline}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <ButtonLink href="#projects" variant="primary">
                {dict.viewProjects}
              </ButtonLink>
              <ButtonLink href="#contact" variant="secondary">
                {dict.contact}
              </ButtonLink>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-foreground px-3 text-sm font-medium transition"
              >
                {dict.github}
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="border-border bg-surface/70 relative rounded-3xl border p-6 shadow-xl backdrop-blur-md"
          >
            <div className="border-border mb-4 flex items-center justify-between border-b pb-4">
              <div>
                <p className="text-muted text-xs font-medium uppercase tracking-wide">
                  {dict.focusLabel}
                </p>
                <p className="text-foreground mt-1 text-sm font-semibold">
                  {dict.focusTitle}
                </p>
              </div>
              <span className="border-border bg-background/80 rounded-full border px-3 py-1 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                {profile.availability}
              </span>
            </div>
            <ul className="space-y-3 text-sm leading-relaxed">
              {dict.points.map((point) => (
                <li key={point} className="flex gap-2">
                  <span className="text-accent mt-0.5">▹</span>
                  <span className="text-foreground/90">{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
