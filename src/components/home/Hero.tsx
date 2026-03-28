import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { HeroReveal } from "@/components/ui/HeroReveal";
import { siteConfig } from "@/lib/site-config";
import { HeroVideo } from "@/components/home/HeroVideo";

export function Hero() {
  return (
    <section className="relative min-h-screen bg-[#1a1a1a] overflow-hidden">
      {/* Video - right side, absolute positioned */}
      <div className="absolute inset-y-0 right-0 w-full md:w-[55%]">
        <HeroVideo />
        {/* Gradient overlay: dark fade from left into video */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a] via-[#1a1a1a]/60 to-transparent" />
      </div>

      {/* Content - left side */}
      <Container>
        <div className="relative z-10 flex items-center min-h-screen">
          <div className="max-w-[560px] py-32">
            <HeroReveal delay={0}>
              <p className="label-caps mb-6 text-[#9CAF88]">
                Kinesiology in Moorabbin, Melbourne
              </p>
            </HeroReveal>
            <HeroReveal delay={80}>
              <h1 className="font-heading text-white mb-8">
                Your body holds onto stress in ways your mind can&rsquo;t always explain
              </h1>
            </HeroReveal>
            <HeroReveal delay={160}>
              <p className="text-gray-300 text-lg leading-relaxed mb-10 max-w-body font-light">
                Through muscle monitoring, we find exactly where that tension lives, whether
                it&rsquo;s anxiety sitting in your shoulders, grief locked in your chest, or old
                patterns keeping your nervous system in overdrive. Then we work with your body to
                release it.
              </p>
            </HeroReveal>
            <HeroReveal delay={240}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href={siteConfig.bookingUrl}>Book Your First Session</Button>
                <Button href="/services" variant="ghost" className="!border-white/30 !text-white hover:!border-[#9CAF88] hover:!text-[#9CAF88]">
                  See How It Works
                </Button>
              </div>
            </HeroReveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
