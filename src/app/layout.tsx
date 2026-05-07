import "./globals.css"
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Header from "./components/header";
import Footer from "./components/footer";

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

const roboto = Roboto({
    subsets: ['latin'],
    weight: ['400', '500', '700'],
    variable: '--font-roboto',
});

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={roboto.variable}>
            <head>
                <link rel="stylesheet" href="https://use.typekit.net/suv6wse.css" />
            </head>
            <body>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}