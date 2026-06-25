import { getPostsByCategory } from "@/lib/posts";
import PostCard from "@/components/PostCard";
import Link from "next/link";

export const metadata = {
  title: "Affordable Jewelry Finds for Women | Savvy Women Daily",
  description: "Curated, affordable jewelry picks from Amazon that look high-end — necklaces, earrings, rings and bracelets for 2026.",
};

export default function JewelryPage() {
  const posts = getPostsByCategory("jewelry");
  return (
    <div style={{maxWidth:"1200px",margin:"0 auto",padding:"3rem 1rem"}}>
      <div style={{background:"#3A2A0A",borderRadius:"16px",padding:"2.5rem",textAlign:"center",marginBottom:"3rem",color:"white"}}>
        <div style={{fontSize:"2.5rem",marginBottom:"0.5rem"}}>💎</div>
        <h1 style={{fontSize:"2rem",fontWeight:"bold",color:"#D4A853",marginBottom:"0.5rem"}}>Jewelry</h1>
        <p style={{color:"#E8D5A3",margin:0}}>Affordable jewelry finds for everyday wear and special occasions — curated picks that look expensive.</p>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(300px,1fr))",gap:"1.5rem"}}>
        {posts.length>0 ? posts.map(p=><PostCard key={p.slug} {...p}/>) : (
          <div style={{gridColumn:"1/-1",textAlign:"center",padding:"4rem",color:"#9ca3af"}}>
            <p style={{fontSize:"1.1rem"}}>Jewelry posts coming soon!</p>
            <Link href="/blog" style={{color:"#3A2A0A",fontWeight:"bold"}}>View All Posts →</Link>
          </div>
        )}
      </div>
    </div>
  );
}