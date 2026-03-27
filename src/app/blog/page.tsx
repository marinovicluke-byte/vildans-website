import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { BlogContent } from "@/components/blog/BlogContent";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { getAllArticles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Blog | Kinesiology Insights & Resources",
  description: "Articles about kinesiology, stress, anxiety, muscle monitoring, and body-based healing. Written by Vildan, PKP Kinesiologist in Moorabbin, Melbourne.",
  openGraph: {
    title: "Blog | Kinesiology Insights & Resources",
    description: "Articles about kinesiology, stress, anxiety, and body-based healing.",
    url: "https://www.intelligentlehealing.com/blog",
  },
  alternates: { canonical: "https://www.intelligentlehealing.com/blog" },
};

export default function BlogPage() {
  const articles = getAllArticles();
  return (
    <main>
      <JsonLd data={[breadcrumbSchema([{ name: "Home", href: "/" }, { name: "Blog", href: "/blog" }])]} />
      <Section className="pt-32 md:pt-40">
        <Container>
          <div className="max-w-[600px] mb-12 md:mb-16">
            <h1 className="font-heading text-text-primary mb-4">Blog</h1>
            <p className="text-text-secondary leading-relaxed">
              Articles about kinesiology, how stress lives in the body, and what you can do about it.
            </p>
          </div>
          {articles.length === 0 ? (
            <p className="text-text-secondary">Articles coming soon.</p>
          ) : (
            <BlogContent articles={articles} />
          )}
        </Container>
      </Section>
    </main>
  );
}
