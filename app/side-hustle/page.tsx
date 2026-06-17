import { getPostsByCategory } from "@/lib/posts";
import PostCard from "@/components/PostCard";
import Link from "next/link";

export default function SideHustlePage() {
  const posts = getPostsByCategory("side-hustle");
  return (
    <div style={{maxWidth:"1200px",margin:"0 auto",padding:"3rem 1rem"}}>
      <div style={{background:"#0D2118",borderRadius:"16px",padding:"2.5rem",textAlign:"center",marginBottom:"3rem",color:"white"}}>
        <div style={{fontSize:"2.5rem",marginBottom:"0.5rem"}}>💼</div>
        <h1 style={{fontSize:"2rem",fontWeight:"bold",color:"#7CFC8A",marginBottom:"0.5rem"}}>Side Hustle & Business</h1>
        <p style={{color:"#A8D5B5",margin:0}}>Business ideas, ways to make money online, freelancing tips and passive income strategies.</p>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(300px,1fr))",gap:"1.5rem"}}>
        {posts.length>0 ? posts.map(p=><PostCard key={p.slug} {...p}/>) : (
          <div style={{gridColumn:"1/-1",textAlign:"center",padding:"4rem",color:"#9ca3af"}}>
            <p style={{fontSize:"1.1rem"}}>Side hustle posts coming soon!</p>
            <Link href="/blog" style={{color:"#0D2118",fontWeight:"bold"}}>View All Posts →</Link>
          </div>
        )}
      </div>
    </div>
  );
}