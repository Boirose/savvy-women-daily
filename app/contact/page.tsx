export default function ContactPage() {
  return (
    <div style={{maxWidth:"600px",margin:"0 auto",padding:"4rem 1rem",textAlign:"center"}}>
      <span style={{background:"#1A0A2E",color:"#D4A853",padding:"4px 16px",borderRadius:"999px",fontSize:"12px",fontWeight:"500"}}>CONTACT</span>
      <h1 style={{fontSize:"2rem",fontWeight:"bold",color:"#111827",margin:"1rem 0"}}>Get In Touch</h1>
      <p style={{color:"#6b7280",lineHeight:"1.8",marginBottom:"2rem"}}>
        Have a question, collaboration request, or want to work with us? We read every message and respond within 48 hours.
      </p>

      <div style={{display:"grid",gap:"1rem",marginBottom:"2rem"}}>
        {[
          {icon:"📧",label:"General Enquiries",value:"hello@savvywomendaily.com"},
          {icon:"🤝",label:"Partnerships & Collaborations",value:"partners@savvywomendaily.com"},
          {icon:"📌",label:"Pinterest",value:"pinterest.com/savvywomen21"}
        ].map(c=>(
          <div key={c.label} style={{background:"#F9F7FF",borderRadius:"12px",padding:"1.25rem",border:"0.5px solid #e5e7eb",textAlign:"left",display:"flex",alignItems:"center",gap:"1rem"}}>
            <span style={{fontSize:"1.5rem"}}>{c.icon}</span>
            <div>
              <p style={{fontWeight:"bold",color:"#1A0A2E",margin:"0 0 2px",fontSize:"14px"}}>{c.label}</p>
              <p style={{color:"#6b7280",margin:0,fontSize:"13px"}}>{c.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div style={{background:"#1A0A2E",borderRadius:"16px",padding:"1.5rem",color:"white"}}>
        <p style={{color:"#C9B8D8",margin:"0 0 1rem",fontSize:"14px"}}>Want free tips delivered weekly? Join our newsletter.</p>
        <a href="https://savvywomendaily.beehiiv.com" style={{background:"#D4A853",color:"#1A0A2E",padding:"10px 24px",borderRadius:"999px",fontWeight:"bold",textDecoration:"none",fontSize:"14px"}}>
          Subscribe Free →
        </a>
      </div>
    </div>
  );
}