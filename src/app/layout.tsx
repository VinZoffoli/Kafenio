import "./globals.css"
import { Roboto } from "next/font/google";
import Header from "./components/header";
import Footer from "./components/footer";

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