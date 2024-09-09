"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

export const BoxesCore = ({ className, ...rest }: { className?: string }) => {
  const rows = new Array(10).fill(1); // Adjust the grid size as needed
  const cols = new Array(18).fill(1);

  // New refined color palette: black, shiny blue, and white
  const colors = [
    "--slate-950", // Black
    "--gray-50", // Shiny blue
    "--teal-800", // White
  ];

  const getRandomColor = () => {
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
        duration: 5, // Reduced speed for slower waves
        repeat: Infinity,
        ease: "easeIn",
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
        "absolute left-1/4  p-4 flex -translate-x-1/2 -translate-y-1/2 w-full h-full -inset-2 z-0",
        className
      )}
      {...rest}
    >
      {rows.map((_, i) => (
        <div
          key={`row` + i}
          className="sm:w-52 bg-[rgb(249,245,235)] dark:bg-slate-950 sm:h-52 w-36 h-36 border-l border-slate-700 relative"
        >
          {cols.map((_, j) => (
            <motion.div
              key={`col` + j}
              className="sm:w-52 sm:h-52 w-36 h-36 border-r border-t border-slate-700 relative"
              custom={i + j} // Pass a unique index for staggered animation
              variants={boxVariants}
              animate="animate" // Automatically animate without hover
            >
              {j % 2 === 0 && i % 2 === 0 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="absolute h-6 w-10 -top-[14px] -left-[22px] text-slate-700 stroke-[1px] pointer-events-none"
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
