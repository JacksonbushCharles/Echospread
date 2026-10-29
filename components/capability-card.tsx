import { ArrowUpRight } from "lucide-react";

export type CapabilityType = {
  title: string;
  description: string;
  tag: string;
};

export function CapabilityCard({ title, description, tag }: CapabilityType) {
  return (
    <article className="group relative overflow-hidden rounded-[2rem] border border-border bg-card/70 p-6 transition duration-300 hover:-translate-y-1 hover:border-foreground/20 hover:bg-card sm:p-8">
      <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_top_left,_rgba(205,232,155,0.18),_transparent_38%)]" />
      <div className="relative z-10 flex h-full flex-col">
        <div className="flex items-center justify-between">
          <div className="text-[0.62rem] font-medium uppercase tracking-[0.26em] text-foreground/55">{tag}</div>
          <ArrowUpRight className="h-4 w-4 text-foreground/60 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </div>
        <div className="mt-12 h-28 w-full rounded-[1.25rem] border border-border bg-[radial-gradient(circle_at_center,_rgba(82,94,89,0.08),_rgba(255,255,255,0)_62%)]" />
        <h3 className="font-sans font-semibold mt-8 text-2xl tracking-[-0.02em] text-foreground sm:text-3xl">{title}</h3>
        <p className="mt-4 text-base leading-7 text-foreground/65">{description}</p>
      </div>
    </article>
  );
}
