import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import hero from "@/assets/dest-greece.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Tripper — Plan Your Next Journey" },
      { name: "description", content: "Talk to a Tripper travel designer. We'll send three handcrafted itineraries within 24 hours." },
      { property: "og:title", content: "Contact Tripper" },
      { property: "og:description", content: "Talk to a travel designer." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>Let's plan <span className="italic text-orange">your next trip</span></>}
        description="Tell us where you're dreaming of. A real travel designer will write back within a day."
        image={hero}
        height="sm"
      />

      <section className="py-16 md:py-24">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          {/* Info */}
          <div className="space-y-8">
            <div>
              <h2 className="font-display text-2xl font-bold text-navy-deep">Reach us directly</h2>
              <p className="mt-2 text-sm text-muted-foreground">Prefer a call or quick message? We answer fast.</p>
            </div>
            {[
              { icon: MapPin, t: "Visit", b: "142 Marine Drive, Mumbai 400020, India" },
              { icon: Phone, t: "Call", b: "+91 98765 43210" },
              { icon: Mail, t: "Email", b: "hello@tripper.com" },
            ].map(({ icon: Icon, t, b }) => (
              <div key={t} className="flex items-start gap-4 rounded-2xl border border-border/60 bg-card p-5 shadow-[var(--shadow-card)]">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-navy-deep text-orange">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{t}</div>
                  <div className="mt-1 font-semibold text-navy-deep">{b}</div>
                </div>
              </div>
            ))}
            <div className="rounded-2xl bg-navy-deep p-6 text-primary-foreground">
              <div className="text-xs font-bold uppercase tracking-[0.22em] text-orange">Office Hours</div>
              <p className="mt-3 text-sm text-white/80">Mon — Sat, 9:00 to 19:00 IST</p>
              <p className="mt-1 text-sm text-white/80">24/7 emergency support for active trips</p>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="rounded-3xl border border-border/60 bg-card p-7 shadow-[var(--shadow-elegant)] md:p-10"
          >
            <h2 className="font-display text-2xl font-bold text-navy-deep">Tell us about your trip</h2>
            <p className="mt-1 text-sm text-muted-foreground">Free, no obligation. We'll reply within 24 hours.</p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Field label="Full Name" name="name" placeholder="Your name" />
              <Field label="Email" name="email" type="email" placeholder="you@example.com" />
              <Field label="Phone" name="phone" placeholder="+91 …" />
              <Field label="Destination" name="dest" placeholder="e.g. Japan, Switzerland" />
              <Field label="Travel Date" name="date" type="date" />
              <Field label="Travelers" name="ppl" placeholder="2 adults" />
            </div>
            <div className="mt-4">
              <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Tell us more</label>
              <textarea
                rows={4}
                className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-orange focus:ring-2 focus:ring-orange/20"
                placeholder="Honeymoon? First trip abroad? Anything we should know…"
              />
            </div>
            <button
              type="submit"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-orange px-7 py-3.5 text-sm font-semibold text-accent-foreground shadow-[var(--shadow-card)] transition hover:bg-orange-soft"
            >
              {sent ? "Thanks! We'll be in touch." : <>Send enquiry <Send className="h-4 w-4" /></>}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", placeholder }: { label: string; name: string; type?: string; placeholder?: string }) {
  return (
    <label className="block">
      <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{label}</span>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-orange focus:ring-2 focus:ring-orange/20"
      />
    </label>
  );
}
