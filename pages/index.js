
import Cards from '@/components/Cards/Cards'
import CardsIndex from '@/components/Cards/CardsIndex';
import Carrousel from '@/components/Carrousell/CarrouselIndex'

import Script from 'next/script'





export default function Home() {
  return (
    <div>


      <img className="img-fluid" src="../Img/Chile.png" alt="Chile" />
      <Carrousel />
      <Cards />


     <CardsIndex/>
      
      <Script />
    </div>

  );
}