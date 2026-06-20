import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  Headphones,
  Landmark,
  MapPin,
  Palmtree,
  ShieldCheck,
  Star,
  Tag,
  Wifi,
} from "lucide-react";

import hotelBg from "@/assets/hotelbg2.png";

const destinations = [
  {
    name: "Agra",
    location: "Uttar Pradesh, India",
    price: "₹3,499",
    rating: "4.6",
    tag: "Heritage",
    icon: Landmark,
    color: "bg-orange",
    image:
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=900&q=80",
    details:
      "Heritage hotels near Taj Mahal with breakfast, local transfers and guided sightseeing.",
  },
  {
    name: "Goa",
    location: "Goa, India",
    price: "₹2,799",
    rating: "4.5",
    tag: "Beach",
    icon: Palmtree,
    color: "bg-blue-600",
    image:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=900&q=80",
    details:
      "Beachside resorts, sea-view rooms, pools, nightlife access and couple-friendly stays.",
  },
  {
    name: "Dubai",
    location: "United Arab Emirates",
    price: "₹6,999",
    rating: "4.7",
    tag: "City Life",
    icon: Building2,
    color: "bg-purple-600",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=900&q=80",
    details:
      "Premium city hotels near Burj Khalifa with desert safari and airport pickup options.",
  },
  {
    name: "Bangkok",
    location: "Thailand",
    price: "₹4,299",
    rating: "4.4",
    tag: "Culture",
    icon: Landmark,
    color: "bg-rose-600",
    image:
      "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=900&q=80",
    details:
      "Comfort stays close to temples, markets and nightlife with curated city tours.",
  },
  {
    name: "Maldives",
    location: "South Asia",
    price: "₹12,999",
    rating: "4.8",
    tag: "Luxury",
    icon: Palmtree,
    color: "bg-teal-600",
    image:
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=900&q=80",
    details:
      "Overwater villas, private beaches, snorkelling and romantic honeymoon packages.",
  },
  {
    name: "Singapore",
    location: "Singapore",
    price: "₹7,499",
    rating: "4.7",
    tag: "Urban",
    icon: Building2,
    color: "bg-indigo-600",
    image:
      "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=900&q=80",
    details:
      "Modern hotels near Marina Bay, Sentosa access and family-friendly city packages.",
  },
];

const features = [
  { icon: Building2, title: "2000+ Hotels", text: "Across top destinations" },
  { icon: Tag, title: "Best Price Guarantee", text: "We match the best prices" },
  { icon: Headphones, title: "24/7 Support", text: "Always here to help" },
  { icon: ShieldCheck, title: "Secure Booking", text: "100% safe & secure" },
];

