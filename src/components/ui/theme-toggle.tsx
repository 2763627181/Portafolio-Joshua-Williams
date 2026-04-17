"use client";

import { useTheme } from "next-themes";
import { startTransition, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    startTransition(() => {
      setMounted(true);
    });
  }, []);

  return (
    <button
      type="button"
      className={cn(
        "border-border bg-surface/80 text-foreground hover:bg-surface inline-flex h-10 w-10 items-center justify-center rounded-full border backdrop-blur-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className,
      )}
      aria-label={
        mounted
          ? `Cambiar tema (actual: ${resolvedTheme ?? "sistema"})`
          : "Cambiar tema"
      }
      onClick={() =>
        setTheme(resolvedTheme === "dark" ? "light" : "dark")
      }
    >
      <span className="sr-only">Alternar tema claro/oscuro</span>
      <span aria-hidden className="text-lg leading-none">
        {mounted && resolvedTheme === "dark" ? "☾" : "☀"}
      </span>
    </button>
  );
}
