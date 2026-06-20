import { Link } from "@tanstack/react-router";
import type { destinations } from "@/lib/destinations";

export function DestinationCard({ d }: { d: (typeof destinations)[number] }) {
  return (
    <Link
      to="/destinations"
      className="group relative isolate flex h-[26rem] flex-col justify-end overflow-hidden rounded-2xl shadow-[var(--shadow-card)]"
    >
      <img
        src={d.image}
        alt={d.name}
        loading="lazy"
        width={1024}
        height={1280}
        className="absolute inset-0 -z-10 h-full w-full object-cover transition duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-navy-deep via-navy-deep/40 to-transparent" />
      <span className="absolute right-4 top-4 rounded-full bg-orange px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-accent-foreground">
        {d.tag}
      </span>
      <div className="p-6 text-primary-foreground">
        <div className="text-xs font-semibold uppercase tracking-widest text-white/70">{d.region}</div>
        <div className="mt-1 font-display text-2xl font-bold">{d.name}</div>
        <div className="mt-3 flex items-center justify-between text-sm">
          <span className="text-white/80">{d.days}</span>
          <span className="font-semibold text-orange">from {d.price}</span>
        </div>
      </div>
    </Link>
  );
}
