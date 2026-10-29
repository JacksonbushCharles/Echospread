
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  ArrowUpRight,
  ChevronDown,
  Globe2,
  Palette,
  TrendingUp,
  Workflow,
  Compass,
  Menu,
  X,
  Video,
  Megaphone,
  Search,
  Bot,
  BriefcaseBusiness,
} from "lucide-react";

import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "REACH", href: "/" },
  { name: "BUILDS", href: "/builds" },
  { name: "GROWTH", href: "/growth" },
  { name: "SIGNAL", href: "/signal" },
  { name: "STUDIO", href: "/studio" },
];

const capabilities = [
  {
    title: "Build",
    description: "Websites, e-commerce and digital products.",
    href: "/services/build",
    icon: Globe2,
    services: ["Website Development", "E-commerce", "Web Applications"],
  },
  {
    title: "Create",
    description: "Visual identities and creative content.",
    href: "/services/create",
    icon: Palette,
    services: ["Brand Identity & Logos", "Graphics Design", "Video Editing"],
  },
  {
    title: "Grow",
    description: "Reach the right audience and grow your brand.",
    href: "/services/grow",
    icon: TrendingUp,
    services: [
      "Social Media Management",
      "Search Engine Optimization",
      "Digital Advertising",
    ],
  },
  {
    title: "Automate",
    description: "Make your business work smarter.",
    href: "/services/automate",
    icon: Workflow,
    services: [
      "AI Integration",
      "Business Process Automation",
      "Digital Workflows",
    ],
  },
  {
    title: "Strategy",
    description: "Turn business challenges into opportunities.",
    href: "/services/strategy",
    icon: Compass,
    services: [
      "Business Diagnostics",
      "Digital Strategy",
      "Growth Consulting",
    ],
  },
];

