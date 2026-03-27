import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const testimonials = [
  {
    quote:
      "I came in with constant jaw clenching and headaches that no one could explain. After three sessions, Vildan found it was connected to grief I'd been carrying for years. The tension hasn't come back.",
    name: "Sarah M.",
    condition: "Jaw tension & chronic headaches",
  },
  {
    quote:
      "I was sceptical about kinesiology but desperate. My anxiety had become physical, chest tightness, shallow breathing, constant nausea. Vildan's approach was grounded and specific. Two months in, my GP noticed the difference before I mentioned it.",
    name: "James K.",
    condition: "Anxiety-driven physical symptoms",
  },
  {
    quote:
      "I kept ending up in the same emotional patterns, especially around work stress. The muscle monitoring showed me exactly where I was holding it and why I kept reacting the same way. It was the first thing that actually made the pattern shift.",
    name: "Priya D.",
    condition: "Recurring stress patterns",
  },
];

export function Testimonials() {
  return (
    <Section bg="secondary-light">
      <Container>
        <Reveal className="text-center mb-12 md:mb-16">
          <p className="text-xs uppercase tracking-[0.08em] font-medium text-text-secondary mb-4">
            Client experiences
          </p>
          <h2 className="font-heading text-text-primary">
            What changes look like
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-8 max-w-[1100px] mx-auto">
          {testimonials.map((testimonial, i) => (
            <Reveal key={i} delay={i * 50} className="flex flex-col">
              <blockquote className="bg-bg-primary rounded-lg p-8 border border-border-subtle flex flex-col flex-1">
                <p className="text-text-primary text-sm leading-relaxed flex-1 mb-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <footer>
                  <p className="font-heading font-semibold text-text-primary text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-text-secondary text-xs mt-1">{testimonial.condition}</p>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
