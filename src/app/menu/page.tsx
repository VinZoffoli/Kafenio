"use client";
import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { Roboto, Montserrat } from "next/font/google";
import { supabase, supabaseClientId } from "@/lib/supabase";

const roboto = Roboto({
    subsets: ["latin"],
    weight: ["400", "600"],
});


const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["400", "600"],
});

const tabs = [
    { id: "breakfast", label: "Breakfast" },
    { id: "lunch-dinner", label: "Lunch + Dinner" },
    { id: "desserts", label: "Desserts" },
    { id: "beer-wine", label: "Beer & Wine" },
    { id: "coffee-espresso", label: "Coffee & Espresso" },
    { id: "beverages", label: "Beverages" },
];

interface MenuItem {
    image: string;
    name: string;
    description: string;
    price: string;
}

interface SubSection {
    title: string;
    subtitle?: string;
    footnote?: string;
    items: MenuItem[];
}

interface TabSection {
    subsections: SubSection[];
}

type MenuCategoryRow = {
    id: string;
    name: string;
    description: string | null;
    sort_order: number;
};

type MenuItemRow = {
    id: string;
    category_id: string;
    name: string;
    description: string | null;
    base_price: number | null;
    base_price_max: number | null;
    base_is_price_range: boolean | null;
    image_url: string | null;
    sort_order: number;
    price_variants: { name: string; price: string | number }[] | null;
};

const tabCategories: Record<string, string[]> = {
    "breakfast": [
        "Breakfast sandwiches",
        "Breakfast mains",
        "Kids menu",
        "Breakfast Sides",
    ],
    "lunch-dinner": [
        "Mezethes / starters",
        "Salads",
        "Sides",
        "Tylixta / Wraps",
        "Kyrios Piato / Mains",
    ],
    "desserts": ["Desserts"],
    "beer-wine": [
        "Draft Beers",
        "Can / Bottle",
        "Red Wines",
        "White Wines",
        "Sparkling",
        "Wine Cocktails",
    ],
    "coffee-espresso": ["Coffee & Espresso"],
    "beverages": ["Beverages"],
};

// Metadata adicional para cada subsección (subtítulo + footnote)
// Como Supabase no almacena estos textos descriptivos, los definimos aquí
const categoryMeta: Record<string, { subtitle?: string; footnote?: string }> = {
    "Breakfast sandwiches": {
        subtitle: "BREAKFAST BREADS: PITA, BAGEL, TOAST, GLUTEN-FREE PITA +0.50",
        footnote: "SUB VEGAN SAUSAGE (V) ON ANY SANDWICH 1.00\nSUB TOFU SCRAM (V) ON ANY SANDWICH 1.00",
    },
    "Breakfast mains": {
    },
    "Kids menu": {
        subtitle: "(12 and under)",
    },
    "Breakfast Sides": {},
    "Mezethes / starters": {},
    "Salads": {
        footnote: "ADD GYRO, FALAFEL, SOUVLAKI CHICKEN 6.00\n\nADD HUMMUS 4.50\n\nDressings: Lemon vinaigrette, Pomegranate vinaigrette, Greek mustard sauce, Tzatziki, Tahini, Caesar.",
    },
    "Sides": {},
    "Tylixta / Wraps": {
    },
    "Kyrios Piato / Mains": {
        footnote: "GLUTEN FREE PITA AVAILABLE\n\nWe strive to provide clean, tasty and affordable cuisine in a pleasant and lively atmosphere.\n(Don't mind the Greek yelling in the kitchen. He's not actually mad.)\nOur roasted Greek veg is a mix of zucchini, eggplant, onion, bell pepper, evoo, tomato sauce.\nKasseri cheese is a mild yellow, buttery and tangy cheese. Keftedes are Greek style meatballs (just like my mom's).\nWe use extra virgin olive oil (EVOO) in all our sauces, dressings and dips.",
    },
    "Desserts": {},
    "Draft Beers": {},
    "Can / Bottle": {},
    "Red Wines": {},
    "White Wines": {},
    "Sparkling": {},
    "Wine Cocktails": {},
    "Coffee & Espresso": {
        footnote: "ADD MOCHA, VANILLA, CARAMEL, HONEY SYRUP 0.50\nSUB OAT MILK 1.00",
    },
    "Beverages": {},
};

function getCategoryMeta(name: string): { subtitle?: string; footnote?: string } {
    const normalizedName = name.trim();
    // Búsqueda case-insensitive
    const key = Object.keys(categoryMeta).find(
        (k) => normalizeCategoryName(k) === normalizeCategoryName(normalizedName)
    );
    return key ? categoryMeta[key] : {};
}

