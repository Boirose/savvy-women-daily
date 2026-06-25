import { getPostBySlug, getAllPosts } from "@/lib/posts";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: `${post.title} | Savvy Women Daily`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Organization", name: "Savvy Women Daily" },
    publisher: { "@type": "Organization", name: "Savvy Women Daily" },
  };

  return (
    <div style={{ maxWidth:"760px", margin:"0 auto", padding:"3rem 1rem" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div style={{ marginBottom:"1rem", fontSize:"14px" }}>
        <Link href="/" style={{ color:"#1A0A2E" }}>Home</Link>
        {" → "}
        <Link href="/blog" style={{ color:"#1A0A2E" }}>Blog</Link>
        {" → "}
        <span style={{ color:"#9ca3af" }}>{post.category}</span>
      </div>

      <span style={{ background:"#1A0A2E", color:"white", padding:"4px 12px", borderRadius:"999px", fontSize:"12px", fontWeight:"bold" }}>
        {post.category}
      </span>

      <h1 style={{ fontSize:"2rem", fontWeight:"bold", margin:"1rem 0", lineHeight:"1.3", color:"#111827" }}>
        {post.title}
      </h1>

      <div style={{ color:"#9ca3af", fontSize:"14px", marginBottom:"2rem", paddingBottom:"2rem", borderBottom:"1px solid #e5e7eb" }}>
        {post.date} • Savvy Women Daily • {Math.ceil(post.content.split(" ").length / 200)} min read
      </div>

      <div style={{ background:"#fefce8", border:"1px solid #fde68a", borderRadius:"12px", padding:"1rem", marginBottom:"2rem", fontSize:"14px", color:"#854d0e" }}>
        <strong>Disclosure:</strong> This post contains affiliate links. We may earn a small commission at no extra cost to you.
      </div>

      <div
        style={{ lineHeight:"1.8", color:"#374151" }}
        dangerouslySetInnerHTML={{ __html: renderMarkdown(post.content) }}
      />

      <div style={{ marginTop:"4rem", background:"#1A0A2E", color:"white", borderRadius:"16px", padding:"2rem", textAlign:"center" }}>
        <h3 style={{ fontSize:"1.5rem", fontWeight:"bold", marginBottom:"0.5rem" }}>Enjoyed this?</h3>
        <p style={{ color:"#C9B8D8", marginBottom:"1.5rem" }}>Join thousands of savvy women getting weekly tips — free.</p>
        <Link href="/newsletter" style={{ background:"#D4A853", color:"#1A0A2E", padding:"12px 32px", borderRadius:"999px", fontWeight:"bold", textDecoration:"none" }}>
          Get the Free Newsletter →
        </Link>
      </div>

      <div style={{ marginTop:"2rem", textAlign:"center" }}>
        <Link href="/blog" style={{ color:"#1A0A2E", fontWeight:"bold" }}>← Back to All Posts</Link>
      </div>
    </div>
  );
}

function renderMarkdown(md: string): string {
  return md
    .replace(/^## (.+)$/gm, '<h2 style="font-size:1.5rem;font-weight:bold;margin:2rem 0 1rem;color:#111827">$1</h2>')
    .replace(/^### (.+)$/gm, '<h3 style="font-size:1.25rem;font-weight:bold;margin:1.5rem 0 0.75rem;color:#111827">$1</h3>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" style="color:#1A0A2E;font-weight:600;text-decoration:underline" target="_blank">$1</a>')
    .replace(/^---$/gm, '<hr style="margin:1.5rem 0;border-color:#e5e7eb"/>')
    .replace(/^- (.+)$/gm, '<li style="margin-left:1.5rem;margin-bottom:0.25rem">$1</li>')
    .replace(/\n\n/g, '</p><p style="margin-bottom:1rem">');
}