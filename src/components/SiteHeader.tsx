import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  Menu,
  X,
  Plane,
  Home,
  Info,
  MapPinned,
  Package,
  BriefcaseBusiness,
  Images,
  Newspaper,
  ChevronDown,
} from "lucide-react";

import logo from "@/assets/tripper-logo.png";

const mainNavItems = [
  { to: "/", label: "Home", icon: Home },
  { to: "/destinations", label: "Destinations", icon: MapPinned },
  { to: "/packages", label: "Packages", icon: Package },
  { to: "/services", label: "Services", icon: BriefcaseBusiness },
] as const;

const moreNavItems = [
  { to: "/about", label: "About", icon: Info },
  { to: "/gallery", label: "Gallery", icon: Images },
  { to: "/blog", label: "Blog", icon: Newspaper },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-900 ${
        solid
          ? " border-slate-200/70 bg-white/92 shadow-[0_18px_60px_-35px_rgba(15,23,42,0.45)] backdrop-blur-2xl"
          : "border-none  bg-gradient-to-b "
      }`}
    >
      <div className="container-page">
        <div className="flex h-20 items-center justify-between gap-4">
          {/* Logo */}
          <Link to="/" className="flex shrink-0 items-center gap-3">
            <span
              className={`grid h-11 w-11 place-items-center rounded-2xl transition ${
                solid
                  ? "bg-blue-600 shadow-lg shadow-blue-600/20"
                  : "bg-white/15 ring-1 ring-white/25 backdrop-blur-md"
              }`}
            >
              <img src={logo} alt="TRIPPPER" className="h-8 w-8 object-contain" />
            </span>

            <div className="flex flex-col leading-none">
              <span
                className={`font-display text-xl font-extrabold tracking-tight ${
                  solid ? "text-navy-deep" : "text-white"
                }`}
              >
                TRIPPPER
              </span>
              <span
                className={`mt-1 text-[9px] font-bold uppercase tracking-[0.24em] ${
                  solid ? "text-orange" : "text-white/70"
                }`}
              >
                Luxury Travel
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav
            className={`hidden items-center gap-1 rounded-full px-2 py-1.5 lg:flex ${
              solid
                ? "bg-slate-100/85 ring-1 ring-slate-200"
                : "bg-white/10 ring-1 ring-white/15 backdrop-blur-md"
            }`}
          >
            {mainNavItems.map(({ to, label, icon: Icon }) => (
              <Link
                key={to}
                to={to}
                activeOptions={{ exact: to === "/" }}
                className={`group inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-bold transition ${
                  solid
                    ? "text-slate-600 hover:bg-white hover:text-blue-600 [&.active]:bg-white [&.active]:text-blue-600 [&.active]:shadow-sm"
                    : "text-white/85 hover:bg-white/15 hover:text-white [&.active]:bg-white/20 [&.active]:text-white"
                }`}
              >
                <Icon className="h-4 w-4 transition group-hover:scale-110" />
                <span>{label}</span>
              </Link>
            ))}

            <div className="relative">
              <button
                onClick={() => setMoreOpen((v) => !v)}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-bold transition ${
                  solid
                    ? "text-slate-600 hover:bg-white hover:text-blue-600"
                    : "text-white/85 hover:bg-white/15 hover:text-white"
                }`}
              >
                More
                <ChevronDown
                  className={`h-4 w-4 transition ${moreOpen ? "rotate-180" : ""}`}
                />
              </button>

              {moreOpen && (
                <div className="absolute right-0 top-full mt-3 w-56 rounded-2xl bg-white p-2 shadow-[0_24px_70px_-24px_rgba(15,23,42,0.45)] ring-1 ring-slate-200">
                  {moreNavItems.map(({ to, label, icon: Icon }) => (
                    <Link
                      key={to}
                      to={to}
                      onClick={() => setMoreOpen(false)}
                      className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-bold text-slate-600 transition hover:bg-blue-50 hover:text-blue-600"
                    >
                      <span className="grid h-9 w-9 place-items-center rounded-xl bg-blue-50 text-blue-600">
                        <Icon className="h-4 w-4" />
                      </span>
                      {label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* CTA */}
          <div className="hidden items-center lg:flex">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-orange px-5 py-2.5 text-sm font-extrabold text-white shadow-lg shadow-orange/20 transition hover:bg-orange-soft"
            >
              Plan Trip
              <Plane className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
            className={`grid h-11 w-11 place-items-center rounded-full border transition lg:hidden ${
              solid
                ? "border-slate-200 bg-white text-navy-deep shadow-sm"
                : "border-white/25 bg-white/10 text-white backdrop-blur-md"
            }`}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden transition-all duration-300 lg:hidden ${
          open ? "max-h-[620px] border-t border-slate-200" : "max-h-0"
        }`}
      >
        <nav className="container-page grid gap-2 bg-white py-4">
          {[...mainNavItems, ...moreNavItems].map(({ to, label, icon: Icon }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setOpen(false)}
              activeOptions={{ exact: to === "/" }}
              className="flex items-center gap-3 rounded-2xl px-3 py-3 text-sm font-bold text-slate-700 transition hover:bg-slate-50 [&.active]:bg-blue-50 [&.active]:text-blue-600"
            >
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-blue-50 text-blue-600">
                <Icon className="h-4 w-4" />
              </span>
              {label}
            </Link>
          ))}

          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-orange px-5 py-3 text-sm font-extrabold text-white"
          >
            Plan Trip
            <Plane className="h-4 w-4" />
          </Link>
        </nav>
      </div>
    </header>
  );
}