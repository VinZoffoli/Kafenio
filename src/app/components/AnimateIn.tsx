"use client";
import { motion, type TargetAndTransition } from "motion/react";
import { ReactNode } from "react";

type Direction = "up" | "left" | "right" | "scale";

interface AnimateInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: Direction;
}

const initialMap: Record<Direction, TargetAndTransition> = {
  up:    { opacity: 0, y: 55 },
  left:  { opacity: 0, x: -70 },
  right: { opacity: 0, x: 70 },
  scale: { opacity: 0, scale: 0.82 },
};

const visible = { opacity: 1, y: 0, x: 0, scale: 1 };

export default function AnimateIn({
  children,
  className = "",
  delay = 0,
  duration = 0.65,
  direction = "up",
}: AnimateInProps) {
  return (
    <motion.div
      className={className}
      initial={initialMap[direction]}
      whileInView={visible}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration, ease: [0.25, 0.46, 0.45, 0.94], delay }}
    >
      {children}
    </motion.div>
  );
}
