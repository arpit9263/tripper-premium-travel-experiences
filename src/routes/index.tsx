import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowRight,
  Plane,
  Hotel,
  Ship,
  FileCheck,
  CalendarDays,
  Users,
  MapPin,
  ShieldCheck,
  BadgeCheck,
  Headphones,
  Heart,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Star,
  Compass,
  Search,
  Clock,
  Sun,
} from "lucide-react";
import heroPoster from "@/assets/hero-lagoon.jpg";
import { destinations } from "@/lib/destinations";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tripper — Crafted Journeys. Timeless Memories." },
      {
        name: "description",
        content:
          "Personalized holidays, flights, hotels, cruises and visas. Discover curated experiences across 140+ destinations with Tripper.",
      },
      { property: "og:title", content: "Tripper — Crafted Journeys. Timeless Memories." },
      {
        property: "og:description",
        content: "Personalized holidays. Unforgettable experiences in 140+ destinations.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const HERO_SLIDES = [
  {
    video:
      "https://videos.pexels.com/video-files/3571264/3571264-uhd_3840_2160_30fps.mp4",
    eyebrow: "Tropical Escapes",
    title: ["Crafted journeys.", "Timeless memories."],
    sub: "Overwater villas, private lagoons and slow island mornings.",
  },
  {
    video:
      "https://videos.pexels.com/video-files/2169307/2169307-uhd_3840_2160_30fps.mp4",
    eyebrow: "Mountain Trails",
    title: ["Above the clouds,", "into the wild."],
    sub: "Alpine peaks, hidden valleys and unforgettable summit sunrises.",
  },
  {
    video:
      "https://videos.pexels.com/video-files/4763824/4763824-uhd_3840_2160_24fps.mp4",
    eyebrow: "City Lights",
    title: ["Skylines that", "never sleep."],
    sub: "Curated city breaks across the world's most iconic capitals.",
  },
];

const tabs = [
  { key: "holidays", label: "Holidays", icon: Plane },
  { key: "flights", label: "Flights", icon: Plane },
  { key: "hotels", label: "Hotels", icon: Hotel },
  { key: "cruises", label: "Cruises", icon: Ship },
  { key: "visa", label: "Visa", icon: FileCheck },
] as const;

const trustBadges = [
  { icon: BadgeCheck, label: "Best Price Guarantee" },
  { icon: Headphones, label: "24/7 Support" },
  { icon: ShieldCheck, label: "Secure Booking" },
  { icon: Users, label: "Trusted by Millions" },
];

const PLACEHOLDERS = [
  "Dubai",
  "Bali honeymoon",
  "Bangkok in May",
  "Swiss Alps",
  "Maldives villa",
  "Paris in spring",
];

const TRENDING_PACKAGES: Record<string, number> = {
  greece: 24,
  japan: 31,
  swiss: 18,
  dubai: 42,
  bali: 36,
  paris: 27,
  iceland: 15,
  maldives: 21,
};

