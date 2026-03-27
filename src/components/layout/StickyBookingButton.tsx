"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site-config";

export function StickyBookingButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-8 right-8 z-40 transition-all duration-base ease-smooth md:hidden ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <Button
        href={siteConfig.bookingUrl}
        variant="primary"
        className="shadow-[0_8px_24px_rgba(183,82,54,0.3)]"
      >
        Book Now
      </Button>
    </div>
  );
}
