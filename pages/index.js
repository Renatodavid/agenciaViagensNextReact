
import Cards from '@/components/Cards/Cards'
import Carrousel from '@/components/Carrousell/Carrousel'

import Script from 'next/script'





export default function Home() {
  return (
    <div>


      <img className="img-fluid" src="../Img/Chile.png" alt="Chile" />
      <Carrousel />
      <Cards />


     

      <Script />
    </div>

  );
}