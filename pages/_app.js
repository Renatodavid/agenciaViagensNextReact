import '@/styles/globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Head from '@/components/Head'
import Script from '@/components/scripts'










export default function App({ Component, pageProps }) {
  
  return (
    <>
    
      <Head />
      <Navbar />
     
      <Component {...pageProps} />

      <Footer />
      <Script />

    </>
    
  )
}
