"use client";

import { useState } from "react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

/* ─── Data ─── */

const highlights = [
  {
    statement: "\u201CShe helped me understand why my body wouldn\u2019t let go of anxiety.\u201D",
    context:
      "Sarah came in with constant jaw clenching and headaches no one could explain. Three sessions revealed grief she\u2019d been carrying for years.",
  },
  {
    statement: "\u201CMy GP noticed the difference before I even mentioned it.\u201D",
    context:
      "James was sceptical but desperate. His anxiety had become physical, chest tightness, shallow breathing, constant nausea. Two months in, the shift was undeniable.",
  },
  {
    statement: "\u201CThe first thing that actually made the pattern shift.\u201D",
    context:
      "Priya kept ending up in the same emotional loops around work stress. Muscle monitoring showed her exactly where she was holding it and why.",
  },
];

const stories = [
  {
    label: "Vildan helped me release years of grief",
    name: "Sarah M.",
    issue: "Jaw tension & chronic headaches",
    body: "I came in with constant jaw clenching and headaches that no one could explain. After three sessions, Vildan found it was connected to grief I\u2019d been carrying for years. The tension hasn\u2019t come back. She didn\u2019t just treat the symptom, she found the root. I\u2019d tried physio, chiro, even a mouth guard. Nothing worked because nobody looked deeper. Vildan did.",
  },
  {
    label: "My anxiety symptoms are finally gone",
    name: "James K.",
    issue: "Anxiety-driven physical symptoms",
    body: "I was sceptical about kinesiology but desperate. My anxiety had become physical, chest tightness, shallow breathing, constant nausea. Vildan\u2019s approach was grounded and specific. Two months in, my GP noticed the difference before I mentioned it. She didn\u2019t promise anything she couldn\u2019t deliver. She just showed me, session by session, what was shifting and why.",
  },
  {
    label: "I finally broke a lifelong stress pattern",
    name: "Priya D.",
    issue: "Recurring stress patterns",
    body: "I kept ending up in the same emotional patterns, especially around work stress. The muscle monitoring showed me exactly where I was holding it and why I kept reacting the same way. It was the first thing that actually made the pattern shift. I\u2019d done therapy, meditation, breathwork. All helpful, but none of them got to the thing underneath. This did.",
  },
  {
    label: "She helped me sleep through the night again",
    name: "Monica R.",
    issue: "Insomnia & nervous system dysregulation",
    body: "I hadn\u2019t slept through the night in over two years. My nervous system was stuck in overdrive, always scanning, always on. Vildan worked with me over six sessions. She found old stress responses locked in my body that were keeping me wired at night. Within a month, I was sleeping six hours straight for the first time in years. It felt like getting my life back.",
  },
];

/* ─── Component ─── */

export function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <Section bg="primary">
      <Container>
        {/* ── Top: 3 Highlight Cards ── */}
        <Reveal className="text-center mb-14 md:mb-20">
          <p className="label-caps mb-5 text-accent">Real Results</p>
          <h2 className="font-heading text-text-primary">
            Real stories. Real relief.
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-5 md:gap-6 max-w-[1100px] mx-auto mb-20 md:mb-28">
          {highlights.map((h, i) => (
            <Reveal key={i} delay={i * 80} className="flex flex-col">
              <div className="rounded-lg border border-border bg-white p-6 md:p-7 flex flex-col flex-1 transition-all duration-base ease-smooth hover:-translate-y-0.5 hover:shadow-card-hover">
                <p className="font-heading text-text-primary text-[1.05rem] leading-snug mb-4 italic flex-1">
                  {h.statement}
                </p>
                <p className="text-text-secondary text-sm leading-relaxed font-light">
                  {h.context}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* ── Bottom: Accordion + Detail Panel ── */}
        <Reveal className="text-center mb-12 md:mb-16">
          <p className="label-caps mb-5 text-[#9CAF88]">Stories</p>
          <h2 className="font-heading text-text-primary">
            Hear it in their words.
          </h2>
        </Reveal>

        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-0 max-w-[1100px] mx-auto">
            {/* Left: Accordion list */}
            <div className="flex flex-col">
              {stories.map((story, i) => {
                const isActive = active === i;
                return (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`group relative flex items-start gap-4 px-5 py-5 text-left transition-all duration-300 ease-smooth border-l-2 ${
                      isActive
                        ? "border-l-accent bg-white shadow-[0_2px_12px_rgba(0,0,0,0.06)] rounded-l-lg"
                        : "border-l-transparent hover:border-l-border-strong"
                    }`}
                  >
                    {/* Number */}
                    <span
                      className={`flex-shrink-0 font-body text-xs font-semibold tracking-[0.06em] mt-0.5 tabular-nums transition-colors duration-300 ${
                        isActive ? "text-accent" : "text-text-secondary/40"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    {/* Label */}
                    <span
                      className={`font-body text-sm font-medium leading-snug transition-colors duration-300 ${
                        isActive
                          ? "text-text-primary"
                          : "text-text-secondary group-hover:text-text-primary"
                      }`}
                    >
                      {story.label}
                    </span>

                    {/* Arrow */}
                    <span
                      className={`ml-auto flex-shrink-0 mt-0.5 transition-all duration-300 ${
                        isActive
                          ? "opacity-100 translate-x-0"
                          : "opacity-0 -translate-x-2"
                      }`}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        className="text-accent"
                      >
                        <path
                          d="M6 3l5 5-5 5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Right: Detail panel */}
            <div className="relative bg-white rounded-lg border border-border p-8 md:p-10 min-h-[320px] flex flex-col justify-center overflow-hidden">
              {/* Large watermark number */}
              <span className="absolute top-4 right-6 font-body text-[7rem] font-bold leading-none text-bg-secondary/15 select-none pointer-events-none">
                {String(active + 1).padStart(2, "0")}
              </span>

              <div className="relative z-10">
                {/* Label */}
                <div className="flex items-center gap-3 mb-5">
                  <span className="block w-6 h-px bg-accent" />
                  <p className="label-caps text-accent !mb-0">
                    Story {String(active + 1).padStart(2, "0")}
                  </p>
                </div>

                {/* Heading */}
                <h3 className="font-heading text-text-primary text-xl md:text-2xl mb-5 leading-snug">
                  {stories[active].label}
                </h3>

                {/* Body */}
                <p className="text-text-secondary text-[0.95rem] leading-relaxed font-light mb-6 max-w-[520px]">
                  &ldquo;{stories[active].body}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-bg-secondary-light flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-heading font-semibold text-text-primary">
                      {stories[active].name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-body font-semibold text-text-primary text-xs tracking-[0.04em] uppercase">
                      {stories[active].name}
                    </p>
                    <p className="text-text-secondary text-xs font-light">
                      {stories[active].issue}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
