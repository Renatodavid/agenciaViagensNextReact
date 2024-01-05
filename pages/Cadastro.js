import React from 'react'

export default function Cadastro() {
  return (

<>
  
  <form action="#" method="post" className="containerC">
    <div className="container mt-4">
      <img src="../img/logo_preto.png" id="logocadastro" alt="renatour" />
      <h2 className="text-center">Cadastre-se</h2>
      <div className="form-group">
        <label htmlFor="primeiro_nome">Primeiro Nome:</label>
        <input
          type="text"
          className="form-control"
          id="primeiro_nome"
          name="primeiro_nome"
        />
      </div>
      <div className="form-group">
        <label htmlFor="cpf_rg">CPF / RG:</label>
        <input type="text" className="form-control" id="cpf_rg" name="cpf_rg" />
      </div>
      <div className="form-group">
        <label htmlFor="email">E-mail:</label>
        <input type="email" className="form-control" id="email" name="email" />
      </div>
      <div className="form-group">
        <label htmlFor="celular">Celular:</label>
        <input
          type="tel"
          className="form-control"
          id="celular"
          name="celular"
        />
      </div>
      <div className="form-group">
        <label htmlFor="senha">Senha:</label>
        <input
          type="password"
          className="form-control"
          id="senha"
          name="senha"
        />
      </div>
      <div className="form-group">
        <label htmlFor="confirmar_senha">Confirme sua Senha:</label>
        <input
          type="password"
          className="form-control"
          id="confirmar_senha"
          name="confirmar_senha"
        />
      </div>
      <div className="form-group">
        <label>Gênero:</label>
        <br />
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            id="feminino"
            name="genero"
            defaultValue="feminino"
          />
          <label className="form-check-label" htmlFor="feminino">
            Feminino
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            id="masculino"
            name="genero"
            defaultValue="masculino"
          />
          <label className="form-check-label" htmlFor="masculino">
            Masculino
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            id="outros"
            name="genero"
            defaultValue="outros"
          />
          <label className="form-check-label" htmlFor="outros">
            Outros
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            id="prefiro_nao_dizer"
            name="genero"
            defaultValue="prefiro_nao_dizer"
          />
          <label className="form-check-label" htmlFor="prefiro_nao_dizer">
            Prefiro não dizer
          </label>
        </div>
      </div>
      <div className="botoes mb-5 pb-4">
        <a href="index.html"> </a>
        <button type="submit" className="botaop mb-2 mt-4 ml-3">
          <a href="index.html">Continuar </a>
        </button>
        <a href="login.html"></a>
        <button type="button" className="botaop ml-3">
          <a href="login.html">Voltar</a>
        </button>
      </div>
    </div>
  </form>
</>




   
  )
}
