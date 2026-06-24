export default function NewsletterPage() {
  return (
    <div style={{maxWidth:"700px", margin:"0 auto", padding:"4rem 1.25rem", textAlign:"center"}}>
      <span style={{background:"#1A0A2E", color:"#D4A853", padding:"4px 16px", borderRadius:"999px", fontSize:"12px", fontWeight:600, letterSpacing:"0.05em"}}>
        FREE DOWNLOAD
      </span>

      <h1 style={{fontFamily:"var(--font-playfair)", fontSize:"2.25rem", fontWeight:700, color:"#1A0A2E", margin:"1.25rem 0 1rem", lineHeight:1.25}}>
        Get the Free Budget Tracker
      </h1>

      <p style={{color:"#4b5563", fontSize:"1.05rem", lineHeight:1.7, marginBottom:"2.5rem"}}>
        Join thousands of savvy women getting weekly money tips, side hustle ideas, beauty finds and wellness advice — straight to your inbox. Your free Budget Tracker is delivered the moment you join.
      </p>

      {/* MAILERLITE EMBED GOES HERE — paste your form embed code below */}
      <div style={{background:"#F9F7FF", border:"1px solid #e5e7eb", borderRadius:"16px", padding:"2rem"}}>
        <p style={{color:"#9ca3af", fontSize:"14px"}}>
          [ Paste your MailerLite embedded form code here ]
        </p>
      </div>

      <p style={{color:"#9ca3af", fontSize:"13px", marginTop:"1.5rem"}}>
        No spam. Unsubscribe anytime.
      </p>
    </div>
  );
}