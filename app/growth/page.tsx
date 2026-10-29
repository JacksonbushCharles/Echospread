import { SectionHeading } from "@/components/section-heading";

export default function GrowthPage() {
  return (
    <main className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading
        label="GROWTH"
        title="Make your business easier to find."
        description="Visibility is only useful when it creates the right attention, trust and momentum."
      />

      <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {[
          ["SEARCH", "SEO and discoverability systems built to bring the right audiences to your business."],
          ["CONTENT", "Content strategy and production that helps brands become easier to understand and trust."],
          ["SOCIAL", "Social media presence and management designed around real audience behaviour and brand consistency."],
          ["ADVERTISING", "Digital campaigns and acquisition systems focused on qualified attention, not vanity metrics."],
          ["CONVERSION", "Landing pages and digital experiences that turn interest into action."],
          ["AUTOMATION", "Systems that reduce repetitive work and keep relationships moving."],
        ].map(([heading, description]) => (
          <article key={heading} className="rounded-[2rem] border border-border bg-card/60 p-5">
            <div className="h-28 rounded-[1.25rem] border border-border bg-[radial-gradient(circle_at_center,_rgba(167,191,108,0.18),_transparent_50%)]" />
            <h2 className="mt-6 text-2xl tracking-[-0.05em] text-foreground">{heading}</h2>
            <p className="mt-3 text-base leading-7 text-foreground/70">{description}</p>
          </article>
        ))}
      </div>

      <div className="mt-16 rounded-[2.5rem] border border-border bg-muted/60 p-6 sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-4 text-[0.62rem] uppercase tracking-[0.26em] text-foreground/55">
          <span>ATTENTION</span>
          <span>→</span>
          <span>INTEREST</span>
          <span>→</span>
          <span>ACTION</span>
          <span>→</span>
          <span>GROWTH</span>
        </div>
      </div>
    </main>
  );
}
