"use client";

import { useEffect, useState } from "react";

type HeroRevealProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
};

export function HeroReveal({ children, delay = 0, className = "" }: HeroRevealProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    /* Respect reduced motion */
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setIsVisible(true);
      return;
    }

    const timer = setTimeout(() => setIsVisible(true), 150 + delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(16px)",
        transition: `opacity 700ms cubic-bezier(0.16, 1, 0.3, 1), transform 700ms cubic-bezier(0.16, 1, 0.3, 1)`,
      }}
    >
      {children}
    </div>
  );
}
