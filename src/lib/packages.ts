import { destinations } from "./destinations";

export interface UpcomingTrip {
  id: string;
  destinationSlug: string;
  title: string;
  route: string;
  departureDate: string; // ISO
  durationNights: number;
  price: string;
  priceValue: number;
  totalSeats: number;
  seatsLeft: number;
  category: "weekend" | "this-month" | "next-month" | "festive";
  highlights: string[];
}

const find = (slug: string) => destinations.find((d) => d.slug === slug)!;

export const upcomingTrips: UpcomingTrip[] = [
  {
    id: "trip-bali-feb",
    destinationSlug: "bali",
    title: "Bali Honeymoon Escape",
    route: "Delhi → Denpasar → Ubud → Seminyak",
    departureDate: "2026-07-12",
    durationNights: 6,
    price: "₹74,000",
    priceValue: 74000,
    totalSeats: 24,
    seatsLeft: 5,
    category: "this-month",
    highlights: ["Private villa", "Sunset dinner", "Nusa Penida tour"],
  },
  {
    id: "trip-swiss-mar",
    destinationSlug: "swiss",
    title: "Switzerland Grand Tour",
    route: "Mumbai → Zurich → Lucerne → Interlaken",
    departureDate: "2026-07-26",
    durationNights: 8,
    price: "₹2,19,000",
    priceValue: 219000,
    totalSeats: 18,
    seatsLeft: 9,
    category: "this-month",
    highlights: ["Glacier Express", "Jungfraujoch", "Mt. Titlis"],
  },
  {
    id: "trip-japan-apr",
    destinationSlug: "japan",
    title: "Cherry Blossom Japan",
    route: "Bengaluru → Tokyo → Kyoto → Hakone",
    departureDate: "2026-08-04",
    durationNights: 9,
    price: "₹1,89,000",
    priceValue: 189000,
    totalSeats: 20,
    seatsLeft: 12,
    category: "next-month",
    highlights: ["Bullet train", "Tea ceremony", "Mt. Fuji"],
  },
  {
    id: "trip-rajasthan-mar",
    destinationSlug: "rajasthan",
    title: "Royal Rajasthan Heritage",
    route: "Delhi → Jaipur → Jodhpur → Udaipur",
    departureDate: "2026-08-18",
    durationNights: 8,
    price: "₹62,000",
    priceValue: 62000,
    totalSeats: 30,
    seatsLeft: 3,
    category: "next-month",
    highlights: ["Palace stay", "Camel safari", "Lake dinner"],
  },
  {
    id: "trip-andaman-weekend",
    destinationSlug: "andaman",
    title: "Andaman Long Weekend",
    route: "Chennai → Port Blair → Havelock",
    departureDate: "2026-07-04",
    durationNights: 4,
    price: "₹42,000",
    priceValue: 42000,
    totalSeats: 16,
    seatsLeft: 7,
    category: "weekend",
    highlights: ["Sea walking", "Radhanagar Beach", "Scuba"],
  },
  {
    id: "trip-dubai-festive",
    destinationSlug: "dubai",
    title: "Dubai Festive Lights",
    route: "Mumbai → Dubai → Abu Dhabi",
    departureDate: "2026-12-22",
    durationNights: 5,
    price: "₹89,000",
    priceValue: 89000,
    totalSeats: 25,
    seatsLeft: 18,
    category: "festive",
    highlights: ["Burj Khalifa", "Desert safari", "Ferrari World"],
  },
];

export const enrichedTrips = upcomingTrips.map((t) => ({ ...t, destination: find(t.destinationSlug) }));

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readMins: number;
  image: string;
}

import greece from "@/assets/dest-greece.jpg";
import japan from "@/assets/dest-japan.jpg";
import swiss from "@/assets/dest-swiss.jpg";
import bali from "@/assets/dest-bali.jpg";
import paris from "@/assets/dest-paris.jpg";
import iceland from "@/assets/dest-iceland.jpg";

