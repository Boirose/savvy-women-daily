import { getAllPosts } from "@/lib/posts";
import PostCard from "@/components/PostCard";
import Link from "next/link";

export default function BlogPage() {
  const posts = getAllPosts();
  return (
    <div style={{ maxWidth:"1200px", margin:"0 auto", padding:"3rem 1rem" }}>
      <div style={{ textAlign:"center", marginBottom:"3rem" }}>
        <h1 style={{ fontSize:"2.5rem", fontWeight:"bold", marginBottom:"1rem" }}>All Articles</h1>
        <p style={{ color:"#6b7280" }}>Daily tips on money, beauty, wellness, side hustles and home.</p>
      </div>
      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(300px, 1fr))", gap:"1.5rem" }}>
        {posts.map((post) => <PostCard key={post.slug} {...post} />)}
      </div>
      <div style={{ textAlign:"center", marginTop:"3rem" }}>
        <Link href="/" style={{ color:"#581c87", fontWeight:"bold" }}>← Back to Home</Link>
      </div>
    </div>
  );
}