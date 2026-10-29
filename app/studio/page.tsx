import { SectionHeading } from "@/components/section-heading";

export default function StudioPage() {
  return (
    <main className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading
        label="STUDIO"
        title="Echospread is built to move ideas further."
        description="We work at the intersection of technology, creativity and business reality — helping brands become more visible, more useful and more resilient."
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[2rem] border border-border bg-card/70 p-6">
          <div className="text-[0.62rem] uppercase tracking-[0.28em] text-foreground/55">Our approach</div>
          <div className="mt-8 grid gap-4 md:grid-cols-5">
            {['Understand', 'Design', 'Build', 'Launch', 'Improve'].map((step, index) => (
              <div key={step} className="rounded-[1.25rem] border border-border bg-background/60 p-4">
                <div className="text-[0.6rem] uppercase tracking-[0.2em] text-foreground/55">0{index + 1}</div>
                <div className="mt-10 text-xl tracking-[-0.04em] text-foreground">{step}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-border bg-muted/60 p-6">
          <div className="text-[0.62rem] uppercase tracking-[0.28em] text-foreground/55">What we care about</div>
          <ul className="mt-6 space-y-4 text-base leading-7 text-foreground/70">
            <li>Technology that solves real problems.</li>
            <li>Creativity that helps brands feel distinct.</li>
            <li>Digital presence that supports trust and growth.</li>
            <li>Experimentation that produces useful signals.</li>
          </ul>
        </div>
      </div>

      <div className="mt-16 rounded-[2.5rem] border border-border bg-background/80 p-6 sm:p-8">
        <h2 className="text-4xl tracking-[-0.06em] text-foreground sm:text-6xl">Let's build something worth spreading.</h2>
      </div>
    </main>
  );
}
