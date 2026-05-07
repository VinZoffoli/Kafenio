import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import FadeIn from "@/app/components/FadeIn";

export const metadata: Metadata = {
    title: "Join the Kafenio Club in Decatur GA",
    description: "Join the Kafenio Club to receive updates, special offers, and exclusive news from our Decatur Greek diner.",
    openGraph: {
        title: "Join the Kafenio Club in Decatur GA",
        description: "Join the Kafenio Club to receive updates, special offers, and exclusive news from our Decatur Greek diner.",
        url: "https://www.kafeniogreekdiner.com/join-the-club",
    },
};

const roboto = Roboto({
    subsets: ["latin"],
    weight: ["600"],
});

export default function JoinTheClub() {
    return (
        <main>
            {/* HERO */}
            <section className="relative w-full h-[400px] md:h-[45vh]">
                <img
                    src="/assets/hero_jointheclub.webp"
                    alt="Join the Club hero"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0" />
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
                    <img
                        src="/assets/icono_join1.svg"
                        alt="icono join the club"
                        className="w-[52px] md:w-[60px] lg:w-[68px] h-auto mb-2 hero-fadein"
                    />
                    <h1 className="text-[48px] md:text-[52px] lg:text-[64px] leading-tight font-epitaph text-white hero-fadein">
                        JOIN THE CLUB
                    </h1>
                    <p className="text-[32px] md:text-[32px] lg:text-[40px] font-kautiva font-bold text-white mt-2 hero-fadein-delay-1">
                        Kafenio
                    </p>
                </div>
            </section>

            {/* JOIN THE KAFENIO LOYALTY CLUB */}
            <section
                className="w-full py-[50px] md:py-[80px] px-6 flex flex-col items-center text-center"
                style={{
                    backgroundImage: "url('/assets/fondo_giftcard.webp')",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <FadeIn className="flex flex-col items-center text-center w-full">
                    <img
                        src="/assets/icono_join2.svg"
                        alt="icon"
                        className="w-[70px] md:w-[85px] lg:w-[100px] h-auto mb-4"
                    />
                    <h2 className="text-[36px] md:text-[40px] lg:text-[48px] leading-tight font-epitaph text-[#04589C]">
                        JOIN THE KAFENIO LOYALTY CLUB
                    </h2>
                    <p className="text-[20px] md:text-[26px] lg:text-[32px] font-bold font-kautiva text-[#85431a] mt-2 leading-[1.2]">
                        Stay Connected And Enjoy A Little Extra Every Time You Visit
                    </p>
                    <p className="text-[16px] md:text-[16px] leading-[24px] md:leading-[26px] text-[#525252] max-w-[720px] mt-4">
                        Kafenio's Loyalty Program is our simple way to say thank you. Sign up through Toast and be part of our
                        community, whether you dine in, grab coffee to go, or order online. It's quick to join, easy to use, and always
                        made for our guests.
                    </p>
                    <a
                        href="https://www.toasttab.com/kafenio-avondale-2700-e-college-ave/rewardsSignup"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${roboto.className} bg-[#04589C] text-white px-[20px] py-[10px] h-[42px] rounded-lg font-semibold text-[16px] md:text-[20px] leading-[20px] md:leading-[24px] flex items-center gap-2 w-fit hover:opacity-90 transition mt-6 md:mt-8`}
                    >
                        Join The Club
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M15.3025 11.0285L2 11.0285L2 8.97146L15.3025 8.97146L11.1214 4.45436L12.4872 3L19 10L12.4872 17L11.1214 15.5456L15.3025 11.0285Z" fill="white" />
                        </svg>
                    </a>
                    <div className="flex flex-col gap-4 max-w-[1100px] w-full mt-8 md:mt-12">
                        <div className="rounded-2xl overflow-hidden h-[200px] md:h-[320px] lg:h-[400px] group">
                            <img
                                src="/assets/jointheclub1.webp"
                                alt="Kafenio exterior"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>
                        <div className="flex flex-row gap-4">
                            <div className="rounded-2xl overflow-hidden h-[150px] md:h-[320px] lg:h-[400px] flex-1 group">
                                <img
                                    src="/assets/jointheclub2.webp"
                                    alt="Kafenio interior"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="rounded-2xl overflow-hidden h-[150px] md:h-[320px] lg:h-[400px] flex-1 group">
                                <img
                                    src="/assets/jointheclub3.webp"
                                    alt="Kafenio guests"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                        </div>
                    </div>
                </FadeIn>
            </section>
        </main>
    );
}
