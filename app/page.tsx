"use client"
import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Footer from "@/components/footer";

import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <>
  <div 
   
   className=" absolute  -top-96 w-full overflow-hidden flex items-center justify-center rounded-lg">

 
     </div> 
    <main className="flex flex-col items-center z-[998] dark:z-[998] px-4">
  
     <Intro/>
     <SectionDivider/>
     <About/>
     <SectionDivider/>
     
     <Projects/>
     <Skills/>

     <Experience/>

     <Contact/>
     <Footer/>
    </main></>
  )
}
