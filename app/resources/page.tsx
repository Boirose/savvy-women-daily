import Link from "next/link";

const resources = [
  {
    category:"💰 Personal Finance",
    color:"#1A0A2E",
    items:[
      {name:"Rocket Money",desc:"Automatically finds and cancels unused subscriptions. Most users save $200+ in month one.",badge:"Free to start",link:"YOUR-ROCKETMONEY-LINK"},
      {name:"YNAB",desc:"The most powerful zero-based budgeting system. 34-day free trial available.",badge:"Free trial",link:"YOUR-YNAB-LINK"},
      {name:"Personal Capital",desc:"Track all your investments and budget in one dashboard.",badge:"100% Free",link:"YOUR-PERSONALCAPITAL-LINK"},
    ]
  },
  {
    category:"💼 Side Hustle Tools",
    color:"#1B3A2A",
    items:[
      {name:"Canva Pro",desc:"Create professional graphics, pins, presentations and digital products. Essential for any online business.",badge:"Free plan available",link:"YOUR-CANVA-LINK"},
      {name:"Fiverr",desc:"Find your first freelance clients or hire affordable help for your business.",badge:"Free to join",link:"YOUR-FIVERR-LINK"},
      {name:"Tailwind",desc:"Schedule Pinterest and Instagram posts automatically. Saves hours every week.",badge:"Free trial",link:"YOUR-TAILWIND-LINK"},
    ]
  },
  {
    category:"🌿 Health & Wellness",
    color:"#1A3A5C",
    items:[
      {name:"iHerb",desc:"Best prices on supplements, vitamins, and health products. Ships internationally.",badge:"Ships to Nigeria",link:"YOUR-IHERB-LINK"},
      {name:"MyFitnessPal",desc:"Track calories, macros and exercise. The most comprehensive free nutrition tracker.",badge:"Free plan",link:"YOUR-MFP-LINK"},
    ]
  },
  {
    category:"✨ Beauty & Skincare",
    color:"#6B1A3A",
    items:[
      {name:"LOOKFANTASTIC",desc:"Premium beauty products at discounted prices. Ships internationally with excellent selection for melanin skin.",badge:"Ships worldwide",link:"YOUR-LOOKFANTASTIC-LINK"},
      {name:"Paula's Choice",desc:"Science-backed skincare that actually works for hyperpigmentation and uneven skin tone.",badge:"Free samples available",link:"YOUR-PAULASCHOICE-LINK"},
    ]
  },
  {
    category:"🏠 Home & Decor",
    color:"#2C2416",
    items:[
      {name:"Amazon Home",desc:"Best deals on home decor, organization tools, and furniture. Ships fast.",badge:"Prime available",link:"YOUR-AMAZON-LINK"},
      {name:"Wayfair",desc:"Massive selection of furniture and home decor at every price point.",badge:"Free shipping over $35",link:"YOUR-WAYFAIR-LINK"},
    ]
  }
];

export default function ResourcesPage() {
  return (
    <div style={{maxWidth:"900px",margin:"0 auto",padding:"4rem 1rem"}}>
      <div style={{textAlign:"center",marginBottom:"3rem"}}>
        <span style={{background:"#1A0A2E",color:"#D4A853",padding:"4px 16px",borderRadius:"999px",fontSize:"12px",fontWeight:"500"}}>FREE RESOURCES</span>
        <h1 style={{fontSize:"2.5rem",fontWeight:"bold",color:"#111827",margin:"1rem 0"}}>Tools We Actually Use and Recommend</h1>
        <p style={{color:"#6b7280",maxWidth:"600px",margin:"0 auto",lineHeight:"1.8"}}>
          Every tool on this page has been researched. Some links are affiliate links — we earn a small commission at no extra cost to you when you sign up.
        </p>
      </div>

      {resources.map(section=>(
        <div key={section.category} style={{marginBottom:"2.5rem"}}>
          <div style={{background:section.color,borderRadius:"12px 12px 0 0",padding:"0.75rem 1.25rem"}}>
            <h2 style={{color:"#D4A853",fontWeight:"bold",fontSize:"1rem",margin:0}}>{section.category}</h2>
          </div>
          <div style={{border:"0.5px solid #e5e7eb",borderTop:"none",borderRadius:"0 0 12px 12px",overflow:"hidden"}}>
            {section.items.map((item,i)=>(
              <div key={item.name} style={{padding:"1.25rem",borderBottom:i<section.items.length-1?"0.5px solid #e5e7eb":"none",display:"flex",justifyContent:"space-between",alignItems:"center",gap:"1rem",flexWrap:"wrap"}}>
                <div style={{flex:1}}>
                  <div style={{display:"flex",alignItems:"center",gap:"8px",marginBottom:"4px"}}>
                    <h3 style={{fontWeight:"bold",color:"#111827",margin:0,fontSize:"15px"}}>{item.name}</h3>
                    <span style={{background:"#F0FDF4",color:"#166534",fontSize:"11px",padding:"2px 8px",borderRadius:"999px",fontWeight:"500"}}>{item.badge}</span>
                  </div>
                  <p style={{color:"#6b7280",margin:0,fontSize:"13px",lineHeight:"1.6"}}>{item.desc}</p>
                </div>
                <a href={item.link} target="_blank" rel="noopener noreferrer"
                  style={{background:section.color,color:"#D4A853",padding:"8px 20px",borderRadius:"999px",fontWeight:"bold",textDecoration:"none",fontSize:"13px",whiteSpace:"nowrap"}}>
                  Try Free →
                </a>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div style={{background:"#F9F7FF",borderRadius:"16px",padding:"2rem",textAlign:"center",border:"0.5px solid #e5e7eb"}}>
        <p style={{color:"#4b5563",fontSize:"14px",lineHeight:"1.8",margin:"0 0 1rem"}}>
          <strong>Affiliate Disclosure:</strong> This page contains affiliate links. When you click a link and make a purchase or sign up, we may earn a commission at no extra cost to you. We only recommend products we have researched and genuinely believe will help you.
        </p>
        <Link href="/blog" style={{color:"#1A0A2E",fontWeight:"bold",fontSize:"14px"}}>← Read Our Full Reviews in the Blog</Link>
      </div>
    </div> 
  );
}