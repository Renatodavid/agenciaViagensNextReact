import '@/styles/globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Head from '@/components/Head'











export default function App({ Component, pageProps }) {
  
  return (
    <>
      
      <Head />
      <Navbar />
     
      <Component {...pageProps} />

      <Footer />
     

    </>
    
  )
}
