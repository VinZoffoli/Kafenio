import { Roboto } from "next/font/google";
import type { ComponentType } from "react";
import { postsMeta } from "@/content/blog/posts-meta";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "600"] });

export function generateStaticParams() {
    return Object.keys(postsMeta).map((slug) => ({ slug }));
}

export const dynamicParams = false;

export default async function BlogPost({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const metadata = postsMeta[slug];
    const { default: Post } = (await import(
        `@/content/blog/${slug}.md`
    )) as unknown as { default: ComponentType };

    return (
        <main>
            {/* Hero */}
            <section className="relative w-full h-[400px] md:h-[45vh]">
                <img
                    src="/assets/hero_blog.webp"
                    alt="Blog hero"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-black/30" />
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
                    <img
                        src="/assets/icono_heroBlog.svg"
                        alt="icono blog"
                        className="w-[140px] md:w-[180px] lg:w-[232px] h-auto mb-2 hero-fadein"
                    />
                    <h1 className="text-[44px] md:text-[58px] lg:text-[72px] leading-tight font-epitaph text-white hero-fadein uppercase">
                        BLOG
                    </h1>
                    <p className="text-[26px] md:text-[32px] lg:text-[40px] font-kautiva font-bold text-white mt-2 hero-fadein-delay-1">
                        Kafenio
                    </p>
                </div>
            </section>

            {/* Article */}
            <section className="w-full py-[60px] md:py-[80px] px-6 bg-white flex flex-col items-center">
                <div className="w-full max-w-[780px]">
                    {/* Back link */}
                    <a
                        href="/blog"
                        className={`${roboto.className} inline-flex items-center gap-1 text-[#04589C] text-[14px] font-semibold mb-8 hover:underline`}
                    >
                        ← Back to Blog
                    </a>

                    {/* Title */}
                    <h1 className="font-epitaph text-[#022542] text-[30px] md:text-[38px] lg:text-[46px] uppercase leading-tight mb-4">
                        {metadata.title}
                    </h1>

                    {/* Date */}
                    <p
                        className={`${roboto.className} text-[14px] md:text-[15px] font-semibold text-[#04589C] mb-6`}
                    >
                        {metadata.date}
                    </p>

                    {/* Divider */}
                    <div className="w-full h-[2px] bg-[#85431a] mb-8 rounded-full" />

                    {/* MDX Content */}
                    <Post />
                </div>
            </section>
        </main>
    );
}
