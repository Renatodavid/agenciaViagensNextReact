

import { Inter } from 'next/font/google'
import Head from '@/components/Head/Head'
import Navbar from '@/components/Navbar/Navbar'
import Cards from '@/components/Cards/Cards'
import Carrousel from '@/components/Carrousell/Carrousel'
import Footer from '@/components/Footer/Footer'
import Script from 'next/script'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <div>
    

    <Head/>
    <Navbar/>
    <Carrousel/>
    <Cards/>
    <Footer/>
   


    <Script/>
   </div>
    
  )
}