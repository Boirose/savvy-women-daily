import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <h3 className="font-playfair text-xl text-gold font-bold mb-3">
            Savvy Women Daily
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Helping women build smarter money habits, side incomes and healthy
            routines.
          </p>
        </div>

        {/* Categories */}
        <div>
          <h4 className="font-bold text-gold mb-3">Topics</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            {[
              ["Finance", "/finance"],
              ["Side Hustle", "/side-hustle"],
              ["Health", "/health"],
              ["Beauty", "/beauty"],
              ["Home Decor", "/home-decor"],
            ].map(([label, href]) => (
              <li key={href}>
                <Link href={href} className="hover:text-gold transition">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="font-bold text-gold mb-3">Legal</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <Link href="/privacy-policy" className="hover:text-gold transition">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/disclaimer" className="hover:text-gold transition">
                Disclaimer
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gold transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-bold text-gold mb-3">Free Resources</h4>
          <p className="text-gray-400 text-sm mb-3">
            Get our free budget tracker + weekly tips.
          </p>
          <Link
            href="https://savvywomendaily.beehiiv.com"
            className="bg-gold text-burgundy px-4 py-2 rounded-full text-sm font-bold hover:bg-white transition"
          >
            Join Free →
          </Link>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800 text-center py-4 text-gray-500 text-xs">
        © 2026 Savvy Women Daily. This site contains affiliate links — we may
        earn a commission at no extra cost to you.
      </div>
    </footer>
  );
}
