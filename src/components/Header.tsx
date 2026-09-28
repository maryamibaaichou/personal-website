"use client";

import { useEffect, useState } from "react";
import { nav, site } from "@/content/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-40 px-3 pt-3 sm:px-6 sm:pt-4">
      <div
        className={`mx-auto flex h-14 max-w-6xl items-center justify-between rounded-full border pl-2 pr-2 transition-[background-color,border-color] duration-500 sm:pr-2.5 ${
          scrolled || open ? "border-line bg-surface/80 backdrop-blur-xl" : "border-transparent bg-transparent"
        }`}
      >
        <a href="#top" className="flex items-center gap-3 rounded-full pr-3" aria-label={`${site.name}, back to top`}>
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-wine font-display text-sm font-semibold tracking-tight text-fg">
            MI
          </span>
          <span className="hidden font-display text-[0.95rem] font-medium tracking-tight sm:inline">Maryam Ibaaichou</span>
        </a>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-1 text-sm text-fg-soft">
            {nav.slice(0, -1).map((item) => (
              <li key={item.href}>
                <a href={item.href} className="rounded-full px-4 py-2 transition-colors hover:bg-surface-2 hover:text-fg">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden rounded-full bg-fg px-5 py-2.5 text-sm font-medium text-bg transition-colors hover:bg-rose md:inline-flex"
          >
            Let&rsquo;s talk
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-surface-2 md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="relative block h-3 w-4" aria-hidden="true">
              <span
                className={`absolute left-0 block h-px w-4 bg-fg transition-transform duration-300 ${
                  open ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 block h-px w-4 bg-fg transition-transform duration-300 ${
                  open ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        hidden={!open}
        className="mx-auto mt-2 max-w-6xl rounded-[1.75rem] border border-line bg-surface/95 p-3 backdrop-blur-xl md:hidden"
      >
        <nav aria-label="Mobile">
          <ul className="flex flex-col">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between rounded-2xl px-4 py-4 font-display text-2xl font-medium hover:bg-surface-2"
                >
                  {item.label}
                  <span aria-hidden="true" className="text-base text-rose">
                    ↗
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
