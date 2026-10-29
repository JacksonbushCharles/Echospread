import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type CtaButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export function CtaButton({ href, children, variant = "primary", className }: CtaButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-2 rounded-full border px-5 py-3 text-[0.68rem] font-medium uppercase tracking-[0.2em] transition duration-300",
        variant === "primary"
          ? "border-foreground bg-foreground text-background hover:bg-foreground/90"
          : "border-border bg-transparent text-foreground hover:border-foreground/30 hover:bg-muted/30",
        className
      )}
    >
      {children}
      <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </Link>
  );
}
