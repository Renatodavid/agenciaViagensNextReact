import React from 'react'

export default function CarrouselIndex() {
  return (
    
<>
  <div className=" container-fluid text-center my-4">
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
          <button type="button" className="botaop">
            R$ 500.00
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
</>



    
  )
}
