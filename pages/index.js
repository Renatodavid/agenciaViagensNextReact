import Cards from '@/components/Cards'
import Carrousel from '@/components/CarrouselIndex'
import 'bootstrap/dist/css/bootstrap.min.css';




export default function Home() {
  return (
    
    <div >
      <img className="img-fluid" src="../img/Chile.png" alt="Chile" />
      <Carrousel />
      <>
    <div className="counter-div my-1 fluid">
  <p>Adultos: </p>
  <button
    type="button"
    className="btn inc-dec"
    id="adultos-minus"
    onclick="incrementDecrement('adultos-value', -1)"
  >
    -
  </button>
  <p id="adultos-value">0</p>
  <button
    type="button"
    className="btn inc-dec"
    id="adultos-plus"
    onclick="incrementDecrement('adultos-value', 1)"
  >
    +
  </button>
  <p>Crianças</p>
  <button
    type="button"
    className="btn inc-dec"
    id="criancas-minus"
    onclick="incrementDecrement('criancas-value', -1)"
  >
    -
  </button>
  <p id="criancas-value">0</p>
  <button
    type="button"
    className="btn inc-dec"
    id="criancas-plus"
    onclick="incrementDecrement('criancas-value', 1)"
  >
    +
  </button>
  <input type="text" id="search-input" placeholder="Pesquisar no Google" />
  <button
    type="button"
    className="btn"
    id="btn-buscar"
    onclick="searchGoogle()"
  >
    <i className="fa fa-search" />
  </button>
</div>
      </>
      <Cards/>
    
    </div>
  );
}

