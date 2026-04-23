import type { Variants } from "framer-motion";

export const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: (delayStep = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: delayStep * 0.06,
      duration: 0.55,
      ease: EASE,
    },
  }),
};
