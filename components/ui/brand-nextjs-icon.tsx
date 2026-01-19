"use client";

import { forwardRef, useImperativeHandle, useEffect } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const BrandNextjsIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const start = async () => {
      // Reset paths
      await animate(".circle", { pathLength: 0, opacity: 0 }, { duration: 0 });
      await animate(".line", { pathLength: 0, opacity: 0 }, { duration: 0 });

      // Draw circle
      await animate(
        ".circle",
        { pathLength: [0, 1], opacity: [0, 1] },
        { duration: 1.5, ease: "easeInOut" },
      );

      // Draw line
      await animate(
        ".line",
        { pathLength: [0, 1], opacity: [0, 1] },
        { duration: 0.4, ease: "easeOut" },
      );

      // Settle & stop
      stop();
    };

    const stop = async () => {
      await animate(".circle", { pathLength: 1, opacity: 1 }, { duration: 0.2 });
      await animate(".line", { pathLength: 1, opacity: 1 }, { duration: 0.2 });
    };

    useImperativeHandle(ref, () => ({
      startAnimation: start,
      stopAnimation: stop,
    }));

    // ▶ Auto play once (NO hover)
    useEffect(() => {
      start();
    }, []);

    return (
      <svg
        ref={scope}
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`select-none ${className}`}
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />

        <motion.path
          className="circle"
          d="M9 15v-6l7.745 10.65a9 9 0 1 1 2.255 -1.993"
          initial={{ pathLength: 1, opacity: 1 }}
        />

        <motion.path
          className="line"
          d="M15 12v-3"
          initial={{ pathLength: 1, opacity: 1 }}
        />
      </svg>
    );
  },
);

BrandNextjsIcon.displayName = "BrandNextjsIcon";

export default BrandNextjsIcon;

