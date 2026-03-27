import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const conditions = [
  {
    title: "Anxiety held in the body",
    description:
      "The tight chest, the shallow breathing, the tension that doesn't ease no matter what you try. Your nervous system is stuck in protection mode.",
  },
  {
    title: "Stress that won't shift",
    description:
      "You've tried rest, exercise, meditation. The stress sits deeper than any of those can reach, lodged in patterns your body learned years ago.",
  },
  {
    title: "Emotional patterns on repeat",
    description:
      "The same reactions, the same overwhelm, the same shutdown. You know it's a pattern but knowing hasn't been enough to change it.",
  },
  {
    title: "Physical tension with no clear cause",
    description:
      "Headaches, jaw clenching, shoulder pain, digestive issues. Scans come back clear but your body is clearly holding something.",
  },
];

export function WhatIHelpWith() {
  return (
    <Section bg="primary">
      <Container>
        <Reveal className="text-center mb-16 md:mb-20">
          <p className="label-caps mb-5">
            What I help with
          </p>
          <h2 className="font-heading text-text-primary max-w-[560px] mx-auto">
            You don&rsquo;t have to keep guessing what you need
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-[920px] mx-auto">
          {conditions.map((condition, i) => (
            <Reveal key={i} delay={i * 50}>
              <div className="bg-bg-secondary-light rounded-lg p-8 md:p-10 transition-all duration-base ease-smooth hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] h-full">
                <h3 className="font-heading text-text-primary mb-3 text-lg">{condition.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed font-light">
                  {condition.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
