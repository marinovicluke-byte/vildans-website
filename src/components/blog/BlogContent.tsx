"use client";

import { useState, useMemo } from "react";
import { ArticleCard } from "@/components/blog/ArticleCard";
import type { ArticleMeta } from "@/lib/articles";

const DEFAULT_CATEGORIES = ["Kinesiology Basics", "Stress & Anxiety", "What to Expect"];

export function BlogContent({ articles }: { articles: ArticleMeta[] }) {
  const [activeCluster, setActiveCluster] = useState<string>("All");

  const clusters = useMemo(() => {
    const fromArticles = Array.from(new Set(articles.map((a) => a.cluster).filter(Boolean)));
    const merged = Array.from(new Set([...DEFAULT_CATEGORIES, ...fromArticles]));
    return ["All", ...merged];
  }, [articles]);

  const filtered = activeCluster === "All" ? articles : articles.filter((a) => a.cluster === activeCluster);

  return (
    <>
      <div className="flex flex-wrap gap-2 mb-10">
        {clusters.map((cluster) => (
          <button
            key={cluster}
            onClick={() => setActiveCluster(cluster)}
            className="rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ease-in-out"
            style={
              activeCluster === cluster
                ? { backgroundColor: "#9CAF88", color: "#ffffff" }
                : { backgroundColor: "#eef1ea", color: "#2d2d2d" }
            }
          >
            {cluster}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="text-text-secondary">No articles in this category yet.</p>
      ) : (
        <div className="grid md:grid-cols-2 gap-6 max-w-[900px]">
          {filtered.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      )}
    </>
  );
}
