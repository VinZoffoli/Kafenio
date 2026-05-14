"use client";
import { useEffect } from "react";

export default function TypekitLoader() {
    useEffect(() => {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "https://use.typekit.net/suv6wse.css";
        document.head.appendChild(link);
    }, []);
    return null;
}
