"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    ["Finance","/finance"],
    ["Side Hustle","/side-hustle"],
    ["Health","/health"],
    ["Beauty","/beauty"],
    ["Home Decor","/home-decor"],
  ];

  return (
    <header style={{background:"#FFFFFF", color:"#1A0A2E", position:"sticky", top:0, zIndex:50, borderBottom:"1px solid #e5e7eb"}}>
      <div style={{maxWidth:"1200px", margin:"0 auto", padding:"1rem 1.25rem", display:"flex", justifyContent:"space-between", alignItems:"center"}}>
        <Link href="/" style={{fontSize:"1.5rem", fontWeight:"bold", color:"#1A0A2E", textDecoration:"none"}}>
          Savvy Women Daily
        </Link>

        <nav style={{display:"none", gap:"1.5rem", fontSize:"14px", fontWeight:500}} className="desktop-nav">
          {links.map(([label,href])=>(
            <Link key={href} href={href} style={{color:"#1A0A2E", textDecoration:"none"}}>{label}</Link>
          ))}
          <Link href="/blog" style={{background:"#D4A853", color:"#1A0A2E", padding:"6px 16px", borderRadius:"999px", fontWeight:"bold", textDecoration:"none"}}>
            All Posts
          </Link>
        </nav>

        <button onClick={()=>setOpen(!open)} style={{background:"none", border:"none", fontSize:"24px", color:"#1A0A2E", cursor:"pointer"}} className="mobile-toggle">
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <div style={{padding:"0 1.25rem 1rem", display:"flex", flexDirection:"column", gap:"0.75rem", borderTop:"1px solid #e5e7eb"}}>
          {[...links,["All Posts","/blog"]].map(([label,href])=>(
            <Link key={href} href={href} style={{color:"#1A0A2E", textDecoration:"none", padding:"0.4rem 0", borderBottom:"1px solid #f3f4f6"}} onClick={()=>setOpen(false)}>
              {label}
            </Link>
          ))}
        </div>
      )}

      <style>{`
        @media (min-width: 768px) {
          .desktop-nav { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </header>
  );
}