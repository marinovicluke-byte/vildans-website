import { Hero } from "@/components/home/Hero";
import { CredibilityStrip } from "@/components/home/CredibilityStrip";
import { WhatIHelpWith } from "@/components/home/WhatIHelpWith";
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
    </main>
  );
}
