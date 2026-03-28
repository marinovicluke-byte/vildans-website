import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/lib/site-config";

export function AboutPreview() {
  return (
    <section className="py-section md:py-[120px] bg-bg-primary relative overflow-hidden">
      <Container>
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 lg:gap-24">
          {/* Left: Large portrait */}
          <Reveal className="w-full md:w-[50%] flex-shrink-0">
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/images/vildan-about.jpg"
                alt="Vildan in the kinesiology treatment room at Moorabbin"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </Reveal>

          {/* Right: Content */}
          <Reveal delay={120} className="flex-1 flex flex-col justify-center">
            {/* Metadata labels */}
            <div className="flex gap-12 md:gap-20 mb-6">
              <div>
                <p className="text-[11px] font-body font-medium tracking-[0.08em] uppercase text-text-secondary mb-1">
                  Discipline
                </p>
                <p className="text-sm font-body font-medium text-text-primary">
                  PKP Kinesiology
                </p>
              </div>
              <div>
                <p className="text-[11px] font-body font-medium tracking-[0.08em] uppercase text-text-secondary mb-1">
                  Located
                </p>
                <p className="text-sm font-body font-medium text-text-primary">
                  Moorabbin, Melbourne
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-border mb-10 md:mb-14" />

            {/* Name */}
            <div className="mb-10 md:mb-14">
              <h2 className="font-heading font-bold text-text-primary text-[clamp(2.8rem,calc(2rem+4vw),5rem)] leading-[0.95] tracking-[-0.02em]">
                Vildan
              </h2>
              <span className="font-heading italic font-normal text-[#9CAF88] text-[clamp(3.2rem,calc(2.4rem+5vw),6rem)] leading-[1] tracking-[-0.01em] block -mt-1">
                Alihodzic
              </span>
            </div>

            {/* Bio paragraphs */}
            <div className="max-w-[500px] mb-10 md:mb-14">
              <p className="text-text-secondary text-base leading-relaxed mb-5 font-light">
                I came to kinesiology through my own experience of carrying stress and trauma that
                no amount of talking or thinking could shift. When I felt what muscle monitoring
                could find, and what the corrections could release, I trained in Professional
                Kinesiology Practice so I could offer the same to others.
              </p>
              <p className="text-text-secondary text-base leading-relaxed font-light">
                I work from a treatment room in Moorabbin, Melbourne. Every session is different
                because every body is different. I don&rsquo;t follow a script. I follow what your
                body shows me.
              </p>
            </div>

            {/* CTA */}
            <div className="flex gap-4">
              <Button href={siteConfig.bookingUrl}>Book a Session</Button>
              <Button href="/about" variant="ghost">
                Read More
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>

      {/* Faded section number */}
      <div className="absolute bottom-0 right-0 text-[clamp(8rem,15vw,16rem)] font-heading font-bold leading-none text-text-primary/[0.04] pointer-events-none select-none translate-x-[10%] translate-y-[15%]">
        01
      </div>
    </section>
  );
}
