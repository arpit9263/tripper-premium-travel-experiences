import { createFileRoute } from "@tanstack/react-router";
import { Globe, ShieldCheck, Gem, Compass, Infinity as InfinityIcon, Plane, Hotel, Car, Camera, FileCheck2, CreditCard, HeartHandshake } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import hero from "@/assets/dest-dubai.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Tripper Travel" },
      { name: "description", content: "Flights, stays, visas, transfers, insurance and curated experiences — every part of your trip handled by Tripper." },
      { property: "og:title", content: "Services — Tripper" },
      { property: "og:description", content: "Flights, visas, stays, transfers and experiences — fully handled." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

const pillars = [
  { icon: Globe, t: "Global Experiences", b: "On-ground partners in 140+ countries, vetted yearly." },
  { icon: ShieldCheck, t: "Trusted & Reliable", b: "IATA-accredited. 18 years. Zero compromises on safety." },
  { icon: Gem, t: "Premium Quality", b: "Boutique stays, private guides, no off-the-shelf templates." },
  { icon: Compass, t: "Exploration More", b: "We push you past the obvious — to places you'll talk about for years." },
  { icon: InfinityIcon, t: "Freedom Beyond Limits", b: "Flexible cancellations, last-minute upgrades, midnight rebookings." },
];

const services = [
  { icon: Plane, t: "Flight Bookings", b: "Best fares with 200+ airlines, including premium and business class." },
  { icon: Hotel, t: "Hotels & Resorts", b: "Hand-vetted properties from city boutique to private island villas." },
  { icon: Car, t: "Private Transfers", b: "Airport pickups, intercity drivers, chauffeured day trips." },
  { icon: FileCheck2, t: "Visa Assistance", b: "End-to-end documentation, embassy bookings, and tracking." },
  { icon: Camera, t: "Curated Experiences", b: "Cooking classes in Tuscany, tea ceremonies in Kyoto, safaris in Kenya." },
  { icon: CreditCard, t: "Forex & Cards", b: "Travel cards, multi-currency wallets, and forex at fair rates." },
  { icon: HeartHandshake, t: "Travel Insurance", b: "Comprehensive cover for medical, baggage and cancellations." },
  { icon: Compass, t: "Custom Itineraries", b: "Tell us how you travel. We design a journey from scratch." },
];

export default function _placeholder() { return null; }

function Services() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title={<>Every detail. <span className="italic text-orange">Handled.</span></>}
        description="From the moment you say yes to the trip until the door closes on the way home — we take care of it all."
        image={hero}
        height="sm"
      />

      {/* Brand pillars */}
      <section className="py-16 md:py-24">
        <div className="container-page">
          <div className="rounded-3xl bg-navy-deep p-8 text-primary-foreground md:p-12">
            <div className="grid gap-8 md:grid-cols-5">
              {pillars.map(({ icon: Icon, t, b }) => (
                <div key={t}>
                  <Icon className="h-8 w-8 text-orange" strokeWidth={1.5} />
                  <h3 className="mt-4 font-display text-sm font-bold uppercase tracking-widest">{t}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-white/65">{b}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="pb-20 md:pb-28">
        <div className="container-page">
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-orange">What we do</span>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold text-navy-deep md:text-5xl">A full-service travel partner.</h2>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map(({ icon: Icon, t, b }) => (
              <div key={t} className="group rounded-2xl border border-border/60 bg-card p-6 shadow-[var(--shadow-card)] transition hover:-translate-y-1 hover:border-orange/40">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-sand text-orange transition group-hover:bg-orange group-hover:text-primary-foreground">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-navy-deep">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
