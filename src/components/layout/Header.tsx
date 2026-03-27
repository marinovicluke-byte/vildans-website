"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/Button";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-slow ease-smooth ${
        scrolled
          ? "py-3 bg-bg-primary/90 backdrop-blur-[12px] shadow-[0_1px_2px_rgba(0,0,0,0.05)]"
          : "py-6 md:py-8 bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-content px-6 md:px-[60px] flex items-center justify-between">
        <Link
          href="/"
          className={`font-heading font-semibold tracking-[-0.02em] transition-all duration-slow ease-smooth ${
            scrolled ? "text-lg" : "text-xl md:text-2xl"
          }`}
        >
          {siteConfig.name}
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative text-[13px] text-text-secondary font-body font-normal tracking-wide hover:text-text-primary transition-colors duration-base ease-smooth group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-accent transition-[width] duration-base ease-smooth group-hover:w-full" />
            </Link>
          ))}
          <Button href={siteConfig.bookingUrl} variant="primary">
            Book a Session
          </Button>
        </nav>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          <span
            className={`block w-6 h-[1.5px] bg-text-primary transition-all duration-base ease-smooth ${
              mobileOpen ? "rotate-45 translate-y-[4.5px]" : ""
            }`}
          />
          <span
            className={`block w-6 h-[1.5px] bg-text-primary transition-all duration-base ease-smooth ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-[1.5px] bg-text-primary transition-all duration-base ease-smooth ${
              mobileOpen ? "-rotate-45 -translate-y-[4.5px]" : ""
            }`}
          />
        </button>
      </div>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
