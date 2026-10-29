import { notFound } from "next/navigation";
import { signalArticles } from "@/lib/site-data";

export default function SignalArticlePage({ params }: { params: { slug: string } }) {
  const article = signalArticles.find((item) => item.slug === params.slug);

  if (!article) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-[900px] px-4 py-16 sm:px-6 lg:px-8">
      <article className="rounded-[2.5rem] border border-border bg-card/70 p-5 sm:p-8">
        <div className="flex items-center justify-between text-[0.62rem] uppercase tracking-[0.26em] text-foreground/55">
          <span>{article.category}</span>
          <span>{article.date}</span>
        </div>
        <h1 className="mt-8 text-5xl tracking-[-0.07em] text-foreground sm:text-7xl">{article.title}</h1>
        <p className="mt-6 text-lg leading-8 text-foreground/70">{article.excerpt}</p>

        <div className="mt-10 h-[360px] rounded-[1.7rem] border border-border bg-[radial-gradient(circle_at_center,_rgba(167,191,108,0.18),_transparent_40%)]" />

        <div className="mt-10 space-y-6 text-lg leading-8 text-foreground/75">
          <p>
            Digital presence is no longer a single surface. It is a set of signals that move across search, content, community, service design and technical infrastructure.
          </p>
          <p>
            The strongest brands understand that their website is not an isolated object. It is a central node in a wider system of discovery, trust, communication and growth.
          </p>
          <p>
            That is where Echospread works: connecting the business message to the systems that carry it outward with clarity and intent.
          </p>
        </div>
      </article>
    </main>
  );
}
