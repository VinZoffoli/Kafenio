import { Roboto } from "next/font/google";

const roboto = Roboto({
    subsets: ["latin"],
    weight: ["600"],
});

const specials = [
    {
        image: "/assets/happening-img1.webp",
        title: "BEER & WINE FIESTA",
        description: (
            <>
                $4 Beer and Wine Special<br />
                Wednesday & Sunday | All day
            </>
        ),
    },
    {
        image: "/assets/happening-img2.webp",
        title: "LUNCH SPECIAL",
        description: (
            <>
                Monday to Friday<br />
                11:00 AM – 3:00 PM<br />
                Includes:<br />
                Choice of Wrap<br />
                Side<br />
                Drink<br />
                <span className="font-bold">$13.50</span>
            </>
        ),
    },
    {
        image: "/assets/happening-img3.webp",
        title: "BREAKFAST SPECIAL",
        description: (
            <>
                Monday to Friday<br />
                9:00 AM – 2:00 PM<br />
                <span className="font-bold">Free Coffee, Iced Coffee or Tea</span><br />
                With the purchase of any breakfast sandwich or breakfast main
            </>
        ),
    },
];

export default function Happenings() {
    return (
        <main>
            {/* HERO */}
            <section className="relative w-full h-[45vh]">
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
                        className="w-[68px] h-auto mb-2 hero-fadein"
                    />
                    <h1 className="text-[72px] leading-tight font-epitaph text-white hero-fadein">
                        HAPPENINGS
                    </h1>
                    <p className="text-[40px] font-kautiva font-bold text-[#dcdcdc] mt-2 hero-fadein-delay-1">
                        Kafenio
                    </p>
                </div>
            </section>

            {/* INTRO */}
            <section
                className="w-full py-[80px] px-6 flex flex-col items-center text-center"
                style={{
                    backgroundImage: "url('/assets/fondo_happenings.webp')",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <img
                    src="/assets/icono_happening2.svg"
                    alt="icon"
                    className="w-[68px] h-auto mb-4"
                />

                <h2 className="text-[48px] leading-tight font-epitaph text-[#04589C]">
                    WHAT'S HAPPENING AT KAFENIO
                </h2>

                <p className="text-[32px] font-bold font-kautiva text-[#85431a] mt-2">
                    Fresh Flavors, Fun Times, And Neighborhood Moments
                </p>

                <p className="text-[16px] leading-[26px] text-[#525252] max-w-[720px] mt-4">
                    There's always something going on at Kafenio, from seasonal specials and local events to new dishes
                    and everyday favorites. Check out what's happening below and join us for good food, good company,
                    and that signature Greek diner energy.
                </p>

                {/* OUR SPECIALS */}
                <h3 className="text-[36px] font-epitaph text-[#05589c] mt-[60px] mb-[40px]">
                    OUR SPECIALS
                </h3>

                <div className="flex flex-col gap-6 max-w-[1100px] w-full">
                    {specials.map(({ image, title, description }) => (
                        <div
                            key={title}
                            className="group relative flex items-stretch"
                            style={{ minHeight: "300px" }}
                        >
                            <div className="absolute inset-0 bg-white rounded-2xl shadow-md" />

                            <div
                                className="relative z-10 flex-shrink-0 overflow-hidden"
                                style={{
                                    width: "47%",
                                    borderRadius: "16px",
                                    minHeight: "300px",
                                }}
                            >
                                <img
                                    src={image}
                                    alt={title}
                                    className="w-full h-full scale-110 transition-transform duration-500 group-hover:scale-120"
                                />
                            </div>

                            <div className="relative z-0 flex flex-col items-center justify-center text-center px-8 py-8 flex-1 gap-3">
                                <h4 className="text-[28px] font-kautiva font-bold text-black leading-tight">
                                    {title}
                                </h4>
                                <img src="/assets/icono_happening3.svg" alt="" className="w-[40px]" />
                                <p className="text-[15px] leading-[24px] text-[#525252]">
                                    {description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
