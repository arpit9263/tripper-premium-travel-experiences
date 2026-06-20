import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Plane } from "lucide-react";
import logo from "@/assets/tripper-logo.png";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/destinations", label: "Destinations" },
  { to: "/packages", label: "Packages" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy-deep/30 backdrop-blur-xl supports-[backdrop-filter]:bg-navy-deep/20">
      <div className="container-page flex h-18 items-center justify-between gap-6 py-3">
        <Link to="/" className="flex shrink-0 items-center gap-2.5">
          <img src={logo} alt="Tripper" width={40} height={40} className="h-10 w-10 object-contain" />
          <div className="flex flex-col leading-none">
            <span className="font-display text-xl font-bold tracking-tight text-navy-deep">Tripper</span>
            <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-orange">Explore Beyond Limits</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-foreground/80 transition hover:text-navy-deep [&.active]:bg-navy-deep [&.active]:text-primary-foreground"
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-orange px-5 py-2.5 text-sm font-semibold text-accent-foreground shadow-[var(--shadow-card)] transition hover:bg-orange-soft"
          >
            Plan a Trip
            <Plane className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
          className="rounded-md p-2 lg:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border/40 bg-background lg:hidden">
          <nav className="container-page flex flex-col gap-1 py-4">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground/80 hover:bg-secondary [&.active]:bg-navy-deep [&.active]:text-primary-foreground"
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-orange px-5 py-2.5 text-sm font-semibold text-accent-foreground"
            >
              Plan a Trip
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
