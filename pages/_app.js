import '@/styles/globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';


export default function App({ Component, pageProps }) {
  
  return (
    <>
    
      <Navbar />
      <Component {...pageProps} />
      <Footer />
     
    </>
    
  )
}
