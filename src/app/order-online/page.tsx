import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import FadeIn from "@/app/components/FadeIn";

export const metadata: Metadata = {
    title: "Order Greek Food Online in Decatur GA",
    description: "Order Greek food online from Kafenio in Decatur GA. Fresh meals, easy ordering, and convenient pickup.",
    openGraph: {
        title: "Order Greek Food Online in Decatur GA",
        description: "Order Greek food online from Kafenio in Decatur GA. Fresh meals, easy ordering, and convenient pickup.",
        url: "https://www.kafeniogreekdiner.com/order-online",
    },
};

const roboto = Roboto({
    subsets: ["latin"],
    weight: ["600"],
});

export default function OrderOnline() {
    return (
        <main>
            {/* HERO */}
            <section className="relative w-full h-[400px] md:h-[45vh]">
                <img
                    src="/assets/orderonline_hero.webp"
                    alt="Order Online hero"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0" />
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
                    <img
                        src="/assets/icono_hero_order.svg"
                        alt="icono order"
                        className="w-[56px] md:w-[66px] lg:w-[77px] h-auto mb-2 hero-fadein"
                    />
                    <h1 className="text-[48px] md:text-[52px] lg:text-[64px] leading-tight font-epitaph text-white hero-fadein">
                        ORDER ONLINE
                    </h1>
                    <p className="text-[32px] md:text-[32px] lg:text-[40px] font-kautiva font-bold text-white mt-2 hero-fadein-delay-1">
                        Kafenio
                    </p>
                </div>
            </section>

            {/* SECCIÓN ORDER */}
            <section className="w-full py-[50px] md:py-[80px] bg-[url('/assets/PreMenu.webp')] bg-cover bg-center lg:bg-fixed px-6 flex flex-col items-center text-center">
                <FadeIn className="flex flex-col items-center text-center w-full">
                    <img src="/assets/icono_seccion_order.svg" alt="icon" className="w-[52px] md:w-[60px] lg:w-[68px] h-auto mb-4" />
                    <h2 className="text-[30px] md:text-[40px] lg:text-[48px] leading-tight font-epitaph text-[#04589C]">
                        YOUR KAFENIO FAVORITES, DELIVERED
                    </h2>
                    <p className="text-[20px] md:text-[26px] lg:text-[32px] font-bold font-kautiva text-[#85431a] mt-2 leading-[1.2]">
                        Easy ordering, fast pickup, or delivery straight to your Door.
                    </p>
                    <p className="text-[16px] md:text-[16px] leading-[24px] md:leading-[26px] text-[#525252] max-w-[720px] mt-3">
                        Order online through your favorite app and enjoy the flavors of Greece wherever you are: fast, easy and always fresh.
                    </p>
                    <p className={`${roboto.className} text-[13px] md:text-[14px] font-kautiva font-bold text-[#221c01] mt-6 md:mt-8 uppercase`}>
                        Pickup & Delivery
                    </p>
                    <a
                        href="https://order.toasttab.com/online/kafenio-avondale-2700-e-college-ave"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${roboto.className} bg-[#04589C] text-white w-[235px] h-[80px] md:w-[200px] md:h-[72px] lg:w-[235px] lg:h-[80px] px-[24px] md:px-[32px] lg:px-[40px] py-[16px] md:py-[18px] lg:py-[20px] rounded-none font-semibold text-[20px] leading-[20px] flex items-center justify-center mt-4 hover:opacity-90 transition`}
                    >
                        <svg
                            width="196"
                            height="49"
                            viewBox="0 0 196 49"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-full h-auto"
                        >
                            <path d="M77.5564 39.5611C73.5561 39.5611 71.3972 37.5383 71.3972 33.7527V22.667H70.0061C69.3381 22.6558 68.702 22.3852 68.2381 21.9146C67.7741 21.444 67.5203 20.8122 67.5327 20.1583C67.5639 18.8414 68.6604 17.7882 70.0061 17.7824H71.3972V14.4826C71.5139 13.0116 72.7674 11.8762 74.2748 11.8762C75.7822 11.8762 77.0357 13.0116 77.1524 14.4826V17.7824H79.3978C80.7428 17.8272 81.8094 18.9074 81.8094 20.2247C81.8094 21.542 80.7428 22.6222 79.3978 22.667H77.1524V32.2582C77.1524 33.9306 78.2318 34.5889 79.1294 34.5889H79.6229C81.2421 34.5889 82.1425 35.6455 82.1425 37.01C82.1425 38.3745 81.2882 39.5611 77.5564 39.5611Z" fill="currentcolor" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M84.0708 28.3845C84.0708 34.4584 88.3885 39.5606 95.5347 39.5606C102.727 39.5606 107.042 34.4584 107.042 28.3845C107.042 22.3585 102.727 17.2537 95.5347 17.2537C88.4001 17.2537 84.0708 22.3585 84.0708 28.3845ZM90.003 28.3846C90.003 25.0849 91.9801 22.2259 95.5329 22.2259C99.0829 22.2259 101.106 25.0849 101.106 28.3846C101.106 31.7408 99.0858 34.5998 95.5329 34.5998C91.9801 34.5998 90.003 31.7295 90.003 28.3846Z" fill="currentcolor" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M126.773 39.2979H127.224C128.774 39.2839 130.02 38.044 130.009 36.5265V25.3052C130.009 19.1888 125.469 17.2537 120.525 17.2537C118.008 17.2537 113.154 18.135 111.806 20.2454C111.608 20.5807 111.499 20.9598 111.491 21.3472C111.486 22.5231 112.449 23.4842 113.65 23.5027C114.016 23.4878 114.371 23.3819 114.683 23.1949C116.125 22.2733 117.817 21.7979 119.538 21.8303C122.412 21.8303 124.3 23.2372 124.3 25.3928V28.2545C122.863 26.5821 120.311 25.6583 117.425 25.6583C113.962 25.6583 109.872 27.5483 109.872 32.5204C109.872 37.2723 113.962 39.5606 117.425 39.5606C120.259 39.5606 122.819 38.5492 124.3 36.8344C124.3 38.9447 126.323 39.2979 126.773 39.2979ZM119.715 29.4382C121.559 29.4382 123.355 30.0541 124.298 31.2859V33.9273C123.355 35.1591 121.559 35.775 119.715 35.775C117.467 35.775 115.625 34.628 115.625 32.6504C115.625 30.5683 117.467 29.4382 119.715 29.4382Z" fill="currentcolor" />
                            <path d="M143.496 39.5602C140.664 39.5602 136.124 38.6364 134.776 36.735C134.51 36.3951 134.367 35.9772 134.372 35.5485C134.395 34.2707 135.448 33.2404 136.753 33.2178C137.167 33.2162 137.572 33.3299 137.922 33.5455C139.631 34.5117 141.877 35.2603 143.764 35.2603C146.237 35.2603 147.407 34.2914 147.407 32.972C147.407 29.452 134.505 32.311 134.505 23.9514C134.505 20.389 137.697 17.2644 143.405 17.2644C146.237 17.2644 150.102 18.1459 151.317 19.8607C151.549 20.1785 151.676 20.5581 151.68 20.9484C151.64 22.1316 150.645 23.0684 149.435 23.0615C149.059 23.0631 148.688 22.9728 148.356 22.7988C146.86 21.9646 145.17 21.5246 143.449 21.5219C141.383 21.5219 140.035 22.4456 140.035 23.635C140.035 26.802 152.89 24.1605 152.89 32.7404C152.89 36.6136 149.519 39.5602 143.496 39.5602Z" fill="currentcolor" />
                            <path d="M164.401 39.5611C160.401 39.5611 158.242 37.5383 158.242 33.7527V22.667H156.851C156.182 22.6558 155.547 22.3852 155.083 21.9146C154.619 21.444 154.365 20.8122 154.377 20.1583C154.409 18.842 155.505 17.7896 156.851 17.7824H158.242V14.4826C158.358 13.0116 159.612 11.8762 161.119 11.8762C162.627 11.8762 163.88 13.0116 163.997 14.4826V17.7824H166.245C167.59 17.8272 168.656 18.9074 168.656 20.2247C168.656 21.542 167.59 22.6222 166.245 22.667H163.997V32.2582C163.997 33.9306 165.077 34.5889 165.974 34.5889H166.47C168.086 34.5889 168.987 35.6455 168.987 37.01C168.987 38.3745 168.135 39.5611 164.401 39.5611Z" fill="currentcolor" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M63.5503 23.7684C63.7848 26.1098 63.8878 28.4618 63.8592 30.8143C63.8592 31.077 63.8563 31.3426 63.8246 31.6081C63.8246 34.0969 63.8015 36.6396 63.2473 39.0776C62.6941 41.5092 59.737 41.468 57.7643 41.4405C57.658 41.4391 57.5547 41.4376 57.4548 41.4366C55.5336 41.419 53.6219 41.1753 51.7105 40.9314C49.9348 40.705 48.1596 40.4785 46.3776 40.4337C44.3723 40.3818 42.367 40.6475 40.372 40.9119C39.7598 40.993 39.1487 41.074 38.5388 41.1457C37.8193 41.2291 37.0824 41.359 36.3388 41.4902C34.6423 41.7894 32.9108 42.0948 31.2713 41.8688C28.3794 41.4564 27.5482 37.7385 27.3028 35.2411C26.9074 31.2013 26.6679 27.9722 28.1081 22.9492C28.5872 21.2767 29.3318 20.0393 30.3507 18.6635C30.3507 18.6635 30.2503 18.5585 30.1185 18.4223C29.9472 18.2452 29.723 18.0135 29.5974 17.881C29.09 17.3788 28.6888 16.7835 28.4169 16.1293C27.4154 13.4879 29.6955 11.1233 31.6725 9.90847C39.2748 5.23575 49.7689 4.89109 57.6106 8.99313C59.7926 10.1345 62.0005 11.8521 62.9269 14.2789C63.6341 16.1293 63.7871 18.6889 61.7898 19.7285C61.5778 19.7972 61.3506 19.8064 61.1338 19.7552C62.8381 20.1765 63.3778 22.1915 63.5503 23.7684ZM54.3162 36.7158C56.1302 36.8682 58.7115 37.0852 59.6268 35.0321C59.7666 34.7202 59.8675 34.3929 59.9269 34.0575C60.4514 31.009 60.5485 27.9048 60.2156 24.8307C60.0021 22.9152 59.5201 20.2172 57.6181 19.3245C60.7034 17.5644 57.4015 14.0275 55.7016 13.002C50.2468 9.70506 42.1654 9.4508 36.3931 12.0188C34.7393 12.7477 31.7232 14.8722 32.9297 17.3865C33.143 17.8286 33.4664 18.0915 33.7993 18.3623C33.9663 18.4981 34.1357 18.6358 34.2948 18.799C34.2458 18.7482 33.3135 19.7088 32.6786 21.3077C32.208 22.4121 31.8606 23.5629 31.6424 24.7402C31.2932 26.6469 31.1002 28.578 31.0652 30.5148C31.0883 32.6534 31.4058 35.2016 33.1721 36.6932C34.4931 37.813 36.4094 37.3109 38.0309 36.886C38.3649 36.7984 38.6865 36.7142 38.9878 36.648C41.3458 36.1338 43.7384 35.6791 46.1571 35.7497C47.7254 35.7967 49.2748 36.0316 50.8243 36.2666C51.9751 36.4411 53.1258 36.6155 54.2845 36.7131L54.3162 36.7158Z" fill="currentcolor" />
                        </svg>
                    </a>
                </FadeIn>
            </section>
        </main>
    );
}
