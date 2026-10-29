export function SpreadVisual() {
  return (
    <div className="relative mx-auto h-[440px] w-full max-w-5xl overflow-hidden rounded-[2rem] border border-border bg-card/80 shadow-[0_30px_80px_rgba(0,0,0,0.08)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(205,232,155,0.24),_transparent_35%)]" />
      <div className="absolute left-1/2 top-1/2 h-[18rem] w-[18rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-foreground/15" />
      <div className="absolute left-1/2 top-1/2 h-[25rem] w-[25rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-foreground/10" />
      <div className="absolute left-1/2 top-1/2 h-[31rem] w-[31rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-foreground/8" />

      <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-foreground/20 bg-background px-7 py-5 text-center text-[0.68rem] font-medium uppercase tracking-[0.3em] text-foreground">
        YOUR BUSINESS
      </div>

      {[
        { label: "Website", x: "50%", y: "15%" },
        { label: "Search", x: "79%", y: "38%" },
        { label: "Social", x: "68%", y: "76%" },
        { label: "Content", x: "34%", y: "81%" },
        { label: "Customers", x: "17%", y: "62%" },
        { label: "Data", x: "20%", y: "30%" },
        { label: "Automation", x: "48%", y: "92%" },
      ].map((node) => (
        <div
          key={node.label}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: node.x, top: node.y }}
        >
          <div className="flex flex-col items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-accent" />
            <div className="text-[0.58rem] font-medium uppercase tracking-[0.22em] text-foreground/70">{node.label}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
