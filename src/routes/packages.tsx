import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Clock, Users } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { destinations } from "@/lib/destinations";
import hero from "@/assets/dest-iceland.jpg";

export const Route = createFileRoute("/packages")({
  head: () => ({
    meta: [
      { title: "Tour Packages — Tripper" },
      { name: "description", content: "Curated holiday packages across the world. Best-selling itineraries, exclusive offers, and easy-visa getaways crafted by Tripper." },
      { property: "og:title", content: "Tour Packages — Tripper" },
      { property: "og:description", content: "Curated holiday packages — handpicked by travel designers." },
      { property: "og:url", content: "/packages" },
    ],
    links: [{ rel: "canonical", href: "/packages" }],
  }),
  component: Packages,
});

function Packages() {
  return (
    <>
      <PageHero
        eyebrow="Tour Packages"
        title={<>Ready when you are.</>}
        description="Handcrafted itineraries with flights, stays, transfers and curated experiences — all in one price."
        image={hero}
        height="sm"
      />

      <section className="py-16 md:py-24">
        <div className="container-page">
          <h2 className="font-display text-2xl font-bold text-navy-deep md:text-3xl">Best-selling packages</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {destinations.map((d) => (
              <article key={d.slug} className="overflow-hidden rounded-2xl border border-border/60 bg-card shadow-[var(--shadow-card)] transition hover:-translate-y-1">
                <div className="relative h-56">
                  <img src={d.image} alt={d.name} loading="lazy" className="h-full w-full object-cover" />
                  <span className="absolute left-4 top-4 rounded-full bg-orange px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-accent-foreground">{d.tag}</span>
                </div>
                <div className="p-6">
                  <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{d.region}</div>
                  <h3 className="mt-1 font-display text-xl font-bold text-navy-deep">{d.name}</h3>
                  <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5"><Clock className="h-3.5 w-3.5 text-orange" /> {d.days}</span>
                    <span className="inline-flex items-center gap-1.5"><Users className="h-3.5 w-3.5 text-orange" /> 2 Adults</span>
                  </div>
                  <ul className="mt-4 space-y-1.5 text-xs text-foreground/75">
                    {["Return flights", "Boutique stays", "Private transfers", "Curated experiences"].map((f) => (
                      <li key={f} className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-orange" /> {f}</li>
                    ))}
                  </ul>
                  <div className="mt-5 flex items-end justify-between border-t border-border/60 pt-4">
                    <div>
                      <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Starts from</div>
                      <div className="font-display text-xl font-bold text-navy-deep">{d.price}</div>
                    </div>
                    <Link to="/contact" className="rounded-full bg-orange px-4 py-2 text-xs font-semibold text-accent-foreground hover:bg-orange-soft">Book Now</Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
