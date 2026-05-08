import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import FadeIn from "@/app/components/FadeIn";

export const metadata: Metadata = {
    title: "About Kafenio Greek Diner in Decatur GA",
    description: "Learn about Kafenio's story, passion for Greek cuisine, and commitment to fresh food in Decatur, Georgia.",
    openGraph: {
        title: "About Kafenio Greek Diner in Decatur GA",
        description: "Learn about Kafenio's story, passion for Greek cuisine, and commitment to fresh food in Decatur, Georgia.",
        url: "https://www.kafeniogreekdiner.com/about",
    },
};

const roboto = Roboto({
    subsets: ["latin"],
    weight: ["600"],
});

export default function About() {
    return (
        <main>
            {/* HERO */}
            <section className="relative w-full h-[400px] md:h-[45vh]">
                <img
                    src="/assets/hero-about.webp"
                    alt="About Us hero"
                    className="absolute inset-0 w-full h-full object-cover bg-center"
                />
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
                    <img
                        src="/assets/icono-about.svg"
                        alt="iconoAbout"
                        className="w-[52px] md:w-[60px] lg:w-[68px] h-auto"
                    />
                    <h1 className="text-[48px] md:text-[52px] lg:text-[64px] leading-tight font-epitaph text-white hero-fadein">
                        ABOUT US
                    </h1>
                    <p className="text-[32px] md:text-[32px] lg:text-[40px] font-kautiva font-bold text-white mt-2 hero-fadein-delay-1">
                        Kafenio
                    </p>
                </div>
            </section>

            {/* ABOUT BRAND */}
            <section className="w-full py-[50px] md:py-[80px] bg-[url('/assets/about-fondo.webp')] bg-cover bg-center lg:bg-fixed px-6 lg:px-0">
                <FadeIn>
                    <div className="flex flex-col items-center mb-[30px] md:mb-[60px]">
                        <img src="/assets/icono-aboutbrand.svg" alt="icon" className="w-[26px] md:w-[31px] h-auto mt-2" />
                    </div>
                    <div className="max-w-[1040px] mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-[80px] lg:h-[512px]">
                        <div className="flex flex-col gap-4 md:gap-5 max-w-[500px] items-center lg:items-start text-center lg:text-left">
                            <h2 className="text-[36px] md:text-[42px] lg:text-[48px] leading-tight font-epitaph text-[#05589c]">
                                A MODERN SPIN ON A GREEK CLASSIC
                            </h2>
                            <p className="text-[20px] md:text-[26px] lg:text-[32px] font-bold leading-[1.2] lg:leading-[37px] font-kautiva text-[#85431a]">
                                Where Good Food, Good Coffee, And Good Company Come Together.
                            </p>
                            <p className="text-[16px] md:text-[16px] leading-[24px] md:leading-[26px] text-[#3d3d3d]">
                                Kafenio Greek Diner brings the heart of the Mediterranean to Avondale Estates, a bright, friendly spot where everyone feels welcome. Inspired by the traditional Greek kafenia — the cozy village cafés where people gathered to eat, talk, and unwind, Kafenio keeps that same spirit alive with a modern twist.
                            </p>
                            <p className="text-[16px] md:text-[16px] leading-[24px] md:leading-[26px] text-[#3d3d3d]">
                                Since opening in 2018, we've become a neighborhood favorite for our all-day breakfast, fresh salads, flavorful wraps, and a full coffee and espresso bar that keeps the energy flowing.<br />
                                Clean lines, rustic charm, and a staff that treats you like family, that's what Kafenio is all about.
                            </p>
                            <a
                                href="/visit"
                                className={`${roboto.className} bg-[#04589C] text-white px-[20px] py-[10px] h-[42px] rounded-none font-semibold text-[16px] md:text-[20px] leading-[20px] flex items-center gap-2 w-fit hover:opacity-90 transition`}
                            >
                                Visit Us Today
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M15.3025 11.0285L2 11.0285L2 8.97146L15.3025 8.97146L11.1214 4.45436L12.4872 3L19 10L12.4872 17L11.1214 15.5456L15.3025 11.0285Z" fill="white" />
                                </svg>
                            </a>
                        </div>
                        <div className="flex flex-col gap-4 w-full lg:flex-1 lg:h-[512px]">
                            <div className="overflow-hidden h-[200px] md:h-[280px] lg:h-full lg:w-[496px] group">
                                <img src="/assets/about1.webp" alt="" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            </div>
                            <div className="flex flex-row gap-4">
                                <div className="overflow-hidden h-[150px] md:h-[200px] lg:h-full flex-1 group">
                                    <img src="/assets/about2.webp" alt="" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                </div>
                                <div className="overflow-hidden h-[150px] md:h-[200px] lg:h-full flex-1 group">
                                    <img src="/assets/about3.webp" alt="" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                </div>
                            </div>
                        </div>
                    </div>
                </FadeIn>
            </section>

            {/* REVIEWS */}
            <section className="w-full py-[50px] md:py-[80px] bg-[#e5d6c2] bg-cover bg-center px-6 flex flex-col items-center text-center">
                <FadeIn className="flex flex-col items-center text-center w-full">
                    <img src="/assets/Brand.svg" alt="icon" className="w-[160px] md:w-[200px] lg:w-[232px] h-auto mb-4" />
                    <h2 className="text-[34px] md:text-[42px] lg:text-[48px] leading-tight font-epitaph text-[#85431a]">
                        WHAT OUR GUESTS ARE SAYING
                    </h2>
                    <p className="text-[20px] md:text-[26px] lg:text-[32px] leading-[1.2] lg:leading-[37px] font-bold font-kautiva text-[#653314] mt-2">
                        Real Stories, Happy Plates, And Plenty Of Reasons To Come Back
                    </p>
                    <p className="text-[16px] md:text-[16px] leading-[24px] md:leading-[26px] text-[#525252] max-w-[720px] mt-3">
                        Our community says it best, from morning coffee regulars to gyro lovers, we're proud to be part of Avondale's daily rhythm. See why locals call Kafenio their go-to spot for comfort food with Mediterranean flair.
                    </p>
                    <a
                        href="https://www.google.com/maps"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${roboto.className} bg-[#04589C] text-white px-[20px] py-[10px] h-[42px] rounded-none font-semibold text-[16px] md:text-[20px] leading-[20px] flex items-center gap-2 w-fit hover:opacity-90 transition mt-6`}
                    >
                        See All Reviews
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M15.3025 11.0285L2 11.0285L2 8.97146L15.3025 8.97146L11.1214 4.45436L12.4872 3L19 10L12.4872 17L11.1214 15.5456L15.3025 11.0285Z" fill="white" />
                        </svg>
                    </a>
                    <div className="columns-1 md:columns-2 lg:columns-3 gap-4 md:gap-6 mt-8 md:mt-[48px] max-w-[1040px] w-full">
                        {[
                            { name: "Natalia Santana-Pollard", review: "Honestly some of the best Greek food I've had in Atlanta and I've tried a lot of places. The food was well seasoned and the portions were generous. I would've loved to try their desserts but I was so full I couldn't take another bite. Highly recommend going after lunch rush does down when it's calm and emptier." },
                            { name: "Ahmad Walker", review: "My first time actually getting food from here to go. Nice restaurant and ambience. They have dessert that will make your mouth water. The gyro is huge and delicious. I got a gyro with fries for dinner and a gyro platter with the salad for lunch at work the following day." },
                            { name: "Dee", review: "A weekday evening discovery that shall remain on the favorites list forever. Amazing Greek food, fresh flavors and no nonsense service. Where was I, missing this place for so long?" },
                            { name: "Alexandra Zagorski", review: "Whoa, so fresh! I came here after reading the owner's response to a disgruntled customer - and I'm so glad I did! I order the Greek salad with chicken, an extra side of tzatziki and pita, and a glass of wine, all for $25 before tip. All delicious. I'll be back!" },
                            { name: "Stella C", review: "This place have great services and have the best coffee. The food is delicious. The desserts are also tasty.\n\nUpdate: Visited recently and did I missed this so much! I relocated to the other side of town so it's a bit difficult to visit as frequently as I did in the past. As always, everything was amazing and very delicious. The staff continues to be friendly and kind. You can visit with family and friends. The coffee is GREAT!" },
                            { name: "Hung Do", review: "Good for a quick bite of Greek food. We ordered 2 salads: Greek salad with chicken, Village salad with gyro meat. We also ordered a gyro platter with rice & side salad, & a chicken platter with potatoes & side salads. All the salads were fresh & delicious with light dressings. The potatoes were a favorite. The chicken was average. The gyro meat was good, thick cuts. The Tzatziki sauce was very good, just need more of it. Love the Arden's Garden juices. Located in Avondale Estates area." },
                            { name: "Kelsey Neal", review: "The staff are so friendly and patient. I have many dietary restrictions and I was carefully walked through my choices before getting the recommendation to try the Athena sandwich on pita. The plate definitely made me feel cared for like they had a Greek grandma in the back adding sliced oranges to all the plates to make sure it's properly balanced. I also love the Greek god themed decor and mural." },
                            { name: "Noriko I", review: "I love coming here because the food is great (who doesn't like fresh Greek food?), the decor is awesome (you get to see a glimpse into the family history), and the service is friendly. As a matter of fact, the people who work here are not miserable and it shows in the food and service. Oh yeah, they also have alcohol, so you can have a beer with your gyro." },
                            { name: "Craig Prater", review: "Came to try after driving past so many times. I stopped in and ordered the standard gyro wrap, which came with a side. I chose the rice pilaf. The portion size was great for the price. FYI, they also do breakfast if youre interested. Service was very hospitable, and the dining area looked cozy. Parking is on the street adjacent, but spots might be minimal. I'll be back for more." },
                        ].map(({ name, review }) => (
                            <div key={name} className="break-inside-avoid mb-4 md:mb-6 bg-[#f5f5f5] p-5 md:p-6 flex flex-col items-center text-center gap-3 shadow-md">
                                <div className="flex gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M10 1L12.39 6.26L18.18 7.27L14.09 11.14L15.18 17L10 14.27L4.82 17L5.91 11.14L1.82 7.27L7.61 6.26L10 1Z" fill="#F5A623" />
                                        </svg>
                                    ))}
                                </div>
                                <h3 className="text-[20px] md:text-[22px] lg:text-[24px] font-bold font-kautiva text-[#363636]">{name}</h3>
                                <img src="/assets/Frame2.svg" alt="" className="w-[34px] md:w-[38px]" />
                                <p className="text-[14px] md:text-[15px] leading-[22px] md:leading-[24px] text-[#3d3d3d] whitespace-pre-line">{review}</p>
                            </div>
                        ))}
                    </div>
                </FadeIn>
            </section>
        </main>
    );
}
