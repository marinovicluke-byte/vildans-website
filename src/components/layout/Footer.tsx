import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="bg-text-primary text-bg-primary py-20 md:py-24">
      <div className="mx-auto max-w-content px-6 md:px-[60px]">
        <div className="grid md:grid-cols-3 gap-12 md:gap-20">
          <div>
            <p className="font-heading text-xl font-semibold mb-5 tracking-[-0.02em]">
              {siteConfig.name}
            </p>
            <p className="text-sm text-bg-primary/50 leading-relaxed max-w-[30ch] font-light">
              {siteConfig.tagline}. {siteConfig.address.suburb}, Melbourne.
            </p>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.08em] font-medium text-bg-primary/35 mb-5">
              Pages
            </p>
            <nav className="flex flex-col gap-4">
              {siteConfig.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-bg-primary/60 hover:text-bg-primary transition-colors duration-base ease-smooth font-light"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.08em] font-medium text-bg-primary/35 mb-5">
              Contact
            </p>
            <address className="not-italic text-sm text-bg-primary/60 flex flex-col gap-3 font-light">
              <p>{siteConfig.address.formatted}</p>
              <a
                href={`mailto:${siteConfig.email}`}
                className="hover:text-bg-primary transition-colors duration-base"
              >
                {siteConfig.email}
              </a>
              {siteConfig.phone && (
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="hover:text-bg-primary transition-colors duration-base"
                >
                  {siteConfig.phone}
                </a>
              )}
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-bg-primary transition-colors duration-base"
              >
                Instagram
              </a>
            </address>
          </div>
        </div>
        <div className="mt-20 pt-8 border-t border-bg-primary/8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-bg-primary/30 font-light">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <Link
            href="/privacy"
            className="text-xs text-bg-primary/30 hover:text-bg-primary/50 transition-colors duration-base font-light"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
