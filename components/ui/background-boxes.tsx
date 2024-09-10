"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import { useTheme } from "@/context/theme-context";

export const BoxesCore = ({ className, ...rest }: { className?: string }) => {
  const { theme } = useTheme(); // Get the current theme (light or dark)

  // Define a base number of rows and columns for desktop
  const rows = new Array(10).fill(1);
  const cols = new Array(18).fill(1);

  // Color sets for light and dark modes
  const lightModeColors = ["--teal-100", "--blue-300", "--gray-50"];
  const darkModeColors = ["--slate-950", "--teal-300", "--teal-600"];

  // Get color based on current theme
  const getRandomColor = () => {
    const colors = theme === "dark" ? darkModeColors : lightModeColors;
    return colors[Math.floor(Math.random() * colors.length)];
  };

  // Motion variants for the automatic wave-like color transition
  const boxVariants = {
    animate: (i: number) => ({
      backgroundColor: [
        `var(${getRandomColor()})`,
        `var(${getRandomColor()})`,
        `var(${getRandomColor()})`,
      ],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
        delay: i * 0.3, // Staggered delay for smoother waves
      },
    }),
  };

  return (
    <div
      style={{
        transform: `skewX(-30deg) skewY(14deg) scale(0.675) rotate(0deg) translateZ(0)`,
      }}
      className={cn(
        "absolute left-1/4 p-4 flex -translate-x-1/2 -translate-y-1/2 w-full h-full -inset-2 z-0",
        className
      )}
      {...rest}
    >
      {rows.map((_, i) => (
        <div
          key={`row` + i}
          className="relative border-l border-slate-700 dark:border-slate-300"
        >
          {cols.map((_, j) => (
            <motion.div
              key={`col` + j}
              className={cn(
                // Responsive box sizes
                "relative border-r border-t border-slate-700 dark:border-slate-300",
                "w-16 h-20", // Default small box size
                "sm:w-16 sm:h-28", // Slightly larger on small screens
                "md:w-24 md:h-28", // Larger on medium screens
                "lg:w-40 lg:h-44" // Largest on large screens
              )}
              custom={i + j} // Pass a unique index for staggered animation
              variants={boxVariants}
              animate="animate"
            >
              {j % 2 === 0 && i % 2 === 0 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="absolute h-6 w-10 -top-[14px] -left-[22px] text-slate-700 dark:text-slate-800 stroke-[1px] pointer-events-none"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v12m6-6H6"
                  />
                </svg>
              ) : null}
            </motion.div>
          ))}
        </div>
      ))}
    </div>
  );
};

export const Boxes = React.memo(BoxesCore);
