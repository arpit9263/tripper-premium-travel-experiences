import { createFileRoute, Link } from "@tanstack/react-router";
import { Compass, Heart, Globe2, Award, Sparkles, Users, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel";
import hero from "@/assets/dest-swiss.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Trippper — Travel Designers Since 2007" },
      { name: "description", content: "Eighteen years, 50,000+ travelers, 140+ countries. Meet the 80+ travel designers crafting once-in-a-lifetime journeys at Trippper." },
      { property: "og:title", content: "About Trippper" },
      { property: "og:description", content: "Travel designers since 2007 — crafting journeys for curious travelers." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const TIMELINE = [
  { year: "2007", t: "Founded in Mumbai", b: "Three friends, two laptops and a notebook full of dream itineraries." },
  { year: "2012", t: "First international office", b: "Dubai opens. Our Middle East programme launches with three properties." },
  { year: "2017", t: "10,000 travelers", b: "We hit our first major milestone and launch our customisation platform." },
  { year: "2021", t: "Pandemic pivot", b: "Built our 24/7 concierge — the same system every traveler uses today." },
  { year: "2024", t: "50,000+ journeys", b: "Now in 140+ countries with 80+ designers and on-ground teams in 14 cities." },
  { year: "2026", t: "Today", b: "The most awarded boutique travel company in India — and we're just getting started." },
];

const VALUES = [
  { t: "Authenticity over checklists", b: "We send you to places worth your time — not the most photographed corner of a guidebook." },
  { t: "Care, in every detail", b: "From dietary notes to pillow firmness, we remember the small stuff that makes the big stuff feel right." },
  { t: "Travel that gives back", b: "We partner with local operators and pay fairly. Your journey supports the community it visits." },
];

const LEADERSHIP = [
  { n: "James Carter", r: "Co-Founder & CEO" },
  { n: "Priya Mehta", r: "Head of Experiences" },
  { n: "Daniel Okafor", r: "Director, Africa & Middle East" },
  { n: "Saaya Tanaka", r: "Director, Asia Pacific" },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title={<>Built by travelers, <span className="italic text-orange">for travelers</span></>}
        description="Since 2007, Trippper has designed over 80,000 journeys across 140+ countries — guided by one belief: a trip should change how you see the world."
        image={hero}
      />

      {/* Intro + stats */}
      <section className="py-20 md:py-28">
        <div className="container-page grid gap-16 md:grid-cols-2 md:items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-orange">Who we are</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy-deep md:text-5xl">More than a travel agency.</h2>
            <p className="mt-5 text-foreground/75 leading-relaxed">
              We started as three friends planning trips on the back of receipts. Eighteen years later, we're a team of 80+ travel designers, on-ground guides and 24/7 concierges — but the obsession is the same: making a single journey feel like a turning point.
            </p>
            <p className="mt-4 text-foreground/75 leading-relaxed">
              Every itinerary is built by someone who has been there. Every recommendation is something we'd send our own family on. That's the only standard we know.
            </p>
            <Link to="/contact" className="mt-7 inline-flex items-center gap-2 rounded-full bg-orange px-6 py-3 text-sm font-semibold text-accent-foreground hover:bg-orange-soft">
              Plan a trip with us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Globe2, n: "140+", l: "Countries Mapped" },
              { icon: Heart, n: "50K+", l: "Happy Travelers" },
              { icon: Award, n: "18", l: "Industry Awards" },
              { icon: Compass, n: "4.9★", l: "Average Rating" },
            ].map(({ icon: Icon, n, l }) => (
              <div key={l} className="rounded-2xl border border-border/60 bg-card p-6 shadow-[var(--shadow-card)]">
                <Icon className="h-6 w-6 text-orange" />
                <div className="mt-4 font-display text-3xl font-bold text-navy-deep">{n}</div>
                <div className="mt-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-sand py-20 md:py-28">
        <div className="container-page">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-orange">Our journey</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy-deep md:text-5xl">Eighteen years, one obsession.</h2>
          </div>
          <div className="relative mt-12 grid gap-6 md:grid-cols-3">
            {TIMELINE.map((t) => (
              <div key={t.year} className="rounded-2xl border border-border/60 bg-card p-6 shadow-[var(--shadow-card)]">
                <div className="font-display text-3xl font-bold text-orange">{t.year}</div>
                <h3 className="mt-2 font-display text-lg font-bold text-navy-deep">{t.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28">
        <div className="container-page">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-orange">Our Values</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy-deep md:text-5xl">What guides every itinerary we write.</h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {VALUES.map((v, i) => (
              <div key={v.t} className="rounded-2xl border border-border/60 bg-card p-7 shadow-[var(--shadow-card)]">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-orange/10 text-orange">
                  {i === 0 ? <Sparkles className="h-5 w-5" /> : i === 1 ? <Heart className="h-5 w-5" /> : <Users className="h-5 w-5" />}
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-navy-deep">{v.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-sand py-20 md:py-28">
        <div className="container-page">
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-orange">Leadership</span>
          <h2 className="mt-3 font-display text-3xl font-bold text-navy-deep md:text-5xl">Meet the people behind the trips.</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {LEADERSHIP.map((p, i) => (
              <div key={p.n} className="group overflow-hidden rounded-2xl border border-border/60 bg-card shadow-[var(--shadow-card)]">
                <div
                  className="aspect-[3/4]"
                  style={{ background: `linear-gradient(135deg, oklch(0.28 0.09 264), oklch(0.7 0.18 ${40 + i * 8}))` }}
                />
                <div className="p-5">
                  <div className="font-display text-lg font-bold text-navy-deep">{p.n}</div>
                  <div className="mt-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">{p.r}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-page">
          <TestimonialsCarousel />
        </div>
      </section>
    </>
  );
}
