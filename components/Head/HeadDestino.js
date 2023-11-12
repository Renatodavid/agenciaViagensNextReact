import React from 'react'

export default function HeadDestino() {
  return (
    <div>

<>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css"
  />
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9"
    crossOrigin="anonymous"
  />
  <link rel="shortcut icon" href="../Img/logofiv.png" type="image/x-icon" />
  <link rel="stylesheet" href="../stylecss/index.css" />
  <title>Destino</title>
  <header id="headerdestino">
    <nav className="navbar navbar-expand-lg bg-body-light">
      <div className="container-fluid bg-nav box">
        <a className="navbar-brand" href="#">
          <img
            className="img-fluid st teste-img"
            src="../img/logo_branco.png"
            alt="logo do projeto"
            width={100}
            height={41}
          />
        </a>
        <button
          className="navbar-toggler bg-light "
          style={{ color: "rgb(0, 0, 0)" }}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon " />
        </button>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav m-auto me-5  mb-lg-2 fs-2 gap-5  ">
            <li className="nav-item">
              <a className="nav-link t " href="index.html">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link t " href="destino.html">
                {" "}
                Destino{" "}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link t" href="promoçoes.html">
                {" "}
                Promoções{" "}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link t" href="contatos.html">
                {" "}
                Contatos{" "}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link t" href="cadastro.html">
                {" "}
                Login{" "}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</>




    </div>
  )
}
