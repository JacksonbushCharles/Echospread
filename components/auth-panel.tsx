"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";
import { authClient } from "@/lib/auth-client";

export function AuthPanel() {
  const [email, setEmail] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const isGoogleConfigured = Boolean(
    process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || process.env.GOOGLE_CLIENT_ID,
  );

  const handleMagicLink = async () => {
    if (!email.trim()) return;
    setIsSending(true);
    try {
      await authClient.signIn.magicLink({
        email,
        name: "Client",
        callbackURL: "/dashboard",
      });
      alert("Magic link sent. Check your inbox to continue.");
    } catch (error) {
      console.error(error);
      alert("Could not send the magic link. Set up your email provider env vars.");
    } finally {
      setIsSending(false);
    }
  };

  const handleGoogleSignIn = async () => {
    if (!isGoogleConfigured) {
      alert("Google OAuth is not configured yet.");
      return;
    }

    setIsGoogleLoading(true);
    try {
      await authClient.signIn.social({
        provider: "google",
        callbackURL: "/dashboard",
      });
    } catch (error) {
      console.error(error);
      alert("Google sign-in could not be started.");
    } finally {
      setIsGoogleLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      {isGoogleConfigured ? (
        <button
          type="button"
          onClick={handleGoogleSignIn}
          disabled={isGoogleLoading}
          className="flex w-full items-center justify-center gap-2 rounded-full border border-border bg-background/80 px-4 py-3 text-[0.62rem] uppercase tracking-[0.22em] text-foreground/80 transition hover:border-foreground/20 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isGoogleLoading ? <><Loader2 className="h-3.5 w-3.5 animate-spin" /> Connecting</> : "Continue with Google"}
        </button>
      ) : null}

      <div className="space-y-3 rounded-[1.5rem] border border-border bg-background/60 p-4">
        <label htmlFor="email" className="text-[0.6rem] uppercase tracking-[0.22em] text-foreground/55">
          Continue with email
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="you@company.com"
          className="w-full rounded-full border border-border bg-background px-4 py-3 text-sm text-foreground outline-none ring-0 placeholder:text-foreground/35 focus:border-foreground/20"
        />
        <button
          type="button"
          onClick={handleMagicLink}
          disabled={isSending || !email.trim()}
          className="flex w-full items-center justify-center gap-2 rounded-full bg-foreground px-4 py-3 text-[0.62rem] uppercase tracking-[0.22em] text-background transition disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isSending ? <><Loader2 className="h-3.5 w-3.5 animate-spin" /> Sending</> : "Continue with email"}
        </button>
      </div>
    </div>
  );
}

