import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const credentials = [
  { label: "PKP Qualified", detail: "Professional Kinesiology Practice" },
  { label: "Trauma-Informed", detail: "Safe, grounded approach" },
  { label: "In-Person & Online", detail: "Moorabbin, Melbourne" },
];

export function CredibilityStrip() {
  return (
    <section className="py-8 md:py-12 border-y border-border-subtle">
      <Container>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-16">
          {credentials.map((cred, i) => (
            <Reveal key={i} delay={i * 50} className="text-center">
              <p className="text-xs uppercase tracking-[0.08em] font-medium text-text-secondary mb-1">
                {cred.label}
              </p>
              <p className="text-sm text-text-primary font-body">{cred.detail}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
