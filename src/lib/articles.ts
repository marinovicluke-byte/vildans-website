import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import readingTime from "reading-time";

const articlesDirectory = path.join(process.cwd(), "content/articles");

export type ArticleMeta = {
  title: string;
  slug: string;
  description: string;
  keyword: string;
  cluster: string;
  author: string;
  date: string;
  readingTime: string;
};

export type Article = ArticleMeta & { content: string };

export function getAllArticleSlugs(): string[] {
  if (!fs.existsSync(articlesDirectory)) return [];
  return fs.readdirSync(articlesDirectory).filter((f) => f.endsWith(".md")).map((f) => f.replace(/\.md$/, ""));
}

export function getAllArticles(): ArticleMeta[] {
  return getAllArticleSlugs()
    .map((slug) => getArticleMeta(slug))
    .filter((a): a is ArticleMeta => a !== null)
    .sort((a, b) => (a.date > b.date ? -1 : 1));
}

export function getArticleMeta(slug: string): ArticleMeta | null {
  const filePath = path.join(articlesDirectory, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  const { data, content } = matter(fs.readFileSync(filePath, "utf8"));
  const stats = readingTime(content);
  return {
    title: data.title || slug,
    slug,
    description: data.description || "",
    keyword: data.keyword || "",
    cluster: data.cluster || "",
    author: data.author || "Vildan",
    date: data.date || "",
    readingTime: stats.text,
  };
}

export async function getArticle(slug: string): Promise<Article | null> {
  const filePath = path.join(articlesDirectory, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  const { data, content } = matter(fs.readFileSync(filePath, "utf8"));
  const stats = readingTime(content);
  const processedContent = await remark().use(html).process(content);
  return {
    title: data.title || slug,
    slug,
    description: data.description || "",
    keyword: data.keyword || "",
    cluster: data.cluster || "",
    author: data.author || "Vildan",
    date: data.date || "",
    readingTime: stats.text,
    content: processedContent.toString(),
  };
}

export function getRelatedArticles(currentSlug: string, cluster: string, limit = 3): ArticleMeta[] {
  return getAllArticles().filter((a) => a.slug !== currentSlug).filter((a) => (cluster ? a.cluster === cluster : true)).slice(0, limit);
}
