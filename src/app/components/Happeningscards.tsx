"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";

const cards = [
    {
        image: "/assets/happening1.webp",
        title: "Beer & Wine Fiesta",
        schedule: <>Wednesday &amp; Sunday | All day</>,
        content: <>$4 beer and wine special</>,
    },
    {
        image: "/assets/happening2.webp",
        title: "Lunch Special",
        schedule: <>Monday to Friday<br />11:00 AM – 3:00 PM</>,
        content: <>Includes: Choice of Wrap, Side and Drink<br /><span className="font-bold">$13.50</span></>,
    },
    {
        image: "/assets/happening3.webp",
        title: "Breakfast Special",
        schedule: <>Monday to Friday<br />9:00 AM – 2:00 PM</>,
        content: <><span className="font-bold">Free Coffee, Iced Coffee or Tea</span><br />With the purchase of any breakfast sandwich or breakfast main.</>,
    },
];

function Card({ image, title, schedule, content }: {
    image: string;
    title: string;
    schedule: React.ReactNode;
    content: React.ReactNode;
}) {
    return (
        <div className="bg-white overflow-hidden flex flex-col h-full">
            <div className="h-[220px] md:h-[240px] lg:h-[270px] overflow-hidden group">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
            </div>
            <div className="p-5 lg:p-6 flex flex-col items-center text-center gap-2 flex-1">
                <h3 className="text-[24px] md:text-[28px] lg:text-[32px] font-bold font-kautiva text-[#061F35]">
                    {title}
                </h3>
                {/* Bloque de días/horario — altura fija equivalente a 2 líneas para que todas las cards alineen */}
                <div className="min-h-[2.8em] flex items-center justify-center text-[14px] lg:text-[16px] leading-[140%] text-[#04589C] font-semibold">
                    <p>{schedule}</p>
                </div>
                <img src="/assets/divisor.svg" alt="" className="w-[40px]" />
                <p className="text-[14px] lg:text-[16px] leading-[140%] text-black">
                    {content}
                </p>
            </div>
        </div>
    );
}

export default function HappeningsCards() {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        align: "start",
        containScroll: "trimSnaps",
    });
    const [selectedIndex, setSelectedIndex] = useState(0);

    const scrollTo = useCallback(
        (index: number) => emblaApi && emblaApi.scrollTo(index),
        [emblaApi]
    );

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        emblaApi.on("select", onSelect);
        emblaApi.on("reInit", onSelect);
    }, [emblaApi, onSelect]);

    return (
        <>
            {/* ====== MOBILE: Slider con Embla (visible solo < sm) ====== */}
            <div className="sm:hidden w-full mt-[36px]">
                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex">
                        {cards.map((card, idx) => (
                            <div
                                key={idx}
                                className="flex-[0_0_100%] min-w-0 px-1"
                            >
                                <Card {...card} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Dots / Indicadores */}
                <div className="flex justify-center gap-2 mt-5">
                    {cards.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => scrollTo(idx)}
                            aria-label={`Go to slide ${idx + 1}`}
                            className={`rounded-full transition-all duration-300 w-3 h-3 ${selectedIndex === idx
                                ? "bg-white"
                                : "bg-white/40"
                                }`}
                        />
                    ))}
                </div>
            </div>

            {/* ====== TABLET / DESKTOP: Grid clásico (visible desde sm) ====== */}
            <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-2 mt-[36px] lg:mt-[48px] max-w-[1100px] w-full">
                {cards.map((card, idx) => (
                    <div
                        key={idx}
                        className={
                            idx === 2 ? "sm:col-span-2 lg:col-span-1" : ""
                        }
                    >
                        <Card {...card} />
                    </div>
                ))}
            </div>
        </>
    );
}
