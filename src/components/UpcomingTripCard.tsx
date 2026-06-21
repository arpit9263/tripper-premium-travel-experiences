import { Link } from "@tanstack/react-router";
import { Calendar, MapPin, Clock, Users, ArrowRight, Sparkles } from "lucide-react";
import type { UpcomingTrip } from "@/lib/packages";
import { destinations } from "@/lib/destinations";

export function UpcomingTripCard({ trip }: { trip: UpcomingTrip }) {
  const dest = destinations.find((d) => d.slug === trip.destinationSlug)!;
  const seatPct = Math.round(((trip.totalSeats - trip.seatsLeft) / trip.totalSeats) * 100);
  const urgent = trip.seatsLeft <= 5;
  const date = new Date(trip.departureDate).toLocaleDateString("en-IN", {
    day: "numeric", month: "short", year: "numeric",
  });

  return (
    <article className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card shadow-[var(--shadow-card)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]">
      <div className="relative h-52 overflow-hidden">
        <img src={dest.image} alt={dest.name} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/85 via-navy-deep/10 to-transparent" />
        <div className="absolute left-4 right-4 top-4 flex items-start justify-between">
          <span className="rounded-full bg-orange px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-accent-foreground">
            {date}
          </span>
          {urgent && (
            <span className="flex items-center gap-1 rounded-full bg-destructive/95 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
              <Sparkles className="h-3 w-3" /> Filling fast
            </span>
          )}
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <div className="text-[11px] font-semibold uppercase tracking-widest text-white/80">{dest.country}</div>
          <h3 className="mt-1 font-display text-xl font-bold text-white">{trip.title}</h3>
        </div>
      </div>

      <div className="p-5">
        <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5 text-orange" /> {trip.route}</span>
        </div>
        <div className="mt-3 flex flex-wrap gap-3 text-xs">
          <span className="flex items-center gap-1.5 rounded-full bg-sand px-2.5 py-1 font-medium text-navy-deep">
            <Clock className="h-3 w-3 text-orange" /> {trip.durationNights}N / {trip.durationNights + 1}D
          </span>
          <span className="flex items-center gap-1.5 rounded-full bg-sand px-2.5 py-1 font-medium text-navy-deep">
            <Calendar className="h-3 w-3 text-orange" /> Fixed departure
          </span>
        </div>

        <ul className="mt-3 flex flex-wrap gap-1.5">
          {trip.highlights.map((h) => (
            <li key={h} className="rounded bg-orange/10 px-2 py-0.5 text-[11px] font-medium text-orange">{h}</li>
          ))}
        </ul>

        {/* Seats progress */}
        <div className="mt-4">
          <div className="flex items-center justify-between text-[11px] font-semibold">
            <span className="flex items-center gap-1 text-muted-foreground"><Users className="h-3 w-3" /> {trip.seatsLeft} of {trip.totalSeats} seats left</span>
            <span className={urgent ? "text-destructive" : "text-orange"}>{seatPct}% booked</span>
          </div>
          <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-muted">
            <div
              className={`h-full rounded-full transition-all ${urgent ? "bg-destructive" : "bg-orange"}`}
              style={{ width: `${seatPct}%` }}
            />
          </div>
        </div>

        <div className="mt-5 flex items-end justify-between border-t border-border/50 pt-4">
          <div>
            <div className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">From</div>
            <div className="font-display text-2xl font-bold text-navy-deep">{trip.price}</div>
            <div className="text-[10px] text-muted-foreground">per person · twin sharing</div>
          </div>
          <div className="flex flex-col gap-1.5">
            <Link to="/contact" className="inline-flex items-center gap-1.5 rounded-full bg-navy-deep px-4 py-2 text-xs font-semibold text-white hover:bg-orange">
              Book Seat <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <Link to="/contact" className="text-center text-[11px] font-semibold text-orange hover:underline">
              Customize Trip
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
