import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { AuthorBox } from "@/components/blog/AuthorBox";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { JsonLd, articleSchema, breadcrumbSchema } from "@/lib/schema";
import { getArticle, getAllArticleSlugs, getRelatedArticles } from "@/lib/articles";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllArticleSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticle(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      publishedTime: article.date,
      url: `https://www.intelligentlehealing.com/blog/${slug}`,
    },
    alternates: { canonical: `https://www.intelligentlehealing.com/blog/${slug}` },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = await getArticle(slug);
  if (!article) notFound();
  const related = getRelatedArticles(slug, article.cluster);

  return (
    <main>
      <JsonLd
        data={[
          articleSchema(article),
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Blog", href: "/blog" },
            { name: article.title, href: `/blog/${slug}` },
          ]),
        ]}
      />
      <Section className="pt-32 md:pt-40">
        <Container narrow>
          <article>
            <header className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <time dateTime={article.date} className="text-xs text-text-secondary">
                  {new Date(article.date).toLocaleDateString("en-AU", { year: "numeric", month: "long", day: "numeric" })}
                </time>
                <span className="text-xs text-text-secondary">&middot;</span>
                <span className="text-xs text-text-secondary">{article.readingTime}</span>
              </div>
              <h1 className="font-heading text-text-primary">{article.title}</h1>
            </header>
            <div
              className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:text-text-primary prose-headings:font-medium prose-p:text-text-secondary prose-p:leading-relaxed prose-a:text-accent prose-a:no-underline hover:prose-a:underline prose-blockquote:border-l-accent prose-blockquote:text-text-primary prose-blockquote:font-heading prose-blockquote:not-italic prose-strong:text-text-primary prose-strong:font-semibold prose-li:text-text-secondary"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
            <AuthorBox />
          </article>
          <RelatedArticles articles={related} />
        </Container>
      </Section>
    </main>
  );
}
