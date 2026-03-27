import type { Metadata } from "next";
import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { JsonLd, personSchema, breadcrumbSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About Vildan | PKP Kinesiologist Moorabbin Melbourne",
  description:
    "Vildan is a PKP-qualified kinesiologist in Moorabbin, Melbourne. Trauma-informed, body-based approach using muscle monitoring, Chinese medicine principles, and somatic processing.",
  openGraph: {
    title: "About Vildan | PKP Kinesiologist Moorabbin Melbourne",
    description:
      "Vildan is a PKP-qualified kinesiologist in Moorabbin, Melbourne. Trauma-informed, body-based approach.",
    url: "https://www.intelligentlehealing.com/about",
  },
  alternates: {
    canonical: "https://www.intelligentlehealing.com/about",
  },
};

export default function AboutPage() {
  return (
    <main>
      <JsonLd
        data={[
          personSchema(),
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "About", href: "/about" },
          ]),
        ]}
      />

      <Section className="pt-32 md:pt-40">
        <Container>
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
            <div className="flex-1 max-w-[560px]">
              <p className="text-xs uppercase tracking-[0.08em] font-medium text-text-secondary mb-4">
                About Vildan
              </p>
              <h1 className="font-heading text-text-primary mb-6">
                I trained in kinesiology because I needed it myself
              </h1>
              <p className="text-text-secondary leading-relaxed mb-4">
                I came to this work through my own experience. I was carrying stress and trauma
                that no amount of thinking, talking, or trying harder could shift. My body was
                holding things my mind couldn&rsquo;t reach.
              </p>
              <p className="text-text-secondary leading-relaxed">
                When I experienced what kinesiology could find through muscle monitoring, and
                what the corrections could actually release, I knew I had to train in it. Not
                as a concept. As a practice I could offer to others going through the same thing.
              </p>
            </div>
            <div className="flex-shrink-0 w-full max-w-[400px]">
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
                <Image
                  src="/images/vildan-about.jpg"
                  alt="Vildan, PKP Kinesiologist, in the treatment room at Moorabbin, Melbourne"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section bg="secondary-light">
        <Container>
          <div className="max-w-[700px] mx-auto">
            <h2 className="font-heading text-text-primary mb-8">Training & qualifications</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-heading text-text-primary mb-2">
                  Professional Kinesiology Practice (PKP)
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  The most comprehensive kinesiology training system available. PKP integrates
                  muscle monitoring with Chinese medicine meridian theory, anatomy, physiology,
                  and emotional processing techniques.
                </p>
              </div>
              <div>
                <h3 className="font-heading text-text-primary mb-2">
                  Trauma-informed practice
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Every session is built around safety, consent, and working at the pace your
                  body sets. I never push past what you&rsquo;re ready for. The body leads, I follow.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="max-w-[700px] mx-auto">
            <h2 className="font-heading text-text-primary mb-8">How I work</h2>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                My approach draws from Chinese medicine meridian theory, neuroscience, anatomy,
                and somatic processing. But the foundation is always muscle monitoring, letting
                your body show us what it&rsquo;s holding and where the priority is.
              </p>
              <p>
                I don&rsquo;t follow a script. Every session responds to what your body presents
                that day. Some sessions are physical. Some are deeply emotional. Some are quiet.
                I follow what comes up rather than imposing a plan.
              </p>
              <p>
                I work from a treatment room in Moorabbin, Melbourne, and also offer online
                sessions for ongoing clients or those who can&rsquo;t make it in person.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section bg="secondary-light">
        <Container>
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
            <div className="flex-shrink-0 w-full max-w-[480px]">
              <div className="relative aspect-[16/10] rounded-lg overflow-hidden">
                <Image
                  src="/images/vildan-treatment-space.jpg"
                  alt="The kinesiology treatment room at 229 Chesterville Road, Moorabbin"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 480px"
                />
              </div>
            </div>
            <div className="flex-1 max-w-[440px]">
              <h2 className="font-heading text-text-primary mb-6">The space</h2>
              <p className="text-text-secondary leading-relaxed mb-8">
                The treatment room is calm, warm, and private. You&rsquo;ll lie on a treatment
                table, fully clothed. There&rsquo;s no music unless you want it. No rush. The
                space is designed so you can let your guard down, because the work doesn&rsquo;t
                happen when you&rsquo;re bracing.
              </p>
              <Button href={siteConfig.bookingUrl}>Book Your First Session</Button>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
