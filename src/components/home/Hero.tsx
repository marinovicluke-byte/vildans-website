import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { HeroReveal } from "@/components/ui/HeroReveal";
import { siteConfig } from "@/lib/site-config";
import { HeroVideo } from "@/components/home/HeroVideo";

export function Hero() {
  return (
    <section className="relative min-h-screen bg-[#1e2e1e] overflow-hidden">
      {/* Subtle dark vignette on the left/top corner */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(0,0,0,0.3)_0%,transparent_50%)] pointer-events-none" />

      {/* Video - constrained, centre-right, pushed down */}
      <div className="absolute inset-0 flex items-end justify-end pointer-events-none">
        <div className="relative w-[35%] h-[50%] mr-[10%] mb-[-3%]">
          <div className="absolute inset-0 rounded-sm overflow-hidden">
            <HeroVideo />
          </div>
          {/* Feather edges into the background */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1e2e1e] via-transparent via-[15%] to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1e2e1e] via-transparent via-[15%] to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1e2e1e] via-transparent via-[10%] to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-l from-[#1e2e1e] via-transparent via-[8%] to-transparent" />
        </div>
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
