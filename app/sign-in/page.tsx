import { CtaButton } from "@/components/cta-button";
import { AuthPanel } from "@/components/auth-panel";

export default function SignInPage() {
  return (
    <main className="mx-auto flex max-w-5xl items-center justify-center px-4 py-20 sm:px-6 lg:px-8">
      <div className="w-full max-w-xl rounded-[2rem] border border-border bg-card/70 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.08)] sm:p-8">
        <div className="text-[0.62rem] uppercase tracking-[0.28em] text-foreground/55">Access</div>
        <h1 className="mt-6 text-4xl tracking-[-0.06em] text-foreground sm:text-5xl">Welcome back.</h1>
        <p className="mt-4 text-base leading-7 text-foreground/70">
          Continue with your Google account or use a secure magic link to reach your dashboard.
        </p>

        <div className="mt-8">
          <AuthPanel />
        </div>

        <div className="mt-8 rounded-[1.5rem] border border-border bg-background/60 p-4 text-sm leading-7 text-foreground/70">
          In development mode, the form is live and the magic link request goes through the Better Auth handler. Add your real OAuth and email env vars to enable production sign-in.
        </div>

        <div className="mt-8">
          <CtaButton href="/dashboard">Go to dashboard</CtaButton>
        </div>
      </div>
    </main>
  );
}
