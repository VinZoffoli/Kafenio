import type { Metadata } from "next";
import { Roboto } from "next/font/google";

export const metadata: Metadata = {
  title: "Authentic Greek Diner in Decatur GA",
  description: "Enjoy authentic Greek cuisine in Decatur GA at Kafenio. Fresh ingredients, classic recipes, and a welcoming diner-style atmosphere.",
  openGraph: {
    title: "Authentic Greek Diner in Decatur GA",
    description: "Enjoy authentic Greek cuisine in Decatur GA at Kafenio. Fresh ingredients, classic recipes, and a welcoming diner-style atmosphere.",
    url: "https://www.kafeniogreekdiner.com",
  },
};
import HappeningsCards from "@/app/components/Happeningscards";
import OpeningHours from "@/app/components/OpeningHours";
import AnimateIn from "@/app/components/AnimateIn";
import HeroSection from "@/app/components/HeroSection";
import Link from "next/link";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["600"],
});

export default function Home() {
  return (
    <>
    <link rel="preload" as="image" href="/assets/background.webp" fetchPriority="high" />
    <main className="overflow-x-hidden">

      {/* HERO — parallax + spring logo + staggered buttons */}
      <HeroSection />

      {/* MODERN TAKE */}
      <section className="w-full bg-white py-[50px] md:py-[60px] lg:py-[80px] flex flex-col items-center text-center px-6">
        <div className="max-w-[940px] flex flex-col items-center gap-4">
          <AnimateIn direction="scale" delay={0}>
            <img
              src="/assets/icono1.svg"
              alt="icono1"
              className="w-[70px] md:w-[85px] lg:w-[100px] h-auto animate-float"
            />
          </AnimateIn>
          <AnimateIn direction="up" delay={0.08}>
            <h2
              className="text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] leading-tight font-epitaph text-[#04589C]"
              style={{ fontFamily: "Epitaph, serif" }}
            >
              A MODERN TAKE ON THE GREEK CAFÉ
            </h2>
          </AnimateIn>
          <AnimateIn direction="up" delay={0.18}>
            <p className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] leading-[1.2] lg:leading-[37px] font-bold font-kautiva text-[#84431b]">
              Where Great Food And Community Come Together
            </p>
          </AnimateIn>
          <AnimateIn direction="up" delay={0.27}>
            <p className="text-[14px] md:text-[15px] lg:text-[16px] leading-[22px] md:leading-[24px] lg:leading-[26px] max-w-[720px] font-normal text-[#525252]">
              At Kafenio, we bring the heart of a Greek diner into today's rhythm, bright, welcoming, and full of flavor. From all-day breakfast to fresh salads and gyros, every plate is made with care and a touch of Mediterranean sunshine. Come for the food, stay for the vibe.
            </p>
          </AnimateIn>
          <AnimateIn direction="up" delay={0.36}>
            <a
              href="/about-us"
              className={`${roboto.className} shimmer-btn h-[44px] bg-[#04589C] text-white border border-[#04589C] hover:bg-white hover:text-[#04589C] px-[20px] py-[10px] mt-2 justify-center rounded-none font-semibold text-[16px] sm:text-[18px] lg:text-[20px] leading-[20px] flex items-center gap-2 transition-colors`}
            >
              About Us
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className="flex-shrink-0">
                <path d="M15.3025 11.0285L2 11.0285L2 8.97146L15.3025 8.97146L11.1214 4.45436L12.4872 3L19 10L12.4872 17L11.1214 15.5456L15.3025 11.0285Z" fill="currentColor" />
              </svg>
            </a>
          </AnimateIn>
        </div>
      </section>

      <section
        className="mt-[-3] relative w-full h-[28px] bg-white bg-repeat-x bg-center"
        style={{ backgroundImage: "url('/assets/Trama.svg')", backgroundSize: "auto 100%" }}
        aria-hidden="true"
      />

      {/* TASTE THE MEDITERRANEAN */}
      <section className="mt-[-2px] w-full py-[50px] md:py-[60px] lg:py-[80px] bg-[url('/assets/PreMenu.webp')] bg-cover bg-center lg:bg-fixed">
        <div className="px-6 flex flex-col items-center text-center gap-4">
          <AnimateIn direction="scale" delay={0}>
            <img
              src="/assets/icon_menus.svg"
              alt="icono1"
              className="w-[50px] md:w-[60px] lg:w-[68px] h-auto animate-float"
            />
          </AnimateIn>
          <AnimateIn direction="up" delay={0.08}>
            <h2 className="text-[36px] sm:text-[36px] md:text-[42px] lg:text-[48px] leading-tight font-epitaph text-[#04589C]">
              TASTE THE MEDITERRANEAN
            </h2>
          </AnimateIn>
          <AnimateIn direction="up" delay={0.16}>
            <p className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] leading-[1.2] lg:leading-[37px] font-bold font-kautiva text-[#84431b]">
              Fresh, Hearty, And Made To Brighten Your Day.
            </p>
          </AnimateIn>
          <AnimateIn direction="up" delay={0.23}>
            <p className="text-[14px] md:text-[15px] lg:text-[16px] leading-[22px] md:leading-[24px] lg:leading-[26px] max-w-[720px] font-normal text-[#525252]">
              Explore the flavors that keep our Avondale neighbors coming back for more.
            </p>
          </AnimateIn>

          {/* Menu grid — staggered cards */}
          <div
            className="grid gap-3 md:gap-4 mt-6 w-full max-w-[1100px]
               grid-cols-1 md:grid-cols-2 lg:grid-cols-4
               lg:grid-rows-2"
          >
            <AnimateIn direction="up" delay={0.05} className="md:col-span-2 lg:col-span-1 lg:row-span-2">
              <Link
                href="/menu?tab=coffee-espresso"
                className="relative overflow-hidden group h-[240px] md:h-[300px] lg:h-[560px] cursor-pointer block"
              >
                <picture>
                  <source media="(min-width: 768px)" srcSet="/assets/coffee.webp" />
                  <img
                    src="/assets/coffeemobile.webp"
                    alt="Coffee & Espresso"
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </picture>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent transition-opacity duration-500 group-hover:opacity-90" />
                <span className="absolute bottom-4 left-4 text-white text-[28px] md:text-[34px] lg:text-[40px] font-bold font-kautiva leading-tight text-left transition-transform duration-400 group-hover:-translate-y-1">
                  Coffee & Espresso
                </span>
              </Link>
            </AnimateIn>

            <AnimateIn direction="up" delay={0.13} className="md:col-span-2 lg:col-span-2">
              <Link
                href="/menu?tab=breakfast"
                className="relative overflow-hidden group h-[200px] md:h-[240px] lg:h-[270px] cursor-pointer block"
              >
                <picture>
                  <source media="(min-width: 768px)" srcSet="/assets/breakfast.webp" />
                  <img
                    src="/assets/breakfastmobile.webp"
                    alt="Breakfast"
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </picture>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent transition-opacity duration-500 group-hover:opacity-90" />
                <span className="absolute bottom-4 left-4 text-white text-[28px] md:text-[34px] lg:text-[40px] font-bold font-kautiva transition-transform duration-400 group-hover:-translate-y-1">Breakfast</span>
              </Link>
            </AnimateIn>

            <AnimateIn direction="up" delay={0.2}>
              <Link
                href="/menu?tab=beverages"
                className="relative overflow-hidden group h-[200px] md:h-[240px] lg:h-[270px] cursor-pointer block"
              >
                <picture>
                  <source media="(min-width: 768px)" srcSet="/assets/beverages.webp" />
                  <img
                    src="/assets/beveragesmobile.png"
                    alt="Beverages"
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </picture>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent transition-opacity duration-500 group-hover:opacity-90" />
                <span className="absolute bottom-4 left-4 text-white text-[28px] md:text-[34px] lg:text-[40px] font-bold font-kautiva transition-transform duration-400 group-hover:-translate-y-1">Beverages</span>
              </Link>
            </AnimateIn>

            <AnimateIn direction="up" delay={0.28}>
              <Link
                href="/menu?tab=desserts"
                className="relative overflow-hidden group h-[200px] md:h-[240px] lg:h-[270px] cursor-pointer block"
              >
                <picture>
                  <source media="(min-width: 768px)" srcSet="/assets/desserts.webp" />
                  <img
                    src="/assets/dessertmobile.webp"
                    alt="Desserts"
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </picture>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent transition-opacity duration-500 group-hover:opacity-90" />
                <span className="absolute bottom-4 left-4 text-white text-[28px] md:text-[34px] lg:text-[40px] font-bold font-kautiva transition-transform duration-400 group-hover:-translate-y-1">Desserts</span>
              </Link>
            </AnimateIn>

            <AnimateIn direction="up" delay={0.35} className="md:col-span-2 lg:col-span-2">
              <Link
                href="/menu?tab=lunch-dinner"
                className="relative overflow-hidden group h-[200px] md:h-[240px] lg:h-[270px] cursor-pointer block"
              >
                <picture>
                  <source media="(min-width: 768px)" srcSet="/assets/lunch.webp" />
                  <img
                    src="/assets/lunchmobile.webp"
                    alt="Lunch + Dinner"
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </picture>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent transition-opacity duration-500 group-hover:opacity-90" />
                <span className="absolute bottom-4 left-4 text-white text-[28px] md:text-[34px] lg:text-[40px] font-bold font-kautiva transition-transform duration-400 group-hover:-translate-y-1">Lunch + Dinner</span>
              </Link>
            </AnimateIn>
          </div>

          <AnimateIn direction="up" delay={0.1}>
            <a
              href="/menu"
              className={`${roboto.className} shimmer-btn h-[44px] bg-[#04589C] text-white border border-[#04589C] hover:bg-white hover:text-[#04589C] px-[20px] py-[10px] mt-[30px] lg:mt-[40px] justify-center rounded-none font-semibold text-[16px] sm:text-[18px] lg:text-[20px] leading-[20px] flex items-center gap-2 transition-colors`}
            >
              Full Menu
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className="flex-shrink-0">
                <path d="M15.3025 11.0285L2 11.0285L2 8.97146L15.3025 8.97146L11.1214 4.45436L12.4872 3L19 10L12.4872 17L11.1214 15.5456L15.3025 11.0285Z" fill="currentColor" />
              </svg>
            </a>
          </AnimateIn>
        </div>
      </section>

      <section className="relative w-full h-[28px] md:h-[28px] lg:h-[28px] mt-[-3px] mb-[-3px]">
        <img
          src="/assets/Trama2.svg"
          alt="divider"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </section>

      {/* CATERING — text from left, images from right */}
      <section className="w-full py-[50px] md:py-[60px] lg:py-[80px] bg-[url('/assets/catering_fondo.webp')] bg-cover bg-center px-6">
        <div className="max-w-[1100px] mx-auto flex flex-col lg:flex-row items-center gap-[40px] lg:gap-[80px]">
          <AnimateIn
            direction="left"
            className="flex flex-col gap-4 lg:gap-5 w-full lg:max-w-[480px] text-center lg:text-left items-center lg:items-start"
          >
            <h2 className="text-[36px] sm:text-[36px] md:text-[42px] lg:text-[48px] leading-tight font-epitaph text-[#04589C]">
              BRING KAFENIO TO YOUR TABLE
            </h2>
            <p className="text-[20px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-bold font-kautiva text-[#022542]">
              Fresh Mediterranean catering made simple.
            </p>
            <p className="text-[14px] md:text-[15px] lg:text-[16px] leading-[22px] md:leading-[24px] lg:leading-[26px] text-[#3d3d3d]">
              Planning a meeting, brunch, or family gathering? Let us handle the food. Our catering menu brings the same Kafenio taste and quality to your next event.
            </p>
            <a
              href="/catering"
              className={`${roboto.className} shimmer-btn max-w-[260px] h-[44px] bg-[#04589C] text-white border border-[#04589C] hover:bg-white hover:text-[#04589C] px-[20px] py-[10px] justify-center rounded-none font-semibold text-[16px] sm:text-[18px] lg:text-[20px] leading-[20px] flex items-center gap-2 transition-colors`}
            >
              Book Your Catering
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className="flex-shrink-0">
                <path d="M15.3025 11.0285L2 11.0285L2 8.97146L15.3025 8.97146L11.1214 4.45436L12.4872 3L19 10L12.4872 17L11.1214 15.5456L15.3025 11.0285Z" fill="currentColor" />
              </svg>
            </a>
          </AnimateIn>

          <AnimateIn
            direction="right"
            delay={0.1}
            className="flex flex-col gap-3 md:gap-4 flex-1 w-full"
          >
            <div className="overflow-hidden h-[180px] md:h-[200px] lg:h-[220px] group">
              <img src="/assets/catering1.webp" alt="Kafenio catering spread with Greek dishes" loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>
            <div className="flex gap-3 md:gap-4">
              <div className="overflow-hidden h-[180px] md:h-[200px] lg:h-[220px] flex-1 group">
                <img src="/assets/catering2.webp" alt="Greek food catering platter by Kafenio" loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="overflow-hidden h-[180px] md:h-[200px] lg:h-[220px] flex-1 group">
                <img src="/assets/catering3.webp" alt="Kafenio catering setup for events in Decatur GA" loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      <section className="relative w-full h-[36px] md:h-[48px] lg:h-[58px]">
        <img
          src="/assets/Trama3.svg"
          alt="divider"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </section>

      {/* HAPPENINGS */}
      <section className="w-full py-[50px] md:py-[60px] lg:py-[80px] bg-[url('/assets/happenings_fondo.webp')] bg-cover bg-center lg:bg-fixed px-6">
        <div className="flex flex-col items-center text-center w-full">
          <AnimateIn direction="scale" delay={0}>
            <img src="/assets/icono_happening.svg" alt="happenings icon" className="w-[50px] md:w-[60px] lg:w-[68px] h-auto mb-4 animate-float" />
          </AnimateIn>
          <AnimateIn direction="up" delay={0.1}>
            <h2 className="text-[36px] sm:text-[36px] md:text-[42px] lg:text-[48px] leading-tight font-epitaph text-white">
              HAPPENINGS
            </h2>
          </AnimateIn>
          <AnimateIn direction="up" delay={0.18}>
            <p className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] leading-[1.2] lg:leading-[37px] font-bold font-kautiva text-white mt-2">
              What's Going On At Kafenio
            </p>
          </AnimateIn>
          <AnimateIn direction="up" delay={0.26}>
            <p className="text-[14px] md:text-[15px] lg:text-[16px] leading-[22px] md:leading-[24px] lg:leading-[26px] text-white max-w-[600px] mt-3">
              Stay tuned for local happenings, seasonal specials, and neighborhood events, because good food tastes even better when shared.
            </p>
          </AnimateIn>
          <AnimateIn direction="up" delay={0.33}>
            <a
              href="/happenings"
              className={`${roboto.className} shimmer-btn mt-[24px] lg:mt-[30px] max-w-[260px] h-[44px] bg-[#04589C] text-white border border-[#04589C] hover:bg-white hover:text-[#04589C] px-[20px] py-[10px] justify-center rounded-none font-semibold text-[16px] sm:text-[18px] lg:text-[20px] leading-[20px] flex items-center gap-2 transition-colors`}
            >
              See What's New
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className="flex-shrink-0">
                <path d="M15.3025 11.0285L2 11.0285L2 8.97146L15.3025 8.97146L11.1214 4.45436L12.4872 3L19 10L12.4872 17L11.1214 15.5456L15.3025 11.0285Z" fill="currentColor" />
              </svg>
            </a>
          </AnimateIn>
          <HappeningsCards />
        </div>
      </section>

      <section className="relative w-full h-[28px] md:h-[24px] lg:h-[28px] mb-[-3px]">
        <img
          src="/assets/Trama4.svg"
          alt="divider"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </section>

      {/* ORDER ONLINE */}
      <section className="w-full py-[50px] md:py-[60px] lg:py-[80px] bg-[url('/assets/fondo_orderonline.webp')] bg-cover bg-center px-6">
        <div className="flex flex-col items-center text-center w-full">
          <AnimateIn direction="scale" delay={0}>
            <img src="/assets/icono_order.svg" alt="icon" className="w-[50px] md:w-[60px] lg:w-[68px] h-auto mb-4 animate-float" />
          </AnimateIn>
          <AnimateIn direction="up" delay={0.1}>
            <h2 className="text-[34px] sm:text-[36px] md:text-[42px] lg:text-[48px] leading-tight font-epitaph text-[#85431a]">
              YOUR FAVORITES, ONE CLICK AWAY
            </h2>
          </AnimateIn>
          <AnimateIn direction="up" delay={0.18}>
            <p className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-bold leading-[1.2] lg:leading-[37px] font-kautiva text-[#85431a] mt-2">
              Quick, Easy, And Always Delicious.
            </p>
          </AnimateIn>
          <AnimateIn direction="up" delay={0.25}>
            <p className="text-[14px] md:text-[15px] lg:text-[16px] leading-[22px] md:leading-[24px] lg:leading-[26px] text-[#525252] max-w-[600px] mt-3">
              Skip the wait and get your Kafenio fix right at home. Order your go-to breakfast wrap, a fresh salad, or your favorite coffee, all ready for pickup or delivery.
            </p>
          </AnimateIn>
          <AnimateIn direction="up" delay={0.32}>
            <p className="text-[16px] lg:text-[18px] mt-[20px] font-bold font-kautiva leading-[100%] text-[#221c01] max-w-[720px]">
              PICKUP & DELIVERY
            </p>
          </AnimateIn>
          <AnimateIn direction="scale" delay={0.4}>
            <a
              href="https://order.toasttab.com/online/kafenio-avondale-2700-e-college-ave"
              target="_blank"
              rel="noopener noreferrer"
              className={`${roboto.className} shimmer-btn animate-pulse-glow mt-[24px] lg:mt-[30px] w-full max-w-[200px] md:max-w-[236px] h-[64px] md:h-[80px] bg-[#04589C] text-white border border-[#04589C] hover:bg-white hover:text-[#04589C] px-[24px] md:px-[40px] py-[16px] md:py-[20px] justify-center rounded-none font-semibold text-[20px] leading-[20px] flex items-center gap-2 transition-colors`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="200" height="54" viewBox="0 0 200 54" fill="none" className="w-[140px] md:w-[180px] lg:w-[200px] h-auto">
                <path d="M77.5564 39.5611C73.5561 39.5611 71.3972 37.5383 71.3972 33.7527V22.667H70.0061C69.3381 22.6558 68.702 22.3852 68.2381 21.9146C67.7741 21.444 67.5203 20.8122 67.5327 20.1583C67.5639 18.8414 68.6604 17.7882 70.0061 17.7824H71.3972V14.4826C71.5139 13.0116 72.7674 11.8762 74.2748 11.8762C75.7822 11.8762 77.0357 13.0116 77.1524 14.4826V17.7824H79.3978C80.7428 17.8272 81.8094 18.9074 81.8094 20.2247C81.8094 21.542 80.7428 22.6222 79.3978 22.667H77.1524V32.2582C77.1524 33.9306 78.2318 34.5889 79.1294 34.5889H79.6229C81.2421 34.5889 82.1425 35.6455 82.1425 37.01C82.1425 38.3745 81.2882 39.5611 77.5564 39.5611Z" fill="currentcolor" />
                <path fillRule="evenodd" clipRule="evenodd" d="M84.0708 28.3845C84.0708 34.4584 88.3885 39.5606 95.5347 39.5606C102.727 39.5606 107.042 34.4584 107.042 28.3845C107.042 22.3585 102.727 17.2537 95.5347 17.2537C88.4001 17.2537 84.0708 22.3585 84.0708 28.3845ZM90.003 28.3846C90.003 25.0849 91.9801 22.2259 95.5329 22.2259C99.0829 22.2259 101.106 25.0849 101.106 28.3846C101.106 31.7408 99.0858 34.5998 95.5329 34.5998C91.9801 34.5998 90.003 31.7295 90.003 28.3846Z" fill="currentcolor" />
                <path fillRule="evenodd" clipRule="evenodd" d="M126.773 39.2979H127.224C128.774 39.2839 130.02 38.044 130.009 36.5265V25.3052C130.009 19.1888 125.469 17.2537 120.525 17.2537C118.008 17.2537 113.154 18.135 111.806 20.2454C111.608 20.5807 111.499 20.9598 111.491 21.3472C111.486 22.5231 112.449 23.4842 113.65 23.5027C114.016 23.4878 114.371 23.3819 114.683 23.1949C116.125 22.2733 117.817 21.7979 119.538 21.8303C122.412 21.8303 124.3 23.2372 124.3 25.3928V28.2545C122.863 26.5821 120.311 25.6583 117.425 25.6583C113.962 25.6583 109.872 27.5483 109.872 32.5204C109.872 37.2723 113.962 39.5606 117.425 39.5606C120.259 39.5606 122.819 38.5492 124.3 36.8344C124.3 38.9447 126.323 39.2979 126.773 39.2979ZM119.715 29.4382C121.559 29.4382 123.355 30.0541 124.298 31.2859V33.9273C123.355 35.1591 121.559 35.775 119.715 35.775C117.467 35.775 115.625 34.628 115.625 32.6504C115.625 30.5683 117.467 29.4382 119.715 29.4382Z" fill="currentcolor" />
                <path d="M143.496 39.5602C140.664 39.5602 136.124 38.6364 134.776 36.735C134.51 36.3951 134.367 35.9772 134.372 35.5485C134.395 34.2707 135.448 33.2404 136.753 33.2178C137.167 33.2162 137.572 33.3299 137.922 33.5455C139.631 34.5117 141.877 35.2603 143.764 35.2603C146.237 35.2603 147.407 34.2914 147.407 32.972C147.407 29.452 134.505 32.311 134.505 23.9514C134.505 20.389 137.697 17.2644 143.405 17.2644C146.237 17.2644 150.102 18.1459 151.317 19.8607C151.549 20.1785 151.676 20.5581 151.68 20.9484C151.64 22.1316 150.645 23.0684 149.435 23.0615C149.059 23.0631 148.688 22.9728 148.356 22.7988C146.86 21.9646 145.17 21.5246 143.449 21.5219C141.383 21.5219 140.035 22.4456 140.035 23.635C140.035 26.802 152.89 24.1605 152.89 32.7404C152.89 36.6136 149.519 39.5602 143.496 39.5602Z" fill="currentcolor" />
                <path d="M164.401 39.5611C160.401 39.5611 158.242 37.5383 158.242 33.7527V22.667H156.851C156.182 22.6558 155.547 22.3852 155.083 21.9146C154.619 21.444 154.365 20.8122 154.377 20.1583C154.409 18.842 155.505 17.7896 156.851 17.7824H158.242V14.4826C158.358 13.0116 159.612 11.8762 161.119 11.8762C162.627 11.8762 163.88 13.0116 163.997 14.4826V17.7824H166.245C167.59 17.8272 168.656 18.9074 168.656 20.2247C168.656 21.542 167.59 22.6222 166.245 22.667H163.997V32.2582C163.997 33.9306 165.077 34.5889 165.974 34.5889H166.47C168.086 34.5889 168.987 35.6455 168.987 37.01C168.987 38.3745 168.135 39.5611 164.401 39.5611Z" fill="currentcolor" />
                <path fillRule="evenodd" clipRule="evenodd" d="M63.5503 23.7684C63.7848 26.1098 63.8878 28.4618 63.8592 30.8143C63.8592 31.077 63.8563 31.3426 63.8246 31.6081C63.8246 34.0969 63.8015 36.6396 63.2473 39.0776C62.6941 41.5092 59.737 41.468 57.7643 41.4405C57.658 41.4391 57.5547 41.4376 57.4548 41.4366C55.5336 41.419 53.6219 41.1753 51.7105 40.9314C49.9348 40.705 48.1596 40.4785 46.3776 40.4337C44.3723 40.3818 42.367 40.6475 40.372 40.9119C39.7598 40.993 39.1487 41.074 38.5388 41.1457C37.8193 41.2291 37.0824 41.359 36.3388 41.4902C34.6423 41.7894 32.9108 42.0948 31.2713 41.8688C28.3794 41.4564 27.5482 37.7385 27.3028 35.2411C26.9074 31.2013 26.6679 27.9722 28.1081 22.9492C28.5872 21.2767 29.3318 20.0393 30.3507 18.6635C30.3507 18.6635 30.2503 18.5585 30.1185 18.4223C29.9472 18.2452 29.723 18.0135 29.5974 17.881C29.09 17.3788 28.6888 16.7835 28.4169 16.1293C27.4154 13.4879 29.6955 11.1233 31.6725 9.90847C39.2748 5.23575 49.7689 4.89109 57.6106 8.99313C59.7926 10.1345 62.0005 11.8521 62.9269 14.2789C63.6341 16.1293 63.7871 18.6889 61.7898 19.7285C61.5778 19.7972 61.3506 19.8064 61.1338 19.7552C62.8381 20.1765 63.3778 22.1915 63.5503 23.7684ZM54.3162 36.7158C56.1302 36.8682 58.7115 37.0852 59.6268 35.0321C59.7666 34.7202 59.8675 34.3929 59.9269 34.0575C60.4514 31.009 60.5485 27.9048 60.2156 24.8307C60.0021 22.9152 59.5201 20.2172 57.6181 19.3245C60.7034 17.5644 57.4015 14.0275 55.7016 13.002C50.2468 9.70506 42.1654 9.4508 36.3931 12.0188C34.7393 12.7477 31.7232 14.8722 32.9297 17.3865C33.143 17.8286 33.4664 18.0915 33.7993 18.3623C33.9663 18.4981 34.1357 18.6358 34.2948 18.799C34.2458 18.7482 33.3135 19.7088 32.6786 21.3077C32.208 22.4121 31.8606 23.5629 31.6424 24.7402C31.2932 26.6469 31.1002 28.578 31.0652 30.5148C31.0883 32.6534 31.4058 35.2016 33.1721 36.6932C34.4931 37.813 36.4094 37.3109 38.0309 36.886C38.3649 36.7984 38.6865 36.7142 38.9878 36.648C41.3458 36.1338 43.7384 35.6791 46.1571 35.7497C47.7254 35.7967 49.2748 36.0316 50.8243 36.2666C51.9751 36.4411 53.1258 36.6155 54.2845 36.7131L54.3162 36.7158Z" fill="currentcolor" />
              </svg>
            </a>
          </AnimateIn>
        </div>
      </section>

      <section className="relative w-full h-[28px] md:h-[24px] lg:h-[28px] mb-[-3px] mt-[-3px]">
        <img
          src="/assets/Trama6.svg"
          alt="divider"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </section>

      {/* MORE WAYS — cards lift on hover */}
      <section className="w-full py-[50px] md:py-[60px] lg:py-[80px] bg-[url('/assets/fondo_giftcard.webp')] bg-cover bg-center px-6">
        <div className="flex flex-col items-center text-center w-full">
          <AnimateIn direction="up" delay={0}>
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-3 lg:gap-4 justify-center">
              <div className="flex items-center gap-2 md:contents">
                <img src="/assets/icon_more_left.svg" alt="" aria-hidden="true" className="w-[30px] md:w-[40px] lg:w-[50px] h-auto" />
                <img src="/assets/icon_more_right.svg" alt="" aria-hidden="true" className="w-[30px] md:w-[40px] lg:w-[50px] h-auto md:order-last" />
              </div>
              <h2 className="text-[34px] sm:text-[32px] md:text-[40px] lg:text-[48px] leading-tight font-epitaph text-[#85431a] text-center">
                MORE WAYS TO ENJOY KAFENIO
              </h2>
            </div>
          </AnimateIn>

          <div className="flex flex-col md:flex-row gap-4 md:gap-6 mt-[36px] lg:mt-[48px] max-w-[1100px] w-full">
            <AnimateIn direction="up" delay={0.1} className="flex-1 h-full">
              <a href="/join-the-club" className="group flex-1 bg-white p-6 md:p-7 lg:p-8 flex flex-col items-center text-center gap-3 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-2 block">
                <div className="w-[56px] h-[56px] md:w-[64px] md:h-[64px] rounded-none bg-[#F5E8DC] flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <img src="/assets/icon_more1.svg" alt="Join the Club" className="w-[56px] md:w-[68px] h-auto" />
                </div>
                <h3 className="text-[22px] md:text-[26px] lg:text-[28px] font-bold font-kautiva text-[#6B2A00]">Join the Club</h3>
                <img src="/assets/divider_brown.svg" alt="" aria-hidden="true" className="w-[40px]" />
                <p className="lg:max-w-[400px] text-[14px] lg:text-[16px] leading-[22px] lg:leading-[24px] text-[#3d3d3d]">
                  Sign up, earn points, and score tasty rewards every time you visit.
                </p>
              </a>
            </AnimateIn>
            <AnimateIn direction="up" delay={0.2} className="flex-1 h-full">
              <a href="/gift-card" className="group flex-1 bg-white p-6 md:p-7 lg:p-8 flex flex-col items-center text-center gap-3 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-2 block">
                <div className="w-[56px] h-[56px] md:w-[64px] md:h-[64px] rounded-none bg-[#F5E8DC] flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <img src="/assets/icon_more2.svg" alt="Share the Flavor" className="w-[56px] md:w-[68px] h-auto" />
                </div>
                <h3 className="text-[22px] md:text-[26px] lg:text-[28px] font-bold font-kautiva text-[#6B2A00]">Share the Flavor</h3>
                <img src="/assets/divider_brown.svg" alt="" aria-hidden="true" className="w-[40px]" />
                <p className=" lg:max-w-[400px] text-[14px] lg:text-[16px] leading-[22px] lg:leading-[24px] text-[#3d3d3d]">
                  Give the gift of good food, send a Kafenio Gift Card to someone you love.
                </p>
              </a>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* FIND US — text from left, map from right */}
      <section className="mt-[-2px] w-full py-[50px] md:py-[60px] lg:py-[80px] bg-[url('/assets/fondo_giftcard.webp')] bg-cover bg-center flex justify-center px-6">
        <div className="w-full max-w-[1100px]">
          <div
            className="bg-[url('/assets/fondo_findusmobile.webp')] lg:bg-[url('/assets/fondo_findus.png')] bg-no-repeat bg-contain lg:bg-contain bg-center w-full mx-3 lg:mx-0 flex flex-col lg:flex-row items-center gap-[24px] lg:gap-[60px] p-10 md:p-14 lg:p-[80px]"
          >
            <AnimateIn
              direction="left"
              className="flex flex-col gap-3 lg:gap-4 w-full lg:min-w-[320px] lg:max-w-[400px] items-center lg:items-start text-center lg:text-left"
            >
              <img src="/assets/icon_find.svg" alt="icon" className="w-[32px] md:w-[36px] lg:w-[38px] h-auto" />
              <h2 className="text-[34px] sm:text-[36px] md:text-[42px] lg:text-[48px] leading-tight font-epitaph text-[#85431a]">
                FIND US
              </h2>
              <div className="w-full flex flex-col items-center lg:items-start">
                <p className="text-[20px] md:text-[22px] lg:text-[24px] font-bold font-kautiva text-[#ab5622]">Location</p>
                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-1 lg:gap-2 mt-1">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                    <path d="M11.5 11.2998C10.837 11.2998 10.2011 11.0364 9.73223 10.5676C9.26339 10.0987 9 9.46285 9 8.7998C9 8.13676 9.26339 7.50088 9.73223 7.03204C10.2011 6.5632 10.837 6.2998 11.5 6.2998C12.163 6.2998 12.7989 6.5632 13.2678 7.03204C13.7366 7.50088 14 8.13676 14 8.7998C14 9.12811 13.9353 9.4532 13.8097 9.75651C13.6841 10.0598 13.4999 10.3354 13.2678 10.5676C13.0356 10.7997 12.76 10.9839 12.4567 11.1095C12.1534 11.2351 11.8283 11.2998 11.5 11.2998ZM11.5 1.7998C9.64348 1.7998 7.86301 2.5373 6.55025 3.85006C5.2375 5.16281 4.5 6.94329 4.5 8.7998C4.5 14.0498 11.5 21.7998 11.5 21.7998C11.5 21.7998 18.5 14.0498 18.5 8.7998C18.5 6.94329 17.7625 5.16281 16.4497 3.85006C15.137 2.5373 13.3565 1.7998 11.5 1.7998Z" fill="#f17930" />
                  </svg>
                  <p className="text-[14px] lg:text-[16px] leading-[20px] text-[#333] font-bold">
                    2700 E College Ave #3000,<br />Decatur, GA 30030, United States
                  </p>
                </div>
              </div>
              <OpeningHours />
              <a
                href="https://maps.app.goo.gl/78srAW178dbCs2pW9"
                target="_blank"
                rel="noopener noreferrer"
                className={`${roboto.className} shimmer-btn mt-2 w-fit h-[44px] bg-[#04589C] text-white border border-[#04589C] hover:bg-white hover:text-[#04589C] px-[20px] py-[10px] rounded-none font-semibold text-[16px] sm:text-[18px] lg:text-[20px] leading-[20px] flex items-center gap-2 transition-colors`}
              >
                Open In Map
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className="flex-shrink-0">
                  <path d="M15.3025 11.0285L2 11.0285L2 8.97146L15.3025 8.97146L11.1214 4.45436L12.4872 3L19 10L12.4872 17L11.1214 15.5456L15.3025 11.0285Z" fill="currentColor" />
                </svg>
              </a>
            </AnimateIn>

            <AnimateIn
              direction="right"
              delay={0.12}
              className="flex-1 w-full overflow-hidden h-[220px] md:h-[300px] lg:h-[420px]"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3316.4419279243434!2d-84.27833129999999!3d33.775084299999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f507f2e441c751%3A0xf9b29f3014538356!2sKafenio%20Avondale!5e0!3m2!1ses-419!2scr!4v1776889049384!5m2!1ses-419!2scr"
                title="Kafenio location on Google Maps"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </AnimateIn>
          </div>
        </div>
      </section>

    </main>
    </>
  );
}
