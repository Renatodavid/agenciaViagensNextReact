import React from 'react'

export default function CarrouselDestino() {
  return (
    <div>
      
<>
  <div className="container-fluid my-5">
    <h1>Pacotes especiais </h1>
  </div>
  <div id="demo" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-indicators">
      <button
        type="button"
        data-bs-target="#demo"
        data-bs-slide-to={0}
        className="active"
      />
      <button type="button" data-bs-target="#demo" data-bs-slide-to={1} />
      <button type="button" data-bs-target="#demo" data-bs-slide-to={2} />
    </div>
    <div className="carousel-inner ">
      <div className="carousel-item active">
        <img
          src="../Img/BuziosPraia.jpg"
          alt="Buzios"
          className="d-block w-100"
        />
        <div className="carousel-caption">
          <h3>Buzios</h3>
          <button type="button" className="botaop">
            R$ 900.00
          </button>
        </div>
      </div>
      <div className="carousel-item">
        <img src="../Img/Chile.jpg" alt="Chile" className="d-block w-100" />
        <div className="carousel-caption">
          <h3>Chile</h3>
          <button type="button" className="botaop ">
            R$ 1000.00
          </button>
        </div>
      </div>
      <div className="carousel-item">
        <img
          src="../Img/iguacuCarrossel.jpg"
          alt="Foz"
          className="d-block w-100"
        />
        <div className="carousel-caption">
          <h3>Foz do Iguaçu</h3>
          <button type="button" className="botaop  ">
            R$ 700.00
          </button>
        </div>
      </div>
    </div>
    <button
      className="carousel-control-prev"
      type="button"
      data-bs-target="#demo"
      data-bs-slide="prev"
    >
      <span className="carousel-control-prev-icon" />
    </button>
    <button
      className="carousel-control-next"
      type="button"
      data-bs-target="#demo"
      data-bs-slide="next"
    >
      <span className="carousel-control-next-icon" />
    </button>
  </div>
  {/* fimcarrousel */}
  <div className="container-fluid text-center my-3">
    <h1>Principais pacotes </h1>
  </div>
  <div id="about-area">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h3>O Mundo encantado da Disney</h3>
          <img className="img-fluid" src="../Img/Disney.png" alt="Disney" />
        </div>
        <div className="col-md-6 botoes">
          <h3 className="about-title">Water Park Orlando! </h3>
          <p> Principais comodidades do Water Park Orlando</p>
          <p>
            Piscina infantil, Vestiários de spa academia, Fitness, Cadeira de
            massagem, Massagem corporal completa
          </p>
          <p>
            {" "}
            Massagem nos pés, Massagem no pescoço, Massagem nas costas, Pacotes
            de Spa bem-estar, Banho de imersão para os pés
          </p>
          <p>
            Quartos para famílias, Instalações para pessoas com deficiência,
            Quartos para não fumantes
          </p>
          <ul id="about-list">
            <li>
              <i className="fas fa-check" />
              Water Park Orlando{" "}
            </li>
            <li>
              <i className="fas fa-check" />
              Grove Resort Avenue, Orlando, FL 34787, Estados Unidos
            </li>
            <li>
              <i className="fas fa-check" />
              utilização de algo{" "}
            </li>
            <li>
              <i className="fas fa-check" />
              Sistema de pagamento próprio{" "}
            </li>
            <li>
              <i className="fas fa-check" />
              venham curtir suas ferias com ©RENATOUR.
            </li>
          </ul>
          <button
            type="button"
            className="botaop  "
            data-bs-toggle="popover"
            title="Este preço somente hoje"
          >
            R$ 700.00
          </button>
        </div>
      </div>
    </div>
  </div>
</>
    </div>
  )
}
