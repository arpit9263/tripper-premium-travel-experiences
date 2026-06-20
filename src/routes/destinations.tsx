import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/PageHero";
import { destinations } from "@/lib/destinations";
import { DestinationCard } from "@/components/DestinationCard";
import hero from "@/assets/dest-paris.jpg";

export const Route = createFileRoute("/destinations")({
  head: () => ({
    meta: [
      { title: "Destinations — Tripper" },
      { name: "description", content: "Explore curated destinations across Europe, Asia, the Middle East and beyond. 140+ countries, handpicked by our travel designers." },
      { property: "og:title", content: "Destinations — Tripper" },
      { property: "og:description", content: "Explore curated destinations across 140+ countries." },
      { property: "og:url", content: "/destinations" },
    ],
    links: [{ rel: "canonical", href: "/destinations" }],
  }),
  component: Destinations,
});

const regions = ["All", "Europe", "Asia", "Middle East", "Nordic"] as const;

function Destinations() {
  const [region, setRegion] = useState<(typeof regions)[number]>("All");
  const list = region === "All" ? destinations : destinations.filter((d) => d.region === region);

  return (
    <>
      <PageHero
        eyebrow="Destinations"
        title={<>Where will <span className="italic text-orange">you</span> go next?</>}
        description="Explore handpicked destinations across the globe — from quiet villages to capital cities, polar lights to tropical reefs."
        image={hero}
        height="sm"
      />

      <section className="py-16 md:py-20">
        <div className="container-page">
          <div className="flex flex-wrap gap-2">
            {regions.map((r) => (
              <button
                key={r}
                onClick={() => setRegion(r)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                  region === r
                    ? "bg-navy-deep text-primary-foreground"
                    : "border border-border bg-card text-foreground/80 hover:border-orange hover:text-orange"
                }`}
              >
                {r}
              </button>
            ))}
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((d) => <DestinationCard key={d.slug} d={d} />)}
          </div>
        </div>
      </section>
    </>
  );
}
