import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, Phone, Send, MessageCircle, Clock } from "lucide-react";
import { toast } from "sonner";
import { PageHero } from "@/components/PageHero";
import { FaqAccordion } from "@/components/FaqAccordion";
import { faqs } from "@/lib/packages";
import hero from "@/assets/dest-greece.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Tripper — Plan Your Next Journey" },
      { name: "description", content: "Talk to a Tripper travel designer. We'll send three handcrafted itineraries within 24 hours. Offices in Mumbai, Delhi & Bengaluru." },
      { property: "og:title", content: "Contact Tripper" },
      { property: "og:description", content: "Talk to a travel designer — three itineraries in 24 hours." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

const OFFICES = [
  { city: "Mumbai", address: "142 Marine Drive, Mumbai 400020", phone: "+91 98765 43210" },
  { city: "Delhi", address: "Block C, Cyber Hub, Gurugram 122002", phone: "+91 98765 43211" },
  { city: "Bengaluru", address: "Indiranagar 100ft Road, Bengaluru 560038", phone: "+91 98765 43212" },
];

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", dest: "", date: "", ppl: "", msg: "" });
  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Got it! A travel designer will be in touch within 24 hours.");
    setForm({ name: "", email: "", phone: "", dest: "", date: "", ppl: "", msg: "" });
  };

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
          <div className="space-y-6">
            <div>
              <h2 className="font-display text-2xl font-bold text-navy-deep">Reach us directly</h2>
              <p className="mt-2 text-sm text-muted-foreground">Prefer a call, email or WhatsApp? We answer fast.</p>
            </div>
            {[
              { icon: Phone, t: "Call", b: "+91 98765 43210", href: "tel:+919876543210" },
              { icon: Mail, t: "Email", b: "hello@tripper.com", href: "mailto:hello@tripper.com" },
              { icon: MessageCircle, t: "WhatsApp", b: "+91 98765 43210", href: "https://wa.me/919876543210" },
            ].map(({ icon: Icon, t, b, href }) => (
              <a key={t} href={href} className="flex items-start gap-4 rounded-2xl border border-border/60 bg-card p-5 shadow-[var(--shadow-card)] transition hover:-translate-y-0.5 hover:border-orange/40">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-navy-deep text-orange">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{t}</div>
                  <div className="mt-1 font-semibold text-navy-deep">{b}</div>
                </div>
              </a>
            ))}
            <div className="rounded-2xl bg-navy-deep p-6 text-white">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-orange"><Clock className="h-3 w-3" /> Office Hours</div>
              <p className="mt-3 text-sm text-white/85">Mon — Sat, 9:00 to 19:00 IST</p>
              <p className="mt-1 text-sm text-white/85">24/7 emergency support for active trips</p>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={submit}
            className="rounded-3xl border border-border/60 bg-card p-7 shadow-[var(--shadow-elegant)] md:p-10"
          >
            <h2 className="font-display text-2xl font-bold text-navy-deep">Tell us about your trip</h2>
            <p className="mt-1 text-sm text-muted-foreground">Free, no obligation. We'll reply within 24 hours.</p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Field label="Full Name *" required name="name" value={form.name} onChange={update("name")} placeholder="Your name" />
              <Field label="Email *" required type="email" name="email" value={form.email} onChange={update("email")} placeholder="you@example.com" />
              <Field label="Phone" name="phone" value={form.phone} onChange={update("phone")} placeholder="+91 …" />
              <Field label="Destination" name="dest" value={form.dest} onChange={update("dest")} placeholder="e.g. Japan, Switzerland" />
              <Field label="Travel Date" type="date" name="date" value={form.date} onChange={update("date")} />
              <Field label="Travelers" name="ppl" value={form.ppl} onChange={update("ppl")} placeholder="2 adults" />
            </div>
            <div className="mt-4">
              <label className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground">Tell us more</label>
              <textarea
                value={form.msg}
                onChange={update("msg")}
                rows={4}
                placeholder="Style of travel, budget range, must-haves…"
                className="mt-2 w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm focus:border-orange focus:outline-none"
              />
            </div>
            <button className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-orange py-3.5 text-sm font-semibold text-accent-foreground transition hover:bg-orange-soft">
              <Send className="h-4 w-4" /> Send my enquiry
            </button>
          </form>
        </div>
      </section>

      {/* Offices */}
      <section className="bg-sand py-16 md:py-20">
        <div className="container-page">
          <h2 className="font-display text-2xl font-bold text-navy-deep md:text-3xl">Visit us</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {OFFICES.map((o) => (
              <div key={o.city} className="rounded-2xl border border-border/60 bg-card p-6 shadow-[var(--shadow-card)]">
                <div className="text-xs font-bold uppercase tracking-[0.22em] text-orange">{o.city}</div>
                <h3 className="mt-2 flex items-start gap-2 text-sm font-semibold text-navy-deep">
                  <MapPin className="mt-0.5 h-4 w-4 text-orange" /> {o.address}
                </h3>
                <a href={`tel:${o.phone.replace(/\s/g, "")}`} className="mt-3 inline-flex items-center gap-2 text-xs font-semibold text-orange hover:underline">
                  <Phone className="h-3 w-3" /> {o.phone}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-orange">Frequently Asked</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy-deep md:text-4xl">Questions before getting in touch</h2>
          </div>
          <FaqAccordion items={faqs} />
        </div>
      </section>
    </>
  );
}

function Field({ label, ...rest }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <span className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground">{label}</span>
      <input
        {...rest}
        className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:border-orange focus:outline-none focus:ring-2 focus:ring-orange/20"
      />
    </label>
  );
}
