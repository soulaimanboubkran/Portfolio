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
  <body className={`${inter.className} bg-[#FCF6F5FF] dark:bg-gray-900 text-gray-950 relative   dark:text-gray-50 dark:text-opacity-90`}>
  
 <div className='pt-28 sm:pt-36'>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            
            <Header />
            {children}
         <SpeedInsights/>
            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>

</div>
       
 
     
   
     

     
        </body>
    </html>
  )
}
      