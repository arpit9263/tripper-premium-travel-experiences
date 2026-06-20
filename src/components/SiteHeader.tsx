import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  Menu,
  X,
  Plane,
  Home,
  Info,
  Map,
  Package,
  Briefcase,
  Image as ImageIcon,
  Newspaper,
  Phone,
  Search,
  User,
} from "lucide-react";
import logo from "@/assets/tripper-logo.png";

const navItems = [
  { to: "/", label: "Home", icon: Home },
  { to: "/about", label: "About", icon: Info },
  { to: "/destinations", label: "Destinations", icon: Map },
  { to: "/packages", label: "Packages", icon: Package },
  { to: "/services", label: "Services", icon: Briefcase },
  { to: "/gallery", label: "Gallery", icon: ImageIcon },
  { to: "/blog", label: "Blog", icon: Newspaper },
  { to: "/contact", label: "Contact", icon: Phone },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid
          ? "border-b border-border/60 bg-background/95 shadow-[0_8px_30px_-12px_rgba(15,23,42,0.18)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-page flex h-20 items-center justify-between gap-6">
        <Link to="/" className="flex shrink-0 items-center gap-2.5">
          <img
            src={logo}
            alt="Tripper"
            width={42}
            height={42}
            className="h-10 w-10 object-contain"
          />
          <div className="flex flex-col leading-none">
            <span
              className={`font-display text-xl font-bold tracking-tight transition-colors ${
                solid ? "text-navy-deep" : "text-white"
              }`}
            >
              Tripper
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-orange">
              Explore Beyond Limits
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-0.5 xl:flex">
          {navItems.map(({ to, label, icon: Icon }) => (
            <Link
              key={to}
              to={to}
              activeOptions={{ exact: to === "/" }}
              className={`group inline-flex items-center gap-1.5 rounded-full px-3.5 py-2 text-sm font-medium transition ${
                solid
                  ? "text-foreground/80 hover:bg-secondary hover:text-navy-deep [&.active]:bg-navy-deep [&.active]:text-primary-foreground"
                  : "text-white/85 hover:bg-white/10 hover:text-white [&.active]:bg-white/15 [&.active]:text-white"
              }`}
            >
              <Icon className="h-4 w-4 opacity-80 group-hover:opacity-100" />
              {label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <button
            aria-label="Search"
            className={`grid h-10 w-10 place-items-center rounded-full transition ${
              solid
                ? "border border-border/70 text-foreground/70 hover:bg-secondary"
                : "border border-white/25 text-white hover:bg-white/10"
            }`}
          >
            <Search className="h-4 w-4" />
          </button>
          <button
            aria-label="Account"
            className={`grid h-10 w-10 place-items-center rounded-full transition ${
              solid
                ? "border border-border/70 text-foreground/70 hover:bg-secondary"
                : "border border-white/25 text-white hover:bg-white/10"
            }`}
          >
            <User className="h-4 w-4" />
          </button>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-orange px-5 py-2.5 text-sm font-semibold text-accent-foreground shadow-[var(--shadow-card)] transition hover:bg-orange-soft"
          >
            Plan a Trip
            <Plane className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
          className={`grid h-10 w-10 place-items-center rounded-full border transition lg:hidden ${
            solid
              ? "border-border/70 text-foreground"
              : "border-white/25 text-white"
          }`}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border/40 bg-background lg:hidden">
          <nav className="container-page flex flex-col gap-1 py-4">
            {navItems.map(({ to, label, icon: Icon }) => (
              <Link
                key={to}
                to={to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: to === "/" }}
                className="inline-flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm font-medium text-foreground/80 hover:bg-secondary [&.active]:bg-navy-deep [&.active]:text-primary-foreground"
              >
                <Icon className="h-4 w-4" />
                {label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-orange px-5 py-2.5 text-sm font-semibold text-accent-foreground"
            >
              <Plane className="h-4 w-4" />
              Plan a Trip
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
