import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Compass, ShieldCheck, Headphones, Sparkles, MapPin, Star, Plane } from "lucide-react";
import hero from "@/assets/hero-lagoon.jpg";
import { destinations } from "@/lib/destinations";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tripper — Premium Travel Experiences Worldwide" },
      { name: "description", content: "Discover curated holidays across 140+ countries. From the Maldives to the Swiss Alps — Tripper crafts journeys that go beyond the brochure." },
      { property: "og:title", content: "Tripper — Premium Travel Experiences" },
      { property: "og:description", content: "Curated holidays across 140+ countries. Explore beyond limits." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  const trending = destinations.slice(0, 6);
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <img src={hero} alt="Tropical lagoon at sunset" width={1920} height={1080} className="absolute inset-0 -z-10 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-navy-deep/85 via-navy-deep/55 to-navy-deep/30" />
        <div className="container-page flex min-h-[88vh] flex-col justify-center py-24 text-primary-foreground">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/25 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-orange backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" /> Explore Beyond Limits
          </span>
          <h1 className="mt-6 max-w-4xl font-display text-5xl font-bold leading-[1.05] md:text-7xl lg:text-8xl">
            Journeys crafted <span className="italic text-orange">just for you</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/85 md:text-xl">
            From the turquoise lagoons of the Maldives to the silent peaks of the Alps — discover handpicked experiences in 140+ destinations.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link to="/destinations" className="inline-flex items-center gap-2 rounded-full bg-orange px-7 py-3.5 text-sm font-semibold text-accent-foreground shadow-[var(--shadow-elegant)] transition hover:bg-orange-soft">
              Explore Destinations <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/packages" className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10">
              View Packages
            </Link>
          </div>

          {/* search card */}
          <div className="mt-14 grid w-full max-w-4xl gap-3 rounded-2xl border border-white/15 bg-white/10 p-3 backdrop-blur-xl md:grid-cols-[1.4fr_1fr_1fr_auto]">
            <label className="flex items-center gap-3 rounded-xl bg-white/90 px-4 py-3 text-navy-deep">
              <MapPin className="h-4 w-4 text-orange" />
              <input className="w-full bg-transparent text-sm font-medium outline-none placeholder:text-navy-deep/50" placeholder="Where to?" />
            </label>
            <label className="flex items-center gap-3 rounded-xl bg-white/90 px-4 py-3 text-navy-deep">
              <input type="date" className="w-full bg-transparent text-sm font-medium outline-none" />
            </label>
            <label className="flex items-center gap-3 rounded-xl bg-white/90 px-4 py-3 text-navy-deep">
              <select className="w-full bg-transparent text-sm font-medium outline-none">
                <option>2 Travelers</option><option>1 Traveler</option><option>3 Travelers</option><option>4+ Travelers</option>
              </select>
            </label>
            <button className="rounded-xl bg-navy-deep px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-navy">Search</button>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-border/60 bg-sand">
        <div className="container-page grid grid-cols-2 gap-8 py-10 md:grid-cols-4">
          {[
            ["140+", "Destinations"],
            ["50K+", "Happy Travelers"],
            ["4.9★", "Customer Rating"],
            ["18 yrs", "of Trust"],
          ].map(([n, l]) => (
            <div key={l} className="text-center">
              <div className="font-display text-3xl font-bold text-navy-deep md:text-4xl">{n}</div>
              <div className="mt-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* TRENDING DESTINATIONS */}
      <Section
        eyebrow="Trending Destinations"
        title="The world's most loved escapes"
        action={<Link to="/destinations" className="inline-flex items-center gap-1.5 text-sm font-semibold text-orange hover:underline">View all <ArrowRight className="h-4 w-4" /></Link>}
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {trending.map((d) => (
            <DestinationCard key={d.slug} d={d} />
          ))}
        </div>
      </Section>

      {/* WHY TRIPPER */}
      <section className="bg-sand py-20 md:py-28">
        <div className="container-page">
          <div className="max-w-2xl">
            <Eyebrow>Why Tripper</Eyebrow>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy-deep md:text-5xl">Travel made effortless, end to end.</h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Compass, title: "Expert Advisors", body: "Real humans who've walked the streets you'll wander." },
              { icon: ShieldCheck, title: "Trusted & Reliable", body: "18 years, 50,000+ travelers, zero compromises on safety." },
              { icon: Sparkles, title: "Premium Quality", body: "Handpicked stays, private guides, curated experiences." },
              { icon: Headphones, title: "24/7 Support", body: "We answer at 3 AM in Tokyo as fast as at noon in Mumbai." },
            ].map(({ icon: Icon, title, body }) => (
              <div key={title} className="group rounded-2xl border border-border/60 bg-card p-7 shadow-[var(--shadow-card)] transition hover:-translate-y-1 hover:border-orange/40">
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
              Tell us how you like to travel — quiet coastlines, mountain trails, food-led cities — and we'll send three handcrafted itineraries within 24 hours.
            </p>
          </div>
          <div className="flex flex-col gap-3 md:items-end">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-orange px-7 py-3.5 text-sm font-semibold text-accent-foreground transition hover:bg-orange-soft">
              <Plane className="h-4 w-4" /> Plan My Trip
            </Link>
            <Link to="/packages" className="text-sm text-white/70 hover:text-orange">Or browse ready-made packages →</Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <Section eyebrow="Why travelers love us" title="Stories from the road">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            { name: "Ananya R.", trip: "Maldives, 2025", body: "From the welcome call to the seaplane transfer, every detail was anticipated. The villa was beyond what photos promised." },
            { name: "Rahul & Priya", trip: "Switzerland, 2024", body: "Our Alps honeymoon was flawless. The Glacier Express upgrade and surprise mountaintop dinner made it unforgettable." },
            { name: "Meera K.", trip: "Japan, 2025", body: "Solo travel in Kyoto felt safe and deeply personal. The tea ceremony booking alone was worth it." },
          ].map((t) => (
            <figure key={t.name} className="rounded-2xl border border-border/60 bg-card p-7 shadow-[var(--shadow-card)]">
              <div className="flex gap-0.5 text-orange">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <blockquote className="mt-4 text-sm leading-relaxed text-foreground/80">"{t.body}"</blockquote>
              <figcaption className="mt-5 text-sm">
                <div className="font-semibold text-navy-deep">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.trip}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>
    </>
  );
}

function Eyebrow({ children, tone = "dark" }: { children: React.ReactNode; tone?: "dark" | "light" }) {
  return (
    <span className={`inline-block text-xs font-bold uppercase tracking-[0.22em] ${tone === "light" ? "text-orange" : "text-orange"}`}>
      {children}
    </span>
  );
}

function Section({ eyebrow, title, action, children }: { eyebrow: string; title: string; action?: React.ReactNode; children: React.ReactNode }) {
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <Eyebrow>{eyebrow}</Eyebrow>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy-deep md:text-5xl">{title}</h2>
          </div>
          {action}
        </div>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}

export function DestinationCard({ d }: { d: typeof destinations[number] }) {
  return (
    <Link
      to="/destinations"
      className="group relative isolate flex h-[26rem] flex-col justify-end overflow-hidden rounded-2xl shadow-[var(--shadow-card)]"
    >
      <img src={d.image} alt={d.name} loading="lazy" width={1024} height={1280} className="absolute inset-0 -z-10 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-navy-deep via-navy-deep/40 to-transparent" />
      <span className="absolute right-4 top-4 rounded-full bg-orange px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-accent-foreground">
        {d.tag}
      </span>
      <div className="p-6 text-primary-foreground">
        <div className="text-xs font-semibold uppercase tracking-widest text-white/70">{d.region}</div>
        <div className="mt-1 font-display text-2xl font-bold">{d.name}</div>
        <div className="mt-3 flex items-center justify-between text-sm">
          <span className="text-white/80">{d.days}</span>
          <span className="font-semibold text-orange">from {d.price}</span>
        </div>
      </div>
    </Link>
  );
}
