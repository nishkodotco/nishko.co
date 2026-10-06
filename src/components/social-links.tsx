"use client";

import { CalendarDays } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { socials, type Social } from "@/data/socials";
import { cn } from "@/lib/utils";

// Brand marks from Simple Icons (CC0); lucide no longer ships brand logos.
const brandPaths: Record<Exclude<Social["id"], "calendar">, string> = {
  x: "M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z",
  youtube:
    "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
  github:
    "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",
};

function Icon({ id }: { id: Social["id"] }) {
  if (id === "calendar") return <CalendarDays className="size-4.5" strokeWidth={2} />;
  return (
    <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden>
      <path d={brandPaths[id]} />
    </svg>
  );
}

// Round icons in the same grey as the profile photo's background.
export function SocialLinks({ className, size = "default" }: { className?: string; size?: "default" | "sm" }) {
  const circle = cn(
    "inline-flex items-center justify-center rounded-full bg-[#d9d9d9] text-[#2b2b2b] transition-colors",
    size === "sm" ? "size-8 [&_svg]:size-3.5" : "size-10",
  );

  return (
    <ul className={cn("flex items-center justify-center", size === "sm" ? "gap-2" : "gap-3", className)}>
      {socials.map((social) => (
        <li key={social.id}>
          <Tooltip>
            <TooltipTrigger
              render={
                social.href ? (
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className={cn(circle, "hover:bg-[#2b2b2b] hover:text-[#d9d9d9]")}
                  />
                ) : (
                  <span aria-label={`${social.label} (coming soon)`} className={cn(circle, "cursor-default opacity-60")} />
                )
              }
            >
              <Icon id={social.id} />
            </TooltipTrigger>
            <TooltipContent side={size === "sm" ? "top" : "bottom"}>{social.href ? social.label : `${social.label} — coming soon`}</TooltipContent>
          </Tooltip>
        </li>
      ))}
    </ul>
  );
}
