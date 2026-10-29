import Link from "next/link";
import { notFound } from "next/navigation";
import { featuredProjects } from "@/lib/site-data";

export default function BuildDetailPage({ params }: { params: { slug: string } }) {
  const project = featuredProjects.find((item) => item.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 lg:px-8">
      <div className="rounded-[2.5rem] border border-border bg-card/70 p-5 sm:p-8">
        <div className="text-[0.62rem] uppercase tracking-[0.28em] text-foreground/55">{project.category}</div>
        <h1 className="mt-6 text-5xl tracking-[-0.07em] text-foreground sm:text-7xl">{project.name}</h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-foreground/70">{project.description}</p>

        <div className="mt-10 rounded-[1.5rem] border border-border p-3">
          <div className="h-[420px] rounded-[1.1rem] border border-border" style={{ background: `linear-gradient(135deg, ${project.accent} 0%, rgba(255,255,255,0.3) 100%)` }} />
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            ["Problem", "The business needed a stronger digital story and a more practical online experience that could support real commercial growth."],
            ["Approach", "We aligned strategy, UX, content and technical implementation to turn the business into a clearer digital proposition."],
            ["Outcome", "The digital experience became a more useful driver for trust, visibility and broader operating efficiency."],
          ].map(([heading, text]) => (
            <div key={heading} className="rounded-[1.5rem] border border-border bg-background/60 p-5">
              <div className="text-[0.62rem] uppercase tracking-[0.2em] text-foreground/55">{heading}</div>
              <p className="mt-4 text-base leading-7 text-foreground/70">{text}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="rounded-full border border-border bg-background/60 px-3 py-2 text-[0.52rem] uppercase tracking-[0.2em] text-foreground/65">{tag}</span>
          ))}
        </div>

        <div className="mt-12 flex items-center justify-between border-t border-border pt-5 text-[0.62rem] uppercase tracking-[0.22em] text-foreground/60">
          <Link href="/builds">Back to builds</Link>
          <Link href="/signal">Next signal</Link>
        </div>
      </div>
    </main>
  );
}