export const blogPosts: BlogPost[] = [
  { slug: "bali-7-day-itinerary", title: "The Perfect 7-Day Bali Itinerary for Couples", excerpt: "From Ubud's rice terraces to Nusa Penida's cliffs — the route we send every newlywed on.", category: "Itineraries", author: "Ananya R.", date: "2026-06-08", readMins: 7, image: bali },
  { slug: "japan-spring-guide", title: "Japan in Spring: When and Where to See Sakura", excerpt: "Cherry blossom forecasts, hidden parks, and the trick to dodging Kyoto's crowds.", category: "Guides", author: "Saaya Tanaka", date: "2026-05-22", readMins: 9, image: japan },
  { slug: "switzerland-on-rails", title: "Switzerland on Rails: The Glacier Express Experience", excerpt: "Eight hours, 91 tunnels, 291 bridges — why this is the world's slowest express train.", category: "Experiences", author: "James Carter", date: "2026-05-10", readMins: 6, image: swiss },
  { slug: "santorini-sunsets", title: "Where to Watch the Best Sunset in Santorini", excerpt: "Oia is overrated. Here are five caldera-view spots you'll have almost to yourself.", category: "Tips", author: "Priya Mehta", date: "2026-04-28", readMins: 5, image: greece },
  { slug: "paris-like-a-local", title: "Paris Like a Local: 12 Neighbourhood Cafés", excerpt: "Skip the touristy lines. These are the cafés our Paris designers actually go to.", category: "Tips", author: "Daniel Okafor", date: "2026-04-14", readMins: 8, image: paris },
  { slug: "iceland-northern-lights", title: "Chasing the Aurora: A First-Timer's Guide to Iceland", excerpt: "Forecast apps, base camps and what to wear when it's −15°C at midnight.", category: "Guides", author: "James Carter", date: "2026-03-30", readMins: 10, image: iceland },
];

export const testimonials = [
  { name: "Ananya & Rohit", trip: "Maldives Honeymoon, 2025", quote: "From the welcome call to the seaplane transfer, every detail was anticipated. Best decision of our wedding year.", rating: 5 },
  { name: "The Sharma Family", trip: "Switzerland, 2024", quote: "Travelling with two kids and grandparents is hard. Trippper made it feel like a holiday for all four generations.", rating: 5 },
  { name: "Meera Krishnan", trip: "Solo Japan, 2025", quote: "Solo travel in Kyoto felt safe and deeply personal. The tea ceremony alone was worth the trip.", rating: 5 },
  { name: "Vikram Iyer", trip: "Iceland Aurora, 2025", quote: "They moved my entire itinerary by a day when the aurora forecast shifted. Saw the lights on night one.", rating: 5 },
  { name: "Priya & Arjun", trip: "Bali, 2026", quote: "The private villa, the surprise birthday cake, the local guide in Ubud — every single thing landed.", rating: 5 },
];

export const faqs = [
  { q: "How do I book a holiday with Trippper?", a: "Browse our packages or tell us your dream destination. A travel designer will send three handcrafted itineraries within 24 hours. Pay a 20% advance to confirm, balance closer to departure." },
  { q: "Can I customize a fixed-departure package?", a: "Absolutely. Every itinerary is a starting point. Add nights, change hotels, swap experiences — your designer will rebuild the trip around what you want." },
  { q: "What is your cancellation policy?", a: "Cancellations 45+ days before departure receive a full refund minus a 10% service fee. Inside 45 days, the policy depends on hotel and flight terms — we always pass through actual costs only." },
  { q: "Do you handle visas and travel insurance?", a: "Yes. Visa assistance and travel insurance are included in most international packages and can be added to any custom trip." },
  { q: "Is 24/7 support actually 24/7?", a: "Yes. Every traveler gets a dedicated WhatsApp line during their trip with average response under 4 minutes — day or night." },
  { q: "Do you arrange group tours and corporate offsites?", a: "We design private group departures from 6 to 200 travelers, including corporate offsites, family reunions and special interest groups." },
];
