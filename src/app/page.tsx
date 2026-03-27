import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { CredibilityStrip } from "@/components/home/CredibilityStrip";
import { WhatIHelpWith } from "@/components/home/WhatIHelpWith";
import { HowItWorks } from "@/components/home/HowItWorks";
import { Testimonials } from "@/components/home/Testimonials";
import { AboutPreview } from "@/components/home/AboutPreview";
import { FAQ } from "@/components/home/FAQ";
import { faqs } from "@/components/home/faq-data";
import { FinalCTA } from "@/components/home/FinalCTA";
import {
  JsonLd,
  localBusinessSchema,
  organizationSchema,
  websiteSchema,
  faqSchema,
} from "@/lib/schema";

export const metadata: Metadata = {
  title: "Intelligentle Healing | Kinesiology Bentleigh & Moorabbin Melbourne",
  description:
    "PKP Kinesiology for adults carrying stress, anxiety, and tension. Muscle monitoring finds where your body holds it. Moorabbin, Melbourne.",
  openGraph: {
    title: "Intelligentle Healing | Kinesiology Bentleigh & Moorabbin Melbourne",
    description:
      "PKP Kinesiology for adults carrying stress, anxiety, and tension. Muscle monitoring finds where your body holds it. Moorabbin, Melbourne.",
    url: "https://www.intelligentlehealing.com",
  },
  alternates: {
    canonical: "https://www.intelligentlehealing.com",
  },
};

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
