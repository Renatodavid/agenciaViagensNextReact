import React from 'react'

export default function CarrousselPromocao() {
  return (
    <div>

<div
  id="carouselExample"
  item-display-d={4}
  item-display-t={3}
  item-display-m={2}
  className="carousel slow"
  data-bs-ride="carousel1"
>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <div className="container">
        <img
          className="card-img-top"
          src="../Img/bariloche.png"
          alt="Imagem de capa do card"
        />
        <div className="card-body">
          <h5 className="card-title text-center">Chile</h5>
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
    <div className="carousel-item">
      <div className="container">
        <img
          className="card-img-top"
          src="../Img/Chile.png"
          alt="Imagem de capa do card"
        />
        <div className="card-body">
          <h5 className="card-title1 text-center">Chile</h5>
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
    <div className="carousel-item">
      <div className="container">
        <img
          className="card-img-top"
          src="../Img/Chile.jpg"
          alt="Imagem de capa do card"
        />
        <div className="card-body">
          <h5 className="card-title text-center">Chile</h5>
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
    <div className="carousel-item">
      <div className="container">
        <img
          className="card-img-top"
          src="../Img/buzios.jpg"
          alt="Imagem de capa do card"
        />
        <div className="card-body">
          <h5 className="card-title text-center">Chile</h5>
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
    <div className="carousel-item">
      <div className="container">
        <img
          className="card-img-top"
          src="../Img/florianopolis.jpg"
          alt="Imagem de capa do card"
        />
        <div className="card-body">
          <h5 className="card-title text-center">Chile</h5>
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
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExample"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Anterior</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExample"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Próximo</span>
  </button>
</div>


    </div>
  )
}
