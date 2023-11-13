import '@/styles/globals.css'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'
import Head from '@/components/Head/Head'
import Script from '../components/Scrpits/scripts'
import img from '../public/img/Catedral_Santiago.jpg'
import Scripts from '../components/Scrpits/scripts'








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
