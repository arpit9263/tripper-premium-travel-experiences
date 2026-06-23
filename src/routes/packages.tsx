import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Check, Clock, Star, ArrowRight, Filter, MapPin } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { destinations, type Region } from "@/lib/destinations";
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel";
import { FaqAccordion } from "@/components/FaqAccordion";
import { faqs, enrichedTrips } from "@/lib/packages";
import { UpcomingTripCard } from "@/components/UpcomingTripCard";
import hero from "@/assets/dest-iceland.jpg";

export const Route = createFileRoute("/packages")({
  head: () => ({
    meta: [
      { title: "Holiday Packages — Trippper" },
      { name: "description", content: "Curated holiday packages with flights, stays, transfers and experiences. Best-selling itineraries across India and 140+ countries." },
      { property: "og:title", content: "Holiday Packages — Trippper" },
      { property: "og:description", content: "Curated holiday packages — handpicked by travel designers." },
      { property: "og:url", content: "/packages" },
    ],
    links: [{ rel: "canonical", href: "/packages" }],
  }),
  component: Packages,
});

type SortKey = "popular" | "price-asc" | "price-desc" | "duration";

function Packages() {
  const [region, setRegion] = useState<Region | "All">("All");
  const [sort, setSort] = useState<SortKey>("popular");

  const list = useMemo(() => {
    const filtered = region === "All" ? destinations : destinations.filter((d) => d.region === region);
    const sorted = [...filtered];
    if (sort === "price-asc") sorted.sort((a, b) => a.priceValue - b.priceValue);
    if (sort === "price-desc") sorted.sort((a, b) => b.priceValue - a.priceValue);
    if (sort === "duration") sorted.sort((a, b) => b.nights - a.nights);
    if (sort === "popular") sorted.sort((a, b) => b.reviews - a.reviews);
    return sorted;
  }, [region, sort]);

  return (
    <>
      <PageHero
        eyebrow="Tour Packages"
        title={<>Ready when you are.</>}
        description="Handcrafted itineraries with flights, stays, transfers and curated experiences — all in one price."
        image={hero}
        height="sm"
      />

      {/* Filter bar */}
      <section className="border-b border-border/60 bg-card sticky top-20 z-30 backdrop-blur md:top-28">
        <div className="container-page flex flex-wrap items-center justify-between gap-4 py-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-muted-foreground">
              <Filter className="h-3.5 w-3.5" /> Region:
            </span>
            {(["All", "Domestic", "International"] as const).map((r) => (
              <button
                key={r}
                onClick={() => setRegion(r)}
                className={`rounded-full px-4 py-1.5 text-xs font-semibold transition ${
                  region === r ? "bg-navy-deep text-white" : "border border-border text-foreground/70 hover:border-orange hover:text-orange"
                }`}
              >
                {r === "Domestic" ? "India" : r}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2 text-xs">
            <label className="font-bold uppercase tracking-widest text-muted-foreground">Sort:</label>
            <select value={sort} onChange={(e) => setSort(e.target.value as SortKey)} className="rounded-full border border-border bg-background px-3 py-1.5 font-semibold text-navy-deep focus:border-orange focus:outline-none">
              <option value="popular">Most Popular</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="duration">Duration</option>
            </select>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-page">
          <p className="text-sm text-muted-foreground"><span className="font-bold text-navy-deep">{list.length}</span> packages found</p>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {list.map((d) => (
              <article key={d.slug} className="group overflow-hidden rounded-2xl border border-border/60 bg-card shadow-[var(--shadow-card)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]">
                <div className="relative h-56 overflow-hidden">
                  <img src={d.image} alt={d.name} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                  <span className="absolute right-3 top-3 rounded-full bg-orange px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-accent-foreground">{d.tag}</span>
                  <span className="absolute bottom-3 left-3 inline-flex items-center gap-1 rounded-md bg-white/95 px-2 py-1 text-[11px] font-bold text-navy-deep">
                    <Star className="h-3 w-3 fill-orange text-orange" /> {d.rating} ({d.reviews})
                  </span>
                </div>
                <div className="p-5">
                  <div className="text-[11px] font-semibold uppercase tracking-widest text-orange">
                    <MapPin className="mr-1 inline h-3 w-3" /> {d.country} · {d.region}
                  </div>
                  <h3 className="mt-1.5 font-display text-lg font-bold text-navy-deep group-hover:text-orange">{d.name}</h3>
                  <ul className="mt-3 space-y-1.5 text-xs text-muted-foreground">
                    {["Return flights included", "Handpicked stays", "Daily breakfast & select meals", "Private transfers"].map((x) => (
                      <li key={x} className="flex items-center gap-2"><Check className="h-3 w-3 text-orange" /> {x}</li>
                    ))}
                  </ul>
                  <div className="mt-4 flex items-end justify-between border-t border-border/50 pt-4">
                    <div>
                      <div className="text-[10px] text-muted-foreground">From</div>
                      <div className="font-display text-2xl font-bold text-navy-deep">{d.price}</div>
                      <div className="text-[10px] text-muted-foreground">per person · {d.days}</div>
                    </div>
                    <Link to="/contact" className="inline-flex items-center gap-1.5 rounded-full bg-orange px-4 py-2 text-xs font-semibold text-accent-foreground hover:bg-orange-soft">
                      View Itinerary <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sand py-20 md:py-24">
        <div className="container-page">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-orange">Fixed Departures</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy-deep md:text-4xl">Upcoming guaranteed trips</h2>
            <p className="mt-3 text-foreground/70">Join a small-group departure with confirmed seats, flights and a trip leader.</p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {enrichedTrips.slice(0, 6).map((t) => <UpcomingTripCard key={t.id} trip={t} />)}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container-page">
          <TestimonialsCarousel />
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-orange">Frequently Asked</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy-deep md:text-4xl">Package FAQs</h2>
          </div>
          <FaqAccordion items={faqs} />
        </div>
      </section>
    </>
  );
}
