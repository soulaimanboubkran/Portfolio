"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillIcons, skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";





export default function Skills() {
  const { ref } = useSectionInView("SKILLS");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
     
    >
      <SectionHeading>My skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
      {skillsData.map((skill, index) => {
        const Icon = skillIcons[skill] || null; // Get the icon component or null if not found

        return (
          <li
          className="relative bg-white  rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
          key={index}
          >
            {skill}
            {Icon && (
               <span className="absolute bottom-1 right-1 flex items-end justify-end z-10">
                <Icon />
              </span>
            )}
          </li>
        );
      })}
      </ul>
    </section>
  );
}