import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { signalArticles } from "@/lib/site-data";
import { SectionHeading } from "@/components/section-heading";

export default function SignalPage() {
  return (
    <main className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading
        label="SIGNAL"
        title="Signals from Echospread."
        description="Ideas on digital presence, technology, growth and creative systems."
      />

      <div className="mt-12 flex flex-wrap gap-3 text-[0.6rem] uppercase tracking-[0.22em] text-foreground/65">
        {['Digital', 'Technology', 'AI', 'Growth', 'Design', 'Experiments'].map((category) => (
          <span key={category} className="rounded-full border border-border bg-card/60 px-3 py-2">{category}</span>
        ))}
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {signalArticles.map((article, index) => (
          <Link key={article.slug} href={`/signal/${article.slug}`} className="group rounded-[2rem] border border-border bg-card/60 p-5 transition hover:-translate-y-1 hover:border-foreground/20">
            <div className="flex items-center justify-between text-[0.6rem] uppercase tracking-[0.26em] text-foreground/55">
              <span>{index % 2 === 0 ? 'SIGNAL' : 'EXPERIMENT'} / {String(index + 1).padStart(3, '0')}</span>
              <span>{article.date}</span>
            </div>
            <h2 className="mt-8 text-3xl tracking-[-0.06em] text-foreground">{article.title}</h2>
            <p className="mt-4 text-base leading-7 text-foreground/65">{article.excerpt}</p>
            <div className="mt-6 flex items-center justify-between border-t border-border pt-4 text-[0.6rem] uppercase tracking-[0.22em] text-foreground/55">
              <span>{article.category}</span>
              <span className="inline-flex items-center gap-2 text-foreground/80">Read <ArrowUpRight className="h-3.5 w-3.5" /></span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