export function HotelStaysSection() {
  const [current, setCurrent] = useState(0);
  const maxIndex = destinations.length - 1;

  const nextSlide = () => {
    setCurrent((prev) => (prev === maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  return (
    <section
      className="relative overflow-hidden py-20"
      style={{
        backgroundImage: `url(${hotelBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-white/45 backdrop-blur-[1px]" />

      <div className="container-page relative z-10">
        <div className="mb-10 text-center">
          <div className="mb-3 flex items-center justify-center gap-3 text-xs font-black uppercase tracking-[0.22em] text-orange">
            <span className="h-px w-12 bg-orange/40" />
            Handpicked Destinations
            <span className="h-px w-12 bg-orange/40" />
          </div>

          <h2 className="font-display text-4xl font-black tracking-tight text-navy-deep md:text-6xl">
            Explore{" "}
            <span className="font-serif italic font-medium text-orange">
              Hotel
            </span>{" "}
            Stays
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm font-medium text-slate-600 md:text-base">
            Premium stays, beautiful destinations and curated travel experiences.
          </p>
        </div>

        <div className="relative">
          <button
            type="button"
            onClick={prevSlide}
            className="absolute -left-6 top-1/2 z-20 hidden h-13 w-13 -translate-y-1/2 items-center justify-center rounded-full bg-white text-navy-deep shadow-xl transition hover:scale-110 lg:flex"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={nextSlide}
            className="absolute -right-6 top-1/2 z-20 hidden h-13 w-13 -translate-y-1/2 items-center justify-center rounded-full bg-white text-navy-deep shadow-xl transition hover:scale-110 lg:flex"
          >
            <ArrowRight className="h-5 w-5" />
          </button>

          <div className="overflow-hidden rounded-[34px]">
            <div
              className="flex transition-transform duration-700 ease-[cubic-bezier(.22,.8,.32,1)]"
              style={{ transform: `translateX(-${current * 25}%)` }}
            >
              {[...destinations, ...destinations].map(({ icon: Icon, ...item }, index) => (
                <div
                  key={`${item.name}-${index}`}
                  className="w-full shrink-0 px-3 md:w-1/2 xl:w-1/4"
                >
                  <article className="group relative min-h-[390px] overflow-hidden rounded-[30px] bg-slate-900 shadow-[0_28px_70px_-35px_rgba(15,23,42,0.8)] transition-all duration-500 hover:shadow-[0_45px_100px_-40px_rgba(15,23,42,1)]">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#06183a]/95 via-[#06183a]/45 to-transparent transition duration-500 group-hover:via-[#06183a]/70" />

                    <div className="relative flex min-h-[390px] flex-col justify-between p-5">
                      <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/95 px-3 py-2 text-[10px] font-black uppercase tracking-wide text-navy-deep shadow-lg">
                        <span
                          className={`grid h-7 w-7 place-items-center rounded-full ${item.color} text-white`}
                        >
                          <Icon className="h-4 w-4" />
                        </span>
                        {item.tag}
                      </span>

                      <div className="transition-all duration-500 group-hover:-translate-y-4">
                        <h3 className="text-2xl font-black text-white md:text-[28px]">
                          {item.name}
                        </h3>

                        <p className="mt-2 flex items-center gap-1.5 text-xs font-semibold text-white/85">
                          <MapPin className="h-3.5 w-3.5" />
                          {item.location}
                        </p>

                        <div className="mt-4 h-1 w-10 rounded-full bg-orange transition-all duration-500 group-hover:w-20" />

                        <div className="mt-5 flex items-end justify-between gap-4">
                          <div>
                            <p className="text-xs font-semibold text-white/75">
                              From{" "}
                              <span className="text-lg font-black text-orange">
                                {item.price}
                              </span>{" "}
                              / night
                            </p>

                            <p className="mt-2 inline-flex items-center gap-1 rounded-full bg-black/30 px-3 py-1 text-[11px] font-bold text-white backdrop-blur-md">
                              <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                              {item.rating}
                            </p>
                          </div>

                          <button
                            type="button"
                            className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-yellow-400 text-navy-deep shadow-lg transition duration-300 group-hover:rotate-[-12deg] group-hover:scale-110 hover:bg-orange hover:text-white"
                          >
                            <ArrowRight className="h-5 w-5" />
                          </button>
                        </div>

                
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex justify-center gap-3">
            {destinations.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrent(index)}
                className={`h-3 rounded-full transition-all ${
                  index === current ? "w-9 bg-orange" : "w-3 bg-slate-300"
                }`}
              />
            ))}
          </div>

          <div className="mt-6 flex justify-center gap-4 lg:hidden">
            <button
              type="button"
              onClick={prevSlide}
              className="grid h-12 w-12 place-items-center rounded-full bg-white text-navy-deep shadow-lg"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>

            <button
              type="button"
              onClick={nextSlide}
              className="grid h-12 w-12 place-items-center rounded-full bg-white text-navy-deep shadow-lg"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="mx-auto mt-10 grid max-w-7xl gap-4 rounded-[2rem] border border-orange/10 bg-white/90 p-5 shadow-[0_22px_70px_-45px_rgba(15,23,42,0.55)] backdrop-blur-xl md:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="flex items-center gap-4 rounded-2xl px-4 py-3 transition hover:bg-orange/5"
            >
              <span className="grid h-13 w-13 shrink-0 place-items-center rounded-full bg-orange/10 text-orange">
                <Icon className="h-6 w-6" />
              </span>

              <div>
                <h4 className="text-sm font-black text-navy-deep md:text-base">
                  {title}
                </h4>
                <p className="text-xs font-medium text-slate-500 md:text-sm">
                  {text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}