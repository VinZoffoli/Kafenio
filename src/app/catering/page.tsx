import { Roboto } from "next/font/google";

const roboto = Roboto({
    subsets: ["latin"],
    weight: ["600"],
});

const menuData = {
    boxLunch: [
        {
            title: "WRAP MEAL",
            price: "$12.50",
            description: "(Choice Of Gyro, Chicken Or Falafel)\nPita, Tzatziki, Feta Spread, Lettuce, Tomato, Onion And Choice Of A Side.\n\nSides: Rice Pilaf, Greek Potatoes Or Side Greek Salad\n\n**Sub Tahini | Sub Gluten Free Pita",
        },
        {
            title: "DINNER SALAD",
            price: "$14.50",
            description: "Large Greek Salad With Choice Of Protein: Romaine, Feta, Red Onion, Tomato Wedges, Cucumber, Kalamata Olives, Pepperoncini, Tzatziki Or Tahini And Choice Of Dressing.\n\nProteins: Gyro, Chicken, Falafel Or Hummus With Pita Wedges.\n\nDressings: Vinaigrette, Greek Lemon, Caesar, Tahini Dressing.",
        },
        {
            title: "SHAREABLE SALADS",
            price: null,
            description: "1/2 Catering Tray (Serves 9) $32\n\nFull Catering Tray (Serves 20) $72\n\nGreek Salad – Romaine, Feta, Red Onion, Cucumber, Tomato Wedges, Kalamata Olives, Pepperoncini And Choice Of Dressing.\n\nDressings: Vinaigrette, Greek Lemon Or Caesar Dressing.",
        },
    ],
    alaCarte: [
        { title: "BYO WRAP", price: "$10.00", description: "(Choice Of Gyro, Chicken Or Falafel)\nPita, Tzatziki Or Tahini, Lettuce, Tomato And Onion." },
        { title: "SPANAKOPITA", price: "$3.50", description: null },
        { title: "PILAF", price: "$4.00", description: null },
        { title: "ROASTED VEGETABLES", price: "$5.00", description: null },
        { title: "GREEK POTATOES", price: "$4.50", description: null },
        { title: "DIP, PITA AND CRUDITÉ", price: "$4.50", description: null },
        { title: "XTRA PITA", price: "$1.25", description: null },
    ],
    proteins: [
        {
            title: "FULL PORTION OF PROTEIN SERVED WITH PITA",
            price: "$8.00",
            description: "(Choice Of Gyro, Chicken Or Falafel)",
        },
    ],
    dips: [
        {
            title: "TZATZIKI, FETA SPREAD, HUMMUS OR TAHINI",
            price: null,
            description: "Pint $8.00 | Quart $16.00",
        },
    ],
    desserts: [
        { title: "BAKLAVA", price: "$3.25", description: null },
        { title: "CHOCOLATE CHIP COOKIE", price: "$3.00", description: null },
    ],
    drinks: [
        {
            title: "CANNED SODAS",
            price: "$2.50",
            description: "Choice Of Coke, Diet Coke, Sprite Or Montana Sparkling Water",
        },
        { title: "BOTTLED WATER", price: "$2.00", description: null },
    ],
};

interface SectionTitleProps {
    title: string;
    subtitle?: string;
}

function SectionTitle({ title, subtitle }: SectionTitleProps) {
    return (
        <div className="flex flex-col items-center text-center mb-[30px] md:mb-[40px]">
            <h2 className="text-[38px] lg:text-[38px] font-bold leading-tight font-epitaph text-[#043e6f]">{title}</h2>
            {subtitle && (
                <p className="text-[18px] md:text-[20px] lg:text-[24px] font-kautiva font-bold text-[#3d3d3d] mt-1 uppercase tracking-wide">
                    {subtitle}
                </p>
            )}
        </div>
    );
}

interface MenuCardProps {
    title: string;
    price: string | null;
    description: string | null;
    wide?: boolean;
}

function MenuCard({ title, price, description }: MenuCardProps) {
    return (
        <div className="bg-white rounded-2xl shadow-md p-6 md:p-8 flex flex-col items-center text-center gap-3">
            <h3 className="text-[28px] lg:text-[28px] font-epitaph text-[#022542] leading-[1.1]">{title}</h3>
            {price && (
                <p className="text-[16px] md:text-[16px] font-semibold text-[#525252]">{price}</p>
            )}
            {description && (
                <p className="text-[14px] md:text-[15px] lg:text-[16px] leading-[20px] md:leading-[21px] text-[#525252] whitespace-pre-line">{description}</p>
            )}
        </div>
    );
}

