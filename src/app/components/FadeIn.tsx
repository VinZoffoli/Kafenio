"use client";
import { motion } from "motion/react";

interface FadeInProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}

export default function FadeIn({ children, className = "", delay = 0 }: FadeInProps) {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.55, ease: "easeOut", delay }}
        >
            {children}
        </motion.div>
    );
}
