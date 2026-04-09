"use client";

import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { Sun, Monitor, Moon } from "lucide-react";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/career", label: "Career" },
  { href: "/news", label: "News" },
];

type Theme = "light" | "system" | "dark";

function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  const apply = useCallback((t: Theme) => {
    const html = document.documentElement;
    const isDark = t === "dark" || (t === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);
    html.classList.toggle("dark", isDark);
  }, []);

  useEffect(() => {
    const saved = (localStorage.getItem("theme") as Theme) || "light";
    setTheme(saved);
    apply(saved);
    setMounted(true);
  }, [apply]);

  function set(t: Theme) {
    setTheme(t);
    localStorage.setItem("theme", t);
    apply(t);
  }

  if (!mounted) return <div className="w-[78px] h-6" />;

  const offset = theme === "light" ? 0 : theme === "system" ? 24 : 48;

  return (
    <div className="relative flex h-6 items-center rounded-full border px-0.5" style={{ backgroundColor: "var(--section-bg)", borderColor: "var(--card-border)" }}>
      <div
        className="absolute top-[3px] left-[2px] h-[18px] w-[22px] rounded-full shadow-sm transition-transform duration-200 ease-out"
        style={{ transform: `translateX(${offset}px)`, backgroundColor: "var(--card-bg)" }}
      />
      {([
        { key: "light" as Theme, Icon: Sun, label: "Light mode" },
        { key: "system" as Theme, Icon: Monitor, label: "System theme" },
        { key: "dark" as Theme, Icon: Moon, label: "Dark mode" },
      ]).map(({ key, Icon, label }) => (
        <button
          key={key}
          onClick={() => set(key)}
          className="relative z-10 flex items-center justify-center h-4 w-6 rounded-full transition-colors"
          style={{ color: theme === key ? "var(--page-text)" : "#949494" }}
          aria-label={label}
          type="button"
        >
          <Icon className="size-3" />
        </button>
      ))}
    </div>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 right-0 left-0 z-[10000] w-full">
      <div
        className="absolute top-0 right-0 left-0 h-8 lg:h-10 pointer-events-none"
        style={{
          background: "linear-gradient(var(--page-bg) 40%, transparent)",
          maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
        }}
      />

      <div className="relative mx-auto w-full max-w-[1400px] px-3 pt-2.5 lg:px-8 lg:pt-3">
        <div
          className="rounded-[34px] overflow-hidden"
          style={{
            backgroundColor: "var(--nav-bg)",
            border: "1px solid var(--nav-border)",
            backdropFilter: "blur(24px) saturate(1.3) brightness(1.04)",
            WebkitBackdropFilter: "blur(24px) saturate(1.3) brightness(1.04)",
            boxShadow: "rgba(0, 0, 0, 0.02) 0px 2px 24px, rgba(0, 0, 0, 0.04) 0px 1px 3px inset",
          }}
        >
          {/* Desktop */}
          <nav className="hidden lg:flex justify-between items-center py-2.5 pr-2.5 pl-9 w-full">
            <div className="flex flex-1 justify-between items-center mx-auto">
              <Link href="/" className="flex flex-1 items-center gap-2 transition-opacity hover:opacity-80">
                <span className="type-3xl font-medium tracking-tight" style={{ color: "var(--heading-color)" }}>NAVCHETNA</span>
              </Link>

              <div className="hidden lg:flex flex-2 justify-center items-center gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-lg transition-colors duration-200"
                    style={{ color: "var(--page-text)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--card-border)")}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
                  >
                    <span className="font-medium text-xs uppercase tracking-[1px]">
                      {link.label}
                    </span>
                  </Link>
                ))}
              </div>

              <div className="hidden md:flex flex-1 justify-end items-center gap-3">
                <ThemeToggle />
                <Link
                  href="/contact"
                  className="group relative inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium overflow-hidden transition-all duration-500 active:scale-95 whitespace-nowrap dark:bg-white dark:text-black bg-[#131313] text-white"
                  style={{ boxShadow: "inset 0 0 12px rgba(255,255,255,0.2), 0px 0px 2px 0 rgba(0,0,0,0.1)" }}
                >
                  <span className="z-10 relative">Contact Us</span>
                </Link>
              </div>
            </div>
          </nav>

          {/* Mobile */}
          <div className="lg:hidden flex flex-col">
            <div className="flex justify-between items-center px-6 py-2.5">
              <Link href="/" className="relative flex items-center gap-2">
                <span className="type-3xl font-medium tracking-tight text-sm" style={{ color: "var(--heading-color)" }}>NAVCHETNA</span>
              </Link>
              <div className="flex items-center gap-3">
                <ThemeToggle />
                <button
                  className="flex flex-col justify-center items-center space-y-[3px] focus:outline-none w-7 h-7"
                  aria-label="Toggle menu"
                  onClick={() => setOpen(!open)}
                >
                  <span className={`w-[18px] h-[1.5px] transition-all duration-300 ease-out origin-center ${open ? "rotate-45 translate-y-[4.5px]" : ""}`} style={{ backgroundColor: "var(--page-text)" }} />
                  <span className={`w-[18px] h-[1.5px] transition-all duration-300 ease-out ${open ? "opacity-0" : ""}`} style={{ backgroundColor: "var(--page-text)" }} />
                  <span className={`w-[18px] h-[1.5px] transition-all duration-300 ease-out origin-center ${open ? "-rotate-45 -translate-y-[4.5px]" : ""}`} style={{ backgroundColor: "var(--page-text)" }} />
                </button>
              </div>
            </div>

            <div
              className="overflow-hidden transition-all duration-300 ease-out"
              style={{ maxHeight: open ? "400px" : "0px" }}
            >
              <div className="px-6 pb-6 pt-2">
                <div className="flex flex-col gap-1">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block py-2.5 px-3 text-xs uppercase tracking-[1px] font-medium rounded-lg transition-colors"
                      style={{ color: "var(--page-text)" }}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
                <div className="mt-4 pt-4 flex gap-2" style={{ borderTop: "1px solid var(--card-border)" }}>
                  <Link
                    href="/contact"
                    onClick={() => setOpen(false)}
                    className="flex-1 inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium active:scale-95 transition-transform dark:bg-white dark:text-black bg-[#131313] text-white"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
