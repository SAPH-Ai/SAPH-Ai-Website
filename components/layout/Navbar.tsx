"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Logo } from "@/components/brand/Logo";
import { Wordmark } from "@/components/brand/Wordmark";
import { CloseIcon, MenuIcon } from "@/components/ui/Icons";
import { navLinks } from "@/lib/nav";

function useActiveSection(enabled: boolean) {
  const [active, setActive] = useState<string>("home");
  useEffect(() => {
    if (!enabled) return;
    const sections = navLinks
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      // A thin band just under the header decides which section is "current".
      { rootMargin: "-30% 0px -60% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [enabled]);
  return active;
}

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const activeSection = useActiveSection(isHome);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (link: (typeof navLinks)[number]) =>
    isHome ? activeSection === link.id : link.route !== null && pathname.startsWith(link.route);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "bg-brand-navy/80 shadow-brand-ink/20 border-b border-white/10 shadow-lg backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <a
        href="#main"
        className="text-brand-navy sr-only rounded-full bg-white px-4 py-2 font-semibold focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50"
      >
        Skip to content
      </a>
      <nav
        aria-label="Main"
        className="mx-auto flex h-[var(--header-height)] max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8"
      >
        <Link href="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <Logo title={null} gap="#dce7ee" priority className="size-9" />
          <Wordmark tone="light" priority className="text-[1.45rem]" />
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const active = isActive(link);
            return (
              <li key={link.id}>
                <Link
                  href={link.href}
                  aria-current={active ? (isHome ? "location" : "page") : undefined}
                  className={`relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                    active ? "bg-white/12 text-white" : "text-mist-200 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <button
          ref={toggleRef}
          type="button"
          className="grid size-11 place-items-center rounded-full text-white hover:bg-white/10 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon className="size-6" /> : <MenuIcon className="size-6" />}
        </button>
      </nav>

      <div
        id="mobile-menu"
        hidden={!open}
        className="bg-brand-navy/95 border-t border-white/10 backdrop-blur-xl lg:hidden"
      >
        <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4 sm:px-6">
          {navLinks.map((link) => {
            const active = isActive(link);
            return (
              <li key={link.id}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  aria-current={active ? (isHome ? "location" : "page") : undefined}
                  className={`block rounded-xl px-4 py-3 text-base font-medium ${
                    active
                      ? "bg-white/12 text-white"
                      : "text-mist-200 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}
