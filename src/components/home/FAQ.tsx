"use client";

import { useState } from "react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";

const faqs = [
  {
    question: "What is kinesiology and how does it work?",
    answer:
      "Kinesiology uses muscle monitoring, gentle pressure applied to a muscle (usually on your arm), to identify where your body is holding stress, tension, or imbalance. Your muscles respond differently when a stressor is present. Once we identify what's going on, we use corrections drawn from Chinese medicine, neuroscience, and somatic processing to help your body release it.",
  },
  {
    question: "How much does a session cost?",
    answer:
      "A single session is $270. Per-session rates are lower inside a tailored roadmap. To explore what's right for you, book a free Clarity & Alignment Session and we'll work it out together.",
  },
  {
    question: "How many sessions will I need?",
    answer:
      "It depends on what you're working with. Some people feel significant shifts in 2-3 sessions. Deeper or long-held patterns often need 6-8 sessions. I'll be honest with you about what I think after the first session, I won't keep you coming back without reason.",
  },
  {
    question: "What should I wear? Do I need to prepare anything?",
    answer:
      "Wear comfortable clothes you can move your arm freely in. Eat something light beforehand, not a full meal but don't come on an empty stomach. Drink water. That's it.",
  },
  {
    question: "What does a session actually feel like?",
    answer:
      "You lie fully clothed on a treatment table. I apply gentle pressure to your arm while we work through different stressors. It's not painful. Most people find it calming. Some sessions bring up emotion, that's normal and part of the process. You're in control the entire time.",
  },
  {
    question: "Do you offer online sessions?",
    answer:
      "Yes. Online sessions use surrogate muscle monitoring and verbal processing. They're effective for ongoing work, especially if you can't make it to Moorabbin. The initial session is ideally in person so I can work with you directly.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Section bg="secondary-light">
      <Container narrow>
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs uppercase tracking-[0.08em] font-medium text-text-secondary mb-4">
            Common questions
          </p>
          <h2 className="font-heading text-text-primary">
            What you might be wondering
          </h2>
        </div>
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

export { faqs };
