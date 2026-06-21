import { Link } from "@tanstack/react-router";
import { Heart, Users, Mountain, Crown, Waves, Snowflake, Compass, Sparkles, ArrowUpRight } from "lucide-react";
import greece from "@/assets/dest-greece.jpg";
import bali from "@/assets/dest-bali.jpg";
import swiss from "@/assets/dest-swiss.jpg";
import iceland from "@/assets/dest-iceland.jpg";
import dubai from "@/assets/dest-dubai.jpg";
import japan from "@/assets/dest-japan.jpg";
import paris from "@/assets/dest-paris.jpg";
import lagoon from "@/assets/hero-lagoon.jpg";

const THEMES = [
  { t: "Honeymoon", icon: Heart, img: lagoon, count: "48 trips", span: "md:col-span-2 md:row-span-2" },
  { t: "Adventure", icon: Mountain, img: iceland, count: "62 trips", span: "" },
  { t: "Family", icon: Users, img: dubai, count: "74 trips", span: "" },
  { t: "Luxury", icon: Crown, img: paris, count: "39 trips", span: "md:col-span-2" },
  { t: "Beach", icon: Waves, img: bali, count: "55 trips", span: "" },
  { t: "Snow", icon: Snowflake, img: swiss, count: "28 trips", span: "" },
  { t: "Cultural", icon: Compass, img: japan, count: "41 trips", span: "" },
  { t: "Pilgrimage", icon: Sparkles, img: greece, count: "18 trips", span: "" },
];

export function HolidayThemes() {
  return (
    <div className="grid auto-rows-[180px] grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
      {THEMES.map(({ t, icon: Icon, img, count, span }) => (
        <Link
          key={t}
          to="/destinations"
          className={`group relative isolate overflow-hidden rounded-2xl ring-1 ring-black/5 ${span}`}
        >
          <img src={img} alt={t} loading="lazy" className="absolute inset-0 -z-10 h-full w-full object-cover transition duration-700 group-hover:scale-110" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-navy-deep/90 via-navy-deep/30 to-transparent" />
          <div className="flex h-full flex-col justify-between p-5 text-white">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-white/15 backdrop-blur">
              <Icon className="h-4 w-4" />
            </span>
            <div>
              <div className="font-display text-xl font-bold">{t}</div>
              <div className="mt-1 flex items-center justify-between">
                <span className="text-[11px] uppercase tracking-widest text-white/70">{count}</span>
                <ArrowUpRight className="h-4 w-4 translate-x-0 opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100" />
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
