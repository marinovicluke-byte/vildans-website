import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { HeroReveal } from "@/components/ui/HeroReveal";
import { siteConfig } from "@/lib/site-config";

export function Hero() {
  return (
    <section className="pt-40 pb-section md:pt-52 md:pb-section bg-bg-primary">
      <Container>
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          <div className="flex-1 max-w-[560px]">
            <HeroReveal delay={0}>
              <p className="label-caps mb-6 text-text-secondary">
                Kinesiology in Moorabbin, Melbourne
              </p>
            </HeroReveal>
            <HeroReveal delay={80}>
              <h1 className="font-heading text-text-primary mb-8">
                Your body holds onto stress in ways your mind can&rsquo;t always explain
              </h1>
            </HeroReveal>
            <HeroReveal delay={160}>
              <p className="text-text-secondary text-lg leading-relaxed mb-10 max-w-body font-light">
                Through muscle monitoring, we find exactly where that tension lives, whether
                it&rsquo;s anxiety sitting in your shoulders, grief locked in your chest, or old
                patterns keeping your nervous system in overdrive. Then we work with your body to
                release it.
              </p>
            </HeroReveal>
            <HeroReveal delay={240}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href={siteConfig.bookingUrl}>Book Your First Session</Button>
                <Button href="/services" variant="ghost">
                  See How It Works
                </Button>
              </div>
            </HeroReveal>
          </div>
          <HeroReveal delay={320} className="flex-shrink-0 w-full max-w-[400px] md:max-w-[440px]">
            <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-[0_24px_48px_rgba(0,0,0,0.08)]">
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
