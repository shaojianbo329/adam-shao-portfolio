"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
};

function useLightMotion() {
  const prefersReducedMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(max-width: 640px)");
    const update = () => setIsMobile(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  return {
    prefersReducedMotion,
    isMobile,
    shouldReduce: prefersReducedMotion,
    yScale: isMobile ? 0.55 : 1,
    blur: isMobile ? 3 : 6
  };
}

export function Reveal({ children, className, delay = 0, y = 24 }: RevealProps) {
  const motionPreference = useLightMotion();
  const revealY = motionPreference.shouldReduce ? 0 : y * motionPreference.yScale;

  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        y: revealY,
        filter: motionPreference.shouldReduce
          ? "none"
          : `blur(${motionPreference.blur}px)`
      }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.2, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.82, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function PageLoad({
  children,
  className,
  delay = 0,
  y = 16
}: RevealProps) {
  const motionPreference = useLightMotion();
  const revealY = motionPreference.shouldReduce ? 0 : y * motionPreference.yScale;

  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        y: revealY,
        filter: motionPreference.shouldReduce
          ? "none"
          : `blur(${Math.max(motionPreference.blur - 1, 2)}px)`
      }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.78, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function Stagger({
  children,
  className,
  delay = 0
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const motionPreference = useLightMotion();

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.16, margin: "0px 0px -8% 0px" }}
      variants={{
        hidden: {},
        show: {
          transition: {
            delayChildren: delay,
            staggerChildren: motionPreference.shouldReduce
              ? 0
              : motionPreference.isMobile
                ? 0.045
                : 0.08
          }
        }
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  y = 22
}: {
  children: ReactNode;
  className?: string;
  y?: number;
}) {
  const motionPreference = useLightMotion();
  const revealY = motionPreference.shouldReduce ? 0 : y * motionPreference.yScale;

  return (
    <motion.div
      className={className}
      variants={{
        hidden: {
          opacity: 0,
          y: revealY,
          filter: motionPreference.shouldReduce
            ? "none"
            : `blur(${motionPreference.blur}px)`
        },
        show: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] }
        }
      }}
    >
      {children}
    </motion.div>
  );
}
