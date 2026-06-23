import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Menu,
  Phone,
  Mail,
  Headphones,
  ChevronDown,
  X,
  Plane,
  Hotel,
  FileCheck,
  ShieldCheck,
  Heart,
  Mountain,
  Users,
  Crown,
  Waves,
  Snowflake,
  Sparkles,
  Compass,
  MapPin,
} from "lucide-react";
import logo from "@/assets/trippper-logo.png";
import { domestic, international } from "@/lib/destinations";

const HOLIDAY_THEMES = [
  { label: "Honeymoon", icon: Heart, query: "honeymoon" },
  { label: "Family", icon: Users, query: "family" },
  { label: "Adventure", icon: Mountain, query: "adventure" },
  { label: "Luxury", icon: Crown, query: "luxury" },
  { label: "Beach", icon: Waves, query: "beach" },
  { label: "Snow", icon: Snowflake, query: "snow" },
  { label: "Cultural", icon: Compass, query: "cultural" },
  { label: "Pilgrimage", icon: Sparkles, query: "pilgrimage" },
];

const FUTURE_SERVICES = [
  { label: "Flights", icon: Plane },
  { label: "Hotels", icon: Hotel },
  { label: "Visa Services", icon: FileCheck },
  { label: "Travel Insurance", icon: ShieldCheck },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";
  const solid = !isHome || scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenMenu(null);
  }, [pathname]);

  return (
    <>
      {/* Top utility bar */}
      <div
        className={`fixed inset-x-0 top-0 z-50 hidden border-b transition-all md:block ${
          solid
            ? "border-border/60 bg-navy-deep text-white/90"
            : "border-white/10 bg-black/30 text-white/85 backdrop-blur-md"
        }`}
      >
        <div className="container-page flex h-9 items-center justify-between text-[12px]">
          <div className="flex items-center gap-5">
            <a href="tel:+919876543210" className="flex items-center gap-1.5 hover:text-orange">
              <Phone className="h-3 w-3" /> +91 98765 43210
            </a>
            <a href="mailto:hello@Trippper.com" className="flex items-center gap-1.5 hover:text-orange">
              <Mail className="h-3 w-3" /> hello@Trippper.com
            </a>
          </div>
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5 text-orange">
              <Headphones className="h-3 w-3" /> 24/7 Travel Support
            </span>
            <span className="opacity-70">EN · INR ₹</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header
        className={`fixed inset-x-0 z-50 transition-all md:top-9 ${
          solid
            ? "top-0 border-b border-border/60 bg-white/95 text-navy-deep shadow-[0_8px_30px_-12px_rgba(15,23,42,0.15)] backdrop-blur-xl"
            : "top-0 text-white"
        }`}
        onMouseLeave={() => setOpenMenu(null)}
      >
        <div className="container-page flex h-16 items-center justify-between md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5">
            <img
              src={logo}
              alt="Trippper"
              width={40}
              height={40}
              className={`h-9 w-9 object-contain transition md:h-10 md:w-10 ${solid ? "" : "brightness-200"}`}
            />
            <div className="leading-none">
              <div className="font-display text-lg font-extrabold tracking-tight md:text-xl">Trippper</div>
              <div className={`mt-0.5 text-[9px] font-semibold uppercase tracking-[0.22em] ${solid ? "text-orange" : "text-orange"}`}>
                Explore Beyond Limits
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex">
            {/* <NavLink to="/" solid={solid}>Home</NavLink> */}

            {/* Holidays mega */}
            <MegaTrigger
              label="Holidays"
              isOpen={openMenu === "holidays"}
              onHover={() => setOpenMenu("holidays")}
              solid={solid}
            >
              <div className="grid grid-cols-3 gap-8 p-8">
                <div>
                  <MegaHeading>By Region</MegaHeading>
                  <ul className="mt-4 space-y-2.5 text-sm">
                    <li><Link to="/destinations" search={{ region: "Domestic" } as never} className="flex items-center gap-2 text-navy-deep hover:text-orange"><MapPin className="h-3.5 w-3.5 text-orange" /> Domestic — India</Link></li>
                    <li><Link to="/destinations" search={{ region: "International" } as never} className="flex items-center gap-2 text-navy-deep hover:text-orange"><MapPin className="h-3.5 w-3.5 text-orange" /> International</Link></li>
                    <li><Link to="/packages" className="flex items-center gap-2 text-navy-deep hover:text-orange"><MapPin className="h-3.5 w-3.5 text-orange" /> All Packages</Link></li>
                  </ul>
                </div>
                <div className="col-span-2">
                  <MegaHeading>By Theme</MegaHeading>
                  <div className="mt-4 grid grid-cols-2 gap-2">
                    {HOLIDAY_THEMES.map(({ label, icon: Icon, query }) => (
                      <Link
                        key={label}
                        to="/destinations"
                        search={{ theme: query } as never}
                        className="group flex items-center gap-3 rounded-lg border border-transparent px-3 py-2 text-sm text-navy-deep transition hover:border-orange/40 hover:bg-orange/5"
                      >
                        <span className="grid h-8 w-8 place-items-center rounded-md bg-navy-deep/5 text-orange transition group-hover:bg-orange group-hover:text-white">
                          <Icon className="h-4 w-4" />
                        </span>
                        <span className="font-medium">{label}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </MegaTrigger>

            {/* Destinations mega */}
            <MegaTrigger
              label="Destinations"
              isOpen={openMenu === "destinations"}
              onHover={() => setOpenMenu("destinations")}
              solid={solid}
            >
              <div className="grid grid-cols-2 gap-6 p-6">
                <div>
                  <MegaHeading>Domestic — India</MegaHeading>
                  <ul className="mt-3 space-y-1.5">
                    {domestic.map((d) => (
                      <li key={d.slug}>
                        <Link to="/destinations" className="flex items-center justify-between rounded px-2 py-1.5 text-sm text-navy-deep hover:bg-orange/5 hover:text-orange">
                          <span>{d.name}</span>
                          <span className="text-[11px] text-muted-foreground">{d.days}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <MegaHeading>International</MegaHeading>
                  <ul className="mt-3 space-y-1.5">
                    {international.slice(0, 7).map((d) => (
                      <li key={d.slug}>
                        <Link to="/destinations" className="flex items-center justify-between rounded px-2 py-1.5 text-sm text-navy-deep hover:bg-orange/5 hover:text-orange">
                          <span>{d.name}</span>
                          <span className="text-[11px] text-muted-foreground">{d.days}</span>
                        </Link>
                      </li>
                    ))}
                    <li>
                      <Link to="/destinations" className="mt-2 flex items-center gap-1 px-2 text-xs font-semibold text-orange">
                        View all destinations →
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </MegaTrigger>

            <NavLink to="/packages" solid={solid}>Packages</NavLink>
            <NavLink to="/services" solid={solid}>Services</NavLink>
            <NavLink to="/gallery" solid={solid}>Gallery</NavLink>
            <NavLink to="/blog" solid={solid}>Blog</NavLink>
            <NavLink to="/about" solid={solid}>About</NavLink>

            {/* More (future) */}
            <MegaTrigger
              label="More"
              isOpen={openMenu === "more"}
              onHover={() => setOpenMenu("more")}
              solid={solid}
              compact
            >
              <div className="p-4">
                <MegaHeading>Coming Soon</MegaHeading>
                <div className="mt-3 grid grid-cols-1 gap-1.5">
                  {FUTURE_SERVICES.map(({ label, icon: Icon }) => (
                    <div key={label} className="flex items-center justify-between rounded px-2 py-1.5 text-sm text-navy-deep/70">
                      <span className="flex items-center gap-2"><Icon className="h-4 w-4 text-orange/70" /> {label}</span>
                      <span className="rounded-full bg-orange/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-orange">Soon</span>
                    </div>
                  ))}
                </div>
              </div>
            </MegaTrigger>
          </nav>

          <div className="flex items-center gap-2">
            <Link
              to="/contact"
              className="hidden items-center gap-2 rounded-full bg-orange px-5 py-2.5 text-sm font-semibold text-accent-foreground shadow-sm transition hover:bg-orange-soft md:inline-flex"
            >
              <Plane className="h-4 w-4" /> Plan a Trip
            </Link>
            <button
              onClick={() => setMobileOpen(true)}
              className={`lg:hidden grid h-10 w-10 place-items-center rounded-full ${solid ? "bg-navy-deep text-white" : "bg-white/10 text-white backdrop-blur"}`}
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div className="absolute inset-0 bg-navy-deep/60 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
          <aside className="absolute right-0 top-0 h-full w-[88%] max-w-sm overflow-y-auto bg-background p-6 shadow-2xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img src={logo} alt="Trippper" className="h-9 w-9 object-contain" />
                <div className="font-display text-lg font-bold text-navy-deep">Trippper</div>
              </div>
              <button onClick={() => setMobileOpen(false)} className="grid h-9 w-9 place-items-center rounded-full bg-muted">
                <X className="h-4 w-4" />
              </button>
            </div>
            <nav className="mt-6 flex flex-col gap-1">
              {[
                ["/", "Home"],
                ["/destinations", "Destinations"],
                ["/packages", "Packages"],
                ["/services", "Services"],
                ["/gallery", "Gallery"],
                ["/blog", "Blog"],
                ["/about", "About"],
                ["/contact", "Contact"],
              ].map(([to, label]) => (
                <Link
                  key={to}
                  to={to}
                  className="rounded-xl px-4 py-3 text-base font-semibold text-navy-deep hover:bg-orange/10 hover:text-orange"
                  activeProps={{ className: "bg-navy-deep text-white" }}
                  activeOptions={{ exact: to === "/" }}
                >
                  {label}
                </Link>
              ))}
            </nav>
            <div className="mt-6 rounded-2xl bg-sand p-4">
              <div className="text-xs font-bold uppercase tracking-widest text-orange">Holiday Themes</div>
              <div className="mt-3 grid grid-cols-2 gap-2">
                {HOLIDAY_THEMES.map(({ label, icon: Icon }) => (
                  <Link
                    key={label}
                    to="/destinations"
                    className="flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-sm font-medium text-navy-deep hover:text-orange"
                  >
                    <Icon className="h-4 w-4 text-orange" /> {label}
                  </Link>
                ))}
              </div>
            </div>
            <Link
              to="/contact"
              className="mt-6 flex items-center justify-center gap-2 rounded-full bg-orange px-5 py-3 text-sm font-semibold text-accent-foreground"
            >
              <Plane className="h-4 w-4" /> Plan a Trip
            </Link>
            <div className="mt-6 space-y-2 text-sm text-muted-foreground">
              <a href="tel:+919876543210" className="flex items-center gap-2"><Phone className="h-4 w-4 text-orange" /> +91 98765 43210</a>
              <a href="mailto:hello@Trippper.com" className="flex items-center gap-2"><Mail className="h-4 w-4 text-orange" /> hello@Trippper.com</a>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}

function NavLink({ to, children, solid }: { to: string; children: React.ReactNode; solid: boolean }) {
  return (
    <Link
      to={to}
      className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
        solid ? "text-navy-deep hover:bg-orange/10 hover:text-orange" : "text-white/90 hover:bg-white/10 hover:text-white"
      }`}
      activeProps={{ className: solid ? "text-orange" : "text-orange" }}
      activeOptions={{ exact: to === "/" }}
    >
      {children}
    </Link>
  );
}

function MegaTrigger({
  label,
  isOpen,
  onHover,
  solid,
  compact,
  children,
}: {
  label: string;
  isOpen: boolean;
  onHover: () => void;
  solid: boolean;
  compact?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="relative" onMouseEnter={onHover}>
      <button
        className={`flex items-center gap-1 rounded-full px-4 py-2 text-sm font-semibold transition ${
          solid ? "text-navy-deep hover:bg-orange/10 hover:text-orange" : "text-white/90 hover:bg-white/10 hover:text-white"
        }`}
      >
        {label} <ChevronDown className={`h-3.5 w-3.5 transition ${isOpen ? "rotate-180" : ""}`} />
      </button>
      {isOpen && (
        <div
          className={`absolute left-1/2 top-full -translate-x-1/2 pt-3 ${compact ? "w-72" : "w-[640px]"}`}
        >
          <div className="overflow-hidden rounded-2xl border border-border/60 bg-white shadow-[0_30px_80px_-30px_rgba(15,23,42,0.35)]">
            {children}
          </div>
        </div>
      )}
    </div>
  );
}

function MegaHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-orange">{children}</div>
  );
}
