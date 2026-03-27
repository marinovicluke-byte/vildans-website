import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ServiceCard } from "@/components/services/ServiceCard";
import { WhatToExpect } from "@/components/services/WhatToExpect";
import { BookingEmbed } from "@/components/services/BookingEmbed";
import { JsonLd, serviceSchema, breadcrumbSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Kinesiology Services | In-Person & Online Sessions Melbourne",
  description:
    "PKP Kinesiology sessions in Moorabbin, Melbourne and online. Initial 75-min session $270. Muscle monitoring, Chinese medicine, somatic processing. Book directly.",
  openGraph: {
    title: "Kinesiology Services | In-Person & Online Sessions Melbourne",
    description: "PKP Kinesiology sessions in Moorabbin, Melbourne and online. Initial 75-min session $270.",
    url: "https://www.intelligentlehealing.com/services",
  },
  alternates: { canonical: "https://www.intelligentlehealing.com/services" },
};

export default function ServicesPage() {
  return (
    <main>
      <JsonLd
        data={[
          ...siteConfig.services.items.map((s) => serviceSchema(s)),
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Services", href: "/services" },
          ]),
        ]}
      />

      <Section className="pt-32 md:pt-40">
        <Container>
          <div className="max-w-[600px]">
            <h1 className="font-heading text-text-primary mb-6">
              Kinesiology sessions in Moorabbin &amp; online
            </h1>
            <p className="text-text-secondary leading-relaxed mb-8">
              Every session uses muscle monitoring to find exactly where your body is holding
              stress, tension, or emotional patterns, then works with targeted corrections to
              release it. Available in person or via video call.
            </p>
            <Button href="#booking">Book a Session</Button>
          </div>
        </Container>
      </Section>

      <Section bg="secondary-light">
        <Container>
          <div className="grid md:grid-cols-2 gap-8 max-w-[860px]">
            {siteConfig.services.items.map((service) => (
              <ServiceCard key={service.name} {...service} />
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="max-w-[600px] mx-auto text-center">
            <h2 className="font-heading text-text-primary mb-4">Packages &amp; roadmaps</h2>
            <p className="text-text-secondary leading-relaxed mb-8">{siteConfig.services.packages.note}</p>
            <Button href={siteConfig.bookingUrl}>Book a Free Clarity Session</Button>
          </div>
        </Container>
      </Section>

      <WhatToExpect />
      <BookingEmbed />
    </main>
  );
}
