import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
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

const HERO_VIDEO =
  "https://videos.pexels.com/video-files/3571264/3571264-uhd_3840_2160_30fps.mp4";

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

function Home() {
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]["key"]>("holidays");
  const trending = destinations.slice(0, 6);

  return (
    <>
      {/* HERO with video background */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-20">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={heroPoster}
            className="h-full w-full object-cover"
          >
            <source src={HERO_VIDEO} type="video/mp4" />
          </video>
        </div>
        {/* readability overlays */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-deep/80 via-navy-deep/45 to-transparent" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-navy-deep/30 via-transparent to-navy-deep/50" />

        <div className="container-page relative flex min-h-[92vh] flex-col justify-center pb-40 pt-20 text-primary-foreground md:pb-48">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-orange-soft backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" /> Explore Beyond Limits
          </span>

          <h1 className="mt-6 max-w-3xl font-display text-5xl font-bold leading-[1.02] tracking-tight md:text-7xl lg:text-[5.5rem]">
            Crafted journeys.
            <br />
            <span className="text-orange-soft italic">Timeless memories.</span>
          </h1>

          <p className="mt-5 max-w-xl text-lg text-white/85 md:text-xl">
            Personalized holidays. Unforgettable experiences across 140+ destinations.
          </p>

          {/* trust badges */}
          <div className="mt-8 flex flex-wrap gap-x-7 gap-y-3">
            {trustBadges.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-sm font-medium text-white/90">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-white/10 text-orange-soft backdrop-blur">
                  <Icon className="h-4 w-4" />
                </span>
                {label}
              </div>
            ))}
          </div>
        </div>

        {/* Search card — overlapping into next section */}
        <div className="container-page absolute inset-x-0 bottom-0 z-10 translate-y-1/2">
          <div className="mx-auto max-w-6xl overflow-hidden rounded-2xl bg-white shadow-[0_30px_80px_-20px_rgba(15,23,42,0.4)] ring-1 ring-black/5">
            {/* Tabs */}
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

            {/* Inputs */}
            <div className="grid gap-3 p-4 md:grid-cols-[1.3fr_1fr_1fr_1fr_auto] md:p-5">
              <Field icon={MapPin} label="Where to?">
                <input
                  className="w-full bg-transparent text-sm font-medium text-navy-deep outline-none placeholder:text-muted-foreground"
                  placeholder="Search destinations"
                />
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
              <button className="group inline-flex items-center justify-center gap-2 rounded-xl bg-navy-deep px-7 py-4 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-elegant)] transition hover:bg-navy">
                Search {tabs.find((t) => t.key === activeTab)?.label}
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* TRENDING DESTINATIONS — mimics reference grid */}
      <section className="pt-40 md:pt-48">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-display text-2xl font-bold text-navy-deep md:text-4xl">
              Trending Holiday Destinations
            </h2>
            <Link
              to="/destinations"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-orange hover:underline"
            >
              View all destinations <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="relative mt-8">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
              {trending.map((d) => (
                <Link
                  key={d.slug}
                  to="/destinations"
                  className="group relative isolate flex aspect-[3/4] flex-col justify-end overflow-hidden rounded-2xl ring-1 ring-black/5"
                >
                  <img
                    src={d.image}
                    alt={d.name}
                    loading="lazy"
                    width={600}
                    height={800}
                    className="absolute inset-0 -z-10 h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 -z-10 bg-gradient-to-t from-navy-deep/85 via-navy-deep/20 to-transparent" />
                  <div className="p-4 text-primary-foreground">
                    <div className="font-display text-base font-bold leading-tight">
                      {d.region}
                    </div>
                    <div className="mt-0.5 text-[11px] font-medium text-white/80">
                      {Math.floor(Math.random() * 40) + 10} Packages
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            {/* arrow controls (decorative) */}
            <button
              aria-label="Previous"
              className="absolute -left-4 top-1/2 hidden h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-white shadow-[var(--shadow-card)] ring-1 ring-black/5 transition hover:bg-orange hover:text-primary-foreground lg:grid"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              aria-label="Next"
              className="absolute -right-4 top-1/2 hidden h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-white shadow-[var(--shadow-card)] ring-1 ring-black/5 transition hover:bg-orange hover:text-primary-foreground lg:grid"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          <div className="mt-8 flex justify-center gap-1.5">
            {Array.from({ length: 4 }).map((_, i) => (
              <span
                key={i}
                className={`h-1.5 rounded-full transition ${
                  i === 0 ? "w-8 bg-navy-deep" : "w-1.5 bg-border"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="mt-20 border-y border-border/60 bg-sand">
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

      {/* CTA STRIP */}
      <section className="relative overflow-hidden bg-navy-deep py-20 text-primary-foreground md:py-28">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-orange/20 blur-3xl" />
        <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-orange/10 blur-3xl" />
        <div className="container-page grid items-center gap-10 md:grid-cols-[1.4fr_1fr]">
          <div>
            <Eyebrow tone="light">Need help choosing?</Eyebrow>
            <h2 className="mt-3 font-display text-3xl font-bold md:text-5xl">
              Talk to a travel designer. <span className="text-orange">It's on us.</span>
            </h2>
            <p className="mt-4 max-w-xl text-white/75">
              Tell us how you like to travel — quiet coastlines, mountain trails, food-led cities — and we'll
              send three handcrafted itineraries within 24 hours.
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
                <blockquote className="mt-4 text-sm leading-relaxed text-foreground/80">"{t.body}"</blockquote>
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

function Eyebrow({ children, tone = "dark" }: { children: React.ReactNode; tone?: "dark" | "light" }) {
  return (
    <span
      className={`inline-block text-xs font-bold uppercase tracking-[0.22em] ${
        tone === "light" ? "text-orange" : "text-orange"
      }`}
    >
      {children}
    </span>
  );
}
