import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  CalendarDays,
  Heart,
  Headphones,
  Plane,
  ShieldCheck,
  Sparkles,
  TicketPercent,
  WalletCards,
  Globe2,
  Play,
} from "lucide-react";

import travelBg from "@/assets/backgroundImage.png";

const charDhamImg =
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80";

const topPickSlides = [
  {
    title: "Char Dham by Helicopter",
    subtitle: "Premium spiritual journey with complete comfort",
    price: "₹ 2,32,500",
    image: charDhamImg,
    detail:
      "VIP darshan assistance, luxury helicopter transfers, handpicked stays, meals, ground support and smooth end-to-end journey planning.",
  },
  {
    title: "Kashmir Luxury Escape",
    subtitle: "Snow valleys, premium stays and private transfers",
    price: "₹ 48,999",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    detail:
      "Scenic stays, private sightseeing, curated local experiences, comfortable transfers and premium support throughout your trip.",
  },
  {
    title: "Dubai Premium Holiday",
    subtitle: "Desert safari, skyline views and luxury hotel experience",
    price: "₹ 74,999",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",
    detail:
      "Luxury hotel options, desert safari, city tour, airport transfers, shopping experiences and flexible itinerary planning.",
  },
];

const festiveSlides = [
  {
    title: "Diwali Special",
    subtitle: "Celebrate traditions with a premium festive holiday",
    price: "₹ 1,10,900",
    video:
      "https://videos.pexels.com/video-files/3209828/3209828-uhd_2560_1440_25fps.mp4",
    detail:
      "Experience festive culture, guided local tours, premium stays, family-friendly planning and smooth travel support.",
  },
  {
    title: "Diwali Family Vacation",
    subtitle: "Celebrate lights with luxury stays and curated experiences",
    price: "₹ 74,999",
    video:
      "https://videos.pexels.com/video-files/2169880/2169880-uhd_2560_1440_30fps.mp4",
    detail:
      "Festive stays, sightseeing, private transfers, dinner experiences and flexible customization for families.",
  },
  {
    title: "Christmas & New Year Escape",
    subtitle: "Celebrate the season with unforgettable travel memories",
    price: "₹ 89,999",
    video:
      "https://videos.pexels.com/video-files/3015510/3015510-uhd_2560_1440_24fps.mp4",
    detail:
      "Premium hotels, celebration nights, city tours, scenic experiences and dedicated travel assistance.",
  },
];

const bottomFeatures = [
  {
    icon: TicketPercent,
    title: "Exciting Offers",
    text: "Save more on selected trips",
  },
  {
    icon: WalletCards,
    title: "Flexible Payments",
    text: "Easy EMI options available",
  },
  {
    icon: CalendarDays,
    title: "Custom Itinerary",
    text: "Tailor-made holidays for you",
  },
  {
    icon: Globe2,
    title: "Global Choices",
    text: "Domestic & international trips",
  },
];

