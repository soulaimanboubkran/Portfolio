"use client"
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from '@/lib/hooks'
import { FlipWords } from './ui/flip-words'

const Intro = () => {
  const {ref} = useSectionInView("HOME")
  
  return (<>
        
    <section
    ref={ref}
  className="mb-28   max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    id="home"
    
  >     
        <div className="flex items-center  justify-center">
        


        <div className="relative">
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
      type: "tween",
      duration: 0.2,
    }}
  >
    <div className="h-24 w-24 rounded-full bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.3rem] dark:bg-gray-950 dark:bg-opacity-75 flex items-center justify-center overflow-hidden">
      <Image
        src="https://avatars.githubusercontent.com/u/115900176?v=4"
        alt="Soulaimane's portrait"
        width="192"
        height="192"
        quality="95"
        priority={true}
        className="h-full w-full object-cover"
      />
    </div>
  </motion.div>
</div>

             </div>
             <div className='relative z-30  '>
              <div className=''>
  <motion.h1
    className="mb-10 mt-4 z-20 px-4 text-2xl font-medium dark:text-white text-black !leading-[1.5] sm:text-4xl relative"
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }} 
  > 
    <span className="font-bold z-20 dark:text-white text-black">Hello, I am Soulaimane.</span> a{" "}
    <span className="font-bold z-20 dark:text-white text-black">full-stack developer</span> More{" "}
    <span className="font-bold z-20 dark:text-white text-black">BackEnd one</span>. I enjoy
    building <span className="italic z-20 dark:text-white text-black"><FlipWords words={['Sites','Apps','Back-End']} duration={2000} className='filpWords '/>.</span>
  </motion.h1>
</div>
  <motion.div 
    className="flex flex-col z-20 sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium relative"
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.1 }}
  >
    <Link href="#contact" className="group z-20 bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition">
      Contact me here <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
    </Link>
    <a
      className="group bg-white px-7 z-20 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
      href="/SoulaimaneBouiboukirn.pdf"
      download
    >
      Download CV{" "}
      <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
    </a>

    <a
      className="bg-white p-4 z-20 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
      href="https://www.linkedin.com/in/soul-soulaiman"
      target="_blank"
    >
      <BsLinkedin />
    </a>

    <a
      className="bg-white z-20 p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
      href="https://github.com/soulaimanboubkran"
      target="_blank"
    >
      <FaGithubSquare />
    </a>
  </motion.div>
</div>

  </section></>
  )
}

export default Intro