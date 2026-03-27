import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { BookingEmbed } from "@/components/services/BookingEmbed";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact | Kinesiologist Moorabbin Melbourne",
  description: "Book a kinesiology session with Vildan at 229 Chesterville Road, Moorabbin, Melbourne VIC 3189. In-person and online sessions available.",
  openGraph: {
    title: "Contact | Kinesiologist Moorabbin Melbourne",
    description: "Book a kinesiology session with Vildan in Moorabbin, Melbourne.",
    url: "https://www.intelligentlehealing.com/contact",
  },
  alternates: { canonical: "https://www.intelligentlehealing.com/contact" },
};

export default function ContactPage() {
  return (
    <main>
      <JsonLd data={[breadcrumbSchema([{ name: "Home", href: "/" }, { name: "Contact", href: "/contact" }])]} />
      <Section className="pt-32 md:pt-40">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            <div>
              <h1 className="font-heading text-text-primary mb-6">Get in touch</h1>
              <p className="text-text-secondary leading-relaxed mb-8">
                Book a session online, or reach out with any questions. I aim to respond within 24 hours.
              </p>
              <div className="space-y-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.08em] font-medium text-text-secondary mb-2">Address</p>
                  <address className="not-italic text-text-primary text-sm leading-relaxed">
                    {siteConfig.name}<br />
                    {siteConfig.address.street}<br />
                    {siteConfig.address.suburb}, {siteConfig.address.state} {siteConfig.address.postcode}
                  </address>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.08em] font-medium text-text-secondary mb-2">Email</p>
                  <a href={`mailto:${siteConfig.email}`} className="text-accent hover:text-accent-hover text-sm transition-colors duration-base">{siteConfig.email}</a>
                </div>
                {siteConfig.phone && (
                  <div>
                    <p className="text-xs uppercase tracking-[0.08em] font-medium text-text-secondary mb-2">Phone</p>
                    <a href={`tel:${siteConfig.phone}`} className="text-accent hover:text-accent-hover text-sm transition-colors duration-base">{siteConfig.phone}</a>
                  </div>
                )}
                <div>
                  <p className="text-xs uppercase tracking-[0.08em] font-medium text-text-secondary mb-2">Social</p>
                  <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent-hover text-sm transition-colors duration-base">@vildan.alihodzic</a>
                </div>
              </div>
            </div>
            <div>
              <div className="rounded-lg overflow-hidden aspect-square md:aspect-auto md:h-full min-h-[300px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3148.9!2d145.0445!3d-37.9387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s229+Chesterville+Road+Moorabbin+VIC+3189!5e0!3m2!1sen!2sau!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: 300 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Intelligentle Healing location at 229 Chesterville Road, Moorabbin"
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>
      <BookingEmbed />
    </main>
  );
}
