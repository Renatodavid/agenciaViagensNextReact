import React from 'react'




export default function Navbar() {
  return (

    <nav className="navbar navbar-expand-lg bg-body-light" id="nav">
      <div className="container-fluid bg-nav box">
        <a className="navbar-brand" href="#">
          <img
            className=" st teste-img"
            src="img/logo_branco.png"
            alt="logo do projeto"
           
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
              <a className="nav-link t" href="login.html">
                {" "}
                Login{" "}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>


  )
}
