"use client";


import React from "react";

import { motion } from "framer-motion";
import SectionHeading from "./section-heading";

import { useSectionInView } from "@/lib/hooks";


export default function About() {

 const {ref} = useSectionInView("ABOUT")
  return (
    <>
                 <div className='relative z-30'>

    <motion.section
     ref={ref}
      className="mb-10 max-w-[45rem] text-center leading-8 dark:z-[1] z-[1] scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
      
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Hight school</span>, I decided to pursue my
        passion for programming. I enrolled in a coding school and learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, Laravel, Mysql, MongoDB and others ...
        </span>
         . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies. 
      </p>

      <p>
        <span className="italic">When I am not coding</span>, watching movies, I also enjoy{" "}
        <span className="font-medium">learning new things</span>, and searching about <span className="font-medium"> web technologies. </span>
      </p>
    
    </motion.section>
</div>
    </>
  );
}