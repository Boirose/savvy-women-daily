import Link from "next/link";

export default function AboutPage() {
  return (
    <div style={{maxWidth:"760px",margin:"0 auto",padding:"4rem 1rem"}}>
      <div style={{textAlign:"center",marginBottom:"3rem"}}>
        <span style={{background:"#1A0A2E",color:"#D4A853",padding:"4px 16px",borderRadius:"999px",fontSize:"12px",fontWeight:"500",letterSpacing:"0.1em"}}>ABOUT US</span>
        <h1 style={{fontSize:"2.5rem",fontWeight:"bold",margin:"1rem 0",color:"#111827",lineHeight:"1.2"}}>
          We Help Women Live Smarter,<br/>Look Better, Earn More
        </h1>
        <p style={{fontSize:"1.1rem",color:"#6b7280",lineHeight:"1.8"}}>
          Savvy Women Daily is a lifestyle and finance blog dedicated to helping women build smarter money habits, discover side income opportunities, maintain healthy routines, and create beautiful spaces — all without the overwhelm.
        </p>
      </div>

      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem",marginBottom:"3rem"}}>
        {[
          {emoji:"💰",title:"Personal Finance",desc:"Budgeting, saving, investing and building wealth from any income level"},
          {emoji:"💼",title:"Side Hustle",desc:"Practical ways to build income outside your 9-5 using skills you already have"},
          {emoji:"🌿",title:"Health & Wellness",desc:"Simple routines, meal prep and fitness habits that actually stick long term"},
          {emoji:"✨",title:"Beauty & Skincare",desc:"Product reviews, routines and tips specifically for melanin-rich skin"},
          {emoji:"🏠",title:"Home & Decor",desc:"Aesthetic spaces and organization ideas on any budget"},
          {emoji:"📧",title:"Free Newsletter",desc:"Weekly tips, exclusive freebies and product recommendations via Beehiiv"}
        ].map(c=>(
          <div key={c.title} style={{background:"#F9F7FF",borderRadius:"12px",padding:"1.25rem",border:"0.5px solid #e5e7eb"}}>
            <div style={{fontSize:"1.5rem",marginBottom:"0.5rem"}}>{c.emoji}</div>
            <h3 style={{fontWeight:"bold",color:"#1A0A2E",marginBottom:"0.25rem",fontSize:"14px"}}>{c.title}</h3>
            <p style={{fontSize:"13px",color:"#6b7280",margin:0,lineHeight:"1.6"}}>{c.desc}</p>
          </div>
        ))}
      </div>

      <div style={{background:"#1A0A2E",borderRadius:"16px",padding:"2rem",textAlign:"center",color:"white",marginBottom:"2rem"}}>
        <h2 style={{fontSize:"1.5rem",fontWeight:"bold",color:"#D4A853",marginBottom:"0.5rem"}}>Our Promise</h2>
        <p style={{color:"#C9B8D8",lineHeight:"1.8",margin:"0 0 1.5rem"}}>
          Every product we recommend has been researched. Every tip is practical. We only share affiliate links for products we genuinely believe add value — and we always disclose when a link is an affiliate link.
        </p>
        <Link href="/blog" style={{background:"#D4A853",color:"#1A0A2E",padding:"10px 28px",borderRadius:"999px",fontWeight:"bold",textDecoration:"none",fontSize:"14px"}}>
          Read Our Articles →
        </Link>
      </div>

      <div style={{textAlign:"center",color:"#9ca3af",fontSize:"13px"}}>
        <p>Questions? <Link href="/contact" style={{color:"#1A0A2E",fontWeight:"bold"}}>Contact us here</Link> or email us at hello@savvywomendaily.com</p>
      </div>
    </div>
  );
}