import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Clock } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { destinations } from "@/lib/destinations";
import hero from "@/assets/dest-japan.jpg";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Travel Stories — Tripper Blog" },
      { name: "description", content: "Field notes, city guides and travel inspiration from Tripper's writers and designers." },
      { property: "og:title", content: "Travel Stories — Tripper Blog" },
      { property: "og:description", content: "Field notes, city guides and travel inspiration." },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: Blog,
});

const posts = [
  { title: "The quiet side of Santorini", excerpt: "Skip Oia at sunset. Here's where locals actually watch the sky turn pink.", category: "City Guide", read: "6 min" },
  { title: "Cherry blossoms, decoded", excerpt: "A week-by-week sakura calendar so you arrive at exactly the right moment.", category: "Seasonal", read: "4 min" },
  { title: "What ₹2 lakh actually buys in the Alps", excerpt: "An honest breakdown of a mid-range Switzerland holiday — flights, stays, fondue.", category: "Money", read: "8 min" },
  { title: "Maldives without the honeymoon clichés", excerpt: "Solo, families, friends — three very different ways to do the Maldives.", category: "Inspiration", read: "5 min" },
  { title: "First time in Tokyo? Read this first.", excerpt: "Trains, etiquette, where to eat — your survival kit for the city.", category: "City Guide", read: "9 min" },
  { title: "Chasing the aurora in Iceland", excerpt: "When to go, where to stand, and the gear nobody tells you about.", category: "Adventure", read: "7 min" },
];

function Blog() {
  return (
    <>
      <PageHero
        eyebrow="Travel Stories"
        title={<>Field notes from <span className="italic text-orange">the road</span></>}
        description="Honest writing from people who go before you do — guides, gear breakdowns, and the trips that changed us."
        image={hero}
        height="sm"
      />

      <section className="py-16 md:py-24">
        <div className="container-page">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((p, i) => (
              <article key={p.title} className="group overflow-hidden rounded-2xl border border-border/60 bg-card shadow-[var(--shadow-card)] transition hover:-translate-y-1">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={destinations[i % destinations.length].image} alt={p.title} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                  <span className="absolute left-4 top-4 rounded-full bg-orange px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-accent-foreground">{p.category}</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Clock className="h-3.5 w-3.5" /> {p.read} read
                  </div>
                  <h3 className="mt-3 font-display text-xl font-bold leading-snug text-navy-deep group-hover:text-orange">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.excerpt}</p>
                  <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-orange">
                    Read story <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
