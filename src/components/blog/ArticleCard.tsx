import Link from "next/link";
import type { ArticleMeta } from "@/lib/articles";

export function ArticleCard({ article }: { article: ArticleMeta }) {
  return (
    <article className="bg-bg-primary rounded-lg border border-border-subtle p-8 transition-all duration-base ease-smooth hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
      <div className="flex items-center gap-3 mb-4">
        <time dateTime={article.date} className="text-xs text-text-secondary">
          {new Date(article.date).toLocaleDateString("en-AU", { year: "numeric", month: "long", day: "numeric" })}
        </time>
        <span className="text-xs text-text-secondary">&middot;</span>
        <span className="text-xs text-text-secondary">{article.readingTime}</span>
      </div>
      <Link href={`/blog/${article.slug}`}>
        <h2 className="font-heading text-text-primary text-xl mb-3 hover:text-accent transition-colors duration-base">{article.title}</h2>
      </Link>
      <p className="text-text-secondary text-sm leading-relaxed mb-4">{article.description}</p>
      <Link href={`/blog/${article.slug}`} className="text-sm font-medium text-accent hover:text-accent-hover transition-colors duration-base">
        Read article
      </Link>
    </article>
  );
}
