"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";

const navItems = [
  { name: "REACH", href: "/" },
  { name: "BUILDS", href: "/builds" },
  { name: "GROWTH", href: "/growth" },
  { name: "SIGNAL", href: "/signal" },
  { name: "STUDIO", href: "/studio" },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <div className="flex items-center justify-between gap-3 border-b border-border/60 bg-background/80 px-4 py-3 backdrop-blur-xl">
        <Link href="/" className="text-xs font-semibold uppercase tracking-[0.28em] text-foreground">
          ECHOSPREAD
        </Link>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/60 dark:border-white/10 dark:bg-black/30"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-b border-border/60 bg-background px-4 py-4">
          <nav className="flex flex-col gap-3" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-xs font-medium uppercase tracking-[0.25em] text-foreground/80"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/sign-in"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex items-center justify-center rounded-full bg-foreground px-4 py-2.5 text-[0.64rem] font-medium uppercase tracking-[0.2em] text-background"
            >
              Sign in
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}
