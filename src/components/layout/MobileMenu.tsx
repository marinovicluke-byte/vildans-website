"use client";

import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/Button";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  if (!open) return null;

  return (
    <div className="md:hidden absolute top-full left-0 right-0 bg-bg-primary/98 backdrop-blur-md border-t border-border-subtle shadow-lg">
      <nav className="flex flex-col p-6 gap-6">
        {siteConfig.nav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={onClose}
            className="text-lg font-heading font-medium text-text-primary"
          >
            {item.label}
          </Link>
        ))}
        <Button href={siteConfig.bookingUrl} variant="primary">
          Book a Session
        </Button>
      </nav>
    </div>
  );
}
