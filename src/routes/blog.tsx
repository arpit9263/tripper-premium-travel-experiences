import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { BlogCard } from "@/components/BlogCard";
import { blogPosts } from "@/lib/packages";
import hero from "@/assets/dest-japan.jpg";

const CATEGORIES = ["All", "Guides", "Itineraries", "Tips", "Experiences"] as const;

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Travel Stories & Guides — Tripper Blog" },
      { name: "description", content: "Curated travel guides, itineraries and insider tips from Tripper's travel designers across India and 140+ countries." },
      { property: "og:title", content: "Travel Stories — Tripper Blog" },
      { property: "og:description", content: "Curated travel guides, itineraries and insider tips." },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: Blog,
});

function Blog() {
  const [cat, setCat] = useState<(typeof CATEGORIES)[number]>("All");
  const [q, setQ] = useState("");

  const featured = blogPosts[0];
  const list = useMemo(() => {
    return blogPosts.slice(1).filter((p) => {
      if (cat !== "All" && p.category !== cat) return false;
      if (q && !(p.title.toLowerCase().includes(q.toLowerCase()) || p.excerpt.toLowerCase().includes(q.toLowerCase()))) return false;
      return true;
    });
  }, [cat, q]);

  return (
    <>
      <PageHero
        eyebrow="Travel Stories"
        title={<>Inspiration from <span className="italic text-orange">the road</span></>}
        description="Guides, itineraries and the lessons our designers learn on every trip."
        image={hero}
        height="sm"
      />

      {/* Featured */}
      <section className="py-16 md:py-20">
        <div className="container-page">
          <Link to="/blog" className="group grid overflow-hidden rounded-3xl border border-border/60 bg-card shadow-[var(--shadow-card)] md:grid-cols-2">
            <div className="relative aspect-[16/11] overflow-hidden md:aspect-auto">
              <img src={featured.image} alt={featured.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              <span className="absolute left-5 top-5 rounded-full bg-orange px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-accent-foreground">Featured</span>
            </div>
            <div className="flex flex-col justify-center p-8 md:p-12">
              <div className="text-[11px] font-semibold uppercase tracking-widest text-orange">{featured.category}</div>
              <h2 className="mt-3 font-display text-2xl font-bold text-navy-deep md:text-4xl group-hover:text-orange">{featured.title}</h2>
              <p className="mt-4 text-foreground/70">{featured.excerpt}</p>
              <div className="mt-6 flex items-center gap-3 text-xs text-muted-foreground">
                <span className="font-semibold text-navy-deep">{featured.author}</span> · <span>{featured.readMins} min read</span>
              </div>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-orange">Read story <ArrowRight className="h-4 w-4" /></span>
            </div>
          </Link>
        </div>
      </section>

      {/* List with filters */}
      <section className="bg-sand py-16 md:py-20">
        <div className="container-page">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((c) => (
                <button
                  key={c}
                  onClick={() => setCat(c)}
                  className={`rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider transition ${
                    cat === c ? "bg-navy-deep text-white" : "border border-border bg-card text-foreground/70 hover:border-orange hover:text-orange"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2">
              <Search className="h-4 w-4 text-orange" />
              <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search stories…" className="w-48 bg-transparent text-sm focus:outline-none" />
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {list.length === 0 ? (
              <div className="col-span-full rounded-2xl border border-dashed border-border bg-card py-16 text-center text-sm text-muted-foreground">
                No stories match your filters yet — try another category.
              </div>
            ) : list.map((p) => <BlogCard key={p.slug} post={p} />)}
          </div>
        </div>
      </section>
    </>
  );
}
