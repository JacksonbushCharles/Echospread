"use client";

import { Moon, SunMedium } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        type="button"
        aria-label="Toggle theme"
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/60 text-sm text-foreground/80 backdrop-blur transition hover:border-black/20 hover:bg-white/80 dark:border-white/10 dark:bg-black/30 dark:text-foreground dark:hover:border-white/20 dark:hover:bg-black/60"
      >
        <span className="sr-only">Toggle theme</span>
        <SunMedium className="h-4 w-4" />
      </button>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label="Toggle color theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/60 text-sm text-foreground/80 backdrop-blur transition hover:border-black/20 hover:bg-white/80 dark:border-white/10 dark:bg-black/30 dark:text-foreground dark:hover:border-white/20 dark:hover:bg-black/60"
    >
      {isDark ? <SunMedium className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}
