import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono, Source_Serif_4 } from "next/font/google";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { TooltipProvider } from "@/components/ui/tooltip";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nishko.co"),
  title: {
    default: "nishant | blog",
    template: "%s | nishant",
  },
  description: "Writing by Nishant Kant Ojha.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${sourceSerif.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <TooltipProvider>
          <header>
            <div className="mx-auto flex h-16 max-w-2xl items-center justify-between px-4 sm:px-6">
              <Link href="/" className="text-xl font-bold tracking-widest">
                nishko
              </Link>
              <nav>
                <Link href="/blog" className={buttonVariants({ variant: "ghost" })}>
                  Blog
                </Link>
              </nav>
            </div>
            <Separator />
          </header>
          <main className="flex-1">{children}</main>
          <footer>
            <Separator />
            <div className="mx-auto max-w-2xl px-4 py-8 text-sm text-muted-foreground sm:px-6">
              © {new Date().getFullYear()} nishko
            </div>
          </footer>
        </TooltipProvider>
      </body>
    </html>
  );
}
