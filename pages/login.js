import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';

export default function login() {
  return (
  
<>
<main id="container">
  <form id="login-form">
    <div id="logo">
      <Link href="/">
        <img src="./img/logo_preto.png" alt="logo " style={{ width: 150 }} />
        </Link>
      <div id="form-header">
        <Link id="login" href="/">
          Efetue Login
        </Link>
        <Link id="cadastro" href="Cadastro">
          Crie sua conta
        </Link>
      </div>
      <div id="inputs"></div>
      <div className="input-box">
        <label htmlFor="email">
          Email
          <div className="input-space">
            <i className="fa-solid fa-envelope" />
            <input type="email" id="email" name="email" />
          </div>
        </label>
      </div>
      <div className="input-box">
        <label htmlFor="password">
          Senha
          <div className="input-space">
            <i className="fa-solid fa-key" />
            <input
              style={{ width: 215 }}
              type="password"
              id="password"
              name="password"
            />
            <div id="pass-btn">
              <i
                className="fa-solid fa-eye"
                id="btn-password"
                onclick="showPassword()"
              />
            </div>
          </div>
        </label>
      </div>
    </div>
    <div id="form-footer">
      <button type="submit" id="login-button">
        <Link id="login-anchor" href="/">
          Login
        </Link>
      </button>
      <div id="esqueceu-senha">
        <Link href="#">Esqueceu sua senha?</Link>
      </div>
    </div>
  </form>
</main>
</>
  )
}
