import { Roboto } from "next/font/google";

const roboto = Roboto({
    subsets: ["latin"],
    weight: ["600"],
});

export default function GiftCard() {
    return (
        <main>
            <section className="relative w-full h-[45vh]">
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
                        className="w-[68px] h-auto mb-2 hero-fadein"
                    />
                    <h1 className="text-[72px] leading-tight font-epitaph text-white hero-fadein">
                        GIFT CARD
                    </h1>
                    <p className="text-[40px] font-kautiva font-bold text-white mt-2 hero-fadein-delay-1">
                        Kafenio
                    </p>
                </div>
            </section>

            {/* SHARE THE FLAVOR */}
            <section
                className="w-full py-[80px] px-6 flex flex-col items-center text-center"
                style={{
                    backgroundImage: "url('/assets/fondo_giftcard_section.webp')",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                {/* Icono decorativo */}
                <img
                    src="/assets/icono_giftcard2.svg"
                    alt="icon"
                    className="w-[100px] h-auto mb-4"
                />

                {/* Título */}
                <h2 className="text-[48px] leading-tight font-epitaph text-[#04589C]">
                    SHARE THE FLAVOR
                </h2>

                {/* Subtítulo */}
                <p className="text-[32px] font-bold font-kautiva text-[#85431a] mt-2">
                    Give The Gift Of Good Food And Good Moments.
                </p>

                {/* Descripción */}
                <p className="text-[16px] leading-[26px] text-[#525252] max-w-[720px] mt-4">
                    Whether it's a birthday, a thank-you, or just because, a Kafenio Gift Card is the perfect way to share a
                    little taste of Greece. Treat someone special to their favorite meal, a morning coffee, or a relaxing
                    lunch at our diner. Easy to buy, simple to send, and always a good idea.
                </p>

                {/* Botón */}
                <a
                    href="https://order.toasttab.com/egiftcards/kafenio-avondale-2700-e-college-ave"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${roboto.className} bg-[#04589C] text-white px-[20px] py-[10px] h-[42px] rounded-lg font-semibold text-[16px] leading-[20px] flex items-center gap-2 w-fit hover:opacity-90 transition mt-8`}
                >
                    Buy A Gift Card
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M15.3025 11.0285L2 11.0285L2 8.97146L15.3025 8.97146L11.1214 4.45436L12.4872 3L19 10L12.4872 17L11.1214 15.5456L15.3025 11.0285Z" fill="white" />
                    </svg>
                </a>

                {/* Gift Card visual */}
                <div className="relative mt-12 w-[584px] h-auto ">
                    {/* Vasija decorativa arriba izquierda */}
                    <img
                        src="/assets/giftcard_final.webp"
                        alt=""
                        className="w-[584px] h-auto"
                    />


                </div>
            </section>
        </main>
    );
}
