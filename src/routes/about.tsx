import { createFileRoute } from "@tanstack/react-router";
import { Compass, Heart, Globe2, Award } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import hero from "@/assets/dest-swiss.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Tripper — Travel Designers Since 2007" },
      { name: "description", content: "We're a team of 80+ travel designers crafting once-in-a-lifetime journeys for curious travelers. Meet the people behind Tripper." },
      { property: "og:title", content: "About Tripper" },
      { property: "og:description", content: "Travel designers since 2007 — crafting journeys for curious travelers." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title={<>Built by travelers, <span className="italic text-orange">for travelers</span></>}
        description="Since 2007, Tripper has designed over 80,000 journeys across 140+ countries — guided by one simple belief: a trip should change how you see the world."
        image={hero}
      />

      <section className="py-20 md:py-28">
        <div className="container-page grid gap-16 md:grid-cols-2 md:items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-orange">Who we are</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy-deep md:text-5xl">More than a travel agency.</h2>
            <p className="mt-5 text-foreground/75 leading-relaxed">
              We started as three friends planning trips on the back of receipts. Eighteen years later, we're a team of 80+ travel designers, on-ground guides, and 24/7 concierges — but the obsession is the same: making a single journey feel like a turning point.
            </p>
            <p className="mt-4 text-foreground/75 leading-relaxed">
              Every itinerary is built by someone who has been there. Every recommendation is something we'd send our own family on. That's the only standard we know.
            </p>
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

      <section className="bg-sand py-20 md:py-28">
        <div className="container-page">
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-orange">Our Values</span>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold text-navy-deep md:text-5xl">What guides every itinerary we write.</h2>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              { t: "Authenticity over checklists", b: "We send you to places worth your time — not the most photographed corner of a guidebook." },
              { t: "Care, in every detail", b: "From dietary notes to your favorite pillow firmness, we remember the small stuff." },
              { t: "Travel that gives back", b: "We partner with local operators and pay fairly. Your journey supports the community it visits." },
            ].map((v) => (
              <div key={v.t} className="rounded-2xl border border-border/60 bg-card p-7 shadow-[var(--shadow-card)]">
                <h3 className="font-display text-lg font-bold text-navy-deep">{v.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-page">
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-orange">Leadership</span>
          <h2 className="mt-3 font-display text-3xl font-bold text-navy-deep md:text-5xl">Meet the people behind the trips.</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { n: "James Carter", r: "Co-Founder & CEO" },
              { n: "Priya Mehta", r: "Head of Experiences" },
              { n: "Daniel Okafor", r: "Director, Africa & Middle East" },
              { n: "Saaya Tanaka", r: "Director, Asia Pacific" },
            ].map((p, i) => (
              <div key={p.n} className="group overflow-hidden rounded-2xl border border-border/60 bg-card shadow-[var(--shadow-card)]">
                <div className="aspect-[3/4] bg-gradient-to-br from-navy-deep to-navy" style={{ background: `linear-gradient(135deg, oklch(0.28 0.09 264), oklch(0.7 0.18 ${40 + i * 8}))` }} />
                <div className="p-5">
                  <div className="font-display text-lg font-bold text-navy-deep">{p.n}</div>
                  <div className="mt-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">{p.r}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
