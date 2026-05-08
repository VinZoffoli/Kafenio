"use client";

import { useEffect, useState } from "react";

export default function ScrollToTop() {
    const [visible, setVisible] = useState(false);
    const [hovered, setHovered] = useState(false);

    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > 300);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            aria-label="Scroll to top"
            style={{
                position: "fixed",
                bottom: "2rem",
                right: "2rem",
                width: "44px",
                height: "44px",
                padding: "0.75rem",
                backgroundColor: hovered ? "white" : "#05589c",
                border: "1px solid #05589c",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                opacity: visible ? 1 : 0,
                pointerEvents: visible ? "auto" : "none",
                transition: "opacity 0.3s ease, background-color 0.25s ease, color 0.25s ease",
                zIndex: 9999,
            }}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke={hovered ? "#05589c" : "white"}
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ transition: "stroke 0.25s ease" }}
            >
                <polyline points="18 15 12 9 6 15" />
            </svg>
        </button>
    );
}
