import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { featuredProjects } from "@/lib/site-data";
import { SectionHeading } from "@/components/section-heading";

export default function BuildsPage() {
  return (
    <main className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading
        label="BUILDS"
        title="Things we've built."
        description="Selected work across web experiences, systems, software and growth strategy."
      />

      <div className="mt-12 flex flex-wrap gap-3 text-[0.6rem] uppercase tracking-[0.22em]">
        {['ALL', 'WEB', 'GROWTH', 'SYSTEMS', 'TECHNOLOGY'].map((filter) => (
          <button key={filter} type="button" className="rounded-full border border-border bg-card/60 px-3 py-2 text-foreground/70 transition hover:border-foreground/25">
            {filter}
          </button>
        ))}
      </div>

      <div className="mt-12 space-y-6">
        {featuredProjects.map((project, index) => (
          <Link key={project.slug} href={`/builds/${project.slug}`} className={`group grid overflow-hidden rounded-[2rem] border border-border bg-card/60 p-4 sm:p-5 ${index % 2 === 0 ? 'lg:grid-cols-[1.15fr_0.85fr]' : 'lg:grid-cols-[0.85fr_1.15fr]'}`}>
            <div className="rounded-[1.5rem] border border-border p-3">
              <div className="h-[280px] rounded-[1.1rem] border border-border" style={{ background: `linear-gradient(135deg, ${project.accent} 0%, rgba(255,255,255,0.3) 100%)` }} />
            </div>
            <div className="flex flex-col justify-between p-2 sm:p-4">
              <div>
                <div className="text-[0.6rem] uppercase tracking-[0.24em] text-foreground/55">{project.category}</div>
                <h2 className="mt-4 text-4xl tracking-[-0.06em] text-foreground">{project.name}</h2>
                <p className="mt-4 max-w-lg text-base leading-7 text-foreground/65">{project.description}</p>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-border bg-background/60 px-2.5 py-1.5 text-[0.52rem] uppercase tracking-[0.2em] text-foreground/60">{tag}</span>
                ))}
              </div>
              <div className="mt-8 inline-flex items-center gap-2 text-[0.62rem] uppercase tracking-[0.22em] text-foreground/75">
                View case study <ArrowUpRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
