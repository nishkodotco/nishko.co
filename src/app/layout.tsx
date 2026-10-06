import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono, Source_Serif_4 } from "next/font/google";
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
    default: "nishko — blog",
    template: "%s — nishko",
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
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <header className="border-b border-border">
          <div className="mx-auto flex h-16 max-w-2xl items-center justify-between px-4 sm:px-6">
            <Link href="/" className="text-xl font-bold tracking-widest">
              nishko
            </Link>
            <nav className="text-sm font-medium text-muted-foreground">
              <Link href="/blog" className="transition-colors hover:text-foreground">
                Blog
              </Link>
            </nav>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="border-t border-border">
          <div className="mx-auto max-w-2xl px-4 py-8 text-sm text-muted-foreground sm:px-6">
            © {new Date().getFullYear()} Nishant Kant Ojha
          </div>
        </footer>
      </body>
    </html>
  );
}
