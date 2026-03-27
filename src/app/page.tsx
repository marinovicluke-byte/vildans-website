import { Hero } from "@/components/home/Hero";
import { CredibilityStrip } from "@/components/home/CredibilityStrip";
import { WhatIHelpWith } from "@/components/home/WhatIHelpWith";
import { HowItWorks } from "@/components/home/HowItWorks";
import { Testimonials } from "@/components/home/Testimonials";
import { AboutPreview } from "@/components/home/AboutPreview";
import { JsonLd } from "@/lib/schema";
import {
  localBusinessSchema,
  organizationSchema,
  websiteSchema,
} from "@/lib/schema";

export default function Home() {
  return (
    <main>
      <JsonLd
        data={[localBusinessSchema(), organizationSchema(), websiteSchema()]}
      />
      <Hero />
      <CredibilityStrip />
      <WhatIHelpWith />
      <HowItWorks />
      <Testimonials />
      <AboutPreview />
    </main>
  );
}
