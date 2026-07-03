"use client";

import { useState } from "react";

const LINKS = [
  { href: "/#about", label: "About" },
  { href: "/#services", label: "Services" },
  { href: "/#property", label: "The Property" },
  { href: "/#process", label: "Process" },
  { href: "/#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-ink/5 bg-cream/90 backdrop-blur-lg">
      <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-6">
        <a href="/" aria-label="C3 Properties — Home" className="flex items-baseline gap-1.5">
          <span className="font-serif text-3xl font-semibold text-teal">C3</span>
          <span className="text-sm tracking-[0.14em] text-ink/80 uppercase">Properties</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-ink/70 transition-colors hover:text-teal"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/#contact"
            className="rounded-full bg-teal px-5 py-2.5 text-sm font-semibold text-cream transition-colors hover:bg-teal-deep"
          >
            Get an Assessment
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="flex flex-col gap-1.5 p-2 md:hidden"
        >
          <span className={`h-0.5 w-6 bg-ink transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-6 bg-ink transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-6 bg-ink transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <div className="border-t border-ink/5 bg-cream px-6 pt-2 pb-6 md:hidden">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-base text-ink/80"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/#contact"
            onClick={() => setOpen(false)}
            className="mt-3 inline-block rounded-full bg-teal px-5 py-2.5 text-sm font-semibold text-cream"
          >
            Get an Assessment
          </a>
        </div>
      )}
    </nav>
  );
}
