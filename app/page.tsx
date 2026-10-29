import Link from "next/link";
import { ArrowUpRight, MoveRight } from "lucide-react";
import { CtaButton } from "@/components/cta-button";
import { CapabilityCard } from "@/components/capability-card";
import { SpreadVisual } from "@/components/spread-visual";
import { SectionHeading } from "@/components/section-heading";
import { featuredProjects, signalArticles, capabilityCards } from "@/lib/site-data";
import GrowthShowcase from "@/components/sections/growth-showcase";

export default function Page() {
  return (
    <main>
      <section className="mx-auto max-w-[1440px] px-4 pb-20 pt-16 sm:px-6 lg:px-8 lg:pb-30 lg:pt-30">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h1 className="max-w-[720px] text-5xl font-extrabold leading-[1.10] tracking-[-0.04em] text-foreground sm:text-7xl lg:text-[5.3rem]">
              <span className="text-accent-gradient">Echo</span> your Vision, Spread your <span className="text-accent-blue-orange-gradient">Reach</span>.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-foreground/70 sm:text-xl">
              We help ambitious businesses build stronger digital presence, connect with the right people and grow through technology, creativity and strategy.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <CtaButton href="/sign-in">Start a project</CtaButton>
              <Link href="/builds" className="inline-flex items-center gap-2 text-[0.68rem] font-medium uppercase tracking-[0.24em] text-foreground/75 transition hover:text-foreground">
                Explore our work <MoveRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          <div className="relative h-[520px] overflow-hidden rounded-[2.5rem] border border-border bg-card/70 p-5 shadow-[0_24px_80px_var(--shadow-soft)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(190,214,160,0.18),_transparent_32%)]" />
            <div className="relative h-full rounded-[2rem] border border-border bg-background/60 p-5">
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  {['#121212', '#99938E', '#D7E8AF'].map((dot) => (
                    <span key={dot} className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: dot }} />
                  ))}
                </div>
                <div className="text-[0.58rem] uppercase tracking-[0.24em] text-foreground/50">signal / 01</div>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-[1.2fr_0.8fr]">
                <div className="rounded-[1.5rem] border border-border p-4">
                  <div className="text-[0.58rem] uppercase tracking-[0.26em] text-foreground/55">Brand</div>
                  <div className="mt-10 h-28 rounded-[1.25rem] border border-border bg-[radial-gradient(circle_at_30%_30%,_rgba(85,90,75,0.12),_transparent_45%),linear-gradient(135deg,rgba(255,255,255,0.9),rgba(235,233,225,1))]" />
                </div>
                <div className="space-y-4">
                  <div className="rounded-[1.25rem] border border-border p-4">
                    <div className="text-[0.58rem] uppercase tracking-[0.24em] text-foreground/55">Search</div>
                    <div className="mt-6 h-16 rounded-full border border-border bg-background" />
                  </div>
                  <div className="rounded-[1.25rem] border border-border p-4">
                    <div className="text-[0.58rem] uppercase tracking-[0.24em] text-foreground/55">People</div>
                    <div className="mt-8 flex items-end justify-between gap-2">
                      <span className="h-12 w-3 rounded-full bg-foreground/10" />
                      <span className="h-16 w-3 rounded-full bg-foreground/15" />
                      <span className="h-20 w-3 rounded-full bg-foreground/20" />
                      <span className="h-14 w-3 rounded-full bg-foreground/10" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-border bg-muted/40 p-4">
                <div className="flex items-center justify-between text-[0.58rem] uppercase tracking-[0.24em] text-foreground/55">
                  <span>signal flow</span>
                  <span>reach / growth</span>
                </div>
                <div className="mt-4 flex items-center justify-between gap-3">
                  {['Web','Content','Social','Search','People'].map((node) => (
                    <div key={node} className="flex flex-1 flex-col items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-[#A7BF6C]" />
                      <span className="text-[0.52rem] uppercase tracking-[0.17em] text-foreground/55">{node}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-border/80 bg-background/80 pt-20 pb-20">
        <div className="mx-auto max-w-[1440px] px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            label="01 / REACH"
            title="From presence to reach."
            description="A strong digital presence is more than a website. It is how your brand appears, communicates, connects and grows across the places your audience already lives."
          />

          <div className="mt-14 grid gap-6 lg:grid-cols-7">
            {[
              { name: "BRAND", subtle: true,},
              { name: "WEB", subtle: false },
              { name: "CONTENT", subtle: true },
              { name: "SEARCH", subtle: false },
              { name: "SOCIAL", subtle: true },
              { name: "PEOPLE", subtle: false },
              { name: "GROWTH", subtle: true },
            ].map((node, index) => (
              <div key={node.name} className="relative flex items-center justify-center">
                <div
                  className={`flex h-28 w-full items-center justify-center rounded-[1.75rem] border text-[0.62rem] font-medium uppercase tracking-[0.26em] ${
                    node.subtle
                      ? "border-border bg-background/80 text-foreground/70"
                      : "border-foreground/10 bg-card text-foreground"
                  }`}
                >
                  {node.name}
                </div>
                {index < 6 && (
                  <div className="absolute -bottom-5 left-1/2 h-5 w-px -translate-x-1/2 bg-border" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-4 py-20 sm:px-6 lg:px-8 pt-20 pb-20">
        <SectionHeading
          label="01 / REACH"
          title="Everything your digital presence needs to move further."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {capabilityCards.map((card) => (
            <CapabilityCard key={card.title} {...card} />
          ))}
        </div>
      </section>

      <section className="border-y border-border/80 bg-muted/60 pt-20 pb-20">
        <div className="mx-auto max-w-[1440px] px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading label="SPREAD" title="Let the right things spread." />
          <div className="mt-12">
            <SpreadVisual />
          </div>
        </div>
      </section>

      <section>
        <div>
          {/* Your existing hero */}
          <GrowthShowcase />
          {/* Your other sections */}
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-4 py-20 sm:px-6 lg:px-8 pt-20 pb-20">
        <SectionHeading label="02 / BUILDS" title="Work that moves businesses forward." />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {featuredProjects.map((project) => (
            <Link key={project.slug} href={`/builds/${project.slug}`} className="group overflow-hidden rounded-[2rem] border border-border bg-card/60 p-4 transition hover:-translate-y-1 hover:border-foreground/20 sm:p-5">
              <div className="rounded-[1.5rem] border border-border p-3">
                <div className="h-60 rounded-[1.1rem] border border-border" style={{ background: `linear-gradient(135deg, ${project.accent} 0%, rgba(255,255,255,0.3) 100%)` }} />
              </div>
              <div className="mt-6 flex items-center justify-between gap-3">
                <div>
                  <div className="text-[0.62rem] uppercase tracking-[0.24em] text-foreground/55">{project.category}</div>
                  <h3 className="mt-2 text-3xl tracking-[-0.06em] text-foreground">{project.name}</h3>
                </div>
                <ArrowUpRight className="h-5 w-5 text-foreground/60 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
              <p className="mt-4 max-w-md text-base leading-7 text-foreground/65">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-border bg-muted/40 px-2.5 py-1 text-[0.52rem] uppercase tracking-[0.18em] text-foreground/65">
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-border/80 bg-background/80 pt-20 pb-20">
        <div className="mx-auto max-w-[1440px] px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            label="03 / GROWTH"
            title="Visibility is only useful when it goes somewhere."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {[
              ["DISCOVER", "SEO and search visibility."],
              ["ATTRACT", "Content and advertising."],
              ["CONVERT", "Web experiences and landing pages."],
              ["RETAIN", "Automation and digital relationships."],
              ["REPEAT", "Loop through the whole process."],
            ].map(([heading, body]) => (
              <div key={heading} className="rounded-[2rem] border border-border bg-card/60 p-5">
                <div className="h-28 rounded-[1.3rem] border border-border bg-[radial-gradient(circle_at_center,_rgba(167,191,108,0.22),_transparent_50%)]" />
                <h3 className="mt-6 text-xl tracking-[-0.04em] text-foreground">{heading}</h3>
                <p className="mt-3 text-sm leading-7 text-foreground/65">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-4 py-20 sm:px-6 lg:px-8 pt-20 pb-20">
        <SectionHeading label="04 / SIGNAL" title="Ideas worth spreading." />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {signalArticles.map((signal, index) => (
            <Link key={signal.slug} href={`/signal/${signal.slug}`} className="group rounded-[2rem] border border-border bg-card/60 p-5 transition hover:-translate-y-1 hover:border-foreground/20">
              <div className="flex items-center justify-between text-[0.6rem] uppercase tracking-[0.26em] text-foreground/55">
                <span>{index % 2 === 0 ? "SIGNAL" : "EXPERIMENT"} / {String(index + 1).padStart(3, "0")}</span>
                <span>{signal.date}</span>
              </div>
              <div className="mt-8 text-3xl tracking-[-0.06em] text-foreground">{signal.title}</div>
              <p className="mt-4 text-base leading-7 text-foreground/65">{signal.excerpt}</p>
              <div className="mt-6 flex items-center justify-between border-t border-border pt-4 text-[0.62rem] uppercase tracking-[0.24em] text-foreground/55">
                <span>{signal.category}</span>
                <span className="inline-flex items-center gap-2 text-foreground/75">Read <ArrowUpRight className="h-3.5 w-3.5" /></span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-border/80 bg-muted/60 pt-20 pb-20">
        <div className="mx-auto max-w-[1440px] px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading label="EXPERIMENTS" title="We like to see what happens." />
          <div className="mt-12 rounded-[2.5rem] border border-border bg-card/70 p-6 md:p-8">
            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="relative h-[360px] overflow-hidden rounded-[2rem] border border-border bg-[radial-gradient(circle_at_center,_rgba(167,191,108,0.18),_transparent_35%)]">
                <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-foreground/20" />
                <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-foreground/10" />
                <div className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground/5" />
              </div>
              <div className="space-y-4">
                {[
                  "Animated system diagrams",
                  "Responsive motion language",
                  "Generative experimentation",
                  "Interactive visual stories",
                ].map((item) => (
                  <div key={item} className="flex items-center justify-between rounded-[1.5rem] border border-border bg-background/60 px-4 py-4 text-sm uppercase tracking-[0.16em] text-foreground/70">
                    <span>{item}</span>
                    <span className="h-2.5 w-2.5 rounded-full bg-[#A7BF6C]" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-4 py-20 sm:px-6 lg:px-8 pt-20 pb-50">
        <div className="rounded-[2.5rem] border border-border bg-background/80 px-5 py-10 sm:px-8 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <div className="text-[0.62rem] uppercase tracking-[0.28em] text-foreground/55">Final call</div>
              <h2 className="mt-6 text-4xl leading-[0.9] tracking-[-0.08em] text-foreground sm:text-5xl lg:text-8xl">
                Ready to spread?
              </h2>
              <p className="mt-6 max-w-xl text-base leading-7 text-foreground/70 sm:text-lg">
                Tell us what you're building, what you're trying to reach, or where your digital presence needs to go next.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 lg:justify-end">
              <CtaButton href="/sign-in">Start a project</CtaButton>
              <CtaButton href="/studio" variant="secondary">Explore Echospread</CtaButton>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
