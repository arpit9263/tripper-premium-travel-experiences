import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { X } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { destinations } from "@/lib/destinations";
import hero from "@/assets/dest-bali.jpg";

const CATEGORIES = ["All", "Beach", "Mountain", "City", "Culture"] as const;

const IMAGES = destinations.flatMap((d, i) => ([
  { id: `${d.slug}-1`, src: d.image, alt: d.name, cat: i % 4 === 0 ? "Beach" : i % 4 === 1 ? "Mountain" : i % 4 === 2 ? "City" : "Culture", caption: d.name },
  { id: `${d.slug}-2`, src: d.image, alt: d.name, cat: i % 4 === 1 ? "Beach" : i % 4 === 2 ? "Mountain" : i % 4 === 3 ? "City" : "Culture", caption: d.country },
]));

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Trippper Travel Photography" },
      { name: "description", content: "A visual journal from our travelers across India and 140+ countries. Beaches, mountains, cities and cultural moments." },
      { property: "og:title", content: "Travel Gallery — Trippper" },
      { property: "og:description", content: "A visual journal across 140+ countries." },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: Gallery,
});

function Gallery() {
  const [cat, setCat] = useState<(typeof CATEGORIES)[number]>("All");
  const [open, setOpen] = useState<string | null>(null);

  const items = useMemo(() => cat === "All" ? IMAGES : IMAGES.filter((i) => i.cat === cat), [cat]);
  const openItem = items.find((i) => i.id === open);

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title={<>Postcards from <span className="italic text-orange">the road</span></>}
        description="A visual journal from Trippper travelers. Click any image to view full size."
        image={hero}
        height="sm"
      />

      <section className="py-16 md:py-20">
        <div className="container-page">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-wider transition ${
                  cat === c ? "bg-navy-deep text-white" : "border border-border bg-card text-foreground/70 hover:border-orange hover:text-orange"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="mt-10 columns-2 gap-3 md:columns-3 lg:columns-4 [&>*]:mb-3">
            {items.map((img, i) => (
              <button
                key={img.id}
                onClick={() => setOpen(img.id)}
                className={`group relative block w-full overflow-hidden rounded-2xl ring-1 ring-black/5 ${i % 3 === 0 ? "aspect-[3/4]" : i % 3 === 1 ? "aspect-square" : "aspect-[4/3]"}`}
              >
                <img src={img.src} alt={img.alt} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/85 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
                <div className="absolute bottom-3 left-3 right-3 translate-y-2 opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="font-display text-sm font-bold text-white">{img.caption}</div>
                  <div className="text-[10px] uppercase tracking-widest text-white/70">{img.cat}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {openItem && (
        <div className="fixed inset-0 z-[80] grid place-items-center bg-navy-deep/90 p-4 backdrop-blur" onClick={() => setOpen(null)}>
          <button className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20" onClick={() => setOpen(null)}>
            <X className="h-5 w-5" />
          </button>
          <figure className="max-h-[88vh] max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <img src={openItem.src} alt={openItem.alt} className="max-h-[80vh] w-auto rounded-2xl object-contain" />
            <figcaption className="mt-3 text-center text-sm text-white/85">{openItem.caption} · <span className="text-orange">{openItem.cat}</span></figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