export default function Catering() {
    return (
        <main>
            {/* HERO */}
            <section className="relative w-full h-[400px] md:h-[45vh]">
                <img
                    src="/assets/hero_catering.webp"
                    alt="Catering hero"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0" />
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
                    <img
                        src="/assets/icono_catering2.svg"
                        alt="icono catering"
                        className="w-[140px] md:w-[180px] lg:w-[232px] h-auto mb-2 hero-fadein"
                    />
                    <h1 className="text-[40px] md:text-[52px] lg:text-[64px] leading-tight font-epitaph text-white hero-fadein">
                        CATERING
                    </h1>
                    <p className="text-[26px] md:text-[32px] lg:text-[40px] font-kautiva font-bold text-white mt-2 hero-fadein-delay-1">
                        Kafenio
                    </p>
                </div>
            </section>

            {/* INTRO SECTION */}
            <section className="w-full py-[50px] md:py-[80px] bg-[url('/assets/PreMenu.webp')] bg-cover bg-center px-6 flex flex-col items-center text-center">
                <img src="/assets/icono_catering.svg" alt="icon" className="w-[52px] md:w-[60px] lg:w-[68px] h-auto mb-4" />

                <h2 className="text-[28px] md:text-[36px] lg:text-[48px] leading-tight font-epitaph text-[#04589C]">
                    BRING KAFENIO TO YOUR TABLE
                </h2>

                <p className="text-[20px] md:text-[20px] lg:text-[24px] font-bold font-kautiva text-[#85431a] mt-2 capitalize">
                    Stay Connected And Enjoy A Little Extra Every Time You Visit
                </p>

                <p className="text-[15px] md:text-[16px] leading-[24px] md:leading-[26px] text-[#525252] max-w-[620px] mt-4">
                    Hosting a meeting, family gathering, or weekend brunch?<br className="hidden md:block" />
                    Let Kafenio handle the food so you can focus on the moment. From fresh salads and wraps to our signature Greek favorites, we'll craft a spread everyone will love, simple to prep, easy to enjoy, and full of flavor.
                </p>
                <a

                    href="mailto:catering@kafeniogreekdiner.com"
                    className={`${roboto.className} bg-[#04589C] text-white px-[20px] py-[10px] h-[42px] rounded-lg font-semibold text-[14px] md:text-[16px] leading-[20px] flex items-center gap-2 w-fit hover:opacity-90 transition mt-6 md:mt-8`}
                >
                    Request Catering
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M15.3025 11.0285L2 11.0285L2 8.97146L15.3025 8.97146L11.1214 4.45436L12.4872 3L19 10L12.4872 17L11.1214 15.5456L15.3025 11.0285Z" fill="white" />
                    </svg>
                </a>
            </section>

            {/* BOX LUNCH / DINNER */}
            <section className="w-full py-[50px] md:py-[80px] bg-white px-6 flex flex-col items-center">
                <SectionTitle title="BOX LUNCH / DINNER" subtitle="* Minimum Order 8 *" />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-[1100px] w-full">
                    {menuData.boxLunch.map((item) => (
                        <MenuCard key={item.title} {...item} />
                    ))}
                </div>
            </section>

            {/* À LA CARTE */}
            <section className="w-full py-[50px] md:py-[80px] bg-white px-6 flex flex-col items-center">
                <SectionTitle title="À LA CARTE" subtitle="* Minimum Order 8 *" />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-[1100px] w-full">
                    {menuData.alaCarte.map((item) => (
                        <MenuCard key={item.title} {...item} />
                    ))}
                </div>
            </section>

            {/* PROTEINS */}
            <section className="w-full py-[50px] md:py-[80px] bg-white px-6 flex flex-col items-center">
                <SectionTitle title="PROTEINS" subtitle="* Minimum Order 8 *" />
                <div className="max-w-[1100px] w-full">
                    {menuData.proteins.map((item) => (
                        <MenuCard key={item.title} {...item} />
                    ))}
                </div>
            </section>

            {/* DIPS AND DRESSINGS */}
            <section className="w-full py-[50px] md:py-[80px] bg-white px-6 flex flex-col items-center">
                <SectionTitle title="DIPS AND DRESSINGS" subtitle="By The Pint and Quart" />
                <div className="max-w-[1100px] w-full">
                    {menuData.dips.map((item) => (
                        <MenuCard key={item.title} {...item} />
                    ))}
                </div>
            </section>

            {/* DESSERTS */}
            <section className="w-full py-[50px] md:py-[80px] bg-white px-6 flex flex-col items-center">
                <SectionTitle title="DESSERTS" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-[700px] w-full">
                    {menuData.desserts.map((item) => (
                        <MenuCard key={item.title} {...item} />
                    ))}
                </div>
            </section>

            {/* DRINKS */}
            <section className="w-full py-[50px] md:py-[80px] bg-white px-6 flex flex-col items-center">
                <SectionTitle title="DRINKS" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-[700px] w-full">
                    {menuData.drinks.map((item) => (
                        <MenuCard key={item.title} {...item} />
                    ))}
                </div>
            </section>

            {/* FOOTER NOTE */}
            <section className="w-full py-6 bg-white px-6 flex flex-col items-center text-center border-t border-[#ddd]">
                <p className="font-kautiva text-[16px] md:text-[20px] lg:text-[24px] text-[#3d3d3d]">Catering Pizzas Available through the Greek Menu</p>
                <p className="font-kautiva text-[16px] md:text-[20px] lg:text-[24px] text-[#3d3d3d]">Contact Us Via Email for All Catering Inquiries!</p>
                <p className="font-kautiva text-[16px] md:text-[20px] lg:text-[24px] text-[#3d3d3d]">Service Charge 10% | Service and Delivery 20% (Limited Delivery Range) | Utensils and Plates $1 Per Set.</p>
            </section>
        </main>
    );
}