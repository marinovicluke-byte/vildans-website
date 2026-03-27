import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";

const steps = [
  {
    number: "01",
    title: "You arrive and we talk",
    description:
      "We start with a conversation about what's going on for you. No intake forms, no rushing. I need to understand what you're experiencing before we do anything else.",
  },
  {
    number: "02",
    title: "Muscle monitoring finds it",
    description:
      "Using gentle pressure on your arm, I test how your body responds to different stressors. Your muscles tell us exactly where the tension, emotion, or imbalance is held, often in places you wouldn't expect.",
  },
  {
    number: "03",
    title: "We work with what comes up",
    description:
      "Using techniques from Chinese medicine, neuroscience, and somatic processing, we address what the monitoring reveals. You leave knowing what your body was holding and what shifted.",
  },
];

export function HowItWorks() {
  return (
    <Section bg="primary">
      <Container>
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs uppercase tracking-[0.08em] font-medium text-text-secondary mb-4">
            Your first session
          </p>
          <h2 className="font-heading text-text-primary max-w-[500px] mx-auto">
            How it works
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 max-w-[1000px] mx-auto">
          {steps.map((step) => (
            <div key={step.number}>
              <p className="font-heading text-4xl font-light text-bg-secondary/60 mb-4">
                {step.number}
              </p>
              <h3 className="font-heading text-text-primary mb-3">{step.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
