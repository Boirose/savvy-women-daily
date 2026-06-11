import Link from "next/link";

interface PostCardProps {
  title: string;
  description: string;
  slug: string;
  category: string;
  date: string;
  image?: string;
}

const categoryColors: Record<string, string> = {
  finance: "bg-burgundy",
  "side-hustle": "bg-darkgreen",
  health: "bg-navy",
  beauty: "bg-rose",
  "home-decor": "bg-brown",
};

const categoryLabels: Record<string, string> = {
  finance: "Finance",
  "side-hustle": "Side Hustle",
  health: "Health",
  beauty: "Beauty",
  "home-decor": "Home Decor",
};

export default function PostCard({
  title,
  description,
  slug,
  category,
  date,
  image,
}: PostCardProps) {
  return (
    <Link href={`/blog/${slug}`} className="group block">
      <article className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full">
        {/* Image */}
        <div className="h-48 bg-gray-100 relative overflow-hidden">
          {image ? (
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div
              className={`w-full h-full ${categoryColors[category] || "bg-burgundy"} flex items-center justify-center`}
            >
              <span className="text-white font-playfair text-xl font-bold text-center px-4">
                {title}
              </span>
            </div>
          )}
          {/* Category badge */}
          <span
            className={`absolute top-3 left-3 ${categoryColors[category] || "bg-burgundy"} text-white text-xs font-bold px-3 py-1 rounded-full`}
          >
            {categoryLabels[category] || category}
          </span>
        </div>

        {/* Content */}
        <div className="p-5">
          <p className="text-xs text-gray-400 mb-2">{date}</p>
          <h3 className="font-playfair text-lg font-bold text-gray-900 mb-2 group-hover:text-burgundy transition leading-snug">
            {title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
            {description}
          </p>
          <span className="inline-block mt-4 text-burgundy text-sm font-bold group-hover:underline">
            Read More →
          </span>
        </div>
      </article>
    </Link>
  );
}
