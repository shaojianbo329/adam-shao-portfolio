"use client";

import { motion, useMotionValueEvent, useReducedMotion, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { getPortfolioContent, type Locale } from "@/lib/content";

type HeaderProps = {
  locale: Locale;
};

export function Header({ locale }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const content = getPortfolioContent(locale);
  const { navItems, personal } = content;
  const languageLinkClass = (target: Locale) =>
    `relative z-10 rounded-full px-3 py-1.5 transition-colors duration-300 ${
      target === locale ? "font-semibold text-ink" : "text-steel hover:text-ink"
    }`;

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 18);
  });

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl"
      animate={{
        backgroundColor: isScrolled ? "rgba(247, 249, 252, 0.94)" : "rgba(247, 249, 252, 0.86)",
        borderColor: isScrolled ? "rgba(217, 224, 234, 0.95)" : "rgba(217, 224, 234, 0.76)",
        boxShadow: isScrolled
          ? "0 14px 40px rgba(12, 20, 36, 0.08)"
          : "0 0 0 rgba(12, 20, 36, 0)"
      }}
      transition={{ duration: prefersReducedMotion ? 0 : 0.28, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between px-5 transition-[height] duration-300 md:px-8 ${
          isScrolled ? "h-14" : "h-16"
        }`}
      >
        <a href="#top" className="flex items-baseline gap-3">
          <span className="text-base font-semibold text-ink">{personal.nameEn}</span>
          <span className="hidden text-sm text-steel sm:inline">{personal.nameCn}</span>
        </a>

        <div className="hidden items-center gap-5 text-sm text-steel lg:flex">
          {navItems.map((item) => (
            <a key={item.href} className="nav-link hover:text-ink" href={item.href}>
              {item.label}
            </a>
          ))}
        </div>

        <div
          className="relative hidden items-center rounded-full border border-line bg-white/56 p-1 text-sm shadow-[0_1px_0_rgba(12,20,36,0.04)] md:flex"
          aria-label={content.ui.languageLabel}
        >
          <motion.span
            className={`absolute bottom-1 top-1 rounded-full bg-paper shadow-[0_8px_24px_rgba(12,20,36,0.08)] ${
              locale === "zh" ? "left-1 w-[42px]" : "left-[47px] w-[42px]"
            }`}
            layout
            transition={{ duration: prefersReducedMotion ? 0 : 0.24, ease: [0.22, 1, 0.36, 1] }}
          />
          <Link className={languageLinkClass("zh")} href="/" aria-current={locale === "zh" ? "page" : undefined}>
            CN
          </Link>
          <Link className={languageLinkClass("en")} href="/en" aria-current={locale === "en" ? "page" : undefined}>
            EN
          </Link>
        </div>

        <a
          href={`mailto:${personal.email}`}
          className="button-quiet hidden rounded-md border border-ink bg-ink px-4 py-2 text-sm font-medium text-white md:inline-flex"
        >
          {content.ui.contactLabel}
        </a>

        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-line text-ink lg:hidden"
          type="button"
          aria-label={content.ui.toggleNavLabel}
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {isOpen ? (
        <motion.div
          className="border-t border-line bg-paper px-5 py-4 lg:hidden"
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.22, ease: [0.22, 1, 0.36, 1] }}
        >
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
            <div
              className="relative flex w-fit items-center rounded-full border border-line bg-white/64 p-1 text-sm"
              aria-label={content.ui.languageLabel}
            >
              <motion.span
                className={`absolute bottom-1 top-1 rounded-full bg-paper shadow-[0_8px_24px_rgba(12,20,36,0.08)] ${
                  locale === "zh" ? "left-1 w-[42px]" : "left-[47px] w-[42px]"
                }`}
                layout
                transition={{ duration: prefersReducedMotion ? 0 : 0.24, ease: [0.22, 1, 0.36, 1] }}
              />
              <Link
                className={languageLinkClass("zh")}
                href="/"
                aria-current={locale === "zh" ? "page" : undefined}
                onClick={() => setIsOpen(false)}
              >
                CN
              </Link>
              <Link
                className={languageLinkClass("en")}
                href="/en"
                aria-current={locale === "en" ? "page" : undefined}
                onClick={() => setIsOpen(false)}
              >
                EN
              </Link>
            </div>
          </div>
        </motion.div>
      ) : null}
    </motion.header>
  );
}
