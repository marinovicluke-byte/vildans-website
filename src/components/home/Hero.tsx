import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { HeroReveal } from "@/components/ui/HeroReveal";
import { siteConfig } from "@/lib/site-config";

export function Hero() {
  return (
    <section className="pt-32 pb-section md:pt-40 bg-bg-primary">
      <Container>
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <div className="flex-1 max-w-[560px]">
            <HeroReveal delay={0}>
              <h1 className="font-heading text-text-primary mb-6">
                Your body holds onto stress in ways your mind can&rsquo;t always explain
              </h1>
            </HeroReveal>
            <HeroReveal delay={50}>
              <p className="text-text-secondary text-lg leading-relaxed mb-8 max-w-body">
                Through muscle monitoring, we find exactly where that tension lives, whether
                it&rsquo;s anxiety sitting in your shoulders, grief locked in your chest, or old
                patterns keeping your nervous system in overdrive. Then we work with your body to
                release it.
              </p>
            </HeroReveal>
            <HeroReveal delay={100}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href={siteConfig.bookingUrl}>Book Your First Session</Button>
                <Button href="/services" variant="ghost">
                  See How It Works
                </Button>
              </div>
            </HeroReveal>
          </div>
          <HeroReveal delay={150} className="flex-shrink-0 w-full max-w-[400px] md:max-w-[440px]">
            <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
              <Image
                src="/images/vildan-hero.jpg"
                alt="Vildan performing kinesiology muscle monitoring in the treatment room at Moorabbin"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 440px"
              />
            </div>
          </HeroReveal>
        </div>
      </Container>
    </section>
  );
}
