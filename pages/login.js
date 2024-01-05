import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function login() {
  return (
  
<>
<main id="container">
  <form id="login-form">
    <div id="logo">
      <a href="/">
        <img src="./img/logo_preto.png" alt="logo " style={{ width: 150 }} />
      </a>
      <div id="form-header">
        <a id="login" href="/">
          Efetue Login
        </a>
        <a id="cadastro" href="/Cadastro">
          Crie sua conta
        </a>
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
        <a id="login-anchor" href="/">
          Login
        </a>
      </button>
      <div id="esqueceu-senha">
        <a href="#">Esqueceu sua senha?</a>
      </div>
    </div>
  </form>
</main>

</>
  )
}