function createEmptyMenuData(): Record<string, TabSection> {
    return Object.fromEntries(
        tabs.map((tab) => [tab.id, { subsections: [] }])
    );
}

function normalizeCategoryName(value: string): string {
    return value.trim().toLowerCase();
}

function formatPrice(item: MenuItemRow): string {
    if (item.price_variants && item.price_variants.length > 0) {
        return item.price_variants
            .map((variant) => `${variant.name} ${variant.price}`)
            .join("\n");
    }

    if (item.base_price === null) return "";

    if (item.base_is_price_range && item.base_price_max !== null) {
        return `${item.base_price} - ${item.base_price_max}`;
    }

    return String(item.base_price);
}

function rowsToMenuData(
    categories: MenuCategoryRow[],
    items: MenuItemRow[]
): Record<string, TabSection> {
    const result = createEmptyMenuData();
    const categoriesByName = new Map(
        categories.map((category) => [normalizeCategoryName(category.name), category])
    );

    const itemsByCategoryId = new Map<string, MenuItemRow[]>();
    for (const item of items) {
        const group = itemsByCategoryId.get(item.category_id) ?? [];
        group.push(item);
        itemsByCategoryId.set(item.category_id, group);
    }

    for (const tab of tabs) {
        const categoryNames = tabCategories[tab.id] ?? [];
        result[tab.id].subsections = categoryNames.map((categoryName) => {
            const category = categoriesByName.get(normalizeCategoryName(categoryName));
            const categoryItems = category
                ? (itemsByCategoryId.get(category.id) ?? []).sort((a, b) => a.sort_order - b.sort_order)
                : [];

            // Aplicar metadata (subtitle + footnote) desde la constante categoryMeta
            const meta = getCategoryMeta(categoryName);

            return {
                title: category?.name ?? categoryName,
                // Si Supabase tiene description, úsalo; si no, usa el subtitle del meta
                subtitle: category?.description || meta.subtitle || undefined,
                footnote: meta.footnote || undefined,
                items: categoryItems.map((item) => ({
                    image: item.image_url || "/assets/logo_hero.svg",
                    name: item.name,
                    description: item.description || "",
                    price: formatPrice(item),
                })),
            };
        });
    }

    return result;
}

interface MenuItemCardProps {
    item: MenuItem;
}

function MenuItemCard({ item }: MenuItemCardProps) {
    const hasImage = item.image && item.image !== "/assets/logo_hero.svg";

    return (
        <div className="bg-white rounded-2xl shadow-md py-6 md:py-8 px-4  flex flex-col items-center justify-center text-center gap-4">
            {hasImage && (
                <div className="w-full aspect-square flex items-center justify-center">
                    <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
                </div>
            )}
            <h4 className="text-[24px] md:text-[28px] font-epitaph text-[#022542] leading-tight uppercase">{item.name}</h4>
            <p className={`${roboto.className} text-[14px] md:text-[16px] leading-[20px] md:leading-[22px] text-[#525252] whitespace-pre-line`}>
                {item.description}
            </p>
            <p className={`${roboto.className} text-[14px] md:text-[16px] font-semibold text-[#525252]`}>
                {item.price}
            </p>
        </div>
    );
}

interface SubSectionBlockProps {
    title: string;
    subtitle?: string;
    footnote?: string;
    items: MenuItem[];
}

function SubSectionBlock({ title, subtitle, footnote, items }: SubSectionBlockProps) {
    return (
        <div className="w-full py-[40px] md:py-[60px]">
            {/* Título de subsección con icono detrás */}
            <div className="flex flex-col items-center text-center mb-[30px] md:mb-[40px] px-4">
                {/* Wrapper relativo para superponer el icono */}
                <div className="relative inline-flex flex-col items-center">
                    {/* Icono detrás del título - centrado verticalmente */}
                    <img
                        src="/assets/icontitle.svg"
                        alt=""
                        aria-hidden="true"
                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[100%] w-[88px] h-auto pointer-events-none z-0"
                    />
                    {/* Título */}
                    <h3 className="relative z-10 text-[34px] md:text-[38px] font-epitaph font-bold text-[#043e6f] leading-tight uppercase">
                        {title}
                    </h3>
                </div>

                {/* Subtítulo */}
                {subtitle && (
                    <p className="text-[21px] md:text-[24px] font-kautiva font-normal text-[#022542] mt-2 uppercase">
                        {subtitle}
                    </p>
                )}
            </div>

            {/* Grid de platos */}
            {items.length > 0 ? (
                <div className="px-4 md:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                        {items.map((item, i) => (
                            <MenuItemCard key={i} item={item} />
                        ))}
                    </div>
                </div>
            ) : (
                <div className="text-center text-gray-400 italic px-4">Coming soon...</div>
            )}

            {/* Footnote (texto debajo de las cards) */}
            {footnote && (
                <div className="text-center mt-8 md:mt-10 px-4">
                    <p className={`font-kautiva text-[19px] md:text-[24px] font-light text-[#022542] leading-[21px] whitespace-pre-line `}>
                        {footnote}
                    </p>
                </div>
            )}
        </div>
    );
}

