import { Link } from "@tanstack/react-router";
import {
  Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin, Send,
  ShieldCheck, BadgeCheck, Award, Headphones,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import logo from "@/assets/trippper-logo.png";

export function SiteFooter() {
  const [email, setEmail] = useState("");
  const onSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    toast.success("You're on the list — first dibs on new departures.");
    setEmail("");
  };

  return (
    <footer className="mt-24 bg-navy-deep text-primary-foreground">
      {/* Trust strip */}
      <div className="border-b border-white/10">
        <div className="container-page grid grid-cols-2 gap-6 py-8 md:grid-cols-4">
          {[
            { icon: BadgeCheck, t: "Best Price", b: "Guaranteed" },
            { icon: ShieldCheck, t: "Secure Booking", b: "256-bit SSL" },
            { icon: Award, t: "Industry Award", b: "18-time winner" },
            { icon: Headphones, t: "24/7 Support", b: "On every trip" },
          ].map(({ icon: Icon, t, b }) => (
            <div key={t} className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-white/5 text-orange">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm font-semibold">{t}</div>
                <div className="text-[11px] uppercase tracking-wider text-white/55">{b}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container-page grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-6">
        {/* Brand */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2.5">
            <img src={logo} alt="Trippper" width={44} height={44} className="h-11 w-11 object-contain brightness-200" />
            <div>
              <div className="font-display text-xl font-extrabold">Trippper</div>
              <div className="text-[10px] uppercase tracking-[0.22em] text-orange">Explore Beyond Limits</div>
            </div>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">
            Curated holiday packages across 140+ countries. Crafted by travel designers who have personally walked every street we send you to.
          </p>
          <div className="mt-6 space-y-2.5 text-sm text-white/75">
            <a href="tel:+919876543210" className="flex items-start gap-3 hover:text-orange"><Phone className="mt-0.5 h-4 w-4 text-orange" /> +91 98765 43210</a>
            <a href="mailto:hello@Trippper.com" className="flex items-start gap-3 hover:text-orange"><Mail className="mt-0.5 h-4 w-4 text-orange" /> hello@Trippper.com</a>
            <div className="flex items-start gap-3"><MapPin className="mt-0.5 h-4 w-4 text-orange" /> 142 Marine Drive, Mumbai 400020, India</div>
          </div>
          <div className="mt-6 flex gap-3">
            {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="social"
                className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-white/80 transition hover:border-orange hover:text-orange"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <FooterCol title="Holidays" items={[
          ["/destinations", "Domestic India"],
          ["/destinations", "International"],
          ["/destinations", "Honeymoon"],
          ["/destinations", "Family"],
          ["/destinations", "Adventure"],
          ["/destinations", "Luxury"],
        ]} />

        <FooterCol title="Destinations" items={[
          ["/destinations", "Bali"],
          ["/destinations", "Switzerland"],
          ["/destinations", "Japan"],
          ["/destinations", "Maldives"],
          ["/destinations", "Dubai"],
          ["/destinations", "Iceland"],
        ]} />

        <FooterCol title="Company" items={[
          ["/about", "About Us"],
          ["/services", "Our Services"],
          ["/blog", "Travel Stories"],
          ["/gallery", "Gallery"],
          ["/contact", "Contact"],
        ]} />

        <FooterCol title="Support" items={[
          ["/contact", "Help Center"],
          ["/contact", "FAQs"],
          ["/contact", "Cancellation Policy"],
          ["/contact", "Refund Policy"],
          ["/contact", "Privacy Policy"],
          ["/contact", "Terms of Service"],
        ]} />
      </div>

      {/* Newsletter */}
      <div className="border-t border-white/10">
        <div className="container-page grid items-center gap-6 py-10 md:grid-cols-2">
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.22em] text-orange">Newsletter</div>
            <h3 className="mt-2 font-display text-2xl font-bold">Get inspired — straight to your inbox.</h3>
            <p className="mt-1 text-sm text-white/65">Monthly destination guides, limited departures, no spam.</p>
          </div>
          <form onSubmit={onSubscribe} className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 p-1.5">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="flex-1 bg-transparent px-4 py-2 text-sm text-white placeholder:text-white/45 focus:outline-none"
            />
            <button className="inline-flex items-center gap-1.5 rounded-full bg-orange px-5 py-2.5 text-sm font-semibold text-accent-foreground hover:bg-orange-soft">
              <Send className="h-4 w-4" /> Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-5 text-xs text-white/55 md:flex-row">
          <p>© {new Date().getFullYear()} Trippper Holidays Pvt. Ltd. All rights reserved.</p>
          <div className="flex gap-5">
            <Link to="/contact" className="hover:text-orange">Privacy</Link>
            <Link to="/contact" className="hover:text-orange">Terms</Link>
            <Link to="/contact" className="hover:text-orange">Cookies</Link>
            <Link to="/destinations" className="hover:text-orange">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: [string, string][] }) {
  return (
    <div>
      <h4 className="text-xs font-bold uppercase tracking-[0.22em] text-orange">{title}</h4>
      <ul className="mt-5 space-y-2.5 text-sm text-white/75">
        {items.map(([to, label]) => (
          <li key={label}>
            <Link to={to} className="hover:text-orange">{label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
