"use client";

import { useState } from "react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { faqs } from "./faq-data";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Section bg="secondary-light">
      <Container narrow>
        <Reveal className="text-center mb-12 md:mb-16">
          <p className="text-xs uppercase tracking-[0.08em] font-medium text-text-secondary mb-4">
            Common questions
          </p>
          <h2 className="font-heading text-text-primary">
            What you might be wondering
          </h2>
        </Reveal>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-bg-primary rounded-lg border border-border-subtle overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full text-left p-6 flex items-center justify-between gap-4"
                aria-expanded={openIndex === i}
              >
                <h3 className="font-heading text-text-primary text-base font-medium pr-4">
                  {faq.question}
                </h3>
                <span
                  className={`flex-shrink-0 w-5 h-5 flex items-center justify-center text-text-secondary transition-transform duration-base ease-smooth ${
                    openIndex === i ? "rotate-45" : ""
                  }`}
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-base ease-smooth ${
                  openIndex === i ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="px-6 pb-6 text-text-secondary text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export { faqs } from "./faq-data";
