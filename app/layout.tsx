import Header from '@/components/header'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ActiveSectionContextProvider from '@/context/active-section-context'
import ThemeContextProvider from '@/context/theme-context'
import { Toaster } from 'react-hot-toast'
import ThemeSwitch from '@/components/theme-switch'
import { SpeedInsights } from "@vercel/speed-insights/next"
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Soulaimane | Portfolio',
  description: 'Hello, I am Soulaimane. I am a full-stack developer, try to know more aboute me if you want.👋',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className=' !scroll-smooth' >
  <body className={`${inter.className} bg-[#FCF6F5FF]  text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}>
   
    <div className="absolute z-[-12]  dark:z-[-12] inset-0 h-full w-full bg-[linear-gradient(to right,#80808012_1px,transparent_1px),linear-gradient(to bottom,#80808012_1px,transparent_1px)] bg-[size:33px_33px]">
     
     
   
     

 <div className="bg-[#f5f6d2] absolute z-[-10] dark:z-[-10] top-[-9rem] md:right-[1rem] right-[0rem] h-[99.25rem] w-[31.25rem] rounded-full blur-[3rem] sm:w-[68.75rem] dark:bg-[#2d796a]"></div>
  <div className="bg-[#f3faf0] absolute z-[-10] dark:z-[-10] top-[6rem] left-[-35rem] h-[66.25rem] w-[50rem] rounded-full blur-[3rem] sm:w-[68.75rem] md:left-[-11rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#0e1d29]"></div>
  <div className="bg-[#f3faf0] absolute z-[-10] dark:z-[-10] bottom-[-6rem] md:right-[1rem] right-[1rem] h-[44.25rem] w-[31.25rem] rounded-full blur-[2.5rem] sm:w-[68.75rem]  dark:bg-[#172a3a]"></div>
  <div className="bg-[#f5f6d2] absolute z-[-10] dark:z-[-10] bottom-[14rem] left-[-35rem] h-[33.25rem] w-[50rem] rounded-full blur-[3rem] sm:w-[68.75rem] md:left-[-11rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#2d796a]"></div>
  <div className="w-screen absolute bottom-[-9rem] flex h-2/5">
  <svg className="absolute bottom-0" viewBox="0 0 1425 205.55" fill="#2d796a" xmlns="http://www.w3.org/2000/svg">
    <g>
      <path d="M0,17.27l23.75,5.09C47.5,27.38,95,37.57,142.5,39.47s95-4.36,142.5-10.28,95-11.35,142.5-7.4,95,17.43,142.5,24,95,6.25,142.5,5.83,95-.9,142.5-3S950,43,997.5,42.92s95,3.12,142.5,2.88,95-4.11,142.5-3.62,95,5.51,118.75,8L1425,52.62v170.2H0Z" fill="#2d796a"></path>
      <path d="M0,94.56l23.75-6.17C47.5,82.22,95,69.89,142.5,65.2s95-1.64,142.5,4.85S380,86.33,427.5,86.5,522.5,77,570,73.59s95-.66,142.5,1.81,95,4.6,142.5,3.78,95-4.6,142.5-6.58,95-1.89,142.5,1.24,95,9.45,142.5,13.15,95,4.85,118.75,5.35l23.75.57V222.82H0Z" fill="#1a3a38"></path>
      <path d="M0,134,23.75,132C47.5,129.91,95,125.8,142.5,125.39s95,2.88,142.5,5.75,95,5.35,142.5,4,95-6.58,142.5-8.06,95,.66,142.5-.41,95-5.51,142.5-9.21,95-6.66,142.5-5.83,95,5.42,142.5,9.86,95,8.47,142.5,9.05,95-2.47,118.75-4L1425,125v97.84H0Z" fill="#102228"></path>
      <path d="M0,178.42l23.75-1.64c23.75-1.65,71.25-4.94,118.75-5.59s95,1.23,142.5,2.71,95,2.63,142.5,4.11,95,3.45,142.5,2.88,95-3.54,142.5-8.8,95-12.58,142.5-13.57,95,4.53,142.5,8.23,95,5.67,142.5,4,95-6.91,142.5-9.79,95-3.37,118.75-3.7L1425,157v65.78H0Z" fill="#0f1c25"></path>
    </g>
    <defs>
      <clipPath id="clip0"><rect width="1425" height="444" fill="white"></rect></clipPath>
    </defs>
  </svg>
</div>
</div>
 
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            
            <Header />
            {children}
         <SpeedInsights/>
            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>


       

     
        </body>
    </html>
  )
}
      