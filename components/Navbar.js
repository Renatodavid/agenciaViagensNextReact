import Link from 'next/link'
import React from 'react'




export default function Navbar() {
  return (

    <nav className="navbar navbar-expand-lg bg-body-light" id="nav">
      <div className="container-fluid bg-nav box">
        <Link className="navbar-brand" href="#">
          <img
            className=" st teste-img"
            src="img/logo_branco.png"
            alt="logo do projeto"
          />
        </Link>
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
              <Link className="nav-link t " href="\">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link t " href="\Destino">
                {" "}
                Destino{" "}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link t" href="\Promocoes">
                {" "}
                Promoções{" "}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link t" href="\Contatos">
                {" "}
                Contatos{" "}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link t" href="\Cadastro">
                {" "}
                Cadastro{" "}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link t" href="\login">
                {" "}
                Login{" "}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>


  )
}
