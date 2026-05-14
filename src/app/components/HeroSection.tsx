"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className="flex-shrink-0">
    <path d="M15.3025 11.0285L2 11.0285L2 8.97146L15.3025 8.97146L11.1214 4.45436L12.4872 3L19 10L12.4872 17L11.1214 15.5456L15.3025 11.0285Z" fill="currentColor" />
  </svg>
);

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.65], ["0%", "12%"]);

  return (
    <section
      ref={ref}
      className="relative w-full h-[70vh] md:h-[80vh] lg:h-[100vh] min-h-[500px] overflow-hidden"
    >
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 scale-[1.18] origin-top will-change-transform"
      >
        <img
          src="/assets/background.webp"
          alt="Hero background"
          className="w-full h-full object-cover"
          fetchPriority="high"
          loading="eager"
        />
      </motion.div>

      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 will-change-transform"
      >
        <motion.img
          src="/assets/logo_hero.svg"
          alt="Logo"
          className="w-[160px] sm:w-[200px] md:w-[220px] lg:w-[240px] mb-10"
          initial={{ opacity: 0, scale: 0.7, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.34, 1.36, 0.64, 1] }}
        />

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center">
          <motion.a
            href="/order-online"
            className={`bg-[#04589C] text-white border border-[#04589C] hover:bg-white hover:text-[#04589C] px-[20px] py-[10px] w-[200px] sm:w-auto justify-center rounded-none font-semibold text-[16px] sm:text-[18px] lg:text-[20px] leading-[20px] h-[44px] flex items-center gap-2 transition-colors`}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.55, ease: "easeOut" }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
            Order Online
            <ArrowIcon />
          </motion.a>

          <motion.a
            href="/catering"
            className={`h-[44px] bg-white text-[#04589C] border border-[#04589C] hover:bg-[#04589C] hover:text-white px-[20px] py-[10px] w-[200px] sm:w-auto justify-center rounded-none font-semibold text-[16px] sm:text-[18px] lg:text-[20px] leading-[20px] flex items-center gap-2 transition-colors`}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.72, ease: "easeOut" }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
            Catering
            <span className="hidden sm:flex">
              <ArrowIcon />
            </span>
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
