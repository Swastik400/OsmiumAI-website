"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/#features", label: "Features" },
  { href: "/about", label: "About" },
  { href: "/about#our-story", label: "Our Story" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full">
      <header className="fixed inset-x-0 top-0 z-50" style={{ backgroundColor: "rgba(253,252,252,0.8)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)" }}>
        <div className="flex h-16 items-center gap-x-7 xl:gap-x-9 mx-auto max-w-7xl px-5 sm:px-8 relative">
          {/* Skip to content — accessibility */}
          <a
            href="#content"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-black text-white active:scale-[0.98] transition-transform duration-300 ease-out outline-none focus-visible:outline-2 focus-visible:outline-black w-fit h-10 px-4 type-sm fixed left-[-99999px] top-5 z-[99999] focus-visible:left-5"
          >
            Skip to content
          </a>

          {/* Logo + Nav */}
          <div>
            <nav>
              <ul aria-orientation="horizontal" className="flex gap-x-7 xl:gap-x-9 text-black">
                {/* Logo */}
                <li className="relative lg:-top-0.5">
                  <Link
                    aria-label="Osmium"
                    className="group outline-none focus-visible:outline-2 focus-visible:outline-black rounded-full h-9 flex gap-1 items-center px-3 -mx-3 text-black flex-none"
                    href="/"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/logo.png"
                      alt="Osmium"
                      style={{ height: "2.25rem", filter: "contrast(1.15) brightness(0.95)" }}
                    />
                  </Link>
                </li>

                {/* Desktop nav links */}
                <li className="hidden lg:block">
                  <ul role="list" className="flex">
                    {navLinks.map((link) => (
                      <li key={link.href} className="flex">
                        <Link
                          className="py-2 px-3 text-[0.8125rem]/5 transition-colors outline-none focus-visible:outline-2 focus-visible:outline-black hover:bg-black/[0.04]"
                          style={{ borderRadius: "1.125rem" }}
                          href={link.href}
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </nav>
          </div>

          {/* Right side — CTA buttons */}
          <div className="ml-auto flex items-center justify-end gap-x-4">
            <div className="flex items-center gap-x-2">
              <Link
                className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.06),0_1px_2px_0_rgba(0,0,0,0.04),0_2px_4px_0_rgba(0,0,0,0.04)] outline-none focus-visible:outline-2 focus-visible:outline-black active:scale-[0.98] transition-transform duration-300 ease-out w-fit h-7 type-xs px-3 hover:bg-warm-50 min-w-[3.75rem] hidden lg:inline-flex"
                href="/contact"
              >
                Contact
              </Link>
              <Link
                className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-black text-white active:scale-[0.98] transition-transform duration-300 ease-out outline-none focus-visible:outline-2 focus-visible:outline-black w-fit h-7 type-xs px-3 hover:bg-warm-900 min-w-[3.75rem]"
                href="/contact"
              >
                Get started
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              className="relative rounded-full outline-none p-1.5 -m-1.5 -mr-2.5 focus-visible:outline-2 focus-visible:outline-black lg:hidden text-black"
              type="button"
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              aria-label={open ? "Close main navigation" : "Open main navigation"}
            >
              <span className="absolute -inset-2.5" />
              {open ? (
                <svg fill="none" viewBox="0 0 24 24" aria-hidden="true" className="size-6">
                  <path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M6 6l12 12M6 18L18 6" />
                </svg>
              ) : (
                <svg fill="none" viewBox="0 0 24 24" aria-hidden="true" className="size-6">
                  <path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M4 8h16M4 16h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Bottom border line */}
        <div className="absolute inset-x-0 bottom-0 h-px bg-black/[0.06]" />
      </header>

      {/* Mobile slide-down panel */}
      {open && (
        <div className="fixed inset-0 z-40 lg:hidden" onClick={() => setOpen(false)}>
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />

          {/* Panel */}
          <div
            className="absolute inset-x-0 top-16 bg-cream border-b border-black/[0.06] shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="mx-auto max-w-7xl px-5 sm:px-8 py-6">
              <ul className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block py-2.5 px-3 text-[0.9375rem] text-black transition-colors rounded-xl hover:bg-black/[0.04]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-6 border-t border-black/[0.06] flex flex-wrap gap-2">
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.06),0_1px_2px_0_rgba(0,0,0,0.04),0_2px_4px_0_rgba(0,0,0,0.04)] active:scale-[0.98] transition-transform duration-300 ease-out h-10 px-5 type-sm hover:bg-warm-50"
                >
                  Contact
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-black text-white active:scale-[0.98] transition-transform duration-300 ease-out h-10 px-5 type-sm hover:bg-warm-900"
                >
                  Get started
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}
