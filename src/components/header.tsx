import React from 'react';
import Link from 'next/link';
import { Download, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Button, buttonVariants } from "@/components/ui/button";

export function Header() {
  return (
    <header className="w-full border-b border-[#E5E5E5] bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-8 lg:px-12 h-16 flex justify-between items-center">
        {/* Left Navigation */}
        <nav className="flex gap-6 items-center font-medium text-sm text-zinc-600">
          <Link href="/" className="hover:text-foreground transition-colors">
            Portfolio
          </Link>
          <Link href="/blog" className="hover:text-foreground transition-colors">
            Blog
          </Link>
          <Link href="/resume" className="hover:text-foreground transition-colors">
            Resume
          </Link>
        </nav>

        {/* Right Social & Actions */}
        <div className="flex items-center gap-2">
          <a href="#" target="_blank" rel="noreferrer" className={buttonVariants({ variant: "ghost", size: "icon" })}>
            <FaLinkedin className="h-5 w-5" />
          </a>
          <a href="#" target="_blank" rel="noreferrer" className={buttonVariants({ variant: "ghost", size: "icon" })}>
            <FaGithub className="h-5 w-5" />
          </a>
          <a href="mailto:nishantkantojha@outlook.com" className={buttonVariants({ variant: "ghost", size: "icon" })}>
            <Mail className="h-5 w-5" />
          </a>
          <Button variant="outline" className="flex items-center gap-2 ml-2 shadow-sm border-[#E5E5E5]">
            <Download className="h-4 w-4" />
            PDF
          </Button>
        </div>
      </div>
    </header>
  );
}
