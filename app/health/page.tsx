import { getPostsByCategory } from "@/lib/posts";
import PostCard from "@/components/PostCard";
import Link from "next/link";

export const metadata = {
  title: "Health & Wellness Tips for Women | Savvy Women Daily",
  description: "Morning routines, meal prep, workout schedules and healthy habits for busy women in 2026.",
};

export default function HealthPage() {
  const posts = getPostsByCategory("health");
  return (
    <div style={{maxWidth:"1200px",margin:"0 auto",padding:"3rem 1rem"}}>
      <div style={{background:"#0A1F35",borderRadius:"16px",padding:"2.5rem",textAlign:"center",marginBottom:"3rem",color:"white"}}>
        <div style={{fontSize:"2.5rem",marginBottom:"0.5rem"}}>🌿</div>
        <h1 style={{fontSize:"2rem",fontWeight:"bold",color:"#4FC3F7",marginBottom:"0.5rem"}}>Health & Wellness</h1>
        <p style={{color:"#B3D9F0",margin:0}}>Morning routines, meal prep, workout schedules and healthy habits for women.</p>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(300px,1fr))",gap:"1.5rem"}}>
        {posts.length>0 ? posts.map(p=><PostCard key={p.slug} {...p}/>) : (
          <div style={{gridColumn:"1/-1",textAlign:"center",padding:"4rem",color:"#9ca3af"}}>
            <p style={{fontSize:"1.1rem"}}>Health posts coming soon!</p>
            <Link href="/blog" style={{color:"#0A1F35",fontWeight:"bold"}}>View All Posts →</Link>
          </div>
        )}
      </div>
    </div>
  );
}