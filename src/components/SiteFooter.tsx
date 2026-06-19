import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/tripper-logo.png";

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-navy-deep text-primary-foreground">
      <div className="container-page grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5">
            <img src={logo} alt="Tripper" width={40} height={40} className="h-10 w-10 object-contain brightness-200" />
            <div>
              <div className="font-display text-xl font-bold">Tripper</div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-orange">Explore Beyond Limits</div>
            </div>
          </div>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/70">
            Curated journeys across 140+ countries. Crafted by travel experts who've been everywhere we send you.
          </p>
          <div className="mt-6 flex gap-3">
            {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
              <a key={i} href="#" aria-label="social" className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-white/80 transition hover:border-orange hover:text-orange">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-orange">Explore</h4>
          <ul className="mt-5 space-y-3 text-sm text-white/75">
            {[
              ["/destinations", "Destinations"],
              ["/packages", "Tour Packages"],
              ["/services", "Our Services"],
              ["/gallery", "Gallery"],
              ["/blog", "Travel Stories"],
            ].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="hover:text-orange">{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-orange">Company</h4>
          <ul className="mt-5 space-y-3 text-sm text-white/75">
            <li><Link to="/about" className="hover:text-orange">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-orange">Contact</Link></li>
            <li><a href="#" className="hover:text-orange">Careers</a></li>
            <li><a href="#" className="hover:text-orange">Press</a></li>
            <li><a href="#" className="hover:text-orange">Privacy Policy</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-orange">Reach Us</h4>
          <ul className="mt-5 space-y-3 text-sm text-white/75">
            <li className="flex items-start gap-3"><MapPin className="mt-0.5 h-4 w-4 text-orange" /> 142 Marine Drive, Mumbai 400020, India</li>
            <li className="flex items-start gap-3"><Phone className="mt-0.5 h-4 w-4 text-orange" /> +91 98765 43210</li>
            <li className="flex items-start gap-3"><Mail className="mt-0.5 h-4 w-4 text-orange" /> hello@tripper.com</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-5 text-xs text-white/55 md:flex-row">
          <p>© {new Date().getFullYear()} Tripper Holidays Pvt. Ltd. All rights reserved.</p>
          <p>Crafted with passion for travelers, by travelers.</p>
        </div>
      </div>
    </footer>
  );
}
