import CarrouselDestino from '@/components/CarrouselDestino'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Destino() {


  
  return (
   <div >
      <img className="img-fluid" src="../img/rio de janeiro.jpeg" alt="Rio de Janeiro" />
 
 <CarrouselDestino/>
  <div className="container-fluid text-center my-3">
    <h1>Principais pacotes </h1>
  </div>
  <div id="about-area">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h3>O Mundo encantado da Disney</h3>
          <img className="img-fluid" src="./img/Disney.png" alt="Disney" />
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
  <hr />
  <div className="container">
    <div id="about-area">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h3 className="main-title" />
          </div>
          <div className="col-md-6">
            <h3>Chile</h3>
            <img className="img-fluid" src="./img/Chile.png" alt="Chile" />
          </div>
          <div className="col-md-6 botoes">
            <h3 className="about-title">HOTEL TORRE </h3>
            <p> Comodidades em HOTEL TORRE </p>
            <p>Lazer infantil, Quartos para não fumantes, Wi-fi grátis e TV</p>
            <p>Varanda, Janelas desbloqueadas, Banheiro com banheira </p>
            <p>
              Estacioanamento acessível, Área com churrasqueira, quadra de
              futebol{" "}
            </p>
            <p>Vista panoramica de toda a cidade </p>
            <ul id="about-li">
              <li>
                <i className="fas fa-check direita" />
                Avenida Pacifico 761, 1700000, La Serena, Chile.
              </li>
              <li>
                <i className="fas fa-check direita" />
                55+21(987051725)☎
              </li>
              <li>
                <i className="fas fa-check direita" />
                Endereço de LA CASATOUR
              </li>
              <li>
                <i className="fas fa-check direita" />
                CASATOUR@com.br🖨
              </li>
              <li>
                <i className="fas fa-check direita" />
                Sistema de pagamento com todos os cartões.💳{" "}
              </li>
              <li>
                <i className="fas fa-check direita" />
                Utilizando o site &amp;RENATOUR@ voce ganha cupons de desconto .
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
  </div>
  <hr />
  <div className="container">
    <div id="about-area">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h3 className="main-title" />
          </div>
          <div className="col-md-6">
            <h3>Florianópolis</h3>
            <img
              className="img-fluid"
              src="./img/florianopolis.jpg"
              alt="Disney"
            />
          </div>
          <div className="col-md-6 botoes">
            <h3 className="about-title"> Beach Apart Hotel</h3>
            <p>Principais Comodidades do hotel</p>
            <p>Wi-fi, acesso direto á praia, cadeira de sol, bar na praia</p>
            <p>Estacionamento, ar-condicionado, banheiro acessível </p>
            <p>Aceita animais de estimações, cafeteria, serviço de quarto.</p>
            <ul id="about-list">
              <li>
                <i className="fas fa-check" />
                Rua Vereador Osni Ortiga, 8888474487, Florianópolis, Brasil
              </li>
              <li>
                <i className="fas fa-check" /> ☎ 55+21(987051725)
              </li>
              <li>
                <i className="fas fa-check" /> 🖨 E-mailCASATOUR@com.br
              </li>
              <li>
                <i className="fas fa-check" /> 💳 Sistema de pagamento com todos
                os cartões.{" "}
              </li>
              <li>
                <i className="fas fa-check" /> Utilizando o site RENATOUR@ voce
                ganha cupons de desconto.
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
    <hr />
    <div className="container">
      <div id="about-area">
        <div className="container">
          <div className="row" id="ro">
            <div className="col-12">
              <h3 className="main-title" />
            </div>
            <div className="col-md-6">
              <h3>CATARATAS DO IGUAÇU</h3>
              <img
                className="img-fluid"
                src="./img/cataratas iguaçu.jpeg"
                alt="Cataratas do igguaçu"
              />
            </div>
            <div className="col-md-6 botoes">
              <h3 className="about-title">HOTEL GRAN VISION </h3>
              <p> Comodidades do GRAN VISION </p>
              <p>
                Lazer infantil, Quartos para não fumantes, Wi-fi grátis e TV
              </p>
              <p>
                Varanda de frente para as cataratas, Janelas desbloqueadas,
                Banheiro com banheira{" "}
              </p>
              <p>
                Estacioanamento acessível, Área com churrasqueira, quadra de
                futebol{" "}
              </p>
              <ul id="about-li">
                <li>
                  <i className="fas fa-check direita" />
                  Endereço do GRAN VISION
                </li>
                <li>
                  <i className="fas fa-check direita" />
                  Avenida Costa e Silva, 85863-000,Foz do Iguaçu, Brasil.
                </li>
                <li>
                  <i className="fas fa-check direita" />
                  55+45(98820922)☎
                </li>
                <li>
                  <i className="fas fa-check direita" />
                  E-mail
                </li>
                <li>
                  <i className="fas fa-check direita" />
                  CASATOUR@com.br🖨
                </li>
                <li>
                  <i className="fas fa-check direita" />
                  Sistema de pagamento com todos os cartões.💳
                </li>
                <li>
                  <i className="fas fa-check direita" />
                  Utilizando o site &amp;RENATOUR@ voce ganha cupons de desconto
                  .
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
    </div>
    <hr />
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h3 className="main-title" />
        </div>
        <div className="col-md-6">
          <h3>PARIS</h3>
          <img className="img-fluid" src="./img/paris.jpg" alt="Disney" />
        </div>
        <div className="col-md-6 botoes">
          <h3 className="about-title"> Apart Hotel Montparnasse</h3>
          <p>Principais Comodidades do hotel</p>
          <p>
            Wi-fi, Acesso ao corredor perto da torre, aceitamos animais de
            estimação local próprio para os animais
          </p>
          <p>Estacionamento, ar-condicionado, banheiro acessível </p>
          <p>Aceita animais de estimações, cafeteria, serviço de quarto.</p>
          <ul id="about-list">
            <li>
              <i className="fas fa-check" />
              19 Rue Commandant René Mouchotte, PARIS, 75014, FRANCE, 75014,
              Paris, França
            </li>
            <li>
              <i className="fas fa-check" /> ☎ 55+21(987051725)
            </li>
            <li>
              <i className="fas fa-check" /> 🖨 E-mail CASATOUR@com.br{" "}
            </li>
            <li>
              <i className="fas fa-check" /> 💳 Sistema de pagamento com todos
              os cartões.{" "}
            </li>
            <li>
              <i className="fas fa-check" /> Utilizando o site RENATOUR@ voce
              ganha cupons de desconto.
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
  <hr />
  {/* fim cards normais*/}
  <div className="container-fluid text-center my-3">
    <h1>Comentários de clientes</h1>
  </div>
  <div
    className="slider-container"
    item-display-d={4}
    item-display-t={3}
    item-display-m={2}
  >
    <div className="slider-width">
      <div className="itemDestino">
        <div className="card" style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            id="cardc"
            src="./img/foto8.png"
            style={{ width: 100 }}
            alt="Imagem de capa do card"
          />
          <div className="card-body">
            <p className="card-text">
              Um exemplo de texto rápido para construir o título do card e fazer
              preencher o conteúdo do card.
            </p>
          </div>
        </div>
      </div>
      <div className="itemDestino">
        <div className="card" style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            id="cardc"
            src="./img/foto1.png"
            style={{ width: 100 }}
            alt="Imagem de capa do card"
          />
          <div className="card-body">
            <p className="card-text">
              Um exemplo de texto rápido para construir o título do card e fazer
              preencher o conteúdo do card.
            </p>
          </div>
        </div>
      </div>
      <div className="itemDestino">
        <div className="card" style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            id="cardc"
            src="./img/foto5.png"
            style={{ width: 100 }}
            alt="Imagem de capa do card"
          />
          <div className="card-body">
            <p className="card-text">
              Um exemplo de texto rápido para construir o título do card e fazer
              preencher o conteúdo do card.
            </p>
          </div>
        </div>
      </div>
      <div className="itemDestino">
        <div className="card" style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            id="cardc"
            src="./img/foto6.png"
            style={{ width: 92 }}
            alt="Imagem de capa do card"
          />
          <div className="card-body">
            <p className="card-text">
              Um exemplo de texto rápido para construir o título do card e fazer
              preencher o conteúdo do card.
            </p>
          </div>
        </div>
      </div>
      <div className="itemDestino">
        <div className="card" style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            id="cardc"
            src="./img/foto5.png"
            style={{ width: 103 }}
            alt="Imagem de capa do card"
          />
          <div className="card-body">
            <p className="card-text">
              Um exemplo de texto rápido para construir o título do card e fazer
              preencher o conteúdo do card.
            </p>
          </div>
        </div>
      </div>
      <div className="itemDestino">
        <div className="card" style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            id="cardc"
            src="./img/foto3.png"
            style={{ width: 120 }}
            alt="Imagem de capa do card"
          />
          <div className="card-body">
            <p className="card-text">
              Um exemplo de texto rápido para construir o título do card e fazer
              preencher o conteúdo do card.
            </p>
          </div>
        </div>
      </div>
      <div className="itemDestino">
        <div className="card" style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            id="cardc"
            src="./img/foto1.png"
            style={{ width: 100 }}
            alt="Imagem de capa do card"
          />
          <div className="card-body">
            <p className="card-text">
              Um exemplo de texto rápido para construir o título do card e fazer
              preencher o conteúdo do card.
            </p>
          </div>
        </div>
      </div>
      <div className="itemDestino">
        <div className="card" style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            id="cardc"
            src="./img/foto8.png"
            style={{ width: 100 }}
            alt="Imagem de capa do card"
          />
          <div className="card-body">
            <p className="card-text">
              Um exemplo de texto rápido para construir o título do card e fazer
              preencher o conteúdo do card.
            </p>
          </div>
        </div>
      </div>
      <div className="itemDestino">
        <div className="card" style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            id="cardc"
            src="./img/foto6.png"
            style={{ width: 100 }}
            alt="Imagem de capa do card"
          />
          <div className="card-body">
            <p className="card-text">
              Um exemplo de texto rápido para construir o título do card e fazer
              preencher o conteúdo do card.
            </p>
          </div>
        </div>
      </div>
      <div className="itemDestino">
        <div className="card" style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            id="cardc"
            src="./img/foto5.png"
            style={{ width: 100 }}
            alt="Imagem de capa do card"
          />
          <div className="card-body">
            <p className="card-text">
              Um exemplo de texto rápido para construir o título do card e fazer
              preencher o conteúdo do card.
            </p>
          </div>
        </div>
      </div>
      <div className="itemDestino">
        <div className="card" style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            id="cardc"
            src="./img/foto5.png"
            style={{ width: 100 }}
            alt="Imagem de capa do card"
          />
          <div className="card-body">
            <p className="card-text">
              Um exemplo de texto rápido para construir o título do card e fazer
              preencher o conteúdo do card.
            </p>
          </div>
        </div>
      </div>
      <div className="itemDestino">
        <div className="card" style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            id="cardc"
            src="./img/foto3.png"
            style={{ width: 100 }}
            alt="Imagem de capa do card"
          />
          <div className="card-body">
            <p className="card-text">
              Um exemplo de texto rápido para construir o título do card e fazer
              preencher o conteúdo do card.
            </p>
          </div>
        </div>
      </div>
      <div className="itemDestino">
        <div className="card" style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            id="cardc"
            src="./img/foto2.png"
            style={{ width: 100 }}
            alt="Imagem de capa do card"
          />
          <div className="card-body">
            <p className="card-text">
              Um exemplo de texto rápido para construir o título do card e fazer
              preencher o conteúdo do card.
            </p>
          </div>
        </div>
      </div>
      <div className="itemDestino">
        <div className="card" style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            id="cardc"
            src="./img/foto1.png"
            style={{ width: 100 }}
            alt="Imagem de capa do card"
          />
          <div className="card-body">
            <p className="card-text">
              Um exemplo de texto rápido para construir o título do card e fazer
              preencher o conteúdo do card.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="col-md-12 mt-5 text-center">
 

  </div>
  
<footer/>
</div>
  )
}