export function Navbar() {
  const pathname = usePathname();
  const [capabilitiesOpen, setCapabilitiesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(`${href}/`);

  const closeMenus = () => {
    setCapabilitiesOpen(false);
    setMobileOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-3 z-50 px-3 sm:top-5 sm:px-5 lg:px-8">
      <div
        className="relative mx-auto grid max-w-[1440px] grid-cols-[auto_1fr_auto] items-center gap-2 sm:gap-3 lg:gap-4"
        onKeyDown={(event) => {
          if (event.key === "Escape") closeMenus();
        }}
      >
        {/* LEFT: Brand surface */}
        <Link
          href="/"
          aria-label="Echospread home"
          onClick={closeMenus}
          className="flex h-12 items-center justify-center gap-2 rounded-2xl border border-border/70 bg-card/85 px-3 text-foreground shadow-[0_8px_30px_var(--shadow-soft)] backdrop-blur-xl transition-colors sm:h-14 sm:px-4"
        >
          <img
            src="/favicon/favicon-32x32.png"
            alt=""
            className="h-7 w-7 shrink-0 rounded-lg object-cover sm:h-8 sm:w-8"
          />
          <span className="hidden text-sm font-extrabold tracking-tight sm:inline">
            echospread
          </span>
        </Link>

        {/* MIDDLE: Navigation surface */}
        <nav
          aria-label="Main navigation"
          className="relative hidden min-w-0 items-center justify-center gap-3 rounded-2xl border border-border/70 bg-card/85 px-3 py-3 shadow-[0_8px_30px_var(--shadow-soft)] backdrop-blur-xl lg:flex xl:gap-6 xl:px-5"
          onMouseEnter={() => setCapabilitiesOpen(true)}
          onMouseLeave={() => setCapabilitiesOpen(false)}
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={cn(
                "whitespace-nowrap text-[0.62rem] font-bold uppercase tracking-[0.13em] text-foreground/60 transition-colors hover:text-accent xl:text-[0.68rem] xl:tracking-[0.18em]",
                isActive(item.href) && "text-accent"
              )}
            >
              {item.name}
            </Link>
          ))}

          {/* Capabilities dropdown trigger */}
          <button
            type="button"
            aria-expanded={capabilitiesOpen}
            aria-controls="capabilities-menu"
            onClick={() => setCapabilitiesOpen((open) => !open)}
            onFocus={() => setCapabilitiesOpen(true)}
            className={cn(
              "inline-flex items-center gap-1 whitespace-nowrap text-[0.62rem] font-bold uppercase tracking-[0.13em] transition-colors hover:text-accent xl:text-[0.68rem] xl:tracking-[0.18em]",
              capabilitiesOpen ? "text-accent" : "text-foreground/60"
            )}
          >
            Capabilities
            <ChevronDown
              className={cn(
                "h-3.5 w-3.5 transition-transform duration-200",
                capabilitiesOpen && "rotate-180"
              )}
            />
          </button>

          {/* Mega-menu */}
          <div
            id="capabilities-menu"
            className={cn(
              "absolute left-1/2 top-full z-50 w-[min(900px,calc(100vw-40px))] -translate-x-1/2 pt-4 transition-all duration-200",
              capabilitiesOpen
                ? "visible translate-y-0 opacity-100"
                : "invisible -translate-y-2 opacity-0"
            )}
          >
            <div className="overflow-hidden rounded-3xl border border-border/70 bg-background/95 p-5 shadow-2xl shadow-black/10 backdrop-blur-2xl sm:p-7">
              <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
                <div>
                  <p className="mb-2 text-[0.65rem] font-bold uppercase tracking-[0.24em] text-accent">
                    What we do
                  </p>
                  <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                    Your vision. Our capabilities.
                  </h2>
                  <p className="mt-2 max-w-md text-sm leading-6 text-foreground/60">
                    Digital solutions designed to help your business build,
                    connect and grow.
                  </p>
                </div>

                <Link
                  href="/services"
                  onClick={closeMenus}
                  className="inline-flex items-center gap-2 text-xs font-bold text-accent transition hover:opacity-75"
                >
                  All services <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {capabilities.map((capability) => {
                  const Icon = capability.icon;

                  return (
                    <div
                      key={capability.href}
                      className="group rounded-2xl border border-border/60 bg-card/60 p-4 transition-colors hover:border-accent/40 hover:bg-accent-soft/30"
                    >
                      <Link
                        href={capability.href}
                        onClick={closeMenus}
                        className="flex items-start gap-3"
                      >
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
                          <Icon className="h-5 w-5" />
                        </span>

                        <span className="min-w-0 flex-1">
                          <span className="flex items-center gap-1 text-sm font-bold text-foreground">
                            {capability.title}
                            <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                          </span>
                          <span className="mt-1 block text-xs leading-5 text-foreground/60">
                            {capability.description}
                          </span>
                        </span>
                      </Link>

                      <div className="mt-4 space-y-2 border-t border-border/60 pt-3">
                        {capability.services.map((service) => (
                          <Link
                            key={service}
                            href={capability.href}
                            onClick={closeMenus}
                            className="block text-xs text-foreground/60 transition hover:text-accent"
                          >
                            {service}
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                })}

                <Link
                  href="/start-project"
                  onClick={closeMenus}
                  className="flex flex-col justify-between rounded-2xl bg-accent p-5 text-white transition hover:brightness-105"
                >
                  <div>
                    <BriefcaseBusiness className="mb-4 h-6 w-6" />
                    <h3 className="text-base font-bold">
                      Have a project in mind?
                    </h3>
                    <p className="mt-2 text-xs leading-5 text-white/85">
                      Let&apos;s explore how we can bring your next idea to life.
                    </p>
                  </div>
                  <span className="mt-5 inline-flex items-center gap-2 text-xs font-bold">
                    Let&apos;s Echowork
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* RIGHT: Actions surface */}
        <div className="flex h-12 items-center justify-center gap-1 rounded-2xl border border-border/70 bg-card/85 px-2 shadow-[0_8px_30px_var(--shadow-soft)] backdrop-blur-xl sm:h-14 sm:gap-2 sm:px-3">
          <div className="hidden items-center gap-2 sm:flex">
            <ThemeToggle />

            <Link
              href="/sign-in"
              className="hidden rounded-xl px-2 py-2 text-[0.62rem] font-bold uppercase tracking-wider text-foreground/70 transition hover:bg-accent-soft/40 hover:text-foreground xl:inline-flex"
            >
              Sign in
            </Link>
          </div>

          <Link
            href="/start-project"
            className="hidden items-center gap-1.5 whitespace-nowrap rounded-xl bg-foreground px-3 py-2.5 text-[0.62rem] font-bold uppercase tracking-wider text-background transition hover:opacity-85 sm:inline-flex lg:px-4"
          >
            <span className="hidden xl:inline">Start a project</span>
            <span className="xl:hidden">Project</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>

          {/* Mobile menu trigger */}
          <button
            type="button"
            aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((open) => !open)}
            className="flex h-9 w-9 items-center justify-center rounded-xl text-foreground transition hover:bg-accent-soft/40 lg:hidden"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* MOBILE NAVIGATION */}
        <div
          className={cn(
            "absolute left-0 right-0 top-[calc(100%+10px)] z-50 rounded-3xl border border-border/70 bg-background/95 p-4 shadow-2xl backdrop-blur-2xl transition-all duration-200 lg:hidden",
            mobileOpen
              ? "visible translate-y-0 opacity-100"
              : "invisible -translate-y-2 opacity-0"
          )}
        >
          <div className="flex items-center justify-between border-b border-border/60 pb-4">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-foreground/50">
              Navigation
            </span>
            <ThemeToggle />
          </div>

          <div className="grid gap-1 py-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenus}
                className={cn(
                  "rounded-xl px-3 py-3 text-xs font-bold uppercase tracking-[0.16em] transition hover:bg-accent-soft/40",
                  isActive(item.href)
                    ? "text-accent"
                    : "text-foreground/70"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="border-t border-border/60 py-3">
            <p className="px-3 pb-2 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-accent">
              Capabilities
            </p>

            {capabilities.map((capability) => {
              const Icon = capability.icon;

              return (
                <Link
                  key={capability.href}
                  href={capability.href}
                  onClick={closeMenus}
                  className="flex items-center gap-3 rounded-xl px-3 py-3 transition hover:bg-accent-soft/40"
                >
                  <Icon className="h-4 w-4 text-accent" />
                  <span className="text-sm font-medium text-foreground">
                    {capability.title}
                  </span>
                  <ArrowUpRight className="ml-auto h-3.5 w-3.5 text-foreground/40" />
                </Link>
              );
            })}
          </div>

          <div className="grid grid-cols-2 gap-2 border-t border-border/60 pt-4">
            <Link
              href="/sign-in"
              onClick={closeMenus}
              className="flex items-center justify-center rounded-xl border border-border px-3 py-3 text-xs font-bold uppercase tracking-wider text-foreground"
            >
              Sign in
            </Link>
            <Link
              href="/start-project"
              onClick={closeMenus}
              className="flex items-center justify-center gap-1 rounded-xl bg-accent px-3 py-3 text-xs font-bold uppercase tracking-wider text-white"
            >
              Project <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
