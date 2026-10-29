import { SectionHeading } from "@/components/section-heading";
import { capabilityCards } from "@/lib/site-data";

export default function ReachPage() {
  return (
    <main className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading
        label="REACH"
        title="More ways to reach further."
        description="Echospread works across the systems that make brands visible, understandable and useful — from the website itself to the longer growth loops around it."
      />

      <div className="mt-14 space-y-8">
        {[
          ["Web", "Digital experiences that make brands clearer, more useful and more memorable."],
          ["Growth", "Search, content and campaigns that turn visibility into measurable business momentum."],
          ["Content", "Messaging systems that help brands sound like themselves while scaling their reach."],
          ["SEO", "Search strategy and technical discoverability built to make the right people find you."],
          ["AI", "Practical AI and automation that remove friction from business operations and customer journeys."],
          ["Automation", "Connected workflows that make the business move more smoothly and reliably."],
          ["Software", "Digital products and tools built for utility, clarity and operational leverage."],
          ["IoT", "Connected systems and monitoring experiences designed for real-world operations."],
        ].map(([service, description], index) => (
          <article key={service} className="grid gap-6 rounded-[2rem] border border-border bg-card/60 p-5 md:grid-cols-[0.7fr_1.3fr] md:p-8">
            <div className="text-[0.62rem] uppercase tracking-[0.26em] text-foreground/55">0{index + 1}</div>
            <div>
              <h2 className="text-3xl tracking-[-0.06em] text-foreground sm:text-5xl">{service}</h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-foreground/70">{description}</p>
              <div className="mt-6 flex flex-wrap gap-2 text-[0.52rem] uppercase tracking-[0.2em] text-foreground/65">
                <span className="rounded-full border border-border px-2.5 py-1.5">Strategy</span>
                <span className="rounded-full border border-border px-2.5 py-1.5">Design</span>
                <span className="rounded-full border border-border px-2.5 py-1.5">Build</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
