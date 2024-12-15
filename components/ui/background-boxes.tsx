"use client";
import React, { useMemo, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { cn } from "@/utils/cn";
import { useTheme } from "@/context/theme-context";

type BoxesCoreProps = {
  rows?: number; // Number of rows
  cols?: number; // Number of columns
  className?: string; // Additional class names
};

export const BoxesCore = ({
  rows = 10, // Default to 10 rows
  cols = 18, // Default to 18 columns
  className,
  ...rest
}: BoxesCoreProps) => {
  const { theme } = useTheme(); // Get the current theme (light or dark)

  // Color sets for light and dark modes
  const lightModeColors = ["--teal-200", "--blue-400", "--gray-150"];
  const darkModeColors = ["--slate-950", "--teal-300", "--teal-600"];

  // Get random color based on current theme
  const getRandomColor = () => {
    const colors = theme === "dark" ? darkModeColors : lightModeColors;
    return colors[Math.floor(Math.random() * colors.length)];
  };

  // Motion variants for independent fade-in and fade-out
  const boxVariants = useMemo(
    () => ({
      animate: () => ({
        opacity: [0, 1, 0],
        backgroundColor: [
          `var(${getRandomColor()})`,
          `var(${getRandomColor()})`,
          `var(${getRandomColor()})`,
        ],
        transition: {
          duration: Math.random() * 2 + 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: Math.random() * 7,
          backgroundColor: {
            duration: 50,
          },
        },
      }),
    }),
    [theme]
  );

  const controls = useAnimation();
  useEffect(() => {
    controls.start("animate");
  }, [controls]);

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
      {/* Generate rows and columns based on props */}
      {new Array(rows).fill(1).map((_, i) => (
        <div key={`row-${i}`} className="relative p-4">
          {new Array(cols).fill(1).map((_, j) => (
            <motion.div
              key={`col-${j}`}
              className={cn(
                "relative my-5",
                "rounded-lg", // Add rounded corners
                "w-16 h-20", // Default small box size
                "sm:w-16 sm:h-28", // Slightly larger on small screens
                "md:w-24 md:h-28", // Larger on medium screens
                "lg:w-40 lg:h-44" // Largest on large screens
              )}
              variants={boxVariants}
              animate="animate"
            ></motion.div>
          ))}
        </div>
      ))}
    </div>
  );
};

export const Boxes = React.memo(BoxesCore);
