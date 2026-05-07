import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Kafenio Greek Diner in Decatur GA",
    description: "Contact Kafenio Greek Diner in Decatur GA for hours, directions, catering questions, or general inquiries.",
    openGraph: {
        title: "Contact Kafenio Greek Diner in Decatur GA",
        description: "Contact Kafenio Greek Diner in Decatur GA for hours, directions, catering questions, or general inquiries.",
        url: "https://www.kafeniogreekdiner.com/contact-us",
    },
};

export default function ContactUsLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
