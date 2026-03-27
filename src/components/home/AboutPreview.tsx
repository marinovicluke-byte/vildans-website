import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/lib/site-config";

export function AboutPreview() {
  return (
    <Section bg="primary">
      <Container>
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <Reveal className="flex-shrink-0 w-full max-w-[360px]">
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
              <Image
                src="/images/vildan-about.jpg"
                alt="Vildan in the kinesiology treatment room at Moorabbin"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 360px"
              />
            </div>
          </Reveal>
          <Reveal delay={100} className="flex-1 max-w-[520px]">
            <p className="text-xs uppercase tracking-[0.08em] font-medium text-text-secondary mb-4">
              About Vildan
            </p>
            <h2 className="font-heading text-text-primary mb-6">
              I know what it feels like when your body holds more than you can carry
            </h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              I came to kinesiology through my own experience of carrying stress and trauma that
              no amount of talking or thinking could shift. When I felt what muscle monitoring
              could find, and what the corrections could release, I trained in Professional
              Kinesiology Practice so I could offer the same to others.
            </p>
            <p className="text-text-secondary leading-relaxed mb-8">
              I work from a treatment room in Moorabbin, Melbourne. Every session is different
              because every body is different. I don&rsquo;t follow a script. I follow what your
              body shows me.
            </p>
            <div className="flex gap-4">
              <Button href={siteConfig.bookingUrl}>Book a Session</Button>
              <Button href="/about" variant="ghost">
                Read More
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
