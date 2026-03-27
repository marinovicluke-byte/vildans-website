import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const credentials = [
  { label: "PKP Qualified", detail: "Professional Kinesiology Practice" },
  { label: "Trauma-Informed", detail: "Safe, grounded approach" },
  { label: "In-Person & Online", detail: "Moorabbin, Melbourne" },
];

export function CredibilityStrip() {
  return (
    <section className="py-10 md:py-14 bg-bg-secondary-light">
      <Container>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-20">
          {credentials.map((cred, i) => (
            <Reveal key={i} delay={i * 50} className="text-center">
              <p className="label-caps mb-1.5">
                {cred.label}
              </p>
              <p className="text-sm text-text-primary font-body font-light">{cred.detail}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
