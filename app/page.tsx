"use client"
import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Footer from "@/components/footer";

import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import { BoxesCore } from "@/components/ui/background-boxes";

export default function Home() {
  return (
    <>
   
    <main className="flex flex-col items-center z-[998] dark:z-[998] px-4">
      {/* BackgroundBeams should only be visible on desktop (md and larger screens) */}
  
    <section
    
  className="   text-center sm:mb-0 scroll-mt-[100rem]"
    id="home"
    
  >
        <div className="flex items-center justify-center">
        
        <div
            className="h-[90rem] sm:h-[190rem]  absolute sm:-translate-x-2/2 -translate-x-4/4 sm:-translate-y-2/2 -translate-y-4/4 w-full overflow-hidden items-center justify-center rounded-lg"
          >
            <BoxesCore rows={10} cols={15} /> {/* Adjust rows and cols dynamically */}
          </div></div></section>
     <Intro/>
     <SectionDivider/>
     <About/>
     <SectionDivider/>
     
     <Projects/>
     <Skills/>

     <Experience/>
     <div className="relative z-[999]">
          <Contact />
        </div>
     
          <Footer/>
    </main></>
  )
}
