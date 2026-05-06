"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Header() {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Detectar scroll
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Bloquear scroll del body cuando el menú mobile está abierto
    useEffect(() => {
        if (menuOpen) {
            const scrollbarWidth =
                window.innerWidth - document.documentElement.clientWidth;
            document.body.style.overflow = "hidden";
            if (scrollbarWidth > 0) {
                document.body.style.paddingRight = `${scrollbarWidth}px`;
            }
        } else {
            document.body.style.overflow = "";
            document.body.style.paddingRight = "";
        }
        return () => {
            document.body.style.overflow = "";
            document.body.style.paddingRight = "";
        };
    }, [menuOpen]);

    // Cerrar menú al cambiar de ruta
    useEffect(() => {
        setMenuOpen(false);
    }, [pathname]);

    // Helper: clase del link mobile (resalta si está activo)
    const mobileLinkClass = (href: string) =>
        `flex items-center gap-3 px-4 h-[72px] rounded-lg transition ${pathname === href
            ? "bg-[#f3f3f3]"
            : "hover:bg-gray-100"
        }`;

    return (
        <>
            <header
                className={`w-full bg-white border-b sticky top-0 z-50 transition-all duration-300 ${scrolled ? "h-[60px]" : "h-[72px] lg:h-[80px]"
                    }`}
            >
                <div className="max-w-[1100px] mx-auto h-full flex items-center justify-between px-4 lg:px-0">

                    {/* Logo */}
                    <Link href="/" className="flex-shrink-0">
                        <img
                            src="/assets/logokafenio.svg"
                            alt="logo"
                            className={`cursor-pointer transition-all duration-300 ${scrolled ? "w-[120px] lg:w-[160px]" : "w-[140px] lg:w-[200px]"
                                }`}
                        />
                    </Link>

                    {/* Nav DESKTOP */}
                    <nav className="hidden lg:flex items-center gap-4 text-gray-700 font-medium text-[18px]">
                        <Link
                            href="/"
                            className={`w-[81.90px] flex justify-center relative ${pathname === "/" ? "text-black after:w-full" : "text-gray-700"
                                } after:absolute after:left-0 after:-bottom-3 after:h-[2px] after:bg-black after:w-0 after:transition-all after:duration-300 hover:after:w-full`}
                        >
                            Home
                        </Link>
                        <Link
                            href="/menu"
                            className={`w-[81.90px] flex justify-center relative ${pathname === "/menu" ? "text-black after:w-full" : "text-gray-700"
                                } after:absolute after:left-0 after:-bottom-3 after:h-[2px] after:bg-black after:w-0 after:transition-all after:duration-300 hover:after:w-full`}
                        >
                            Menu
                        </Link>
                        <Link
                            href="/catering"
                            className={`w-[81.90px] flex justify-center relative ${pathname === "/catering" ? "text-black after:w-full" : "text-gray-700"
                                } after:absolute after:left-0 after:-bottom-3 after:h-[2px] after:bg-black after:w-0 after:transition-all after:duration-300 hover:after:w-full`}
                        >
                            Catering
                        </Link>
                        <Link
                            href="/gift-card"
                            className={`w-[81.90px] flex justify-center relative ${pathname === "/gift-card" ? "text-black after:w-full" : "text-gray-700"
                                } after:absolute after:left-0 after:-bottom-3 after:h-[2px] after:bg-black after:w-0 after:transition-all after:duration-300 hover:after:w-full`}
                        >
                            Gift Card
                        </Link>

                        {/* Dropdown More */}
                        <div className="relative group inline-block">
                            {/* Botón More */}
                            <div className="w-[81.90px] flex items-center justify-center gap-1 relative text-gray-700 after:absolute after:left-0 after:-bottom-3 after:h-[2px] after:bg-black after:w-0 after:transition-all after:duration-300 hover:after:w-full cursor-pointer">
                                More
                                <img src="/assets/Arrow_Down.svg" alt="arrow" className="w-[20px] h-[20px]" />
                            </div>

                            {/* Dropdown - centrado en pantalla */}
                            <div className="fixed left-1/2 -translate-x-1/2 mt-4 w-[800px] bg-white rounded-2xl shadow-xl p-6 grid grid-cols-2 gap-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">

                                {/* Contact Us */}
                                <Link href="/contact-us" className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-100 transition">
                                    <div className="flex-shrink-0">
                                        <img src="/assets/Icon.svg" alt="Contact" className="w-[48px] h-[48px]" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="font-semibold text-[16px] text-[#3d3d3d]">Contact Us</span>
                                        <span className="text-[14px] text-[#7d7d7d] leading-[20px]">Reach out with any questions or just say hello.</span>
                                    </div>
                                </Link>

                                {/* Happenings */}
                                <Link href="/happenings" className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-100 transition">
                                    <div className="flex-shrink-0">
                                        <img src="/assets/icon_happenings.svg" alt="Happenings" className="w-[48px] h-[48px]" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="font-semibold text-[16px] text-[#3d3d3d]">Happenings</span>
                                        <span className="text-[14px] text-[#7d7d7d] leading-[20px]">Events, specials, and community moments await.</span>
                                    </div>
                                </Link>

                                {/* Careers */}
                                <Link href="/careers" className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-100 transition">
                                    <div className="flex-shrink-0">
                                        <img src="/assets/icon_careers.svg" alt="Careers" className="w-[48px] h-[48px]" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="font-semibold text-[16px] text-[#3d3d3d]">Careers</span>
                                        <span className="text-[14px] text-[#7d7d7d] leading-[20px]">Join our team.</span>
                                    </div>
                                </Link>

                                {/* Join the Club */}
                                <Link href="/join-the-club" className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-100 transition">
                                    <div className="flex-shrink-0">
                                        <img src="/assets/icon_join.svg" alt="Join" className="w-[48px] h-[48px]" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="font-semibold text-[16px] text-[#3d3d3d]">Join the Club</span>
                                        <span className="text-[14px] text-[#7d7d7d] leading-[20px]">Join, visit, and enjoy the perks.</span>
                                    </div>
                                </Link>

                                {/* About Us */}
                                <Link href="/about" className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-100 transition">
                                    <div className="flex-shrink-0">
                                        <img src="/assets/icon_about.svg" alt="About" className="w-[48px] h-[48px]" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="font-semibold text-[16px] text-[#3d3d3d]">About Us</span>
                                        <span className="text-[14px] text-[#7d7d7d] leading-[20px]">Discover the style, flavors, and vibe behind Kafenio.</span>
                                    </div>
                                </Link>

                            </div>
                        </div>
                    </nav>

                    {/* Right side DESKTOP */}
                    <div className="hidden lg:flex items-center gap-4">
                        <Link href="/order_online">
                            <button className="cursor-pointer bg-[#04589c] text-white px-9 py-2 rounded-lg font-semibold text-[20px] leading-[24px] border border-transparent hover:bg-white hover:text-[#04589c] hover:border-[#04589c] transition">
                                Order Online
                            </button>
                        </Link>
                        <a

                            href="https://www.instagram.com/kafenioavondale/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group border border-[#04589c] bg-white hover:bg-[#04589c] p-1.5 rounded-lg cursor-pointer transition-colors duration-300"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                className="w-[28px] h-[28px]"
                                fill="none"
                            >
                                <path
                                    d="M7.8 2H16.2C19.4 2 22 4.6 22 7.8V16.2C22 17.7383 21.3889 19.2135 20.3012 20.3012C19.2135 21.3889 17.7383 22 16.2 22H7.8C4.6 22 2 19.4 2 16.2V7.8C2 6.26174 2.61107 4.78649 3.69878 3.69878C4.78649 2.61107 6.26174 2 7.8 2ZM7.6 4C6.64522 4 5.72955 4.37928 5.05442 5.05442C4.37928 5.72955 4 6.64522 4 7.6V16.4C4 18.39 5.61 20 7.6 20H16.4C17.3548 20 18.2705 19.6207 18.9456 18.9456C19.6207 18.2705 20 17.3548 20 16.4V7.6C20 5.61 18.39 4 16.4 4H7.6ZM17.25 5.5C17.5815 5.5 17.8995 5.6317 18.1339 5.86612C18.3683 6.10054 18.5 6.41848 18.5 6.75C18.5 7.08152 18.3683 7.39946 18.1339 7.63388C17.8995 7.8683 17.5815 8 17.25 8C16.9185 8 16.6005 7.8683 16.3661 7.63388C16.1317 7.39946 16 7.08152 16 6.75C16 6.41848 16.1317 6.10054 16.3661 5.86612C16.6005 5.6317 16.9185 5.5 17.25 5.5ZM12 7C13.3261 7 14.5979 7.52678 15.5355 8.46447C16.4732 9.40215 17 10.6739 17 12C17 13.3261 16.4732 14.5979 15.5355 15.5355C14.5979 16.4732 13.3261 17 12 17C10.6739 17 9.40215 16.4732 8.46447 15.5355C7.52678 14.5979 7 13.3261 7 12C7 10.6739 7.52678 9.40215 8.46447 8.46447C9.40215 7.52678 10.6739 7 12 7ZM12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9Z"
                                    className="fill-[#04589c] group-hover:fill-white transition-colors duration-300"
                                />
                            </svg>
                        </a>
                    </div>

                    {/* Right side MOBILE/TABLET */}
                    <div className="lg:hidden flex items-center gap-2">
                        <Link href="/order_online">
                            <button className="cursor-pointer bg-[#04589c] text-white px-4 h-[44px] rounded-lg font-semibold text-[14px] sm:text-[16px] leading-[20px] hover:opacity-90 transition whitespace-nowrap">
                                Order Online
                            </button>
                        </Link>

                        <button
                            onClick={() => setMenuOpen(true)}
                            aria-label="Open menu"
                            className="flex items-center justify-center w-[44px] h-[44px] rounded-lg border border-[#04589c]"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#04589c"
                                strokeWidth="2.2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <line x1="4" y1="7" x2="20" y2="7" />
                                <line x1="4" y1="12" x2="20" y2="12" />
                                <line x1="4" y1="17" x2="20" y2="17" />
                            </svg>
                        </button>
                    </div>
                </div>
            </header>

            {/* MOBILE DRAWER */}
            <aside
                className={`lg:hidden fixed inset-0 h-[100dvh] w-full bg-white z-[100] transform transition-transform duration-300 ease-in-out flex flex-col ${menuOpen ? "translate-x-0" : "translate-x-full pointer-events-none"
                    }`}
                aria-hidden={!menuOpen}
            >
                <div className="flex items-center justify-between h-[72px] px-4 border-b flex-shrink-0">
                    <img src="/assets/logokafenio.svg" alt="logo" className="w-[140px]" />
                    <button
                        onClick={() => setMenuOpen(false)}
                        aria-label="Close menu"
                        className="flex items-center justify-center w-[40px] h-[40px] rounded-lg bg-[#04589c] hover:opacity-90 transition"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="white"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <line x1="6" y1="6" x2="18" y2="18" />
                            <line x1="18" y1="6" x2="6" y2="18" />
                        </svg>
                    </button>
                </div>

                <nav className="flex-1 overflow-y-auto py-4 px-3">
                    <Link href="/" className={mobileLinkClass("/")}>
                        <img src="/assets/icomobile_home.svg" alt="" className="w-[48px] h-[48px]" />
                        <span className="text-[16px] font-semibold text-[#3d3d3d]">Home</span>
                    </Link>

                    <Link href="/menu" className={mobileLinkClass("/menu")}>
                        <img src="/assets/icomobile_menu.svg" alt="" className="w-[48px] h-[48px]" />
                        <span className="text-[16px] font-semibold text-[#3d3d3d]">Menu</span>
                    </Link>

                    <Link href="/catering" className={mobileLinkClass("/catering")}>
                        <img src="/assets/icomobile_catering.svg" alt="" className="w-[48px] h-[48px]" />
                        <span className="text-[16px] font-semibold text-[#3d3d3d]">Catering</span>
                    </Link>

                    <Link href="/gift-card" className={mobileLinkClass("/gift-card")}>
                        <img src="/assets/icomobile_giftcard.svg" alt="" className="w-[48px] h-[48px]" />
                        <span className="text-[16px] font-semibold text-[#3d3d3d]">Gift Card</span>
                    </Link>

                    <Link href="/happenings" className={mobileLinkClass("/happenings")}>
                        <img src="/assets/icomobile_happenings.svg" alt="" className="w-[48px] h-[48px]" />
                        <span className="text-[16px] font-semibold text-[#3d3d3d]">Happenings</span>
                    </Link>

                    <Link href="/join-the-club" className={mobileLinkClass("/join-the-club")}>
                        <img src="/assets/icomobile_jointheclub.svg" alt="" className="w-[48px] h-[48px]" />
                        <span className="text-[16px] font-semibold text-[#3d3d3d]">Join The Club</span>
                    </Link>

                    <Link href="/careers" className={mobileLinkClass("/careers")}>
                        <img src="/assets/icomobile_careers.svg" alt="" className="w-[48px] h-[48px]" />
                        <span className="text-[16px] font-semibold text-[#3d3d3d]">Careers</span>
                    </Link>

                    <Link href="/contact-us" className={mobileLinkClass("/contact-us")}>
                        <img src="/assets/icomobile_contactus.svg" alt="" className="w-[48px] h-[48px]" />
                        <span className="text-[16px] font-semibold text-[#3d3d3d]">Contact</span>
                    </Link>

                    <Link href="/about" className={mobileLinkClass("/about")}>
                        <img src="/assets/icomobile_aboutus.svg" alt="" className="w-[48px] h-[48px]" />
                        <span className="text-[16px] font-semibold text-[#3d3d3d]">About Us</span>
                    </Link>
                </nav>
            </aside>
        </>
    );
}