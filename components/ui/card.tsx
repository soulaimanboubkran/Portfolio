import Image, { StaticImageData } from "next/image";
import React from "react";
import { useId } from "react";

export interface Feature {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl:StaticImageData;
  gitLink: string;
  web?: string; // Make web optional
}

interface FeaturesSectionDemoProps {
  grid: Feature[]; // grid is an array of Feature objects
}

const FeaturesSectionDemo: React.FC<FeaturesSectionDemoProps> = ({ grid }) => {
  return (
    <>
      {grid.map((feature,index) => (
        <div
          key={feature.id}
          className="group max-h-screen mb-3 sm:mb-8 last:mb-0"
        >
          <section className="bg-gray-100 max-w-[46rem] border border-black/5 rounded-2xl overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
            <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[55%] flex flex-col h-full sm:group-even:ml-[18rem]">
            <Grid index={index} size={30} />
              <h3 className="text-2xl font-semibold">{feature.title}</h3>
              <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
                {feature.description}
              </p>
              <ul className="flex flex-wrap mt-4 mb-2 gap-2 sm:mt-auto">
                {feature.tags.map((tag, index) => (
                  <li
                    className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                    key={index}
                  >
                    {tag}
                  </li>
                ))}
                <li className="dark:bg-red-500 bg-blue-700 px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70">
                  <a href={feature.gitLink} target="_blank" rel="noopener noreferrer" className="flex">
                    GitHub
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="ml-1 w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                  </a>
                </li>
                {feature.web && (
                  <li className="dark:bg-red-500 bg-blue-700 px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70">
                    <a href={feature.web} target="_blank" rel="noopener noreferrer" className="flex">
                      Website
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="ml-1 w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                      </svg>
                    </a>
                  </li>
                )}
              </ul>
            </div>
            
            <Image
               src={feature.imageUrl}
               alt={`Image for ${feature.title}`}
               quality={85} // Reduce image quality to lower the load on the device
               sizes="(max-width: 768px) 100vw, (min-width: 769px) 50vw" // Use responsive sizes
               priority={index === 0} // Prioritize loading for the first image
               placeholder="blur" // Use blur-up effect to prevent layout shifts
              className="sm:absolute sticky block sm:block top-8 -right-40 w-[28.25rem] sm:rounded-t-2xl rounded-b-2xl shadow-2xl sm:transition sm:group-hover:scale-[1.04] sm:group-hover:-translate-x-3 sm:group-hover:translate-y-3 sm:group-hover:-rotate-2 dark:sm:group-hover:shadow-white sm:group-hover:shadow-black sm:group-even:group-hover:translate-x-3 sm:group-even:group-hover:translate-y-3 sm:group-even:group-hover:rotate-2 sm:group-even:right-[initial] sm:group-even:-left-40"
            />
          </section>
        </div>
      ))}
    </>
  );
};

export default FeaturesSectionDemo;
export const Grid = ({
  index, // Index to control position
  pattern,
  size,
}: {
  index: number;
  pattern?: number[][];
  size?: number;
}) => {
  const p = pattern ?? [
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
  ];

  // Determine if the grid should be left or right based on index
  const isLeft = index % 2 === 0;
  const gradientDirection = isLeft ? "bg-gradient-to-r" : "bg-gradient-to-l";

  return (
    <div
      className={`pointer-events-none absolute top-0 ${
        // Apply different positioning for desktop and mobile
        isLeft
          ? "sm:right-2/4 sm:-mr-20 right-0" // Desktop: right, Mobile: full width
          : "sm:left-1/2 sm:-ml-20 left-0"   // Desktop: left, Mobile: full width
      } -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]`}
    >
      <div
        className={`absolute inset-0 ${gradientDirection} [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-zinc-900/30 from-zinc-100/30 to-zinc-300/30 dark:to-zinc-900/30 opacity-100`}
      >
        <GridPattern
          width={size ?? 20}
          height={size ?? 20}
          x={isLeft ? "70" : "40"} // Switch grid position too
          y="4"
          squares={p}
          className="absolute inset-0 h-full w-full mix-blend-overlay dark:fill-white/10 dark:stroke-white/10 stroke-black/10 fill-black/10"
        />
      </div>
    </div>
  );
};


export function GridPattern({ width, height, x, y, squares, ...props }: any) {
  const patternId = useId();

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill={`url(#${patternId})`}
      />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([x, y]: any) => (
            <rect
              strokeWidth="0"
              key={`${x}-${y}`}
              width={width + 1}
              height={height + 1}
              x={x * width}
              y={y * height}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}
