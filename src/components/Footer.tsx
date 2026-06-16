import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{background:"#111827",color:"white",marginTop:"4rem"}}>
      <div style={{maxWidth:"1200px",margin:"0 auto",padding:"3rem 1rem",display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))",gap:"2rem"}}>

        <div>
          <h3 style={{fontSize:"1.25rem",fontWeight:"bold",color:"#D4A853",marginBottom:"0.75rem"}}>
            Savvy Women Daily
          </h3>
          <p style={{color:"#9ca3af",fontSize:"14px",lineHeight:"1.7",margin:0}}>
            Helping women build smarter money habits, side incomes and healthy routines.
          </p>
        </div>

        <div>
          <h4 style={{fontWeight:"bold",color:"#D4A853",marginBottom:"0.75rem",fontSize:"14px"}}>Topics</h4>
          <ul style={{listStyle:"none",padding:0,margin:0,display:"flex",flexDirection:"column",gap:"0.5rem"}}>
            {[
              ["💰 Finance","/finance"],
              ["💼 Side Hustle","/side-hustle"],
              ["🌿 Health","/health"],
              ["✨ Beauty","/beauty"],
              ["🏠 Home Decor","/home-decor"],
              ["📚 All Posts","/blog"],
            ].map(([label,href])=>(
              <li key={href}>
                <Link href={href} style={{color:"#9ca3af",textDecoration:"none",fontSize:"13px"}}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 style={{fontWeight:"bold",color:"#D4A853",marginBottom:"0.75rem",fontSize:"14px"}}>Company</h4>
          <ul style={{listStyle:"none",padding:0,margin:0,display:"flex",flexDirection:"column",gap:"0.5rem"}}>
            {[
              ["About Us","/about"],
              ["Resources","/resources"],
              ["Privacy Policy","/privacy-policy"],
              ["Contact","/contact"],
            ].map(([label,href])=>(
              <li key={href}>
                <Link href={href} style={{color:"#9ca3af",textDecoration:"none",fontSize:"13px"}}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 style={{fontWeight:"bold",color:"#D4A853",marginBottom:"0.75rem",fontSize:"14px"}}>Free Resources</h4>
          <p style={{color:"#9ca3af",fontSize:"13px",marginBottom:"1rem",lineHeight:"1.6"}}>
            Get our free budget tracker + weekly tips.
          </p>
          <Link href="https://savvywomendaily.beehiiv.com"
            style={{background:"#D4A853",color:"#1A0A2E",padding:"8px 20px",borderRadius:"999px",fontSize:"13px",fontWeight:"bold",textDecoration:"none",display:"inline-block"}}>
            Join Free →
          </Link>
        </div>

      </div>

      <div style={{borderTop:"1px solid #1f2937",textAlign:"center",padding:"1rem",color:"#6b7280",fontSize:"12px"}}>
        © 2026 Savvy Women Daily. This site contains affiliate links — we may earn a commission at no extra cost to you.
      </div>
    </footer>
  );
}