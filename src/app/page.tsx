import { Hero } from "@/components/home/Hero";
import { CredibilityStrip } from "@/components/home/CredibilityStrip";
import { WhatIHelpWith } from "@/components/home/WhatIHelpWith";
import { HowItWorks } from "@/components/home/HowItWorks";
import { Testimonials } from "@/components/home/Testimonials";
import { AboutPreview } from "@/components/home/AboutPreview";
import { FAQ, faqs } from "@/components/home/FAQ";
import { FinalCTA } from "@/components/home/FinalCTA";
import {
  JsonLd,
  localBusinessSchema,
  organizationSchema,
  websiteSchema,
  faqSchema,
} from "@/lib/schema";

export default function Home() {
  return (
    <main>
      <JsonLd
        data={[
          localBusinessSchema(),
          organizationSchema(),
          websiteSchema(),
          faqSchema(faqs),
        ]}
      />
      <Hero />
      <CredibilityStrip />
      <WhatIHelpWith />
      <HowItWorks />
      <Testimonials />
      <AboutPreview />
      <FAQ />
      <FinalCTA />
    </main>
  );
}
