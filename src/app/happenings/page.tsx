import type { Metadata } from "next";
import FadeIn from "@/app/components/FadeIn";

export const metadata: Metadata = {
    title: "Events & Specials at Kafenio Decatur",
    description: "Discover upcoming events, specials, and news from Kafenio Greek Diner in Decatur GA.",
    openGraph: {
        title: "Events & Specials at Kafenio Decatur",
        description: "Discover upcoming events, specials, and news from Kafenio Greek Diner in Decatur GA.",
        url: "https://www.kafeniogreekdiner.com/happenings",
    },
};

const WEEK_DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const specials = [
    {
        image: "/assets/happening-img1.webp",
        title: "BEER & WINE FIESTA",
        schedule: "Wed & Sun  |  All Day",
        description: <>$4 Beer and Wine Special</>,
        days: [0, 3],
    },
    {
        image: "/assets/happening-img2.webp",
        title: "LUNCH SPECIAL",
        schedule: "Mon – Fri  |  11:00 AM – 3:00 PM",
        description: <>Choice of Wrap, Side and Drink — <span className="font-bold">$13.50</span></>,
        days: [1, 2, 3, 4, 5],
    },
    {
        image: "/assets/happening-img3.webp",
        title: "BREAKFAST SPECIAL",
        schedule: "Mon – Fri  |  9:00 AM – 2:00 PM",
        description: <><span className="font-bold">Free Coffee, Iced Coffee or Tea</span><br />With any breakfast sandwich or breakfast main</>,
        days: [1, 2, 3, 4, 5],
        imagePosition: "object-bottom",
    },
];

export default function Happenings() {
    return (
        <main>
            {/* HERO */}
            <section className="relative w-full h-[400px] md:h-[45vh]">
                <img
                    src="/assets/hero_happenings.webp"
                    alt="Happenings hero"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0" />
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
                    <img
                        src="/assets/icono_happening1.svg"
                        alt="icono happenings"
                        className="w-[52px] md:w-[60px] lg:w-[68px] h-auto mb-2 hero-fadein"
                    />
                    <h1 className="text-[48px] md:text-[58px] lg:text-[72px] leading-tight font-epitaph text-white hero-fadein">
                        HAPPENINGS
                    </h1>
                    <p className="text-[26px] md:text-[32px] lg:text-[40px] font-kautiva font-bold text-[#dcdcdc] mt-2 hero-fadein-delay-1">
                        Kafenio
                    </p>
                </div>
            </section>

            {/* INTRO + SPECIALS */}
            <section
                className="w-full py-[50px] md:py-[80px] px-6 flex flex-col items-center text-center"
                style={{
                    backgroundImage: "url('/assets/fondo_happenings.webp')",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundAttachment: "fixed",
                }}
            >
                <FadeIn className="flex flex-col items-center text-center w-full">
                    <img
                        src="/assets/icono_happening2.svg"
                        alt="icon"
                        className="w-[52px] md:w-[60px] lg:w-[68px] h-auto mb-4"
                    />
                    <h2 className="text-[36px] md:text-[42px] lg:text-[48px] leading-tight font-epitaph text-[#04589C]">
                        WHAT'S HAPPENING AT KAFENIO
                    </h2>
                    <p className="text-[20px] md:text-[26px] lg:text-[32px] font-bold font-kautiva text-[#85431a] mt-2 leading-[1.2]">
                        Fresh Flavors, Fun Times, And Neighborhood Moments
                    </p>
                    <p className="text-[16px] leading-[24px] md:leading-[26px] text-[#525252] max-w-[720px] mt-4">
                        There's always something going on at Kafenio, from seasonal specials and local events to new dishes
                        and everyday favorites. Check out what's happening below and join us for good food, good company,
                        and that signature Greek diner energy.
                    </p>
                </FadeIn>

                <FadeIn className="flex flex-col items-center w-full" delay={0.1}>
                    <h3 className="text-[36px] md:text-[32px] lg:text-[36px] font-epitaph text-[#05589c] mt-[40px] md:mt-[60px] mb-[30px] md:mb-[40px]">
                        OUR SPECIALS
                    </h3>
                    <div className="flex flex-col gap-6 max-w-[1100px] w-full">
                        {specials.map(({ image, title, schedule, description, days, imagePosition }) => (
                            <div
                                key={title}
                                className="group relative flex flex-col md:flex-row items-stretch"
                            >
                                <div className="absolute inset-0 bg-white shadow-md" />

                                {/* Image */}
                                <div className="relative z-10 flex-shrink-0 overflow-hidden w-full md:w-[47%] h-[220px] md:h-[280px]">
                                    <img
                                        src={image}
                                        alt={title}
                                        className={`w-full h-full object-cover scale-110 transition-transform duration-500 group-hover:scale-120 ${imagePosition ?? "object-center"}`}
                                    />
                                </div>

                                {/* Content */}
                                <div className="relative z-0 flex flex-col items-center justify-center text-center px-6 md:px-10 py-5 flex-1 gap-3">

                                    {/* Schedule label */}
                                    <div className="bg-[#04589C] text-white px-5 py-[10px] text-[16px] md:text-[18px] font-semibold tracking-wide">
                                        {schedule}
                                    </div>

                                    {/* Title */}
                                    <h4 className="text-[26px] md:text-[28px] lg:text-[32px] font-epitaph text-black leading-tight">
                                        {title}
                                    </h4>

                                    {/* Decorative */}
                                    <img src="/assets/icono_happening3.svg" alt="" aria-hidden="true" className="w-[36px] md:w-[40px]" />

                                    {/* Description / Notes */}
                                    <p className="text-[14px] md:text-[15px] leading-[22px] md:leading-[24px] text-[#525252]">
                                        {description}
                                    </p>


                                    {/* Day selectors */}
                                    <div className="flex gap-1.5">
                                        {WEEK_DAYS.map((day, idx) => (
                                            <div
                                                key={day}
                                                className={`w-[38px] h-[38px] flex items-center justify-center text-[11px] font-semibold border ${
                                                    days.includes(idx)
                                                        ? "bg-[#04589C] text-white border-[#04589C]"
                                                        : "bg-white text-[#b0b0b0] border-[#d0d0d0]"
                                                }`}
                                            >
                                                {day}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </FadeIn>
            </section>
        </main>
    );
}
