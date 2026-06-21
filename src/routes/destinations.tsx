import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Star, Clock, MapPin, ArrowRight, Search, X } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { destinations, type Region, type Theme } from "@/lib/destinations";
import { FaqAccordion } from "@/components/FaqAccordion";
import { faqs } from "@/lib/packages";
import hero from "@/assets/dest-paris.jpg";

export const Route = createFileRoute("/destinations")({
  head: () => ({
    meta: [
      { title: "Holiday Destinations — Tripper" },
      { name: "description", content: "Explore handpicked holiday destinations across India and 140+ countries. Filter by region, theme, duration and budget." },
      { property: "og:title", content: "Holiday Destinations — Tripper" },
      { property: "og:description", content: "Explore handpicked holiday destinations across 140+ countries." },
      { property: "og:url", content: "/destinations" },
    ],
    links: [{ rel: "canonical", href: "/destinations" }],
  }),
  component: Destinations,
});

const REGIONS: Array<Region | "All"> = ["All", "Domestic", "International"];
const THEMES: Array<Theme | "All"> = ["All", "Honeymoon", "Family", "Adventure", "Luxury", "Beach", "Snow", "Cultural", "Pilgrimage"];
const BUDGETS = [
  { key: "all", label: "Any Budget", min: 0, max: Infinity },
  { key: "low", label: "Under ₹50K", min: 0, max: 50000 },
  { key: "mid", label: "₹50K – ₹1.5L", min: 50000, max: 150000 },
  { key: "high", label: "₹1.5L+", min: 150000, max: Infinity },
];

