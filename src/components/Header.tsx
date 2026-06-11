"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-burgundy text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="font-playfair text-2xl font-bold text-gold">
          Savvy Women Daily
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <Link href="/finance" className="hover:text-gold transition">
            Finance
          </Link>
          <Link href="/side-hustle" className="hover:text-gold transition">
            Side Hustle
          </Link>
          <Link href="/health" className="hover:text-gold transition">
            Health
          </Link>
          <Link href="/beauty" className="hover:text-gold transition">
            Beauty
          </Link>
          <Link href="/home-decor" className="hover:text-gold transition">
            Home
          </Link>
          <Link
            href="/blog"
            className="bg-gold text-burgundy px-4 py-1 rounded-full font-bold hover:bg-white transition"
          >
            All Posts
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden bg-burgundy border-t border-rose px-4 pb-4 flex flex-col gap-3 text-sm">
          {[
            ["Finance", "/finance"],
            ["Side Hustle", "/side-hustle"],
            ["Health", "/health"],
            ["Beauty", "/beauty"],
            ["Home", "/home-decor"],
            ["All Posts", "/blog"],
          ].map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="hover:text-gold transition py-1 border-b border-rose"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
