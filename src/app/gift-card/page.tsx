import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import FadeIn from "@/app/components/FadeIn";

export const metadata: Metadata = {
    title: "Greek Restaurant Gift Cards in Decatur",
    description: "Give the gift of great food with Kafenio gift cards. Perfect for holidays, birthdays, and Greek food lovers in Decatur GA.",
    openGraph: {
        title: "Greek Restaurant Gift Cards in Decatur",
        description: "Give the gift of great food with Kafenio gift cards. Perfect for holidays, birthdays, and Greek food lovers in Decatur GA.",
        url: "https://www.kafeniogreekdiner.com/gift-card",
    },
};

const roboto = Roboto({
    subsets: ["latin"],
    weight: ["600"],
});

export default function GiftCard() {
    return (
        <main>
            {/* HERO */}
            <section className="relative w-full h-[400px] md:h-[45vh]">
                <img
                    src="/assets/hero_giftcard.webp"
                    alt="Order Online hero"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0" />
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
                    <img
                        src="/assets/icono_giftcard.svg"
                        alt="icono order"
                        className="w-[52px] md:w-[60px] lg:w-[68px] h-auto mb-2 hero-fadein"
                    />
                    <h1 className="text-[48px] md:text-[58px] lg:text-[72px] leading-tight font-epitaph text-white hero-fadein">
                        GIFT CARD
                    </h1>
                    <p className="text-[32px] md:text-[32px] lg:text-[40px] font-kautiva font-bold text-white mt-2 hero-fadein-delay-1">
                        Kafenio
                    </p>
                </div>
            </section>

            {/* SHARE THE FLAVOR */}
            <section
                className="w-full py-[50px] md:py-[80px] px-6 flex flex-col items-center text-center"
                style={{
                    backgroundImage: "url('/assets/fondo_giftcard_section.webp')",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundAttachment: 'fixed',
                }}
            >
                <FadeIn className="flex flex-col items-center text-center w-full">
                    <img
                        src="/assets/icono_giftcard2.svg"
                        alt="icon"
                        className="w-[70px] md:w-[85px] lg:w-[100px] h-auto mb-4"
                    />
                    <h2 className="text-[36px] md:text-[42px] lg:text-[48px] leading-tight font-epitaph text-[#04589C]">
                        SHARE THE FLAVOR
                    </h2>
                    <p className="text-[20px] md:text-[26px] lg:text-[32px] font-bold font-kautiva text-[#85431a] mt-2 leading-[1.2]">
                        Give The Gift Of Good Food And Good Moments.
                    </p>
                    <p className="text-[15px] md:text-[16px] leading-[24px] md:leading-[26px] text-[#525252] max-w-[720px] mt-4">
                        Whether it's a birthday, a thank-you, or just because, a Kafenio Gift Card is the perfect way to share a
                        little taste of Greece. Treat someone special to their favorite meal, a morning coffee, or a relaxing
                        lunch at our diner. Easy to buy, simple to send, and always a good idea.
                    </p>
                    <a
                        href="https://order.toasttab.com/egiftcards/kafenio-avondale-2700-e-college-ave"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${roboto.className} bg-[#04589C] text-white px-[20px] py-[10px] h-[42px] rounded-none font-semibold text-[14px] md:text-[16px] leading-[20px] flex items-center gap-2 w-fit hover:opacity-90 transition mt-6 md:mt-8`}
                    >
                        Buy A Gift Card
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M15.3025 11.0285L2 11.0285L2 8.97146L15.3025 8.97146L11.1214 4.45436L12.4872 3L19 10L12.4872 17L11.1214 15.5456L15.3025 11.0285Z" fill="white" />
                        </svg>
                    </a>
                    <div className="relative mt-8 md:mt-12 w-full max-w-[584px]">
                        <img
                            src="/assets/giftcard_final.webp"
                            alt=""
                            className="w-full h-auto"
                        />
                    </div>
                </FadeIn>
            </section>
        </main>
    );
}
