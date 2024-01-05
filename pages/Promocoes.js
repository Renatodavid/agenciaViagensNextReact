import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Promocoes() {
  return (
 
<>
  <title>Promoções</title>

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
  <main className="about-area p ">
    <div id="about-area p">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h3>Rio de janeiro</h3>
            <img
              className="img-fluid p"
              src="../Img/rionovo.webp"
              alt="Rio de janeiro"
            />
          </div>
          <div className="col-md-6">
            <h3>Bem vindo a Rio de janeiro </h3>
            <p>
              Com a Rampa de Voo Livre da Siméria a 3,7 km oferece acomodações,
              restaurante,{" "}
            </p>
            <p>
              Piscina infantil, Vestiários de spa academia, Fitness, Cadeira de
              massagem, Massagem corporal completa
            </p>
            <p>
              {" "}
              Massagem nos pés, Massagem no pescoço, Massagem nas costas,
              Pacotes de Spa / bem-estar, Banho de imersão para os pés
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
                Sistema de pagamento própio{" "}
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
              <strike>R$ 700.00</strike>
            </button>
            <button
              type="button"
              className="botaop  "
              data-bs-toggle="popover"
              title="Este preço somente hoje"
              style={{ backgroundColor: "#700f79" }}
            >
              R$ 500.00
            </button>
          </div>
        </div>
      </div>
    </div>
    <hr />
    <div id="about-area">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h3>SANTIAGO</h3>
            <img
              className="img-fluid p"
              src="../Img/santiago.jpg"
              alt="Santiago"
            />
          </div>
          <div className="col-md-6 botoes">
            <h3 className="about-title">Santiago Hotel Palace </h3>
            <p> Principais comodidades do Water Park Orlando</p>
            <p>
              Piscina infantil, Vestiários de spa / academia, Fitness, Cadeira
              de massagem, Massagem corporal completa
            </p>
            <p>
              {" "}
              Massagem nos pés, Massagem no pescoço, Massagem nas costas,
              Pacotes de Spa / bem-estar, Banho de imersão para os pés
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
                Sistema de pagamento própio{" "}
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
              <strike>R$ 700.00</strike>
            </button>
            <button
              type="button"
              className="botaop  "
              data-bs-toggle="popover"
              title="Este preço somente hoje"
              style={{ backgroundColor: "#700f79" }}
            >
              R$ 500.00
            </button>
          </div>
        </div>
      </div>
    </div>
    <hr />
    <div id="about-area">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h3>Foz do Iguaçu</h3>
            <img
              className="img-fluid p"
              src="../Img/foz do iguaçu.jpg"
              alt="Foz do Iguaçu"
            />
          </div>
          <div className="col-md-6 botoes">
            <h3 className="about-title">Foz do Iguaçu Hotel Park</h3>
            <p> Principais comodidades do Water Park Orlando</p>
            <p>
              Piscina infantil, Vestiários de spa / academia, Fitness, Cadeira
              de massagem, Massagem corporal completa
            </p>
            <p>
              {" "}
              Massagem nos pés, Massagem no pescoço, Massagem nas costas,
              Pacotes de Spa / bem-estar, Banho de imersão para os pés
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
                Sistema de pagamento própio{" "}
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
              <strike>R$ 700.00</strike>
            </button>
            <button
              type="button"
              className="botaop  "
              data-bs-toggle="popover"
              title="Este preço somente hoje"
              style={{ backgroundColor: "#700f79" }}
            >
              R$ 500.00
            </button>
          </div>
        </div>
      </div>
    </div>
    <hr />
    <div id="about-area">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h3>Jericoacora</h3>
            <img
              className="img-fluid p"
              src="../Img/Jericoacora.jpg"
              alt="Jericoacora"
            />
          </div>
          <div className="col-md-6 botoes">
            <h3 className="about-title">Hotel Jericoacora </h3>
            <p> Principais comodidades do Water Park Orlando</p>
            <p>
              Piscina infantil, Vestiários de spa / academia, Fitness, Cadeira
              de massagem, Massagem corporal completa
            </p>
            <p>
              {" "}
              Massagem nos pés, Massagem no pescoço, Massagem nas costas,
              Pacotes de Spa / bem-estar, Banho de imersão para os pés
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
                Sistema de pagamento própio{" "}
              </li>
              <li>
                <i className="fas fa-check" />
                venham curtir suas ferias com ©RENATOUR.
              </li>
            </ul>
            <button
              type="button"
              className="botaop "
              data-bs-toggle="popover"
              title="Patrão ficou doido"
              data-bs-content=""
            >
              <strike>R$ 500.00</strike>
            </button>
            <button
              type="button"
              className="botaop "
              style={{ backgroundColor: "#700f79" }}
              data-bs-toggle="popover"
              title="Somente Hoje"
              data-bs-content=""
            >
              R$ 100.00
            </button>
          </div>
        </div>
      </div>
    </div>
    <hr />
    <div id="about-area">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h3>Chile</h3>
            <img className="img-fluid p" src="../Img/Chile.png" alt="Chile" />
          </div>
          <div className="col-md-6 botoes">
            <h3 className="about-title">Water Park Orlando! </h3>
            <p> Principais comodidades do Water Park Orlando</p>
            <p>
              Piscina infantil, Vestiários de spa / academia, Fitness, Cadeira
              de massagem, Massagem corporal completa
            </p>
            <p>
              {" "}
              Massagem nos pés, Massagem no pescoço, Massagem nas costas,
              Pacotes de Spa / bem-estar, Banho de imersão para os pés
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
                Sistema de pagamento própio{" "}
              </li>
              <li>
                <i className="fas fa-check" />
                venham curtir suas ferias com ©RENATOUR.
              </li>
            </ul>
            <button
              type="button"
              className="botaop "
              data-bs-toggle="popover"
              title="Patrão ficou doido"
              data-bs-content=""
            >
              <strike>R$ 2500.00</strike>
            </button>
            <button
              type="button"
              className="botaop "
              style={{ backgroundColor: "#700f79" }}
              data-bs-toggle="popover"
              title="Somente Hoje"
              data-bs-content=""
            >
              R$ 2000.00
            </button>
          </div>
        </div>
      </div>
    </div>
    <hr />
    <div id="about-area">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h3>Bariloche</h3>
            <img
              className="img-fluid p"
              src="../Img/bariloche.png"
              alt="bariloche"
            />
          </div>
          <div className="col-md-6 botoes">
            <h3 className="about-title">Bariloche Park Ice</h3>
            <p> Principais comodidades do Water Park Orlando</p>
            <p>
              Piscina infantil, Vestiários de spa / academia, Fitness, Cadeira
              de massagem, Massagem corporal completa
            </p>
            <p>
              {" "}
              Massagem nos pés, Massagem no pescoço, Massagem nas costas,
              Pacotes de Spa / bem-estar, Banho de imersão para os pés
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
                Sistema de pagamento própio{" "}
              </li>
              <li>
                <i className="fas fa-check" />
                venham curtir suas ferias com ©RENATOUR.
              </li>
            </ul>
            <button
              type="button"
              className="botaop "
              data-bs-toggle="popover"
              title="Patrão ficou doido"
              data-bs-content=""
            >
              <strike>R$ 1500.00</strike>
            </button>
            <button
              type="button"
              className="botaop "
              style={{ backgroundColor: "#700f79" }}
              data-bs-toggle="popover"
              title="Somente Hoje"
              data-bs-content=""
            >
              R$ 1000.00
            </button>
          </div>
        </div>
      </div>
    </div>
    <hr />
    <div id="about-area">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h3>Cataratas do Iguaçu</h3>
            <img
              className="img-fluid"
              src="../Img/cataratas iguaçu.jpeg"
              alt="cataratas iguaçu"
            />
          </div>
          <div className="col-md-6 botoes">
            <h3 className="about-title">Water Park Orlando! </h3>
            <p> Principais comodidades do Water Park Orlando</p>
            <p>
              Piscina infantil, Vestiários de spa / academia, Fitness, Cadeira
              de massagem, Massagem corporal completa
            </p>
            <p>
              {" "}
              Massagem nos pés, Massagem no pescoço, Massagem nas costas,
              Pacotes de Spa / bem-estar, Banho de imersão para os pés
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
                Sistema de pagamento própio{" "}
              </li>
              <li>
                <i className="fas fa-check" />
                venham curtir suas ferias com ©RENATOUR.
              </li>
            </ul>
            <button
              type="button"
              className="botaop "
              data-bs-toggle="popover"
              title="Patrão ficou doido"
              data-bs-content=""
            >
              <strike>R$ 1500.00</strike>
            </button>
            <button
              type="button"
              className="botaop "
              style={{ backgroundColor: "#700f79" }}
              data-bs-toggle="popover"
              title="Somente Hoje"
              data-bs-content=""
            >
              R$ 1000.00
            </button>
          </div>
        </div>
      </div>
    </div>
    <hr />
    <div id="about-area">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h3>Hotel Quitandinha</h3>
            <img
              className="img-fluid p"
              src="../Img/palacio quitandinha.jpg"
              alt="Petrópolis"
            />
          </div>
          <div className="col-md-6 botoes">
            <h3 className="about-title">Petrópolis RJ.</h3>
            <p> Hotel Quitandinha </p>
            <p>
              Com a Rampa de Voo Livre da Siméria a 3,7 km, O Lofts de Luxo
              Palácio Quitandinha Petrópolis oferece acomodações, restaurante,
              jardim, terraço e bar. O Wi-Fi e o estacionamento privativo estão
              disponíveis gratuitamente no apartamento.{" "}
            </p>
            <p>
              A propriedade fica a 4,4 km da estação rodoviária de Petrópolis e
              a 5,8 km da Catedral de São Pedro de Alcântara. <br />O aeroporto
              mais próximo é o Aeroporto Internacional do Galeão/Rio de Janeiro,
              a 61 km do Lofts de Luxo Palácio Quitandinha Petrópolis.{" "}
            </p>
            <p>
              Quartos para famílias, Instalações para pessoas com deficiência,
              Quartos para não fumantes
            </p>
            <ul id="about-list">
              <li>
                <i className="fas fa-check" />O HOTEL QUITANDINHA{" "}
              </li>
              <li>
                <i className="fas fa-check" />
                Av. Joaquim Rolla , 02/521- Quitandinha, Petrópolis, CEP
                25651072,Brasil.
              </li>
              <li>
                <i className="fas fa-check" />
                Vista da montanha{" "}
              </li>
              <li>
                <i className="fas fa-check" />
                Sistema de pagamento própio{" "}
              </li>
              <li>
                <i className="fas fa-check" />
                venham curtir suas ferias com ©RENATOUR.
              </li>
            </ul>
            <button
              type="button"
              className="botaop "
              data-bs-toggle="popover"
              title="Patrão ficou doido"
              data-bs-content=""
            >
              <strike>R$ 1500.00</strike>
            </button>
            <button
              type="button"
              className="botaop "
              style={{ backgroundColor: "#700f79" }}
              data-bs-toggle="popover"
              title="Somente Hoje"
              data-bs-content=""
            >
              R$ 1000.00
            </button>
          </div>
        </div>
      </div>
    </div>
    <hr />
    <div id="about-area">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h3>Italia-Roma</h3>
            <img
              className="img-fluid"
              src="../Img/roma.jpg"
              alt="Roma- Italia"
            />
          </div>
          <div className="col-md-6 botoes">
            <h3 className="about-title">Italia Roma </h3>
            <p> Principais comodidades do HOTEL ITAliA </p>
            <p>
              Piscina infantil, Vestiários de spa / academia, Fitness, Cadeira
              de massagem, Massagem corporal completa
            </p>
            <p>
              {" "}
              Massagem nos pés, Massagem no pescoço, Massagem nas costas,
              Pacotes de Spa / bem-estar, Banho de imersão para os pés
            </p>
            <p>
              Quartos para famílias, Instalações para pessoas com deficiência,
              Quartos para não fumantes
            </p>
            <ul id="about-list">
              <li>
                <i className="fas fa-check" />
                Hotel de Italia
              </li>
              <li>
                <i className="fas fa-check" />
                NH Collection Roma Fori Imperiali- Via di Santa Eufemia, 19
                00187, Roma - Itália 0.41 km Foro Romano
              </li>
              <li>
                <i className="fas fa-check" />
                utilização de algo{" "}
              </li>
              <li>
                <i className="fas fa-check" />
                Sistema de pagamento própio{" "}
              </li>
              <li>
                <i className="fas fa-check" />
                venham curtir suas ferias com ©RENATOUR.
              </li>
            </ul>
            <button
              type="button"
              className="botaop "
              data-bs-toggle="popover"
              title="Patrão ficou doido"
              data-bs-content=""
            >
              <strike>R$ 1500.00</strike>
            </button>
            <button
              type="button"
              className="botaop "
              style={{ backgroundColor: "#700f79" }}
              data-bs-toggle="popover"
              title="Somente Hoje"
              data-bs-content=""
            >
              R$ 1000.00
            </button>
          </div>
        </div>
      </div>
    </div>
  
  </main>
</>
  )
}
