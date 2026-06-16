import { getPostsByCategory } from "@/lib/posts";
import PostCard from "@/components/PostCard";
import Link from "next/link";

export default function FinancePage() {
  const posts = getPostsByCategory("finance");
  return (
    <div style={{maxWidth:"1200px",margin:"0 auto",padding:"3rem 1rem"}}>
      <div style={{background:"#1A0A2E",borderRadius:"16px",padding:"2.5rem",textAlign:"center",marginBottom:"3rem",color:"white"}}>
        <div style={{fontSize:"2.5rem",marginBottom:"0.5rem"}}>💰</div>
        <h1 style={{fontSize:"2rem",fontWeight:"bold",color:"#D4A853",marginBottom:"0.5rem"}}>Personal Finance</h1>
        <p style={{color:"#C9B8D8",margin:0}}>Budgeting tips, income ideas, savings challenges and money habits that build real wealth.</p>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(300px,1fr))",gap:"1.5rem"}}>
        {posts.length>0 ? posts.map(p=><PostCard key={p.slug} {...p}/>) : (
          <div style={{gridColumn:"1/-1",textAlign:"center",padding:"4rem",color:"#9ca3af"}}>
            <p style={{fontSize:"1.1rem"}}>Finance posts coming soon!</p>
            <Link href="/blog" style={{color:"#1A0A2E",fontWeight:"bold"}}>View All Posts →</Link>
          </div>
        )}
      </div>
    </div>
  );
}