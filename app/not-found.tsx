import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex max-w-xl flex-col items-center justify-center px-4 py-24 text-center sm:px-6">
      <div className="text-[0.62rem] uppercase tracking-[0.28em] text-foreground/55">404</div>
      <h1 className="mt-5 text-5xl tracking-[-0.08em] text-foreground">This signal is out of range.</h1>
      <p className="mt-5 text-base leading-7 text-foreground/70">
        The page you were looking for does not exist or has moved.
      </p>
      <Link href="/" className="mt-8 rounded-full bg-foreground px-5 py-3 text-[0.62rem] uppercase tracking-[0.2em] text-background">
        Back to Reach
      </Link>
    </main>
  );
}
