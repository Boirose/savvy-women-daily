import { getPostsByCategory } from "@/lib/posts";
import PostCard from "@/components/PostCard";
import Link from "next/link";

export const metadata = {
  title: "Beauty & Skincare Tips for Women | Savvy Women Daily",
  description: "Skincare routines, natural hair care, glow up tips and beauty products for melanin-rich skin in 2026.",
};

export default function BeautyPage() {
  const posts = getPostsByCategory("beauty");
  return (
    <div style={{maxWidth:"1200px",margin:"0 auto",padding:"3rem 1rem"}}>
      <div style={{background:"#2D0A1A",borderRadius:"16px",padding:"2.5rem",textAlign:"center",marginBottom:"3rem",color:"white"}}>
        <div style={{fontSize:"2.5rem",marginBottom:"0.5rem"}}>✨</div>
        <h1 style={{fontSize:"2rem",fontWeight:"bold",color:"#F2C4CE",marginBottom:"0.5rem"}}>Beauty & Skincare</h1>
        <p style={{color:"#E8A0B4",margin:0}}>Skincare routines, natural hair care, glow up tips and beauty products for melanin skin.</p>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(300px,1fr))",gap:"1.5rem"}}>
        {posts.length>0 ? posts.map(p=><PostCard key={p.slug} {...p}/>) : (
          <div style={{gridColumn:"1/-1",textAlign:"center",padding:"4rem",color:"#9ca3af"}}>
            <p style={{fontSize:"1.1rem"}}>Beauty posts coming soon!</p>
            <Link href="/blog" style={{color:"#2D0A1A",fontWeight:"bold"}}>View All Posts →</Link>
          </div>
        )}
      </div>
    </div>
  );
}