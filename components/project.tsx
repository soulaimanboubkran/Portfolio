"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";


type ProjectProps =(typeof projectsData)[number]

export default function Project({title,description,tags,imageUrl,gitLink,web}:ProjectProps) {
    const ref = useRef<HTMLDivElement>(null);
    const {scrollYProgress} =useScroll({
        target: ref,
        offset:["0 1", "1.33 1"],
    })
    const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  
  return (
    <motion.div
    ref={ref}
    style={{
      scale: scaleProgess,
      opacity: opacityProgess,
    }}
 
    className="group max-h-screen mb-3  sm:mb-8 last:mb-0"
  >
            <section    className="bg-gray-100 max-w-[46rem] border border-black/5 rounded-2xl overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
        <div   className="pt-4 pb-7  px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[55%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
          <ul className="flex flex-wrap mt-4 mb-2  gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
            <li  className="dark:bg-red-500  bg-blue-700 px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70">
              <a href={gitLink} target="_blank"className="flex"> GitHub 
 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="ml-1 w-4 h-4">
  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
</svg></a>

            </li>
            {web && (
  <li className="dark:bg-red-500 bg-blue-700 px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70">
    <a href={web} target="_blank" className="flex"> 
      website
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="ml-1 w-4 h-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    </a>
  </li>
)}

          </ul> 
          
          
        </div>
    

        <Image
          src={imageUrl}
          alt="Project I worked on"
          quality={95}
          className="sm:absolute sticky block sm:block top-8 -right-40 w-[28.25rem] sm:rounded-t-2xl rounded-b-2xl shadow-2xl
        sm:transition 
        sm:group-hover:scale-[1.04]
        sm:group-hover:-translate-x-3
        sm:group-hover:translate-y-3
        sm:group-hover:-rotate-2
        dark:sm:group-hover:shadow-red-500
        sm:group-hover:shadow-blue-700
        sm:group-even:group-hover:translate-x-3
        sm:group-even:group-hover:translate-y-3
        sm:group-even:group-hover:rotate-2

        sm:group-even:right-[initial] sm:group-even:-left-40"
        />
 
      </section>
     
  </motion.div>
   
       
  
  )
}
