import "./globals.css"
import type { Metadata } from "next";
import { roboto, montserrat } from "@/app/fonts";
import Header from "./components/header";
import Footer from "./components/footer";
import ScrollToTop from "./components/ScrollToTop";
import TypekitLoader from "./components/TypekitLoader";

export const metadata: Metadata = {
    metadataBase: new URL("https://www.kafeniogreekdiner.com"),
    title: {
        template: "%s | Kafenio Greek Diner",
        default: "Kafenio Greek Diner – Authentic Greek Food in Decatur, GA",
    },
    description: "Enjoy authentic Greek cuisine in Decatur GA at Kafenio. Fresh ingredients, classic recipes, and a welcoming diner-style atmosphere.",
    openGraph: {
        type: "website",
        siteName: "Kafenio Greek Diner",
        locale: "en_US",
    },
    twitter: {
        card: "summary_large_image",
    },
    verification: {
        google: "coqGv02WWNeryPzwaHXgC67587NEGuuX5RacoqNgcuA",
    },
};


export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${roboto.variable} ${montserrat.variable}`}>
            <head>
                <link rel="preconnect" href="https://use.typekit.net" crossOrigin="anonymous" />
                <link rel="preconnect" href="https://p.typekit.net" crossOrigin="anonymous" />
                <link rel="preconnect" href="https://kqibgbvdgxrjhdyfoxvm.supabase.co" crossOrigin="anonymous" />
                <link rel="preload" href="/fonts/Kautiva Pro Regular.otf" as="font" type="font/otf" crossOrigin="anonymous" />
            </head>
            <body className="relative">
                <TypekitLoader />
                <Header />
                {children}
                <Footer />
                <ScrollToTop />
            </body>
        </html>
    );
}