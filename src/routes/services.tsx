import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Plane, Hotel, FileCheck, ShieldCheck, Ship, Compass, Heart, Users,
  Sparkles, ArrowRight, Search, CheckCircle2, Briefcase, Map, Camera,
  CarFront, UtensilsCrossed, MountainSnow,
} from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel";
import hero from "@/assets/dest-greece.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Travel Services — Tripper" },
      { name: "description", content: "Holiday packages, custom itineraries, group tours, honeymoon planning, visa support, travel insurance and 24/7 on-trip concierge." },
      { property: "og:title", content: "Travel Services — Tripper" },
      { property: "og:description", content: "Holiday packages, custom itineraries, group tours, visa, insurance and concierge." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

const CORE_SERVICES = [
  { icon: Compass, t: "Custom Holiday Packages", b: "Tailor-made itineraries built around your dates, pace and budget. India and 140+ countries.", live: true },
  { icon: Users, t: "Group & Family Tours", b: "Small-group fixed departures, family reunions and corporate offsites from 6 to 200 travelers.", live: true },
  { icon: Heart, t: "Honeymoon Planning", b: "Surprise upgrades, private villas, candlelit dinners — the unforgettable parts handled by us.", live: true },
  { icon: MountainSnow, t: "Adventure & Trekking", b: "Himalayan treks, scuba certifications, safari expeditions — guided by certified specialists.", live: true },
  { icon: Briefcase, t: "Corporate & MICE", b: "Off-sites, conferences and incentive trips with end-to-end logistics and on-ground hosts.", live: true },
  { icon: Camera, t: "Photography Tours", b: "Curated routes, golden-hour briefings and pro guides for travelers who shoot.", live: true },
  { icon: CarFront, t: "Private Transfers & Drivers", b: "Vetted chauffeurs, premium fleet and door-to-door logistics on every trip.", live: true },
  { icon: UtensilsCrossed, t: "Culinary Journeys", b: "Cooking classes, vineyard tastings and chef's tables — food-led travel done right.", live: true },
  { icon: Map, t: "Pilgrimage & Spiritual", b: "Char Dham, Vaishno Devi, Bali temples, Vatican walks — spiritual travel with reverence.", live: true },
  { icon: Plane, t: "Flights", b: "Best-fare hunting, multi-city routing and class upgrades.", live: false },
  { icon: Hotel, t: "Hotels", b: "Negotiated rates at 500K+ premium properties worldwide.", live: false },
  { icon: FileCheck, t: "Visa Services", b: "Document support, appointment booking and approval tracking.", live: false },
  { icon: ShieldCheck, t: "Travel Insurance", b: "Comprehensive cover for medical, baggage and trip cancellations.", live: false },
  { icon: Ship, t: "Cruises", b: "Mediterranean, Caribbean and Asian cruises with shore curation.", live: false },
];

const PROCESS = [
  { n: "01", t: "Discover", b: "Tell us your destination, dates and travel style.", icon: Search },
  { n: "02", t: "Customize", b: "We design three itineraries within 24 hours.", icon: Sparkles },
  { n: "03", t: "Book", b: "Confirm with 20% advance — we handle the rest.", icon: CheckCircle2 },
  { n: "04", t: "Travel", b: "On-trip concierge available 24/7 on WhatsApp.", icon: Plane },
];

function Services() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title={<>Everything for the trip — <span className="italic text-orange">handled.</span></>}
        description="From honeymoon planning to corporate offsites, custom itineraries to fixed departures — one team, every detail."
        image={hero}
        height="sm"
      />

      {/* Live services */}
      <section className="py-20 md:py-24">
        <div className="container-page">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-orange">What we do</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy-deep md:text-5xl">Holiday-first. Premium-only.</h2>
            <p className="mt-3 text-foreground/70">Our entire focus is curated holiday packages — domestic and international — designed by people who travel for a living.</p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {CORE_SERVICES.filter((s) => s.live).map(({ icon: Icon, t, b }) => (
              <div key={t} className="group rounded-2xl border border-border/60 bg-card p-7 shadow-[var(--shadow-card)] transition hover:-translate-y-1 hover:border-orange/40 hover:shadow-[var(--shadow-elegant)]">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-navy-deep text-orange transition group-hover:bg-orange group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-navy-deep">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b}</p>
                <Link to="/contact" className="mt-5 inline-flex items-center gap-1 text-xs font-semibold text-orange hover:underline">
                  Enquire <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-sand py-20 md:py-24">
        <div className="container-page">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-orange">How it works</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy-deep md:text-5xl">Four steps, zero stress.</h2>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-4">
            {PROCESS.map(({ n, t, b, icon: Icon }, i) => (
              <div key={t} className="relative rounded-2xl border border-border/60 bg-card p-6 shadow-[var(--shadow-card)]">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-navy-deep to-[#1a2456] text-orange"><Icon className="h-5 w-5" /></div>
                <div className="mt-4 text-[10px] font-bold uppercase tracking-[0.22em] text-orange">Step {n}</div>
                <h3 className="mt-1 font-display text-lg font-bold text-navy-deep">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming soon */}
      <section className="py-20 md:py-24">
        <div className="container-page">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-orange">Coming soon</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy-deep md:text-5xl">Built for the future of travel.</h2>
            <p className="mt-3 text-foreground/70">We're expanding into flights, hotels, visas and insurance — built into the same designer experience you already love.</p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {CORE_SERVICES.filter((s) => !s.live).map(({ icon: Icon, t, b }) => (
              <div key={t} className="relative rounded-2xl border border-dashed border-border bg-card p-5 opacity-90">
                <span className="absolute right-3 top-3 rounded-full bg-orange/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-orange">Soon</span>
                <Icon className="h-6 w-6 text-orange" />
                <h3 className="mt-3 font-display text-base font-bold text-navy-deep">{t}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container-page">
          <TestimonialsCarousel />
        </div>
      </section>
    </>
  );
}
