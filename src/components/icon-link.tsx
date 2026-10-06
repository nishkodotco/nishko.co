"use client";

import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

// Round outline icon button that links somewhere, with a tooltip naming it.
export function IconLink({
  href,
  label,
  external = false,
  side = "top",
  children,
}: {
  href: string;
  label: string;
  external?: boolean;
  side?: "top" | "bottom" | "left" | "right";
  children: React.ReactNode;
}) {
  const className = cn(
    buttonVariants({ variant: "outline", size: "icon-lg" }),
    "rounded-full text-muted-foreground hover:border-cinnabar hover:text-cinnabar",
  );
  const link = external ? (
    <a href={href} target="_blank" rel="noreferrer" aria-label={label} className={className} />
  ) : (
    <Link href={href} aria-label={label} className={className} />
  );

  return (
    <Tooltip>
      <TooltipTrigger render={link}>{children}</TooltipTrigger>
      <TooltipContent side={side}>{label}</TooltipContent>
    </Tooltip>
  );
}
