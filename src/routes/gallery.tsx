import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { destinations } from "@/lib/destinations";
import hero from "@/assets/dest-bali.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Tripper" },
      { name: "description", content: "A visual journal of moments from across the world — captured by Tripper travelers." },
      { property: "og:title", content: "Gallery — Tripper" },
      { property: "og:description", content: "Moments from across the world." },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: Gallery,
});

function Gallery() {
  // build a richer mosaic by reusing the destination images with varied spans
  const grid = [
    ...destinations,
    ...destinations.slice(0, 4),
  ];

  const spans = [
    "md:col-span-2 md:row-span-2",
    "md:col-span-1 md:row-span-1",
    "md:col-span-1 md:row-span-2",
    "md:col-span-1 md:row-span-1",
    "md:col-span-2 md:row-span-1",
    "md:col-span-1 md:row-span-1",
    "md:col-span-1 md:row-span-2",
    "md:col-span-2 md:row-span-1",
    "md:col-span-1 md:row-span-1",
    "md:col-span-2 md:row-span-2",
    "md:col-span-1 md:row-span-1",
    "md:col-span-1 md:row-span-1",
  ];

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title={<>Moments that tell <span className="italic text-orange">a story</span></>}
        description="A scrapbook of mornings, mountaintops and meals — sent in by travelers from every corner of our map."
        image={hero}
        height="sm"
      />

      <section className="py-16 md:py-20">
        <div className="container-page">
          <div className="grid auto-rows-[14rem] grid-cols-2 gap-3 md:grid-cols-4">
            {grid.map((d, i) => (
              <figure
                key={`${d.slug}-${i}`}
                className={`group relative overflow-hidden rounded-2xl ${spans[i % spans.length]}`}
              >
                <img src={d.image} alt={d.name} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-deep/85 to-transparent p-4 text-xs font-semibold uppercase tracking-widest text-primary-foreground opacity-0 transition group-hover:opacity-100">
                  {d.name}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
