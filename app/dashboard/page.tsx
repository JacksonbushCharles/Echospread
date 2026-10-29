import Link from "next/link";

export default function DashboardPage() {
  return (
    <main className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-10 flex items-center justify-between gap-4">
        <div>
          <div className="text-[0.62rem] uppercase tracking-[0.28em] text-foreground/55">Dashboard</div>
          <h1 className="mt-3 text-4xl tracking-[-0.06em] text-foreground sm:text-6xl">Welcome.</h1>
        </div>
        <Link href="/" className="text-[0.62rem] uppercase tracking-[0.22em] text-foreground/70">Back to site</Link>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
        {[
          ['Projects', '3 active'],
          ['Messages', '2 new'],
          ['Services', '4 offerings'],
          ['Account', 'Profile ready'],
          ['Status', 'On track'],
        ].map(([label, value]) => (
          <div key={label} className="rounded-[1.6rem] border border-border bg-card/60 p-5">
            <div className="text-[0.6rem] uppercase tracking-[0.22em] text-foreground/55">{label}</div>
            <div className="mt-8 text-2xl tracking-[-0.04em] text-foreground">{value}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
