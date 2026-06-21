import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { testimonials } from "@/lib/packages";

export function TestimonialsCarousel() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setI((x) => (x + 1) % testimonials.length), 5500);
    return () => clearInterval(t);
  }, [paused]);

  const t = testimonials[i];
  return (
    <div
      className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy-deep to-[#1a2456] p-8 text-white md:p-14"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-orange/20 blur-3xl" />
      <Quote className="h-12 w-12 text-orange/40" />
      <blockquote className="mt-6 max-w-3xl font-display text-2xl font-medium leading-snug md:text-3xl">
        "{t.quote}"
      </blockquote>
      <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex gap-0.5 text-orange">
            {Array.from({ length: t.rating }).map((_, k) => <Star key={k} className="h-4 w-4 fill-current" />)}
          </div>
          <div className="mt-3 font-display text-lg font-bold">{t.name}</div>
          <div className="text-xs uppercase tracking-widest text-white/55">{t.trip}</div>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            {testimonials.map((_, k) => (
              <button key={k} onClick={() => setI(k)} className={`h-1.5 rounded-full transition-all ${k === i ? "w-8 bg-orange" : "w-4 bg-white/25"}`} aria-label={`Testimonial ${k + 1}`} />
            ))}
          </div>
          <div className="flex gap-2">
            <button onClick={() => setI((x) => (x - 1 + testimonials.length) % testimonials.length)} className="grid h-9 w-9 place-items-center rounded-full border border-white/20 hover:bg-white/10" aria-label="Previous">
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button onClick={() => setI((x) => (x + 1) % testimonials.length)} className="grid h-9 w-9 place-items-center rounded-full border border-white/20 hover:bg-white/10" aria-label="Next">
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
