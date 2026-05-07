import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Greek Restaurant Menu in Decatur GA",
    description: "Explore Kafenio's Greek menu featuring fresh ingredients, traditional dishes, and flavorful options for breakfast, lunch, and dinner.",
    openGraph: {
        title: "Greek Restaurant Menu in Decatur GA",
        description: "Explore Kafenio's Greek menu featuring fresh ingredients, traditional dishes, and flavorful options for breakfast, lunch, and dinner.",
        url: "https://www.kafeniogreekdiner.com/menu",
    },
};

export default function MenuLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
