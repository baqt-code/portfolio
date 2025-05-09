"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";

interface BlurFadeProps {
  children: React.ReactNode;
  className?: string;
  variant?: Variants;
  duration?: number;
  delay?: number;
  yOffset?: number;
  inView?: boolean;
  inViewAmount?: number; // changed from inViewMargin
  blur?: string;
  ease?: string | number[];
}

const BlurFade = ({
  children,
  className,
  variant,
  duration = 0.4,
  delay = 0,
  yOffset = 6,
  inView = false,
  inViewAmount = 0.5,
  blur = "6px",
  ease = "easeOut",
}: BlurFadeProps) => {
  const ref = useRef(null);

  const isElementInView = useInView(ref, {
    once: true,
    amount: inViewAmount,
  });

  const isInView = !inView || isElementInView;

  const defaultVariants: Variants = {
    hidden: { y: yOffset, opacity: 0, filter: `blur(${blur})` },
    visible: { y: 0, opacity: 1, filter: "blur(0px)" },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variant || defaultVariants}
      transition={{
        delay: 0.04 + delay,
        duration,
        ease,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default BlurFade;
