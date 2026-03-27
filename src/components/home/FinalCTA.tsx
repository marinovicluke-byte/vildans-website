import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/lib/site-config";

export function FinalCTA() {
  return (
    <Section bg="secondary-light">
      <Container>
        <Reveal className="text-center max-w-[560px] mx-auto">
          <h2 className="font-heading text-text-primary mb-8">
            Ready to find out what your body is holding?
          </h2>
          <p className="text-text-secondary leading-relaxed mb-10 font-light">
            Book a free Clarity & Alignment Session. We&rsquo;ll talk about what&rsquo;s going
            on, I&rsquo;ll explain how kinesiology works for your specific situation, and
            we&rsquo;ll figure out whether it&rsquo;s the right fit.
          </p>
          <Button href={siteConfig.bookingUrl}>Book Your Free Session</Button>
        </Reveal>
      </Container>
    </Section>
  );
}
