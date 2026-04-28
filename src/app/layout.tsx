import "./globals.css"
import { Roboto } from "next/font/google";
import Header from "./components/header";
import Footer from "./components/footer";

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'], // ajusta según necesites
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
