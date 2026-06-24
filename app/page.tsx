import Link from "next/link";
import PostCard from "@/components/PostCard";
import { getAllPosts } from "@/lib/posts";

const categories = [
  {
    name: "Personal Finance",
    href: "/finance",
    color: "bg-purple-900",
    emoji: "💰",
    desc: "Budget, save & invest smarter",
  },
  {
    name: "Side Hustle",
    href: "/side-hustle",
    color: "bg-green-900",
    emoji: "💼",
    desc: "Build income outside your 9-5",
  },
  {
    name: "Health & Wellness",
    href: "/health",
    color: "bg-blue-900",
    emoji: "🌿",
    desc: "Healthy habits that actually stick",
  },
  {
    name: "Beauty & Skincare",
    href: "/beauty",
    color: "bg-pink-900",
    emoji: "✨",
    desc: "Glow up with products that work",
  },
  {
    name: "Home & Decor",
    href: "/home-decor",
    color: "bg-amber-900",
    emoji: "🏠",
    desc: "Aesthetic spaces on any budget",
  },
];

export default function HomePage() {
  const posts = getAllPosts().slice(0, 6);

  return (
    <div>
      {/* HERO */}
      <section className="bg-purple-900 text-white py-20 px-4">
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
  className="bg-yellow-400 text-purple-900 px-8 py-3 rounded-full font-bold hover:bg-white hover:text-black transition text-sm"
>
  Read Latest Posts →
</Link>
<Link
  href="/newsletter"
  className="border-2 border-yellow-400 text-yellow-400 px-8 py-3 rounded-full font-bold hover:bg-yellow-400 hover:text-black transition text-sm"
>
  Get Free Budget Tracker
</Link>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-playfair text-3xl font-bold text-center mb-10 text-gray-900">
            What Would You Like to Explore?
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {categories.map((cat) => (
              <Link
                key={cat.href}
                href={cat.href}
                className={`${cat.color} text-white rounded-2xl p-5 text-center hover:opacity-90 transition group`}
              >
                <div className="text-3xl mb-2">{cat.emoji}</div>
                <h3 className="font-bold text-sm mb-1">{cat.name}</h3>
                <p className="text-xs opacity-80">{cat.desc}</p>
              </Link>
            ))}
          </div>
        </div>
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
              className="text-purple-900 font-bold text-sm hover:underline"
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
      <section className="bg-purple-900 text-white py-16 px-4">
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
  className="bg-yellow-400 text-purple-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-black transition inline-block"
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
