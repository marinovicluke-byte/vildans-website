import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

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
    <Section bg="secondary-light">
      <Container>
        <Reveal className="text-center mb-16 md:mb-20">
          <p className="label-caps mb-5">
            Your first session
          </p>
          <h2 className="font-heading text-text-primary max-w-[500px] mx-auto">
            How it works
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-10 md:gap-16 max-w-[1000px] mx-auto">
          {steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 80}>
              <div className="relative">
                <p className="font-heading text-[4rem] md:text-[5rem] font-extralight leading-none text-bg-secondary/40 mb-6 tracking-tight">
                  {step.number}
                </p>
                <h3 className="font-heading text-text-primary mb-4 text-lg font-medium">{step.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed font-light">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
