"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav, site } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <Link href="/" className="brand" onClick={() => setOpen(false)}>
        <strong>Luxur</strong>
        <span>Art World</span>
      </Link>
      <button
        className="menu-toggle"
        type="button"
        aria-expanded={open}
        aria-controls="site-nav"
        onClick={() => setOpen((value) => !value)}
      >
        {open ? "Close" : "Menu"}
      </button>
      <nav id="site-nav" className={open ? "nav open" : "nav"} aria-label={site.name}>
        {nav.map((item) => {
          const current = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={current ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
