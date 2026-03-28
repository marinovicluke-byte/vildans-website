import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const testimonials = [
  {
    quote:
      "After three sessions, Vildan found my headaches were connected to grief I'd been carrying for years. The tension hasn't come back.",
    name: "Sarah M.",
    role: "Jaw tension & chronic headaches",
    rating: "5.0",
    accentColor: "bg-bg-secondary", // sage green
  },
  {
    quote:
      "My anxiety had become physical. Vildan's approach was grounded and specific. Two months in, my GP noticed the difference before I mentioned it.",
    name: "James K.",
    role: "Anxiety-driven physical symptoms",
    rating: "5.0",
    accentColor: "bg-text-primary", // dark
  },
  {
    quote:
      "The muscle monitoring showed me exactly where I was holding stress and why I kept reacting the same way. It was the first thing that made it shift.",
    name: "Priya D.",
    role: "Recurring stress patterns",
    rating: "5.0",
    accentColor: "bg-accent", // terracotta
  },
];

function StarIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="#F5C518" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

export function Testimonials() {
  return (
    <Section bg="primary">
      <Container>
        {/* Header */}
        <Reveal className="text-center mb-16 md:mb-20">
          <p className="label-caps mb-5 text-accent">
            Client Satisfaction
          </p>
          <h2 className="font-heading text-text-primary">
            What Our <span className="font-bold">Clients Say</span>
          </h2>
          <p className="text-text-secondary mt-4 max-w-[560px] mx-auto font-light">
            Real experiences from people who came in carrying tension, stress, and patterns their body wouldn&rsquo;t let go of.
          </p>
        </Reveal>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-[1100px] mx-auto">
          {testimonials.map((testimonial, i) => (
            <Reveal key={i} delay={i * 80} className="flex flex-col">
              <div className="bg-white rounded-lg shadow-[0_2px_16px_rgba(0,0,0,0.06)] flex flex-col flex-1 overflow-hidden transition-all duration-base ease-smooth hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.1)]">
                <div className="p-8 md:p-10 flex flex-col flex-1">
                  {/* Stars + Rating */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex gap-0.5">
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                    </div>
                    <span className="text-[11px] font-body font-semibold tracking-[0.08em] uppercase text-text-secondary">
                      {testimonial.rating} Google Rating
                    </span>
                  </div>

                  {/* Quote */}
                  <p className="text-text-primary text-sm leading-relaxed flex-1 mb-8 font-light italic">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    {/* Avatar placeholder */}
                    <div className="w-10 h-10 rounded-full bg-bg-secondary-light flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-heading font-semibold text-text-primary">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-body font-semibold text-text-primary text-xs tracking-[0.04em] uppercase">
                        {testimonial.name}
                      </p>
                      <p className="text-text-secondary text-xs mt-0.5 font-light">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Coloured accent bar at bottom */}
                <div className={`h-1 ${testimonial.accentColor} w-full`} />
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
