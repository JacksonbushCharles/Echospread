"use client";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/70 bg-background/90">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr] lg:px-8">
        <div>
          <Link
            href="/"
            aria-label="Echospread home"
            onClick={() => {
              if (typeof window !== "undefined"){
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
          >
            <img
              src="/favicon/favicon-echospread.png"
              alt=""
              className="h-7 w-7 shrink-0 rounded-lg object-cover sm:h-8 sm:w-8"
            />
          </Link>
          <p className="mt-6 max-w-sm text-sm leading-7 text-foreground/65">
            We build digital presence systems that help brands reach more people and turn attention into growth.
          </p>
        </div>

        <div>
          <div className="text-[0.62rem] font-medium uppercase tracking-[0.3em] text-foreground/55">Navigate</div>
          <ul className="mt-6 space-y-3 text-sm text-foreground/70">
            <li><Link href="/reach">Reach</Link></li>
            <li><Link href="/builds">Builds</Link></li>
            <li><Link href="/growth">Growth</Link></li>
            <li><Link href="/signal">Signal</Link></li>
          </ul>
        </div>

        <div>
          <div className="text-[0.62rem] font-medium uppercase tracking-[0.3em] text-foreground/55">Capabilities</div>
          <ul className="mt-6 space-y-3 text-sm text-foreground/70">
            <li>Web</li>
            <li>SEO</li>
            <li>AI</li>
            <li>Automation</li>
          </ul>
        </div>

        <div>
          <div className="text-[0.62rem] font-medium uppercase tracking-[0.3em] text-foreground/55">Start</div>
          <Link href="/sign-in" className="mt-6 inline-flex rounded-full border border-border bg-muted/40 px-4 py-2 text-[0.62rem] font-medium uppercase tracking-[0.24em] text-foreground transition hover:bg-muted/60">
            Start a project
          </Link>
        </div>
      </div>
      <div className="border-t border-border/70">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-3 px-4 py-5 text-xs uppercase tracking-[0.2em] text-foreground/45 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <div>© 2026 Echospread</div>
          <div>Build. Reach. Grow.</div>
        </div>
      </div>
    </footer>
  );
}
