"use client";
import React from "react";
import { motion, useAnimation } from "framer-motion";
import { cn } from "@/utils/cn";
import { useTheme } from "@/context/theme-context";

export const BoxesCore = ({ className, ...rest }: { className?: string }) => {
  const { theme } = useTheme(); // Get the current theme (light or dark)

  // Define a base number of rows and columns for desktop
  const rows = new Array(10).fill(1);
  const cols = new Array(18).fill(1);

  // Color sets for light and dark modes
  const lightModeColors = ["--teal-200", "--blue-400", "--gray-150"];
  const darkModeColors = ["--slate-950", "--teal-300", "--teal-600"];

  // Get random color based on current theme
  const getRandomColor = () => {
    const colors = theme === "dark" ? darkModeColors : lightModeColors;
    return colors[Math.floor(Math.random() * colors.length)];
  };

  // Motion variants for independent fade-in and fade-out
  const boxVariants = React.useMemo(() => ({
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
  }), [theme]);
  
  const controls = useAnimation();
  React.useEffect(() => {
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
      {rows.map((_, i) => (
        <div
          key={`row` + i}
          className="relative p-4 "
        >
          {cols.map((_, j) => (
            <motion.div
              key={`col` + j}
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
