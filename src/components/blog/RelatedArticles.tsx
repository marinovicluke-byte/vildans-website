import type { ArticleMeta } from "@/lib/articles";
import { ArticleCard } from "./ArticleCard";

export function RelatedArticles({ articles }: { articles: ArticleMeta[] }) {
  if (articles.length === 0) return null;
  return (
    <section className="mt-16">
      <h2 className="font-heading text-text-primary mb-8">Related articles</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {articles.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
    </section>
  );
}
