"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "Rentals", href: "#rentals" },
  { label: "Fleet", href: "#fleet" },
  { label: "Sell Your Car", href: "#sell" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Reviews", href: "#reviews" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-[#08080d]/85 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="group flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 shadow-lg shadow-amber-500/30 transition-transform group-hover:scale-110">
            <svg viewBox="0 0 24 24" className="h-5 w-5 text-black" fill="currentColor" aria-hidden="true">
              <path d="M5 16l1.5-4.5A3 3 0 019.2 9.5h5.6a3 3 0 012.7 2l1.5 4.5H5z" />
              <path d="M4 16h16v2a1 1 0 01-1 1h-1a1 1 0 01-1-1v-1H7v1a1 1 0 01-1 1H5a1 1 0 01-1-1v-2z" />
              <circle cx="8" cy="16" r="1.5" fill="#0a0a0f" />
              <circle cx="16" cy="16" r="1.5" fill="#0a0a0f" />
            </svg>
          </span>
          <span className="text-lg font-bold tracking-tight">
            Velocity<span className="text-amber-400">Motors</span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-zinc-300 transition-colors hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="#contact"
            className="rounded-full px-4 py-2 text-sm font-medium text-zinc-300 transition-colors hover:text-white"
          >
            Sign In
          </a>
          <a
            href="#rentals"
            className="rounded-full bg-gradient-to-r from-amber-400 to-amber-600 px-5 py-2.5 text-sm font-semibold text-black shadow-lg shadow-amber-500/25 transition-all hover:shadow-amber-400/40 hover:brightness-110"
          >
            Book Now
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 text-zinc-200 md:hidden"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-[#0a0a10]/95 px-5 py-4 backdrop-blur-xl md:hidden">
          <ul className="flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-zinc-300 hover:bg-white/5 hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-3 flex flex-col gap-2 border-t border-white/10 pt-4">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="block rounded-full px-4 py-3 text-center text-sm font-medium text-zinc-300 hover:text-white"
            >
              Sign In
            </a>
            <a
              href="#rentals"
              onClick={() => setOpen(false)}
              className="block rounded-full bg-gradient-to-r from-amber-400 to-amber-600 px-4 py-3 text-center text-sm font-semibold text-black"
            >
              Book Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