export function TravelSpecialsSection() {
  const [topIndex, setTopIndex] = useState(0);
  const [festiveIndex, setFestiveIndex] = useState(0);
  const [topPaused, setTopPaused] = useState(false);
  const [festivePaused, setFestivePaused] = useState(false);
  const festiveVideoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (topPaused) return;

    const timer = window.setInterval(() => {
      setTopIndex((prev) => (prev + 1) % topPickSlides.length);
    }, 3500);

    return () => window.clearInterval(timer);
  }, [topPaused]);

  useEffect(() => {
    if (festivePaused) return;

    const timer = window.setInterval(() => {
      setFestiveIndex((prev) => (prev + 1) % festiveSlides.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, [festivePaused]);

  useEffect(() => {
    const video = festiveVideoRef.current;
    if (!video) return;

    video.currentTime = 0;
    video.play().catch(() => {});
  }, [festiveIndex]);

  const activeTopPick = topPickSlides[topIndex];
  const activeFestive = festiveSlides[festiveIndex];

  const handleFestiveVideoEnd = () => {
    if (festivePaused) {
      setFestiveIndex((prev) => (prev + 1) % festiveSlides.length);
    }
  };

  return (
    <section
      className="relative overflow-hidden bg-[#f4f8ff] py-20"
      style={{
        backgroundImage: `url(${travelBg})`,
        backgroundSize: "cover",
        backgroundPosition: "right",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-white/35" />

      <div className="container-page relative z-10">
        <div className="mb-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-extrabold text-blue-700">
              <Sparkles className="h-4 w-4" />
              TRIPPPER Specials
            </span>

            <h2 className="mt-5 max-w-2xl font-display text-4xl font-extrabold tracking-tight text-navy-deep md:text-6xl">
              Curated journeys for your next escape
            </h2>

            <p className="mt-4 max-w-xl text-base font-medium text-slate-600">
              Premium holiday deals, spiritual tours, festive packages and
              custom experiences made for modern travellers.
            </p>
          </div>

          <button className="group inline-flex w-fit items-center gap-2 rounded-full bg-orange px-6 py-3 text-sm font-extrabold text-white shadow-lg shadow-orange/25 transition hover:bg-orange-soft">
            Explore All Deals
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </button>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.32fr_0.68fr]">
          <article
            onMouseEnter={() => setTopPaused(true)}
            onMouseLeave={() => setTopPaused(false)}
            className="group relative min-h-[420px] overflow-hidden rounded-[34px] bg-[#071b3d] shadow-[0_30px_80px_-35px_rgba(15,23,42,0.65)]"
          >
            {topPickSlides.map((slide, index) => (
              <div
                key={slide.title}
                className={`absolute inset-0 transition-all duration-700 ${
                  index === topIndex
                    ? "scale-100 opacity-100"
                    : "pointer-events-none scale-105 opacity-0"
                }`}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
            ))}

            <div className="absolute inset-0 bg-gradient-to-t from-[#06183a] via-[#06183a]/60 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#06183a]/85 via-[#06183a]/45 to-transparent" />

            <div className="relative flex h-full min-h-[420px] flex-col justify-between p-6 md:p-7">
              <div>
                <span className="inline-flex rounded-full bg-yellow-400 px-4 py-2 text-xs font-black uppercase text-navy-deep shadow-lg shadow-yellow-500/20">
                  Top Pick
                </span>

                <h3 className="mt-7 max-w-sm font-display text-3xl font-black leading-tight text-white">
                  {activeTopPick.title}
                </h3>

                <p className="mt-4 max-w-xs text-sm font-semibold leading-relaxed text-white/85">
                  {activeTopPick.subtitle}
                </p>

                <div className="mt-5 inline-flex rounded-2xl bg-white/12 px-4 py-3 text-sm font-extrabold text-white backdrop-blur-md ring-1 ring-white/15">
                  Starting at {activeTopPick.price}
                </div>
              </div>

      

              <div className="absolute bottom-6 right-6 flex gap-2">
                {topPickSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setTopIndex(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === topIndex ? "w-8 bg-white" : "w-2 bg-white/40"
                    }`}
                  />
                ))}
              </div>
            </div>
          </article>

          <article
            onMouseEnter={() => setFestivePaused(true)}
            onMouseLeave={() => setFestivePaused(false)}
            className="group relative min-h-[420px] overflow-hidden rounded-[34px] bg-[#cf4c13] shadow-[0_30px_80px_-35px_rgba(15,23,42,0.65)]"
          >
            {festiveSlides.map((slide, index) => (
              <div
                key={slide.title}
                className={`absolute inset-0 transition-all duration-700 ${
                  index === festiveIndex
                    ? "scale-100 opacity-100"
                    : "pointer-events-none scale-105 opacity-0"
                }`}
              >
                {index === festiveIndex && (
                  <video
                    ref={festiveVideoRef}
                    src={slide.video}
                    className="h-full w-full object-cover"
                    autoPlay
                    muted
                    playsInline
                    onEnded={handleFestiveVideoEnd}
                  />
                )}
              </div>
            ))}

            <div className="absolute inset-0 bg-gradient-to-r from-[#d94b12]/95 via-[#d94b12]/65 to-black/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/10" />

            <div className="relative flex h-full min-h-[420px] flex-col justify-between p-7 md:p-9">
              <div className="max-w-2xl">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex rounded-full bg-white px-4 py-2 text-xs font-black uppercase tracking-wide text-orange shadow-lg">
                    Festive
                  </span>

                  <span className="inline-flex items-center gap-2 rounded-full bg-black/30 px-4 py-2 text-xs font-bold text-white backdrop-blur-md ring-1 ring-white/15">
                    <Play className="h-3.5 w-3.5 fill-current" />
                    Video Experience
                  </span>
                </div>

                <h3 className="mt-7 max-w-2xl font-display text-4xl font-black leading-tight text-white md:text-6xl">
                  {activeFestive.title}
                </h3>

                <p className="mt-5 max-w-xl text-base font-semibold leading-relaxed text-white/90">
                  {activeFestive.subtitle}
                </p>

                <div className="mt-5 inline-flex rounded-2xl bg-white/15 px-4 py-3 text-sm font-extrabold text-white backdrop-blur-md ring-1 ring-white/15">
                  Starting at {activeFestive.price}
                </div>
              </div>

           

              <div className="absolute bottom-6 right-6 flex gap-2">
                {festiveSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setFestiveIndex(index)}
                    className={`h-2.5 rounded-full transition-all ${
                      index === festiveIndex
                        ? "w-9 bg-white"
                        : "w-2.5 bg-white/40"
                    }`}
                  />
                ))}
              </div>
            </div>
          </article>
        </div>

        <div className="mt-6 grid gap-4 rounded-[2rem] bg-white p-5 shadow-lg shadow-slate-900/5 md:grid-cols-2 lg:grid-cols-4">
          {bottomFeatures.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="flex items-center gap-4 rounded-3xl p-4 text-navy-deep transition hover:bg-blue-50"
            >
              <Icon className="h-8 w-8 text-orange" />
              <div>
                <h4 className="text-sm font-extrabold">{title}</h4>
                <p className="mt-1 text-xs font-medium text-slate-500">
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