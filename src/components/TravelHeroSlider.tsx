import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
    ArrowRight,
    Bookmark,
    ChevronLeft,
    ChevronRight,
    Heart,
    MapPin,
    Star,
    UserRound,
} from "lucide-react";

// images
import dubaiImg from "@/assets/dubai.png";
import cambodiaImg from "@/assets/cambodiya.png";
import baliImg from "@/assets/bali.png";
import shrilankaImg from "@/assets/shrilanka.png";
import indonesiaImg from "@/assets/indonesia.png";
import thailandImg from "@/assets/thailand.png";
import maldivesImg from "@/assets/maldives.png";
import vietnamImg from "@/assets/vietnam.png";


import bali from "@/assets/videos/bali.mp4";
import cambodia from "@/assets/videos/kambodiya.mp4";
import dubai from "@/assets/videos/dubai.mp4";
import shrilanka from "@/assets/videos/shrilanka.mp4";
import maldives from "@/assets/videos/maldives.mp4";
import vietnam from "@/assets/videos/vietnam.mp4";
import thailand from "@/assets/videos/thailand.mp4";
import indonesia from "@/assets/videos/indonesia.mp4";

const SLIDE_TIME = 5200;

const slides = [
    {
        title: "INDONESIA",
        place: "Mount Bromo, Indonesia",
        desc: "Explore tropical islands, ancient temples, turquoise beaches, and unforgettable adventures.",
        video:indonesia,
        card:indonesiaImg,
    },
    {
        title: "BALI",
        place: "Broken Beach, Bali",
        desc: "Feel the ocean breeze, cliffside views, luxury stays, and island life at its finest.",
        video:bali,
        card:baliImg,
    },
    {
        title: "THAILAND",
        place: "Buddha Temple, Thailand",
        desc: "A peaceful journey through golden temples, floating markets, beaches, and culture.",
        video:thailand,
        card:thailandImg,
    },
   {
    title: "MALDIVES",
    place: "North Male Atoll, Maldives",
    desc: "Discover turquoise waters, private island resorts, vibrant coral reefs, and breathtaking sunsets.",
    video:maldives,
    card:maldivesImg,
  },

  {
    title: "VIETNAM",
    place: "Ha Long Bay, Vietnam",
    desc: "Cruise through emerald waters, limestone islands, vibrant cities, and rich cultural heritage.",
    video:vietnam,
    card:vietnamImg,
  },

  {
    title: "DUBAI",
    place: "Downtown Dubai, UAE",
    desc: "Experience futuristic skylines, luxury shopping, desert adventures, and world-class attractions.",
    video:dubai,
  
    card:dubaiImg,
  },

  {
    title: "CAMBODIA",
    place: "Angkor Wat, Cambodia",
    desc: "Explore ancient temples, fascinating history, authentic culture, and breathtaking landscapes.",
    video:cambodia,
    card:cambodiaImg,
  },

  {
    title: "SRI LANKA",
    place: "Sigiriya, Sri Lanka",
    desc: "Discover lush tea plantations, golden beaches, wildlife safaris, and timeless island beauty.",
    video:shrilanka,    
  
    card:shrilankaImg,
  },
];

