"use client";
import { useEffect } from "react";

export default function NewsletterPage() {
  useEffect(() => {
    // Load MailerLite universal script once
    if (!document.getElementById("mailerlite-universal")) {
      const script = document.createElement("script");
      script.id = "mailerlite-universal";
      script.innerHTML = `
        (function(w,d,e,u,f,l,n){w[f]=w[f]||function(){(w[f].q=w[f].q||[])
        .push(arguments);},l=d.createElement(e),l.async=1,l.src=u,
        n=d.getElementsByTagName(e)[0],n.parentNode.insertBefore(l,n);})
        (window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');
        ml('account', '2456495');
      `;
      document.body.appendChild(script);
    }
  }, []);

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

      <div style={{background:"#F9F7FF", border:"1px solid #e5e7eb", borderRadius:"16px", padding:"2rem"}}>
        <div className="ml-embedded" data-form="TQanaR"></div>
      </div>

      <p style={{color:"#9ca3af", fontSize:"13px", marginTop:"1.5rem"}}>
        No spam. Unsubscribe anytime.
      </p>
    </div>
  );
}