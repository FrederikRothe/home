import fs from 'node:fs';
import { join } from 'node:path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const BLOG_DIR = join(process.cwd(), './app/blogs');

export interface PostMeta {
  slug: string;
  title: string;
  date: string;          // ISO
  coverImage: string;    // public path → /public/...
  excerpt: string;
}

// ---------- helpers ----------

export function getPostSlugs() {
  return fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith('.md'));
}

export async function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, '');
  const file = fs.readFileSync(join(BLOG_DIR, `${realSlug}.md`), 'utf8');
  const { data, content } = matter(file);

  const processed = await remark().use(html).process(content);
  const htmlContent = processed.toString();

  return {
    meta: { slug: realSlug, ...(data as Omit<PostMeta, 'slug'>) },
    htmlContent,
  };
}

export async function getAllPosts() {
  const slugs = getPostSlugs();
  const posts = await Promise.all(slugs.map((s) => getPostBySlug(s.replace(/\.md$/, ''))));
  return posts.sort((a, b) => (a.meta.date < b.meta.date ? 1 : -1));
}
