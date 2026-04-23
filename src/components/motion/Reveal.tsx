"use client";

import { motion, useReducedMotion } from "framer-motion";
import { type ReactNode } from "react";
import { fadeUp } from "@/lib/motion";
import { cn } from "@/lib/cn";

type Props = {
  children: ReactNode;
  className?: string;
  /** Stagger index (0, 1, 2, …) for grouped reveals */
  index?: number;
  once?: boolean;
  amount?: "some" | "all" | number;
};

/**
 * Scroll-reveal; respects `prefers-reduced-motion`.
 */
export function Reveal({ children, className, index = 0, once = true, amount = 0.2 }: Props) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      custom={index}
      variants={fadeUp}
    >
      {children}
    </motion.div>
  );
}
