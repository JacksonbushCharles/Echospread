import { Navbar } from "@/components/navbar";
import { MobileNav } from "@/components/mobile-nav";
import { SiteFooter } from "@/components/site-footer";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Navbar />
      <MobileNav />
      <div className="relative">{children}</div>
      <SiteFooter />
    </div>
  );
}
