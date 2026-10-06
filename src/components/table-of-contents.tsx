"use client";

import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import type { TocItem } from "@/lib/blogs";
import { cn } from "@/lib/utils";

// Left rail on wide screens; a sticky dropdown above the post on smaller ones.
export function TableOfContents({ items }: { items: TocItem[] }) {
  const [active, setActive] = useState(items[0]?.id);
  const [open, setOpen] = useState(false);

  // Highlight the section currently being read.
  useEffect(() => {
    const headings = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) setActive(visible[0].target.id);
      },
      { rootMargin: "0px 0px -70% 0px" },
    );
    headings.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [items]);

  const list = (
    <ul className="space-y-2 text-sm">
      {items.map((item) => (
        <li key={item.id} className={item.level === 3 ? "pl-3" : undefined}>
          <a
            href={`#${item.id}`}
            onClick={() => setOpen(false)}
            className={cn(
              "block leading-snug transition-colors hover:text-foreground",
              active === item.id ? "font-medium text-cinnabar" : "text-muted-foreground",
            )}
          >
            {item.text}
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <>
      <aside className="absolute right-full top-0 hidden h-full pr-8 pt-8 lg:block">
        <nav aria-label="Table of contents" className="sticky top-8 w-44">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Contents</p>
          {list}
        </nav>
      </aside>

      <Collapsible
        open={open}
        onOpenChange={setOpen}
        className="sticky top-0 z-10 -mx-4 border-b bg-background/95 px-4 backdrop-blur sm:-mx-6 sm:px-6 lg:hidden"
      >
        <CollapsibleTrigger
          render={<Button variant="ghost" className="-mx-2.5 my-1.5 w-[calc(100%+1.25rem)] justify-between" />}
        >
          Contents
          <ChevronDown className={cn("text-muted-foreground transition-transform", open && "rotate-180")} />
        </CollapsibleTrigger>
        <CollapsibleContent>
          <nav aria-label="Table of contents" className="max-h-[60vh] overflow-y-auto pb-4 pt-1">
            {list}
          </nav>
        </CollapsibleContent>
      </Collapsible>
    </>
  );
}
