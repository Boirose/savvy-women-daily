import Link from "next/link";
import PostCard from "@/components/PostCard";
import { getAllPosts } from "@/lib/posts";

const categories = [
  {
    name: "Finance",
    href: "/finance",
    emoji: "💰",
    desc: "Budget, save & build income outside your 9-5",
  },
  {
    name: "Health",
    href: "/health",
    emoji: "🌿",
    desc: "Healthy habits that actually stick",
  },
  {
    name: "Beauty",
    href: "/beauty",
    emoji: "✨",
    desc: "Glow up with products that work",
  },
  {
    name: "Home Decor",
    href: "/home-decor",
    emoji: "🏠",
    desc: "Aesthetic spaces on any budget",
  },
  {
    name: "Fashion",
    href: "/fashion",
    emoji: "👗",
    desc: "Outfits and jewelry that look expensive",
  },
];

export default function HomePage() {
  const posts = getAllPosts().slice(0, 6);

  return (
    <div>
      {/* HERO */}
      <section style={{
        position: "relative",
        background: "linear-gradient(rgba(26,10,46,0.90), rgba(26,10,46,0.94)), url('https://images.unsplash.com/photo-1556228720-da4e85aceb27?w=1600&q=60')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        padding: "5rem 1rem"
      }}>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-yellow-400 font-montserrat text-sm font-bold uppercase tracking-widest mb-4">
            Welcome to Savvy Women Daily
          </p>
          <h1 className="font-playfair text-4xl md:text-6xl font-bold leading-tight mb-6">
            Money. Beauty. Wellness.
            <br />
            <span className="text-yellow-400">All in One Place.</span>
          </h1>
          <p className="text-pink-200 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Practical tips to help women build smarter money habits, find side
            income, and live their best life — without the overwhelm.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog"
              style={{background:"#D4A853", color:"#1A0A2E", padding:"12px 32px", borderRadius:"999px", fontWeight:700, fontSize:"14px", textDecoration:"none", display:"inline-block", textAlign:"center"}}
            >
              Read Latest Posts →
            </Link>
            <Link
              href="/newsletter"
              style={{background:"#D4A853", color:"#1A0A2E", padding:"12px 32px", borderRadius:"999px", fontWeight:700, fontSize:"14px", textDecoration:"none", display:"inline-block", textAlign:"center"}}
            >
              Get Free Budget Tracker
            </Link>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section style={{padding:"4rem 1.25rem", background:"#FFFFFF"}}>
        <div style={{maxWidth:"1200px", margin:"0 auto"}}>
          <h2 style={{fontSize:"2rem", fontWeight:"bold", textAlign:"center", marginBottom:"3rem", color:"#1A0A2E"}}>
            What Would You Like to Explore?
          </h2>
          <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(220px, 1fr))", gap:"1.5rem"}}>
            {categories.map((cat) => (
              <Link key={cat.href} href={cat.href} style={{textDecoration:"none"}} className="category-card">
                <div style={{
                  background:"#FFFFFF",
                  border:"2px solid #e5e7eb",
                  borderRadius:"16px",
                  padding:"2rem 1.5rem",
                  textAlign:"center",
                  height:"100%",
                  transition:"border-color 0.2s, transform 0.2s"
                }}>
                  <div style={{
                    width:"64px", height:"64px", borderRadius:"50%",
                    background:"#1A0A2E", display:"flex", alignItems:"center",
                    justifyContent:"center", margin:"0 auto 1rem", fontSize:"28px"
                  }}>
                    {cat.emoji}
                  </div>
                  <h3 style={{fontSize:"1.1rem", fontWeight:"bold", color:"#1A0A2E", marginBottom:"0.5rem"}}>
                    {cat.name}
                  </h3>
                  <p style={{fontSize:"14px", color:"#6b7280", margin:0, lineHeight:"1.5"}}>
                    {cat.desc}
                  </p>
                  <div style={{width:"32px", height:"3px", background:"#D4A853", margin:"1rem auto 0", borderRadius:"2px"}}></div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <style>{`
          .category-card > div:hover {
            border-color: #1A0A2E !important;
            transform: translateY(-4px);
          }
        `}</style>
      </section>

      {/* LATEST POSTS */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-10">
            <h2 className="font-playfair text-3xl font-bold text-gray-900">
              Latest Articles
            </h2>
            <Link
              href="/blog"
              style={{color:"#1A0A2E"}}
              className="font-bold text-sm hover:underline"
            >
              View All →
            </Link>
          </div>

          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <PostCard key={post.slug} {...post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 text-gray-400">
              <p className="text-xl mb-2">Posts coming soon!</p>
              <p className="text-sm">Check back daily for new content.</p>
            </div>
          )}
        </div>
      </section>

      {/* EMAIL CAPTURE */}
      <section style={{background:"#1A0A2E", color:"white", padding:"4rem 1.25rem"}}>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-playfair text-3xl font-bold mb-4">
            Get Your Free Budget Tracker
          </h2>
          <p className="text-pink-200 mb-8">
            Join 4,200+ savvy women getting weekly money tips, beauty finds, and
            wellness advice straight to their inbox. Free budget tracker included.
          </p>
          <Link
            href="/newsletter"
            style={{background:"#D4A853", color:"#1A0A2E", padding:"14px 36px", borderRadius:"999px", fontWeight:700, fontSize:"17px", textDecoration:"none", display:"inline-block"}}
          >
            Yes, Send Me the Tracker! →
          </Link>
          <p className="text-xs text-pink-200 mt-4 opacity-60">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </section>
    </div>
  );
}