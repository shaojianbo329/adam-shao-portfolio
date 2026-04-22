"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems, personal } from "@/lib/content";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/80 bg-paper/86 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8">
        <a href="#top" className="flex items-baseline gap-3">
          <span className="text-base font-semibold text-ink">{personal.nameEn}</span>
          <span className="hidden text-sm text-steel sm:inline">{personal.nameCn}</span>
        </a>

        <div className="hidden items-center gap-7 text-sm text-steel lg:flex">
          {navItems.map((item) => (
            <a key={item.href} className="nav-link hover:text-ink" href={item.href}>
              {item.label}
            </a>
          ))}
        </div>

        <a
          href={`mailto:${personal.email}`}
          className="button-quiet hidden rounded-md border border-ink bg-ink px-4 py-2 text-sm font-medium text-white md:inline-flex"
        >
          Contact
        </a>

        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-line text-ink lg:hidden"
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {isOpen ? (
        <div className="border-t border-line bg-paper px-5 py-4 lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                className="rounded-md px-2 py-3 text-sm text-steel hover:bg-white hover:text-ink"
                href={item.href}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
