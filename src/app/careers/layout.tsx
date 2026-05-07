import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Restaurant Jobs in Decatur GA",
    description: "Looking for restaurant jobs in Decatur GA? Join the Kafenio team and work in a friendly, fast-paced environment.",
    openGraph: {
        title: "Restaurant Jobs in Decatur GA",
        description: "Looking for restaurant jobs in Decatur GA? Join the Kafenio team and work in a friendly, fast-paced environment.",
        url: "https://www.kafeniogreekdiner.com/careers",
    },
};

export default function CareersLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