export default function PremiumTravelHeroVideo() {
    const [active, setActive] = useState(0);
    const [paused, setPaused] = useState(false);

    const activeSlide = slides[active];

    const next = () => setActive((prev) => (prev + 1) % slides.length);
    const prev = () =>
        setActive((prev) => (prev - 1 + slides.length) % slides.length);

    useEffect(() => {
        if (paused) return;

        const interval = window.setInterval(() => {
            next();
        }, SLIDE_TIME);

        return () => window.clearInterval(interval);
    }, [paused]);

    const stackedCards = useMemo(() => {
        return [0, 1, 2].map((offset) => {
            const index = (active + offset) % slides.length;
            return {
                ...slides[index],
                realIndex: index,
                offset,
            };
        });
    }, [active]);

    return (
        <section className="relative min-h-screen overflow-hidden bg-[#04111f] text-white">
            {/* Video Background */}
            <div className="absolute inset-0 h-full w-full object-cover brightness-[1.25] contrast-110">
                <AnimatePresence mode="wait">
                    <motion.video
                        key={activeSlide.video}
                        src={activeSlide.video}
                        autoPlay
                        muted
                        loop
                        playsInline
                        initial={{ opacity: 0, scale: 1.08 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.03 }}
                        transition={{ duration: 1.1, ease: "easeOut" }}
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                </AnimatePresence>

                {/* <div className="absolute inset-0 bg-gradient-to-r from-[#03101d]/95 via-[#061827]/76 to-[#061827]/20" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#03101d] via-transparent to-black/25" /> */}

                <div className="absolute inset-0 bg-gradient-to-r from-[#03101d]/75 via-[#061827]/45 to-[#061827]/10" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#03101d]/60 via-transparent to-black/10" />
            </div>

            {/* Spacer for fixed SiteHeader (utility bar + nav) */}
            <div className="h-24 md:h-28" aria-hidden />


            {/* Main Content */}
            <div className="relative z-10 mx-auto flex min-h-[calc(100vh-96px)] max-w-[1600px] flex-col items-center justify-between gap-10 px-6 pb-20 lg:flex-row lg:px-16">
                {/* Left Content */}
                <div className="w-full max-w-[640px] shrink-0 lg:w-[610px]">

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeSlide.title}
                            initial={{ opacity: 0, y: 35, filter: "blur(10px)" }}
                            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            exit={{ opacity: 0, y: -25, filter: "blur(10px)" }}
                            transition={{ duration: 0.55, ease: "easeOut" }}
                        >
                            <div className="mb-5 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.28em] text-blue-200 sm:text-sm">
                                <MapPin size={16} />
                                {activeSlide.place}
                            </div>
                            {/* 
                            <h1 className="max-w-[760px] whitespace-nowrap text-[clamp(3.5rem,7vw,7.5rem)] font-black leading-[0.9] tracking-tight">
                                {activeSlide.title}
                            </h1> */}

                            <h1 className="max-w-[760px] whitespace-nowrap text-[clamp(3rem,6.5vw,7rem)] font-black leading-[0.9] tracking-[-0.06em]">
                                {activeSlide.title}
                            </h1>

                            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75">
                                {activeSlide.desc}
                            </p>

                            <button className="mt-9 flex items-center gap-7 rounded-2xl bg-blue-500 px-8 py-5 text-xl font-black shadow-[0_20px_60px_rgba(59,130,246,0.35)] transition hover:-translate-y-1 hover:bg-blue-400">
                                Explore
                                <ArrowRight size={30} />
                            </button>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Fixed Premium Card Stack */}
                <div
                    className="relative h-[520px] w-full max-w-[760px] shrink-0 overflow-hidden lg:ml-8 lg:w-[760px]"
                    onMouseEnter={() => setPaused(true)}
                    onMouseLeave={() => setPaused(false)}
                >
                    <AnimatePresence initial={false}>
                        {stackedCards.map((slide) => {
                            const isActive = slide.offset === 0;

                            const cardStyle =
                                slide.offset === 0
                                    ? {
                                        x: 0,
                                        scale: 1,
                                        opacity: 1,
                                        width: 350,
                                        height: 430,
                                        zIndex: 30,
                                    }
                                    : slide.offset === 1
                                        ? {
                                            x: 370,
                                            scale: 0.9,
                                            opacity: 0.9,
                                            width: 300,
                                            height: 400,
                                            zIndex: 20,
                                        }
                                        : {
                                            x: 660,
                                            scale: 0.9,
                                            opacity: 0.9,
                                            width: 300,
                                            height: 400,
                                            zIndex: 20,
                                        };

                            return (
                                <motion.button
                                    key={slide.realIndex}
                                    onClick={() => setActive(slide.realIndex)}
                                    initial={{
                                        x: 660,
                                        opacity: 0,
                                        scale: 0,
                                    }}
                                    animate={cardStyle}
                                    exit={{
                                        x: -160,
                                        opacity: 0,
                                        scale: 0.9,
                                        transition: { duration: 0.45, ease: "easeInOut" },
                                    }}
                                    transition={{
                                        duration: 0.85,
                                        ease: [0.22, 1, 0.36, 1],
                                    }}
                                    className="group absolute left-0 top-1/2 -translate-y-1/2 overflow-hidden rounded-[32px] text-left shadow-2xl ring-1 ring-white/15"
                                >
                                    <img
                                        src={slide.card}
                                        alt={slide.place}
                                        className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

                                    {/* <div className="absolute left-5 right-5 top-5">
                                        <h3 className="text-xl font-black">{slide.place}</h3>

                                        <div className="mt-3 flex gap-1">
                                            {Array.from({ length: 5 }).map((_, i) => (
                                                <Star
                                                    key={i}
                                                    size={15}
                                                    className="fill-yellow-400 transition group-hover:scale-110"
                                                />
                                            ))}
                                        </div>
                                    </div> */}

                                    {/* <div className="absolute right-5 top-16 grid h-14 w-14 place-items-center rounded-full bg-white text-slate-900 shadow-xl">
                                        <Heart className="fill-pink-500 text-pink-500" size={22} />
                                    </div> */}

                                    <motion.div
                                        animate={{
                                            opacity: isActive ? 1 : 0,
                                            y: isActive ? 0 : 12,
                                        }}
                                        transition={{
                                            duration: 0.45,
                                            ease: "easeOut",
                                        }}
                                        className="absolute bottom-7 left-5 right-5"
                                    >
                                          <h3 className="text-xl font-black">{slide.place}</h3>

                                        {/* <div className="mt-3 flex gap-1">
                                            {Array.from({ length: 5 }).map((_, i) => (
                                                <Star
                                                    key={i}
                                                    size={15}
                                                    className="fill-yellow-400 transition group-hover:scale-110"
                                                />
                                            ))}
                                        </div> */}

                                        <p className="line-clamp-4 text-sm leading-relaxed text-white/80">
                                            {slide.desc}
                                        </p>
                                    </motion.div>

                                    {isActive && (
                                        <div className="absolute bottom-0 left-0 h-0.5 w-full bg-white/20">
                                            <motion.div
                                                key={active}
                                                initial={{ width: "0%" }}
                                                animate={{ width: "100%" }}
                                                transition={{
                                                    duration: SLIDE_TIME / 1000,
                                                    ease: "linear",
                                                }}
                                                className="h-full bg-white"
                                            />
                                        </div>
                                    )}
                                </motion.button>
                            );
                        })}
                    </AnimatePresence>
                </div>
            </div>

            {/* Bottom Controls */}
            <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-4">
                <button
                    onClick={prev}
                    className="grid h-12 w-12 place-items-center rounded-full bg-white/20 backdrop-blur-md transition hover:bg-white/35"
                >
                    <ChevronLeft />
                </button>

                <button
                    onClick={next}
                    className="grid h-12 w-12 place-items-center rounded-full bg-white/20 backdrop-blur-md transition hover:bg-white/35"
                >
                    <ChevronRight />
                </button>
            </div>

            <div className="absolute bottom-8 right-10 z-20 hidden items-center gap-5 font-bold md:flex">
                <span>0{active + 1}</span>
                <div className="h-px w-20 bg-white/50" />
                <span>0{slides.length}</span>
            </div>
        </section >
    );
}