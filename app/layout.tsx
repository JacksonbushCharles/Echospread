import type { Metadata } from "next";
import "./globals.css";
import { Manrope } from 'next/font/google';
import { ThemeProvider } from "@/components/theme-provider";
import { SiteShell } from "@/components/site-shell";

export const metadata: Metadata = {
  metadataBase: new URL("https://echospread.com"),
  title: {
    default: "Echospread — Echo your Vision, Spread your Reach",
    template: "%s | Echospread",
  },
  description:
    "Echospread helps businesses build stronger digital presence, reach the right people and grow through technology, creativity and strategy.",
  icons: {
    icon: [
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-echospread.png", sizes: "any", type: "image/png" },
      { url: "/favicon/favicon.ico" },
    ],
    shortcut: "/favicon/favicon.ico",
    apple: "/favicon/apple-touch-icon.png",
    other: [{ rel: "mask-icon", url: "/favicon/favicon-32x32.png" }],
  },
  openGraph: {
    title: "Echospread — Expand Your Reach",
    description:
      "Digital presence, growth, AI, marketing, software and content systems built to help businesses reach more of the right people.",
    url: "https://echospread.com",
    siteName: "Echospread",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Echospread — Expand Your Reach",
    description:
      "Echospread helps businesses build stronger digital presence, reach the right people and grow through technology, creativity and strategy.",
  },
};

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'], // must include the weights you actually use
  variable: '--font-manrope', // expose as CSS variable
  display: 'swap',
});

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={manrope.variable}
      suppressHydrationWarning
    >
    
      <body className="min-h-full bg-background text-foreground">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <SiteShell>{children}</SiteShell>
        </ThemeProvider>
      </body>
    </html>
  );
}
