import type { Metadata } from "next";
import { Roboto } from "next/font/google";

export const metadata: Metadata = {
    title: "Greek Food Blog & Updates in Decatur",
    description: "Read the Kafenio blog for Greek food tips, restaurant news, seasonal specials, and updates from Decatur GA.",
    openGraph: {
        title: "Greek Food Blog & Updates in Decatur",
        description: "Read the Kafenio blog for Greek food tips, restaurant news, seasonal specials, and updates from Decatur GA.",
        url: "https://www.kafeniogreekdiner.com/blog",
    },
};

const roboto = Roboto({
    subsets: ["latin"],
    weight: ["400", "600"],
});

interface BlogPost {
    image: string;
    badge: string;
    badgeSubtitle?: string;
    title: string;
    date: string;
    excerpt: string;
    href: string;
}

const posts: BlogPost[] = [
    {
        image: "/assets/post1.webp",
        badge: "Greek Salad Near Me:",
        badgeSubtitle: "Fresh, Simple Flavors at Kafenio Avondale",
        title: "Greek Salad Near Me: Fresh Mediterranean Flavors in Decatur",
        date: "May 6, 2026",
        excerpt: "If you're searching for a greek salad near me...",
        href: "/blog/greek-salad-near-me",
    },
    {
        image: "/assets/post2.webp",
        badge: "Greek Coffee Shop Decatur:",
        badgeSubtitle: "Start Your Day at Kafenio Avondale",
        title: "Greek Coffee Shop Decatur: Coffee and Breakfast at Kafenio Avondale",
        date: "April 13, 2026",
        excerpt: "Looking for a Greek coffee shop in Decatur? ...",
        href: "/blog/greek-coffee-shop-decatur",
    },
    {
        image: "/assets/post3.webp",
        badge: "Greek Diner Near Me:",
        badgeSubtitle: "Fresh Mediterranean Dining at Kafenio Avondale",
        title: "Kafenio Avondale: Greek Diner Near Me in Decatur GA",
        date: "March 20, 2026",
        excerpt: "Looking for a Greek diner near me? Stop by ...",
        href: "/blog/greek-diner-near-me",
    },
    {
        image: "/assets/post4.webp",
        badge: "Greek Salad:",
        badgeSubtitle: "Light, Fresh Mediterranean Flavors at Kafenio Avondale",
        title: "Greek Salad at Kafenio Avondale: Fresh Mediterranean Classic",
        date: "March 5, 2026",
        excerpt: "Enjoy a fresh greek salad at Kafenio Avondale...",
        href: "/blog/greek-salad-at-kafenio",
    },
    {
        image: "/assets/post5.webp",
        badge: "Wholesome Breakfast:",
        badgeSubtitle: "Start Your Day at Kafenio Avondale",
        title: "Wholesome Breakfast: Start Your Day at Kafenio Avondale",
        date: "February 20, 2026",
        excerpt: "Enjoy a wholesome breakfast at Kafenio Avo...",
        href: "/blog/wholesome-breakfast",
    },
    {
        image: "/assets/post6.webp",
        badge: "Baklava Cheesecake:",
        badgeSubtitle: "An Exquisite Greek-American Dessert",
        title: "Baklava Cheesecake: An Exquisite Greek-American Dessert",
        date: "February 2, 2026",
        excerpt: "At Kafenio, we love to create twists on Greek...",
        href: "/blog/baklava-cheesecake",
    },
];

interface BlogCardProps {
    post: BlogPost;
}

function BlogCard({ post }: BlogCardProps) {
    return (
        <a
            href={post.href}
            className="bg-white overflow-hidden shadow-md flex flex-col group hover:shadow-lg transition-shadow"
        >
            {/* Imagen con badge superpuesto */}
            <div className="relative w-full h-[180px] md:h-[220px] overflow-hidden">
                <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
            </div>

            {/* Contenido del card */}
            <div className="flex flex-col gap-3 p-5 md:p-6">
                <h3 className="text-[20px] md:text-[22px] lg:text-[24px] font-epitaph text-[#022542] leading-tight uppercase">
                    {post.title}
                </h3>
                <p className={`${roboto.className} text-[14px] md:text-[15px] font-semibold text-[#04589C]`}>
                    {post.date}
                </p>
                <p className={`${roboto.className} text-[14px] md:text-[15px] leading-[22px] text-[#525252]`}>
                    {post.excerpt}
                </p>
            </div>
        </a>
    );
}

export default function Blog() {
    return (
        <main>
            {/* HERO */}
            <section className="relative w-full h-[400px] md:h-[45vh]">
                <img
                    src="/assets/hero_blog.webp"
                    alt="Blog hero"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0" />

                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
                    <img
                        src="/assets/icono_heroBlog.svg"
                        alt="icono blog"
                        className="w-[140px] md:w-[180px] lg:w-[232px] h-auto mb-2 hero-fadein"
                    />
                    <h1 className="text-[44px] md:text-[58px] lg:text-[72px] leading-tight font-epitaph text-white hero-fadein">
                        BLOG
                    </h1>
                    <p className="text-[26px] md:text-[32px] lg:text-[40px] font-kautiva font-bold text-white mt-2 hero-fadein-delay-1">
                        Kafenio
                    </p>
                </div>
            </section>

            {/* INTRO */}
            <section className="w-full py-[50px] md:py-[80px] px-6 flex flex-col items-center text-center bg-white">
                {/* Icono */}
                <img
                    src="/assets/icono_seccionBlog.svg"
                    alt="icon"
                    className="w-[52px] md:w-[60px] lg:w-[68px] h-auto mb-4"
                />

                {/* Título */}
                <h2 className="text-[36px] md:text-[42px] lg:text-[48px] leading-tight font-epitaph text-[#04589C]">
                    STORIES FROM THE KAFENIO TABLE
                </h2>

                {/* Subtítulo */}
                <p className="text-[20px] md:text-[26px] lg:text-[32px] font-bold font-kautiva text-[#85431a] mt-2 leading-[1.2]">
                    Food, Community, And A Little Mediterranean Inspiration.
                </p>

                {/* Descripción */}
                <p className="text-[15px] md:text-[16px] leading-[24px] md:leading-[26px] text-[#525252] max-w-[720px] mt-3">
                    From behind-the-scenes moments to new dishes and neighborhood stories, this is where we share
                    what's happening at Kafenio. Take a look around and stay connected to the flavors and people that make
                    our diner special.
                </p>

                {/* RECENT BLOG POSTS */}
                <div className="flex flex-col items-center mt-[40px] md:mt-[60px] mb-[30px] md:mb-[40px]">
                    <p className={`${roboto.className} text-[14px] md:text-[16px] font-semibold tracking-[0.2em] text-[#3d3d3d] uppercase`}>
                        Recent Blog Posts
                    </p>
                    <div className="w-[40px] h-[2px] bg-[#85431a] mt-2" />
                </div>

                {/* Grid de posts */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-[900px] w-full">
                    {posts.map((post, i) => (
                        <BlogCard key={i} post={post} />
                    ))}
                </div>
            </section>
        </main>
    );
}