interface TabSectionBlockProps {
    id: string;
    subsections: SubSection[];
}

function TabSectionBlock({ id, subsections }: TabSectionBlockProps) {
    return (
        <section id={id} className="w-full scroll-mt-[180px] md:scroll-mt-[200px]">
            {subsections.map((sub, i) => (
                <SubSectionBlock
                    key={i}
                    title={sub.title}
                    subtitle={sub.subtitle}
                    footnote={sub.footnote}
                    items={sub.items}
                />
            ))}
        </section>
    );
}

export default function Menu() {
    const searchParams = useSearchParams();
    const [activeTab, setActiveTab] = useState(tabs[0].id);
    const [headerHeight, setHeaderHeight] = useState(80);
    const tabsContainerRef = useRef<HTMLDivElement>(null);
    const [menuData, setMenuData] = useState<Record<string, TabSection>>(() => createEmptyMenuData());
    const [menuError, setMenuError] = useState<string | null>(null);

    useEffect(() => {
        let isMounted = true;

        async function loadMenu() {
            const { data: menus, error: menusError } = await supabase
                .from("menus")
                .select("id, name, sort_order")
                .eq("restaurant_id", supabaseClientId)
                .eq("is_active", true)
                .order("sort_order", { ascending: true });

            if (menusError) {
                console.error("[menu] Supabase menus error:", menusError.message, menusError.details);
                if (isMounted) setMenuError("Menu unavailable");
                return;
            }

            const menuIds = menus?.map((menu) => menu.id) ?? [];
            if (menuIds.length === 0) {
                if (isMounted) setMenuData(createEmptyMenuData());
                return;
            }

            const { data: categories, error: categoriesError } = await supabase
                .from("menu_categories")
                .select("id, name, description, sort_order")
                .in("menu_id", menuIds)
                .order("sort_order", { ascending: true });

            if (categoriesError) {
                console.error("[menu] Supabase categories error:", categoriesError.message, categoriesError.details);
                if (isMounted) setMenuError("Menu unavailable");
                return;
            }

            const categoryIds = categories?.map((category) => category.id) ?? [];
            if (categoryIds.length === 0) {
                if (isMounted) setMenuData(createEmptyMenuData());
                return;
            }

            const { data: items, error: itemsError } = await supabase
                .from("menu_items")
                .select("id, category_id, name, description, base_price, base_price_max, base_is_price_range, image_url, sort_order, price_variants")
                .in("category_id", categoryIds)
                .eq("is_active", true)
                .order("sort_order", { ascending: true });

            if (itemsError) {
                console.error("[menu] Supabase items error:", itemsError.message, itemsError.details);
                if (isMounted) setMenuError("Menu unavailable");
                return;
            }

            console.log("[menu] Supabase client:", supabaseClientId);
            console.log("[menu] Supabase categories:", categories);
            console.log("[menu] Supabase items:", items);

            if (isMounted) {
                setMenuError(null);
                setMenuData(rowsToMenuData(
                    (categories ?? []) as MenuCategoryRow[],
                    (items ?? []) as unknown as MenuItemRow[]
                ));
            }


        }

        loadMenu();

        return () => {
            isMounted = false;
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const newHeight = window.scrollY > 10 ? 60 : 80;
            setHeaderHeight(newHeight);
        };
        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveTab(entry.target.id);
                    }
                });
            },
            {
                rootMargin: "-220px 0px -60% 0px",
                threshold: 0,
            }
        );

        tabs.forEach((tab) => {
            const section = document.getElementById(tab.id);
            if (section) observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    // Reemplaza este useEffect del autoscroll horizontal:
    useEffect(() => {
        const tabButton = tabsContainerRef.current?.querySelector(
            `[data-tab-id="${activeTab}"]`
        ) as HTMLElement | null;
        const container = tabsContainerRef.current;

        if (tabButton && container) {
            const containerWidth = container.offsetWidth;
            const buttonWidth = tabButton.offsetWidth;
            const buttonLeft = tabButton.offsetLeft;
            // Centrar el button en el contenedor
            const scrollPosition = buttonLeft - (containerWidth / 2) + (buttonWidth / 2);
            container.scrollTo({
                left: scrollPosition,
                behavior: "smooth",
            });
        }
    }, [activeTab]);

    useEffect(() => {
        const tab = searchParams.get("tab");
        if (!tab) return;

        const totalSubsections = Object.values(menuData).reduce(
            (acc, t) => acc + t.subsections.length,
            0
        );
        if (totalSubsections === 0) return;

        const timer = setTimeout(() => {
            const section = document.getElementById(tab);
            if (section) {
                const currentHeaderHeight = window.scrollY > 10 ? 60 : 80;
                const offset = currentHeaderHeight + 80;
                const top = section.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top, behavior: "smooth" });
                setActiveTab(tab);
            }
        }, 300);

        return () => clearTimeout(timer);
    }, [searchParams, menuData]);

    const handleTabClick = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            const offset = headerHeight + 80;
            const top = section.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top, behavior: "smooth" });
        }
    };

    return (
        <main className="bg-[#f1f4f9]">
            <section className="relative w-full h-[400px] md:h-[45vh]">

                {/* Imagen mobile */}
                <img
                    src="/assets/hero_menu_mobile.webp"
                    alt="Menu hero"
                    className="absolute inset-0 w-full h-full object-cover object-center md:hidden"
                />

                {/* Imagen desktop */}
                <img
                    src="/assets/hero_menu_desktop.webp"
                    alt="Menu hero"
                    className="absolute inset-0 w-full h-full object-cover object-center hidden md:block"
                />

                {/* Overlay opcional */}
                <div className="absolute inset-0 bg-black/20" />

                {/* Contenido */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">

                    <img
                        src="/assets/icono_catering2.svg"
                        alt="icono menu"
                        className="w-[120px] md:w-[160px] lg:w-[200px] h-auto mb-2 hero-fadein"
                    />

                    <h1 className="text-[40px] md:text-[52px] lg:text-[64px] leading-tight font-epitaph text-white hero-fadein">
                        MENU
                    </h1>

                    <p className="text-[26px] md:text-[32px] lg:text-[40px] font-kautiva font-bold text-white mt-2 hero-fadein-delay-1">
                        Kafenio
                    </p>

                </div>
            </section>

            {/* TABS STICKY - SEPARADO del contenedor blanco para que funcione el sticky */}
            <div
                className="sticky z-40 transition-all duration-300 bg-[#f1f4f9]"
                style={{ top: `${headerHeight}px` }}
            >
                <div className="max-w-[1100px] mx-auto mt-0 md:mt-[70px]">
                    <div className="bg-[#fefeff] rounded-none md:rounded-t-2xl shadow-[0_-2px_8px_rgba(0,0,0,0.04)]">
                        <div ref={tabsContainerRef} className="overflow-x-auto scrollbar-hide">
                            <div className={`${montserrat.className} flex items-center gap-5 md:gap-10 px-4 md:px-8 pt-4 md:pt-5 pb-0 whitespace-nowrap justify-start md:justify-center`}>
                                {tabs.map((tab) => {
                                    const isActive = activeTab === tab.id;
                                    return (
                                        <button
                                            key={tab.id}
                                            data-tab-id={tab.id}
                                            onClick={() => handleTabClick(tab.id)}
                                            data-text={tab.label}
                                            className={`tab-button relative text-[13px] md:text-[16px] text-[#05589c] cursor-pointer pb-3 md:pb-4 hover:font-semibold ${isActive ? "font-semibold" : "font-normal"
                                                }`}
                                        >
                                            {tab.label}
                                            {isActive && (
                                                <span className="absolute left-0 right-0 -bottom-[1px] h-[2px] bg-[#05589c]"></span>
                                            )}
                                        </button>
                                    );
                                })}
                            </div>
                            {/* Línea divisoria con padding lateral - no llega a los extremos */}
                            <div className="px-4 md:px-8">
                                <div className="h-[1px] bg-[#9ca3af]"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contenedor de las secciones del menú */}
            <div className="max-w-[1100px] mx-auto pb-12">
                <div className="bg-[#fefeff] rounded-none md:rounded-b-2xl shadow-sm overflow-hidden">
                    {menuError && (
                        <div className="px-4 pt-8 text-center text-sm text-red-700">
                            {menuError}
                        </div>
                    )}
                    {tabs.map((tab) => {
                        const tabData = menuData[tab.id];
                        if (!tabData) return null;
                        return (
                            <TabSectionBlock
                                key={tab.id}
                                id={tab.id}
                                subsections={tabData.subsections}
                            />
                        );
                    })}
                </div>
            </div>
        </main>
    );
}
