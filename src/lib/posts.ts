import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDir = path.join(process.cwd(), "posts");

export interface Post {
  slug: string;
  title: string;
  date: string;
  description: string;
  category: string;
  image: string | null;
  content: string;
}

export function getAllPosts(): Post[] {
  if (!fs.existsSync(postsDir)) return [];
  return fs.readdirSync(postsDir)
    .filter(f => f.endsWith(".mdx") || f.endsWith(".md"))
    .map(f => {
      const slug = f.replace(/\.(mdx|md)$/, "");
      const { data, content } = matter(fs.readFileSync(path.join(postsDir, f), "utf8"));
      return {
        slug,
        title: data.title || "",
        date: data.date || "",
        description: data.description || "",
        category: data.category || "",
        image: data.image || null,
        content,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): Post | null {
  try {
    const { data, content } = matter(fs.readFileSync(path.join(postsDir, `${slug}.mdx`), "utf8"));
    return {
      slug,
      title: data.title,
      date: data.date,
      description: data.description,
      category: data.category,
      image: data.image || null,
      content,
    };
  } catch {
    return null;
  }
}

export function getPostsByCategory(category: string): Post[] {
  return getAllPosts().filter(p => p.category === category);
}