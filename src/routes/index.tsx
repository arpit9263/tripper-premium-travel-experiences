import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowRight, Compass, ShieldCheck, Headphones, Heart, Plane, Sparkles, MapPin,
  Search, Send, CheckCircle2, Filter, Globe2, Clock,
  ChevronRight,
  ChevronLeft,
  Sun,
} from "lucide-react";
import { TravelSpecialsSection } from "@/components/TravelSpecialsSection";
import { HotelStaysSection } from "@/components/HotelStaysSection";
import TravelHeroSlider from "@/components/TravelHeroSlider";
import { UpcomingTripCard } from "@/components/UpcomingTripCard";
import { HolidayThemes } from "@/components/HolidayThemes";
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel";
import { BlogCard } from "@/components/BlogCard";
import { FaqAccordion } from "@/components/FaqAccordion";
import { enrichedTrips, blogPosts, faqs } from "@/lib/packages";
import { destinations, domestic, international } from "@/lib/destinations";
import { toast } from "sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Trippper — Premium Holiday Packages, India & 140+ Countries" },
      { name: "description", content: "Curated holiday packages, fixed departures and customisable trips. Domestic India & international holidays designed by 80+ travel experts." },
      { property: "og:title", content: "Trippper — Crafted Journeys. Timeless Memories." },
      { property: "og:description", content: "Personalised holiday packages across India and 140+ countries." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const TRIP_FILTERS = [
  { key: "all", label: "All Departures" },
  { key: "weekend", label: "Long Weekends" },
  { key: "this-month", label: "This Month" },
  { key: "next-month", label: "Next Month" },
  { key: "festive", label: "Festive" },
] as const;

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
  const [tripFilter, setTripFilter] = useState<(typeof TRIP_FILTERS)[number]["key"]>("all");
  const [regionTab, setRegionTab] = useState<"Domestic" | "International">("International");

  const filteredTrips = useMemo(
    () => tripFilter === "all" ? enrichedTrips : enrichedTrips.filter((t) => t.category === tripFilter),
    [tripFilter]
  );

  return (
    <>
      <TravelHeroSlider />
      <TrendingCarousel/>
      <TravelSpecialsSection />
      <HotelStaysSection />

      {/* ===== UPCOMING TRIPS / FIXED DEPARTURES ===== */}
      <section className="py-20 md:py-28">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <Eyebrow>Fixed Departures</Eyebrow>
              <h2 className="mt-3 font-display text-3xl font-bold text-navy-deep md:text-5xl">
                Upcoming trips — pack your bags.
              </h2>
              <p className="mt-3 text-foreground/70">
                Guaranteed departures with confirmed seats, flights, stays and a local trip leader. Or customize any package to your dates.
              </p>
            </div>
            <Link to="/packages" className="inline-flex items-center gap-1.5 text-sm font-semibold text-orange hover:underline">
              See all departures <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {TRIP_FILTERS.map((f) => (
              <button
                key={f.key}
                onClick={() => setTripFilter(f.key)}
                className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-wider transition ${
                  tripFilter === f.key
                    ? "border-navy-deep bg-navy-deep text-white"
                    : "border-border bg-card text-foreground/70 hover:border-orange hover:text-orange"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredTrips.length === 0 ? (
              <div className="col-span-full rounded-2xl border border-dashed border-border bg-sand/50 py-16 text-center text-sm text-muted-foreground">
                No departures in this window — try another filter.
              </div>
            ) : (
              filteredTrips.map((t) => <UpcomingTripCard key={t.id} trip={t} />)
            )}
          </div>
        </div>
      </section>

      {/* ===== DOMESTIC & INTERNATIONAL HOLIDAYS ===== */}
      <section className="bg-sand py-20 md:py-28">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <Eyebrow>Holiday Packages</Eyebrow>
              <h2 className="mt-3 font-display text-3xl font-bold text-navy-deep md:text-5xl">
                Domestic & International holidays.
              </h2>
              <p className="mt-3 text-foreground/70">
                Whether it's a weekend in the Himalayas or a fortnight across Europe — we have a package for every kind of traveler.
              </p>
            </div>
            <div className="flex rounded-full border border-border bg-card p-1">
              {(["Domestic", "International"] as const).map((r) => (
                <button
                  key={r}
                  onClick={() => setRegionTab(r)}
                  className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                    regionTab === r ? "bg-navy-deep text-white" : "text-foreground/70 hover:text-orange"
                  }`}
                >
                  {r === "Domestic" ? "India" : "International"}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {(regionTab === "Domestic" ? domestic : international).slice(0, 6).map((d) => (
              <Link
                key={d.slug}
                to="/destinations"
                className="group overflow-hidden rounded-2xl border border-border/60 bg-card shadow-[var(--shadow-card)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]"
              >
                <div className="relative aspect-[16/11] overflow-hidden">
                  <img src={d.image} alt={d.name} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                  <span className="absolute right-3 top-3 rounded-full bg-orange px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-accent-foreground">
                    {d.tag}
                  </span>
                  <div className="absolute bottom-3 left-3 rounded-md bg-white/95 px-2 py-1 text-[11px] font-bold text-navy-deep">
                    ★ {d.rating}
                  </div>
                </div>
                <div className="p-5">
                  <div className="text-[11px] font-semibold uppercase tracking-widest text-orange">{d.country}</div>
                  <h3 className="mt-1.5 font-display text-lg font-bold text-navy-deep group-hover:text-orange">{d.name}</h3>
                  <p className="mt-1.5 line-clamp-2 text-sm text-muted-foreground">{d.description}</p>
                  <div className="mt-4 flex items-center justify-between border-t border-border/50 pt-3 text-xs">
                    <span className="flex items-center gap-1.5 text-muted-foreground"><Clock className="h-3 w-3 text-orange" /> {d.days}</span>
                    <span>
                      <span className="text-muted-foreground">from </span>
                      <span className="font-display text-base font-bold text-navy-deep">{d.price}</span>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link to="/destinations" className="inline-flex items-center gap-2 rounded-full border-2 border-navy-deep px-6 py-3 text-sm font-semibold text-navy-deep transition hover:bg-navy-deep hover:text-white">
              View all {regionTab === "Domestic" ? domestic.length : international.length} destinations <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== HOLIDAY THEMES BENTO ===== */}
      <section className="py-20 md:py-28">
        <div className="container-page">
          <div className="max-w-2xl">
            <Eyebrow>Holiday Themes</Eyebrow>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy-deep md:text-5xl">
              Find the trip that fits the moment.
            </h2>
            <p className="mt-3 text-foreground/70">From a quiet honeymoon escape to a high-altitude expedition — pick a mood, we'll handle the rest.</p>
          </div>
          <div className="mt-10">
            <HolidayThemes />
          </div>
        </div>
      </section>

      {/* ===== WHY Trippper ===== */}
      <section className="bg-navy-deep py-20 text-white md:py-28">
        <div className="container-page">
          <div className="max-w-2xl">
            <Eyebrow>Why Trippper</Eyebrow>
            <h2 className="mt-3 font-display text-3xl font-bold md:text-5xl">
              Premium travel, end to end.
            </h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Compass, t: "Expert designers", b: "Every itinerary is built by someone who has personally walked the streets you'll wander." },
              { icon: ShieldCheck, t: "Trusted & secure", b: "18 years, 50,000+ travelers, IATA-accredited, zero compromises on safety." },
              { icon: Heart, t: "Premium quality", b: "Handpicked stays, private guides and curated experiences — nothing off a checklist." },
              { icon: Headphones, t: "24/7 support", b: "WhatsApp your designer mid-trip and get an answer in under 4 minutes — any timezone." },
              { icon: Sparkles, t: "Best-price promise", b: "If you find the same itinerary cheaper elsewhere, we match it and refund the difference." },
              { icon: Globe2, t: "140+ countries", b: "From the Arctic Circle to the Maldives — there is almost nowhere we haven't sent travelers." },
            ].map(({ icon: Icon, t, b }) => (
              <div key={t} className="rounded-2xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur transition hover:-translate-y-1 hover:border-orange/40">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-orange/15 text-orange">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">{b}</p>
              </div>
            ))}
          </div>

          {/* Stats strip */}
          <div className="mt-14 grid grid-cols-2 gap-6 rounded-2xl border border-white/10 bg-white/[0.04] p-8 md:grid-cols-4">
            {[
              ["50K+", "Happy travelers"],
              ["140+", "Destinations"],
              ["4.9★", "Avg. rating"],
              ["18 yrs", "Of trust"],
            ].map(([n, l]) => (
              <div key={l} className="text-center">
                <div className="font-display text-3xl font-bold text-orange md:text-4xl">{n}</div>
                <div className="mt-1 text-[11px] font-semibold uppercase tracking-widest text-white/55">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="py-20 md:py-28">
        <div className="container-page">
          <div className="max-w-2xl">
            <Eyebrow>How it works</Eyebrow>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy-deep md:text-5xl">From idea to boarding pass in four steps.</h2>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-4">
            {[
              { n: "01", t: "Discover", b: "Browse packages or tell us a destination, mood and dates.", icon: Search },
              { n: "02", t: "Customize", b: "Your designer sends three itineraries within 24 hours.", icon: Sparkles },
              { n: "03", t: "Book", b: "Confirm with 20% advance. We handle flights, visas, stays.", icon: CheckCircle2 },
              { n: "04", t: "Travel", b: "24/7 on-trip support, surprise upgrades, zero stress.", icon: Plane },
            ].map(({ n, t, b, icon: Icon }, i) => (
              <div key={t} className="relative">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-navy-deep to-[#1a2456] text-orange">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="mt-4 font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">Step {n}</div>
                <h3 className="mt-1 font-display text-xl font-bold text-navy-deep">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{b}</p>
                {i < 3 && (
                  <div className="absolute right-0 top-7 hidden h-px w-1/2 bg-gradient-to-r from-orange/40 to-transparent md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="py-20 md:py-28">
        <div className="container-page">
          <div className="max-w-2xl">
            <Eyebrow>Stories from the road</Eyebrow>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy-deep md:text-5xl">Why 50,000+ travelers chose us.</h2>
          </div>
          <div className="mt-12">
            <TestimonialsCarousel />
          </div>
        </div>
      </section>

      {/* ===== BLOG ===== */}
      <section className="bg-sand py-20 md:py-28">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-2xl">
              <Eyebrow>Travel Stories</Eyebrow>
              <h2 className="mt-3 font-display text-3xl font-bold text-navy-deep md:text-5xl">Guides, itineraries & inspiration.</h2>
            </div>
            <Link to="/blog" className="inline-flex items-center gap-1.5 text-sm font-semibold text-orange hover:underline">
              All stories <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {blogPosts.slice(0, 3).map((p) => <BlogCard key={p.slug} post={p} />)}
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="py-20 md:py-28">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <Eyebrow>Frequently Asked</Eyebrow>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy-deep md:text-5xl">Questions, answered.</h2>
            <p className="mt-4 text-foreground/70">
              Can't find what you're looking for? <Link to="/contact" className="font-semibold text-orange underline">Talk to a designer →</Link>
            </p>
          </div>
          <FaqAccordion items={faqs} />
        </div>
      </section>

      {/* ===== NEWSLETTER CTA ===== */}
      <NewsletterCta />
    </>
  );
}

function NewsletterCta() {
  const [email, setEmail] = useState("");
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-navy-deep via-[#1a2456] to-navy-deep py-20 text-white md:py-28">
      <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-orange/20 blur-3xl" />
      <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-orange/10 blur-3xl" />
      <div className="container-page relative grid items-center gap-10 md:grid-cols-[1.3fr_1fr]">
        <div>
          <Eyebrow>Plan with us</Eyebrow>
          <h2 className="mt-3 font-display text-3xl font-bold md:text-5xl">
            Tell us your dream trip. <span className="text-orange">We'll send three itineraries in 24 hours.</span>
          </h2>
          <p className="mt-4 max-w-xl text-white/75">
            Free, no obligation. Real humans, not bots. Built around your dates, your pace and your budget.
          </p>
          <div className="mt-6 flex flex-wrap gap-6 text-sm text-white/75">
            {["Free consultation", "Custom itinerary", "Best price match"].map((t) => (
              <span key={t} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-orange" /> {t}</span>
            ))}
          </div>
        </div>
        <form
          onSubmit={(e) => { e.preventDefault(); if (email) { toast.success("Thanks! A travel designer will reach out shortly."); setEmail(""); } }}
          className="rounded-3xl border border-white/15 bg-white/5 p-6 backdrop-blur md:p-8"
        >
          <label className="text-xs font-bold uppercase tracking-[0.22em] text-orange">Get a free itinerary</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="mt-3 w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/45 focus:border-orange focus:outline-none"
          />
          <button className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-orange py-3 text-sm font-semibold text-accent-foreground transition hover:bg-orange-soft">
            <Send className="h-4 w-4" /> Send me itineraries
          </button>
          <p className="mt-3 text-center text-[11px] text-white/55">No spam. Unsubscribe anytime.</p>
        </form>
      </div>
    </section>
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




function Eyebrow({ children }: { children: React.ReactNode }) {
  return <span className="inline-block text-xs font-bold uppercase tracking-[0.22em] text-orange">{children}</span>;
}