function Home() {
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]["key"]>("holidays");
  const [slide, setSlide] = useState(0);
  const [query, setQuery] = useState("");
  const [phIdx, setPhIdx] = useState(0);
  const [phText, setPhText] = useState(PLACEHOLDERS[0]);
  const [phFade, setPhFade] = useState(true);

  // hero slide rotation
  useEffect(() => {
    const t = setInterval(() => setSlide((s) => (s + 1) % HERO_SLIDES.length), 7000);
    return () => clearInterval(t);
  }, []);

  // animated placeholder
  useEffect(() => {
    const t = setInterval(() => {
      setPhFade(false);
      setTimeout(() => {
        setPhIdx((i) => {
          const next = (i + 1) % PLACEHOLDERS.length;
          setPhText(PLACEHOLDERS[next]);
          return next;
        });
        setPhFade(true);
      }, 250);
    }, 2400);
    return () => clearInterval(t);
  }, []);

  const filteredSuggestions = useMemo(() => {
    if (!query) return [];
    const q = query.toLowerCase();
    return destinations
      .filter((d) => d.name.toLowerCase().includes(q) || d.region.toLowerCase().includes(q))
      .slice(0, 5);
  }, [query]);

  return (
    <>
      {/* HERO with cycling videos */}
      <section className="relative isolate -mt-20 overflow-hidden">
        <div className="absolute inset-0 -z-20">
          {HERO_SLIDES.map((s, i) => (
            <video
              key={s.video}
              autoPlay
              muted
              loop
              playsInline
              preload={i === 0 ? "auto" : "metadata"}
              poster={heroPoster}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1400ms] ease-out ${
                i === slide ? "opacity-100 scale-105" : "opacity-0"
              }`}
              style={{ transitionProperty: "opacity, transform" }}
            >
              <source src={s.video} type="video/mp4" />
            </video>
          ))}
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-deep/85 via-navy-deep/50 to-transparent" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-navy-deep/40 via-transparent to-navy-deep/70" />

        <div className="container-page relative flex min-h-[100vh] flex-col justify-center pb-44 pt-32 text-primary-foreground md:pb-52">
          {HERO_SLIDES.map((s, i) => (
            <div
              key={s.eyebrow}
              className={`transition-all duration-700 ${
                i === slide
                  ? "pointer-events-auto translate-y-0 opacity-100"
                  : "pointer-events-none absolute -z-10 translate-y-4 opacity-0"
              }`}
            >
              {i === slide && (
                <>
                  <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-orange-soft backdrop-blur animate-fade-in">
                    <Sparkles className="h-3.5 w-3.5" /> {s.eyebrow}
                  </span>
                  <h1 className="mt-6 max-w-3xl font-display text-5xl font-bold leading-[1.02] tracking-tight md:text-7xl lg:text-[5.5rem] animate-fade-in">
                    {s.title[0]}
                    <br />
                    <span className="italic text-orange-soft">{s.title[1]}</span>
                  </h1>
                  <p className="mt-5 max-w-xl text-lg text-white/85 md:text-xl animate-fade-in">
                    {s.sub}
                  </p>
                </>
              )}
            </div>
          ))}

          <div className="mt-8 flex flex-wrap gap-x-7 gap-y-3">
            {trustBadges.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 text-sm font-medium text-white/90"
              >
                <span className="grid h-8 w-8 place-items-center rounded-full bg-white/10 text-orange-soft backdrop-blur">
                  <Icon className="h-4 w-4" />
                </span>
                {label}
              </div>
            ))}
          </div>

          {/* slide dots */}
          <div className="mt-10 flex gap-2">
            {HERO_SLIDES.map((_, i) => (
              <button
                key={i}
                aria-label={`Slide ${i + 1}`}
                onClick={() => setSlide(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === slide ? "w-10 bg-orange" : "w-4 bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Search card overlapping next section */}
        <div className="container-page absolute inset-x-0 bottom-0 z-20 translate-y-1/2">
          <div className="mx-auto max-w-6xl overflow-visible rounded-2xl bg-white shadow-[0_30px_80px_-20px_rgba(15,23,42,0.45)] ring-1 ring-black/5">
            <div className="flex flex-wrap gap-1 border-b border-border/60 px-3 pt-3">
              {tabs.map(({ key, label, icon: Icon }) => {
                const isActive = activeTab === key;
                return (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key)}
                    className={`relative flex items-center gap-2 rounded-t-lg px-5 py-3 text-sm font-semibold transition ${
                      isActive
                        ? "text-navy-deep"
                        : "text-muted-foreground hover:text-navy-deep"
                    }`}
                  >
                    <Icon className={`h-4 w-4 ${isActive ? "text-orange" : ""}`} />
                    {label}
                    {isActive && (
                      <span className="absolute inset-x-2 -bottom-px h-0.5 rounded-full bg-orange" />
                    )}
                  </button>
                );
              })}
            </div>

            <div className="grid gap-3 p-4 md:grid-cols-[1.4fr_1fr_1fr_1fr_auto] md:p-5">
              <Field icon={MapPin} label="Where to?">
                <div className="relative w-full">
                  <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="w-full bg-transparent text-sm font-medium text-navy-deep outline-none placeholder:text-transparent"
                    placeholder="Search"
                  />
                  {!query && (
                    <span
                      aria-hidden
                      className={`pointer-events-none absolute inset-y-0 left-0 flex items-center text-sm font-medium text-muted-foreground transition-all duration-300 ${
                        phFade ? "translate-y-0 opacity-100" : "-translate-y-1 opacity-0"
                      }`}
                    >
                      Search {phText}
                    </span>
                  )}
                  {filteredSuggestions.length > 0 && (
                    <div className="absolute left-0 right-0 top-full z-30 mt-3 overflow-hidden rounded-xl border border-border bg-white shadow-[0_20px_50px_-20px_rgba(15,23,42,0.35)]">
                      {filteredSuggestions.map((d) => (
                        <Link
                          key={d.slug}
                          to="/destinations"
                          className="flex items-center gap-3 border-b border-border/60 px-4 py-3 last:border-0 hover:bg-secondary"
                        >
                          <img src={d.image} alt="" className="h-9 w-9 rounded-md object-cover" />
                          <div className="flex-1">
                            <div className="text-sm font-semibold text-navy-deep">{d.name}</div>
                            <div className="text-[11px] text-muted-foreground">{d.region}</div>
                          </div>
                          <span className="text-xs font-semibold text-orange">{d.price}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </Field>
              <Field icon={CalendarDays} label="Check-in">
                <input
                  type="date"
                  className="w-full bg-transparent text-sm font-medium text-navy-deep outline-none"
                />
              </Field>
              <Field icon={CalendarDays} label="Check-out">
                <input
                  type="date"
                  className="w-full bg-transparent text-sm font-medium text-navy-deep outline-none"
                />
              </Field>
              <Field icon={Users} label="Travelers">
                <select className="w-full bg-transparent text-sm font-medium text-navy-deep outline-none">
                  <option>2 Adults, 1 Child</option>
                  <option>1 Adult</option>
                  <option>2 Adults</option>
                  <option>2 Adults, 2 Children</option>
                </select>
              </Field>
              <button className="group inline-flex items-center justify-center gap-2 rounded-xl bg-navy-deep px-7 py-4 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-elegant)] transition hover:bg-orange">
                <Search className="h-4 w-4" />
                Search
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* TRENDING — autoplay carousel */}
      <TrendingCarousel />

      {/* STATS */}
      <section className="mt-4 border-y border-border/60 bg-sand">
        <div className="container-page grid grid-cols-2 gap-8 py-10 md:grid-cols-4">
          {[
            ["140+", "Destinations"],
            ["50K+", "Happy Travelers"],
            ["4.9★", "Customer Rating"],
            ["18 yrs", "of Trust"],
          ].map(([n, l]) => (
            <div key={l} className="text-center">
              <div className="font-display text-3xl font-bold text-navy-deep md:text-4xl">{n}</div>
              <div className="mt-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                {l}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY TRIPPER */}
      <section className="py-20 md:py-28">
        <div className="container-page">
          <div className="max-w-2xl">
            <Eyebrow>Why Tripper</Eyebrow>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy-deep md:text-5xl">
              Travel made effortless, end to end.
            </h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Compass, title: "Expert Advisors", body: "Real humans who've walked the streets you'll wander." },
              { icon: ShieldCheck, title: "Trusted & Reliable", body: "18 years, 50,000+ travelers, zero compromises on safety." },
              { icon: Heart, title: "Premium Quality", body: "Handpicked stays, private guides, curated experiences." },
              { icon: Headphones, title: "24/7 Support", body: "We answer at 3 AM in Tokyo as fast as at noon in Mumbai." },
            ].map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="group rounded-2xl border border-border/60 bg-card p-7 shadow-[var(--shadow-card)] transition hover:-translate-y-1 hover:border-orange/40"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-navy-deep text-orange transition group-hover:bg-orange group-hover:text-primary-foreground">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-navy-deep">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-navy-deep py-20 text-primary-foreground md:py-28">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-orange/20 blur-3xl" />
        <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-orange/10 blur-3xl" />
        <div className="container-page grid items-center gap-10 md:grid-cols-[1.4fr_1fr]">
          <div>
            <Eyebrow>Need help choosing?</Eyebrow>
            <h2 className="mt-3 font-display text-3xl font-bold md:text-5xl">
              Talk to a travel designer. <span className="text-orange">It's on us.</span>
            </h2>
            <p className="mt-4 max-w-xl text-white/75">
              Tell us how you like to travel — quiet coastlines, mountain trails, food-led cities —
              and we'll send three handcrafted itineraries within 24 hours.
            </p>
          </div>
          <div className="flex flex-col gap-3 md:items-end">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-orange px-7 py-3.5 text-sm font-semibold text-accent-foreground transition hover:bg-orange-soft"
            >
              <Plane className="h-4 w-4" /> Plan My Trip
            </Link>
            <Link to="/packages" className="text-sm text-white/70 hover:text-orange">
              Or browse ready-made packages →
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 md:py-28">
        <div className="container-page">
          <Eyebrow>Why travelers love us</Eyebrow>
          <h2 className="mt-3 font-display text-3xl font-bold text-navy-deep md:text-5xl">
            Stories from the road
          </h2>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              { name: "Ananya R.", trip: "Maldives, 2025", body: "From the welcome call to the seaplane transfer, every detail was anticipated." },
              { name: "Rahul & Priya", trip: "Switzerland, 2024", body: "Our Alps honeymoon was flawless. The surprise mountaintop dinner made it unforgettable." },
              { name: "Meera K.", trip: "Japan, 2025", body: "Solo travel in Kyoto felt safe and deeply personal. The tea ceremony alone was worth it." },
            ].map((t) => (
              <figure
                key={t.name}
                className="rounded-2xl border border-border/60 bg-card p-7 shadow-[var(--shadow-card)]"
              >
                <div className="flex gap-0.5 text-orange">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-4 text-sm leading-relaxed text-foreground/80">
                  "{t.body}"
                </blockquote>
                <figcaption className="mt-5 text-sm">
                  <div className="font-semibold text-navy-deep">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.trip}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function TrendingCarousel() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  // autoplay
  useEffect(() => {
    if (paused) return;
    const el = scrollerRef.current;
    if (!el) return;
    const t = setInterval(() => {
      if (!el) return;
      const cardWidth = el.firstElementChild
        ? (el.firstElementChild as HTMLElement).offsetWidth + 16
        : 280;
      const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4;
      el.scrollTo({
        left: atEnd ? 0 : el.scrollLeft + cardWidth,
        behavior: "smooth",
      });
    }, 3500);
    return () => clearInterval(t);
  }, [paused]);

  const scroll = (dir: -1 | 1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const w = el.firstElementChild
      ? (el.firstElementChild as HTMLElement).offsetWidth + 16
      : 280;
    el.scrollBy({ left: dir * w * 2, behavior: "smooth" });
  };

  return (
    <section className="pt-40 md:pt-48">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <Eyebrow>Bestsellers</Eyebrow>
            <h2 className="mt-2 font-display text-3xl font-bold text-navy-deep md:text-5xl">
              Trending Holiday Destinations
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <Link
              to="/destinations"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-orange hover:underline"
            >
              View all <ArrowRight className="h-4 w-4" />
            </Link>
            <div className="flex gap-2">
              <button
                aria-label="Previous"
                onClick={() => scroll(-1)}
                className="grid h-10 w-10 place-items-center rounded-full border border-border bg-white text-navy-deep transition hover:bg-navy-deep hover:text-primary-foreground"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                aria-label="Next"
                onClick={() => scroll(1)}
                className="grid h-10 w-10 place-items-center rounded-full border border-border bg-white text-navy-deep transition hover:bg-navy-deep hover:text-primary-foreground"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        <div
          ref={scrollerRef}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          className="mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-4 [&::-webkit-scrollbar]:hidden"
          style={{ scrollbarWidth: "none" }}
        >
          {destinations.map((d) => (
            <Link
              key={d.slug}
              to="/destinations"
              className="group relative isolate flex aspect-[3/4] w-[78%] shrink-0 snap-start flex-col justify-end overflow-hidden rounded-2xl ring-1 ring-black/5 sm:w-[44%] lg:w-[19%]"
            >
              <img
                src={d.image}
                alt={d.name}
                loading="lazy"
                width={600}
                height={800}
                className="absolute inset-0 -z-10 h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-navy-deep/95 via-navy-deep/35 to-transparent transition-opacity duration-500 group-hover:from-navy-deep" />
              <span className="absolute right-3 top-3 rounded-full bg-orange px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-accent-foreground">
                {d.tag}
              </span>
              <div className="p-4 text-primary-foreground">
                <div className="text-[10px] font-semibold uppercase tracking-widest text-white/75">
                  {d.region}
                </div>
                <div className="mt-1 font-display text-lg font-bold leading-tight">
                  {d.name}
                </div>
                <div className="mt-1 text-[11px] font-medium text-white/80">
                  {TRENDING_PACKAGES[d.slug] ?? 12} Packages
                </div>

                {/* Hover-reveal detail */}
                <div className="grid grid-rows-[0fr] transition-all duration-500 group-hover:grid-rows-[1fr] group-hover:mt-3">
                  <div className="overflow-hidden">
                    <div className="flex items-center gap-3 text-[11px] text-white/85">
                      <span className="inline-flex items-center gap-1">
                        <Clock className="h-3 w-3" /> {d.days}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Sun className="h-3 w-3" /> Year-round
                      </span>
                    </div>
                    <div className="mt-2 flex items-center justify-between">
                      <span className="text-[11px] text-white/70">Starting from</span>
                      <span className="font-display text-sm font-bold text-orange-soft">
                        {d.price}
                      </span>
                    </div>
                    <span className="mt-3 inline-flex items-center gap-1 text-[11px] font-semibold text-orange">
                      Explore <ArrowRight className="h-3 w-3" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function Field({
  icon: Icon,
  label,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-1 rounded-xl border border-border/70 bg-white px-4 py-2.5 transition focus-within:border-orange focus-within:ring-2 focus-within:ring-orange/20">
      <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
        {label}
      </span>
      <div className="flex items-center gap-2">
        <Icon className="h-4 w-4 text-orange" />
        {children}
      </div>
    </label>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block text-xs font-bold uppercase tracking-[0.22em] text-orange">
      {children}
    </span>
  );
}