function Destinations() {
  const [region, setRegion] = useState<Region | "All">("All");
  const [theme, setTheme] = useState<Theme | "All">("All");
  const [budget, setBudget] = useState<(typeof BUDGETS)[number]["key"]>("all");
  const [query, setQuery] = useState("");

  const list = useMemo(() => {
    const b = BUDGETS.find((x) => x.key === budget)!;
    const q = query.toLowerCase().trim();
    return destinations.filter((d) => {
      if (region !== "All" && d.region !== region) return false;
      if (theme !== "All" && !d.themes.includes(theme)) return false;
      if (d.priceValue < b.min || d.priceValue > b.max) return false;
      if (q && !(d.name.toLowerCase().includes(q) || d.country.toLowerCase().includes(q))) return false;
      return true;
    });
  }, [region, theme, budget, query]);

  const reset = () => { setRegion("All"); setTheme("All"); setBudget("all"); setQuery(""); };
  const activeCount = [region !== "All", theme !== "All", budget !== "all", !!query].filter(Boolean).length;

  return (
    <>
      <PageHero
        eyebrow="Destinations"
        title={<>Where will <span className="italic text-orange">you</span> go next?</>}
        description="From quiet Himalayan villages to overwater Maldivian villas — explore 14 handpicked destinations across India and the world."
        image={hero}
        height="sm"
      />

      <section className="py-16 md:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[280px_1fr]">
          {/* Filter sidebar */}
          <aside className="space-y-6">
            <div className="rounded-2xl border border-border/60 bg-card p-5 shadow-[var(--shadow-card)]">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-base font-bold text-navy-deep">Filters</h3>
                {activeCount > 0 && (
                  <button onClick={reset} className="flex items-center gap-1 text-xs font-semibold text-orange hover:underline">
                    <X className="h-3 w-3" /> Reset ({activeCount})
                  </button>
                )}
              </div>

              <div className="mt-5">
                <label className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground">Search</label>
                <div className="mt-2 flex items-center gap-2 rounded-xl border border-border bg-background px-3 py-2">
                  <Search className="h-4 w-4 text-orange" />
                  <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Bali, Switzerland…" className="w-full bg-transparent text-sm focus:outline-none" />
                </div>
              </div>

              <FilterGroup label="Region">
                {REGIONS.map((r) => (
                  <Chip key={r} active={region === r} onClick={() => setRegion(r)}>{r}</Chip>
                ))}
              </FilterGroup>

              <FilterGroup label="Theme">
                {THEMES.map((t) => (
                  <Chip key={t} active={theme === t} onClick={() => setTheme(t)}>{t}</Chip>
                ))}
              </FilterGroup>

              <FilterGroup label="Budget">
                {BUDGETS.map((b) => (
                  <Chip key={b.key} active={budget === b.key} onClick={() => setBudget(b.key)}>{b.label}</Chip>
                ))}
              </FilterGroup>
            </div>
          </aside>

          {/* Results */}
          <div>
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">
                Showing <span className="font-bold text-navy-deep">{list.length}</span> of {destinations.length} destinations
              </p>
            </div>

            {list.length === 0 ? (
              <div className="mt-8 rounded-2xl border border-dashed border-border bg-sand/50 py-20 text-center">
                <p className="text-sm text-muted-foreground">No destinations match your filters.</p>
                <button onClick={reset} className="mt-3 rounded-full bg-orange px-5 py-2 text-xs font-semibold text-accent-foreground">Reset filters</button>
              </div>
            ) : (
              <div className="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {list.map((d) => (
                  <Link key={d.slug} to="/packages" className="group overflow-hidden rounded-2xl border border-border/60 bg-card shadow-[var(--shadow-card)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img src={d.image} alt={d.name} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                      <span className="absolute right-3 top-3 rounded-full bg-orange px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-accent-foreground">{d.tag}</span>
                      <span className="absolute bottom-3 left-3 inline-flex items-center gap-1 rounded-md bg-white/95 px-2 py-1 text-[11px] font-bold text-navy-deep">
                        <Star className="h-3 w-3 fill-orange text-orange" /> {d.rating} <span className="font-normal text-muted-foreground">({d.reviews})</span>
                      </span>
                    </div>
                    <div className="p-5">
                      <div className="text-[11px] font-semibold uppercase tracking-widest text-orange">
                        <MapPin className="mr-1 inline h-3 w-3" /> {d.country}
                      </div>
                      <h3 className="mt-1 font-display text-lg font-bold text-navy-deep group-hover:text-orange">{d.name}</h3>
                      <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{d.description}</p>
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {d.themes.slice(0, 2).map((t) => (
                          <span key={t} className="rounded bg-orange/10 px-2 py-0.5 text-[11px] font-medium text-orange">{t}</span>
                        ))}
                      </div>
                      <div className="mt-4 flex items-center justify-between border-t border-border/50 pt-4">
                        <span className="flex items-center gap-1.5 text-xs text-muted-foreground"><Clock className="h-3 w-3 text-orange" /> {d.days}</span>
                        <div className="text-right">
                          <div className="text-[10px] text-muted-foreground">from</div>
                          <div className="font-display text-base font-bold text-navy-deep">{d.price}</div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="bg-sand py-16 md:py-20">
        <div className="container-page">
          <h2 className="font-display text-2xl font-bold text-navy-deep md:text-3xl">Frequently asked</h2>
          <div className="mt-8">
            <FaqAccordion items={faqs.slice(0, 4)} />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-page rounded-3xl bg-navy-deep p-10 text-white md:p-14">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <h2 className="font-display text-2xl font-bold md:text-3xl">Don't see your dream destination?</h2>
              <p className="mt-2 text-white/75">We design custom trips to over 140 countries.</p>
            </div>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-orange px-6 py-3 text-sm font-semibold text-accent-foreground">
              Plan a custom trip <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function FilterGroup({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="mt-5">
      <div className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground">{label}</div>
      <div className="mt-2.5 flex flex-wrap gap-1.5">{children}</div>
    </div>
  );
}

function Chip({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition ${
        active ? "border-navy-deep bg-navy-deep text-white" : "border-border bg-background text-foreground/70 hover:border-orange hover:text-orange"
      }`}
    >
      {children}
    </button>
  );
}
