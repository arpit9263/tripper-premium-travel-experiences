import greece from "@/assets/dest-greece.jpg";
import japan from "@/assets/dest-japan.jpg";
import swiss from "@/assets/dest-swiss.jpg";
import dubai from "@/assets/dest-dubai.jpg";
import bali from "@/assets/dest-bali.jpg";
import paris from "@/assets/dest-paris.jpg";
import iceland from "@/assets/dest-iceland.jpg";
import lagoon from "@/assets/hero-lagoon.jpg";

export type Region = "Domestic" | "International";
export type Theme =
  | "Honeymoon"
  | "Family"
  | "Adventure"
  | "Luxury"
  | "Beach"
  | "Snow"
  | "Cultural"
  | "Pilgrimage";

export interface Destination {
  slug: string;
  name: string;
  region: Region;
  country: string;
  continent: string;
  image: string;
  days: string;
  nights: number;
  price: string;
  priceValue: number;
  tag: string;
  themes: Theme[];
  rating: number;
  reviews: number;
  description: string;
}

export const destinations: Destination[] = [
  { slug: "kerala", name: "Backwaters of Kerala", region: "Domestic", country: "India", continent: "Asia", image: bali, days: "6 Nights", nights: 6, price: "₹38,000", priceValue: 38000, tag: "Houseboat Stay", themes: ["Family", "Cultural", "Honeymoon"], rating: 4.8, reviews: 412, description: "Glide through coconut-fringed backwaters and stay in a traditional houseboat under the stars." },
  { slug: "rajasthan", name: "Royal Rajasthan", region: "Domestic", country: "India", continent: "Asia", image: dubai, days: "8 Nights", nights: 8, price: "₹62,000", priceValue: 62000, tag: "Heritage", themes: ["Cultural", "Luxury", "Family"], rating: 4.9, reviews: 524, description: "Palaces, forts and the golden Thar — sleep where the kings did, ride camels at sunset." },
  { slug: "himachal", name: "Himachal Snow Trail", region: "Domestic", country: "India", continent: "Asia", image: swiss, days: "7 Nights", nights: 7, price: "₹44,000", priceValue: 44000, tag: "Snow Escape", themes: ["Snow", "Adventure", "Family"], rating: 4.7, reviews: 318, description: "Manali to Spiti — apple orchards, monasteries and mountain passes above the clouds." },
  { slug: "andaman", name: "Andaman Islands", region: "Domestic", country: "India", continent: "Asia", image: lagoon, days: "6 Nights", nights: 6, price: "₹56,000", priceValue: 56000, tag: "Coral Reefs", themes: ["Beach", "Honeymoon", "Adventure"], rating: 4.8, reviews: 287, description: "Turquoise waters, sea-walking with reef fish and the quietest beaches in the country." },
  { slug: "ladakh", name: "Ladakh Expedition", region: "Domestic", country: "India", continent: "Asia", image: iceland, days: "9 Nights", nights: 9, price: "₹71,000", priceValue: 71000, tag: "High Altitude", themes: ["Adventure", "Cultural"], rating: 4.9, reviews: 196, description: "Pangong, Nubra and ancient gompas — the most cinematic road trip in India." },
  { slug: "varanasi", name: "Varanasi & Ganges", region: "Domestic", country: "India", continent: "Asia", image: greece, days: "4 Nights", nights: 4, price: "₹29,000", priceValue: 29000, tag: "Spiritual", themes: ["Pilgrimage", "Cultural"], rating: 4.6, reviews: 241, description: "The oldest living city — dawn ghats, evening aartis and walks through narrow lanes of time." },
  { slug: "greece", name: "Santorini, Greece", region: "International", country: "Greece", continent: "Europe", image: greece, days: "7 Nights", nights: 7, price: "₹1,49,000", priceValue: 149000, tag: "Iconic Coast", themes: ["Honeymoon", "Luxury", "Beach"], rating: 4.9, reviews: 612, description: "White-washed cliffs above the Aegean — caldera-view suites, sunset wineries and slow island days." },
  { slug: "japan", name: "Kyoto & Mt. Fuji", region: "International", country: "Japan", continent: "Asia", image: japan, days: "9 Nights", nights: 9, price: "₹1,89,000", priceValue: 189000, tag: "Cherry Blossoms", themes: ["Cultural", "Family", "Luxury"], rating: 4.9, reviews: 481, description: "Tea ceremonies in Kyoto, bullet trains to Hakone and onsen evenings beneath Mt. Fuji." },
  { slug: "swiss", name: "Swiss Alps", region: "International", country: "Switzerland", continent: "Europe", image: swiss, days: "8 Nights", nights: 8, price: "₹2,19,000", priceValue: 219000, tag: "Mountain Escape", themes: ["Honeymoon", "Snow", "Luxury"], rating: 5.0, reviews: 538, description: "Glacier express trains, lakeside Lucerne, and chocolate evenings in Interlaken." },
  { slug: "dubai", name: "Dubai & Abu Dhabi", region: "International", country: "UAE", continent: "Middle East", image: dubai, days: "5 Nights", nights: 5, price: "₹89,000", priceValue: 89000, tag: "City Lights", themes: ["Family", "Luxury"], rating: 4.8, reviews: 902, description: "Skyline dining, desert safaris and Ferrari World — the most family-friendly luxury escape." },
  { slug: "bali", name: "Bali, Indonesia", region: "International", country: "Indonesia", continent: "Asia", image: bali, days: "6 Nights", nights: 6, price: "₹74,000", priceValue: 74000, tag: "Tropical Bliss", themes: ["Honeymoon", "Beach", "Adventure"], rating: 4.8, reviews: 1124, description: "Ubud rice terraces, Nusa Penida cliffs and Seminyak beach clubs — the complete Bali." },
  { slug: "paris", name: "Paris, France", region: "International", country: "France", continent: "Europe", image: paris, days: "5 Nights", nights: 5, price: "₹1,29,000", priceValue: 129000, tag: "City of Lights", themes: ["Honeymoon", "Cultural", "Luxury"], rating: 4.9, reviews: 718, description: "Champs-Élysées mornings, Louvre afternoons and Seine river dinners — Paris done right." },
  { slug: "iceland", name: "Iceland Aurora", region: "International", country: "Iceland", continent: "Nordic", image: iceland, days: "7 Nights", nights: 7, price: "₹2,49,000", priceValue: 249000, tag: "Northern Lights", themes: ["Adventure", "Luxury"], rating: 4.9, reviews: 286, description: "Glacier lagoons, black-sand beaches and aurora chases under the polar sky." },
  { slug: "maldives", name: "Maldives Lagoon", region: "International", country: "Maldives", continent: "Asia", image: lagoon, days: "5 Nights", nights: 5, price: "₹1,69,000", priceValue: 169000, tag: "Overwater Villa", themes: ["Honeymoon", "Beach", "Luxury"], rating: 5.0, reviews: 1340, description: "Private overwater villas, glass-floor sunsets and house-reef snorkelling at your doorstep." },
];

export const domestic = destinations.filter((d) => d.region === "Domestic");
export const international = destinations.filter((d) => d.region === "International");
