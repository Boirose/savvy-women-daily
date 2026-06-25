import Link from "next/link";

interface Props {
  title: string;
  description: string;
  slug: string;
  category: string;
  date: string;
  image?: string | null;
}

const labels: Record<string, string> = {
  finance: "Finance",
  "side-hustle": "Side Hustle",
  health: "Health",
  beauty: "Beauty",
  jewelry: "Jewelry",
};

export default function PostCard({ title, description, slug, category, date, image }: Props) {
  return (
    <Link href={`/blog/${slug}`} style={{ textDecoration: "none", display: "block" }}>
      <article style={{ background: "#FFFFFF", borderRadius: "16px", boxShadow: "0 1px 3px rgba(0,0,0,0.1)", overflow: "hidden", height: "100%" }}>
        <div style={{ height: "190px", background: "#1A0A2E", position: "relative", overflow: "hidden" }}>
          {image ? (
            <img src={image} alt={title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          ) : (
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%", padding: "1rem" }}>
              <span style={{ color: "#FFFFFF", fontWeight: "bold", textAlign: "center", fontSize: "18px" }}>{title}</span>
            </div>
          )}
          <span style={{ position: "absolute", top: "12px", left: "12px", background: "#D4A853", color: "#1A0A2E", fontSize: "11px", fontWeight: "bold", padding: "3px 12px", borderRadius: "999px" }}>
            {labels[category] || category}
          </span>
        </div>
        <div style={{ padding: "1.25rem" }}>
          <p style={{ fontSize: "12px", color: "#9ca3af", marginBottom: "0.5rem" }}>{date}</p>
          <h3 style={{ fontWeight: "bold", color: "#1A0A2E", marginBottom: "0.5rem", fontSize: "16px", lineHeight: "1.4" }}>{title}</h3>
          <p style={{ color: "#6b7280", fontSize: "13px", lineHeight: "1.6", margin: 0 }}>{description}</p>
          <span style={{ display: "inline-block", marginTop: "1rem", color: "#1A0A2E", fontSize: "13px", fontWeight: "bold" }}>Read More →</span>
        </div>
      </article>
    </Link>
  );
}