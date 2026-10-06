"use client";

import { useEffect, useState, type MouseEvent } from "react";
import type { TocItem } from "@/lib/blogs";

// Left rail on wide screens; a sticky dropdown above the post on smaller ones.
export function TableOfContents({ items }: { items: TocItem[] }) {
  const [active, setActive] = useState(items[0]?.id);

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

  // Picking a section on small screens closes the dropdown.
  function closeDropdown(event: MouseEvent<HTMLAnchorElement>) {
    event.currentTarget.closest("details")?.removeAttribute("open");
  }

  const list = (onPick?: (event: MouseEvent<HTMLAnchorElement>) => void) => (
    <ul className="space-y-2 text-sm">
      {items.map((item) => (
        <li key={item.id} className={item.level === 3 ? "pl-3" : undefined}>
          <a
            href={`#${item.id}`}
            onClick={onPick}
            className={`block leading-snug transition-colors hover:text-foreground ${
              active === item.id ? "font-medium text-cinnabar" : "text-muted-foreground"
            }`}
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
          {list()}
        </nav>
      </aside>

      <details
        className="group sticky top-0 z-10 -mx-4 border-b border-border bg-background/95 px-4 backdrop-blur sm:-mx-6 sm:px-6 lg:hidden"
      >
        <summary className="flex cursor-pointer list-none items-center justify-between py-3 text-sm font-medium [&::-webkit-details-marker]:hidden">
          Contents
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="text-muted-foreground transition-transform group-open:rotate-180">
            <path d="m6 9 6 6 6-6" />
          </svg>
        </summary>
        <nav aria-label="Table of contents" className="max-h-[60vh] overflow-y-auto pb-4">
          {list(closeDropdown)}
        </nav>
      </details>
    </>
  );
}
