"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname();

    return (
        <header className="w-full bg-white border-b h-[92px] sticky top-0 z-50">
            <div className="w-[1288px] px-[76px] mx-auto flex items-center justify-between  py-6">

                {/* Logo */}
                <Link href="/">
                    <img src="/assets/logokafenio.svg" alt="logo" className="w-[200px] cursor-pointer" />
                </Link>

                {/* Nav */}
                <nav className="hidden md:flex items-center gap-4 text-gray-700 font-medium text-[18px]">
                    <Link href="/" className={`w-[81.90px] flex justify-center relative ${pathname === "/" ? "text-black after:w-full" : "text-gray-700"} after:absolute after:left-0 after:-bottom-3 after:h-[2px] after:bg-black after:w-0 after:transition-all after:duration-300 hover:after:w-full`}>Home</Link>
                    <Link href="/menu" className={`w-[81.90px] flex justify-center relative ${pathname === "/about-us" ? "text-black after:w-full" : "text-gray-700"} after:absolute after:left-0 after:-bottom-3 after:h-[2px] after:bg-black after:w-0 after:transition-all after:duration-300 hover:after:w-full`}>Menu</Link>
                    <Link href="/catering" className={`w-[81.90px] flex justify-center relative ${pathname === "/about-us" ? "text-black after:w-full" : "text-gray-700"} after:absolute after:left-0 after:-bottom-3 after:h-[2px] after:bg-black after:w-0 after:transition-all after:duration-300 hover:after:w-full`}>Catering</Link>
                    <Link href="/gift-card" className={`w-[81.90px] flex justify-center relative ${pathname === "/about-us" ? "text-black after:w-full" : "text-gray-700"} after:absolute after:left-0 after:-bottom-3 after:h-[2px] after:bg-black after:w-0 after:transition-all after:duration-300 hover:after:w-full`}>Gift Card</Link>

                    <div className="relative group inline-block z-[50]">

                        {/* Botón More */}
                        <div className={` w-[81.90px] flex justify-center relative ${pathname === "" ? "text-black after:w-full" : "text-gray-700"} after:absolute after:left-0 after:-bottom-3 after:h-[2px] after:bg-black after:w-0 after:transition-all after:duration-300 hover:after:w-full`}>More<span className="text-sm"><img src="/assets/Arrow_Down.svg" alt="arrow" className="w-[24px] h-[24px]" /></span></div>

                        {/* Dropdown */}
                        <div className="absolute left-1/2 -translate-x-1/2 mt-4 w-[672px] bg-white rounded-2xl shadow-xl p-4 grid grid-cols-2 gap-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">

                            {/* Columna izquierda */}
                            <div className="space-y-3">
                                <Link href="/contact-us" className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-100 transition">
                                    <div className="p-1 rounded-lg">
                                        <img src="/assets/Icon.svg" alt="Contact" />
                                    </div>
                                    <span className="font-medium">Contact Us</span>
                                </Link>

                                <Link href="/careers" className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-100 transition">
                                    <div className="p-1 rounded-lg">
                                        <img src="/assets/icon_careers.svg" alt="Careers" />
                                    </div>
                                    <span className="font-medium">Careers</span>
                                </Link>

                                <Link href="/about" className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-100 transition">
                                    <div className="p-1 rounded-lg">
                                        <img src="/assets/icon_about.svg" alt="About" />
                                    </div>
                                    <span className="font-medium">About Us</span>
                                </Link>
                            </div>

                            {/* Columna derecha */}
                            <div className="space-y-3">
                                <Link href="/happenings" className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-100 transition">
                                    <div className="p-1 rounded-lg">
                                        <img src="/assets/icon_happenings.svg" alt="Happenings" />
                                    </div>
                                    <span className="font-medium">Happenings</span>
                                </Link>

                                <Link href="/join-the-club" className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-100 transition">
                                    <div className="p-1 rounded-lg">
                                        <img src="/assets/icon_join.svg" alt="Join" />
                                    </div>
                                    <span className="font-medium">Join the Club</span>
                                </Link>
                            </div>

                        </div>

                    </div>

                </nav>

                {/* Right side */}
                <div className="flex items-center gap-4">
                    <Link href="/order_online">
                        <button className="cursor-pointer bg-[#04589c] text-white px-9 py-2 rounded-lg font-semibold text-[20px] leading-[24px] border border-transparent hover:bg-white hover:text-[#04589c] hover:border-[#04589c] transition">
                            Order Online
                        </button>
                    </Link>

                    <a
                        href="https://www.instagram.com/elcallejongto/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-[#04589c] p-2 rounded-lg cursor-pointer">
                        <img src="/assets/instagram.svg" alt="Instagram" className="w-[24px] h-[24px]" />
                    </a>
                </div>

            </div>
        </header>
    );
}