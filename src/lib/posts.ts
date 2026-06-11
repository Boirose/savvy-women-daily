import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

export interface Post {
  slug: string;
  title: string;
  date: string;
  description: string;
  category: string;
  image?: string;
  content: string;
}

export function getAllPosts(): Post[] {
  if (!fs.existsSync(postsDirectory)) return [];
  
  const fileNames = fs.readdirSync(postsDirectory);
  const posts = fileNames
    .filter((file) => file.endsWith(".mdx") || file.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.(mdx|md)$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title || "",
        date: data.date || "",
        description: data.description || "",
        category: data.category || "",
        image: data.image || null,
        content,
      };
    });

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostBySlug(slug: string): Post | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title,
      date: data.date,
      description: data.description,
      category: data.category,
      image: data.image,
      content,
    };
  } catch {
    return null;
  }
}

export function getPostsByCategory(category: string): Post[] {
  return getAllPosts().filter((post) => post.category === category);
}
