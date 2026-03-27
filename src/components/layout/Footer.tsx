import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="bg-text-primary text-bg-primary py-16">
      <div className="mx-auto max-w-content px-6 md:px-[60px]">
        <div className="grid md:grid-cols-3 gap-12 md:gap-16">
          <div>
            <p className="font-heading text-xl font-semibold mb-4">
              {siteConfig.name}
            </p>
            <p className="text-sm text-bg-primary/60 leading-relaxed max-w-[30ch]">
              {siteConfig.tagline}. {siteConfig.address.suburb}, Melbourne.
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.08em] font-medium text-bg-primary/40 mb-4">
              Pages
            </p>
            <nav className="flex flex-col gap-3">
              {siteConfig.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-bg-primary/70 hover:text-bg-primary transition-colors duration-base ease-smooth"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.08em] font-medium text-bg-primary/40 mb-4">
              Contact
            </p>
            <address className="not-italic text-sm text-bg-primary/70 flex flex-col gap-2">
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
        <div className="mt-16 pt-8 border-t border-bg-primary/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-bg-primary/40">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <Link
            href="/privacy"
            className="text-xs text-bg-primary/40 hover:text-bg-primary/60 transition-colors duration-base"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
