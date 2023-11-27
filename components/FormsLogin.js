import React from 'react'

export default function FormsLogin() {
  return (
    <div>

<form action="#" method="post" classname="containerC">
  <div classname="container mt-4">
    <img src="../Img/logo_preto.png" id="logocadastro" alt="renatour" />
    <h2 classname="text-center">Cadastre-se</h2>
    <div classname="form-group">
      <label htmlfor="primeiro_nome">Primeiro Nome:</label>
      <input
        type="text"
        classname="form-control"
        id="primeiro_nome"
        name="primeiro_nome"
      />
    </div>
    <div classname="form-group">
      <label htmlfor="cpf_rg">CPF / RG:</label>
      <input type="text" classname="form-control" id="cpf_rg" name="cpf_rg" />
    </div>
    <div classname="form-group">
      <label htmlfor="email">E-mail:</label>
      <input type="email" classname="form-control" id="email" name="email" />
    </div>
    <div classname="form-group">
      <label htmlfor="celular">Celular:</label>
      <input type="tel" classname="form-control" id="celular" name="celular" />
    </div>
    <div classname="form-group">
      <label htmlfor="senha">Senha:</label>
      <input type="password" classname="form-control" id="senha" name="senha" />
    </div>
    <div classname="form-group">
      <label htmlfor="confirmar_senha">Confirme sua Senha:</label>
      <input
        type="password"
        classname="form-control"
        id="confirmar_senha"
        name="confirmar_senha"
      />
    </div>
    <div classname="form-group">
      <label>Gênero:</label>
      <br />
      <div classname="form-check form-check-inline">
        <input
          classname="form-check-input"
          type="radio"
          id="feminino"
          name="genero"
          defaultvalue="feminino"
        />
        <label classname="form-check-label" htmlfor="feminino">
          Feminino
        </label>
      </div>
      <div classname="form-check form-check-inline">
        <input
          classname="form-check-input"
          type="radio"
          id="masculino"
          name="genero"
          defaultvalue="masculino"
        />
        <label classname="form-check-label" htmlfor="masculino">
          Masculino
        </label>
      </div>
      <div classname="form-check form-check-inline">
        <input
          classname="form-check-input"
          type="radio"
          id="outros"
          name="genero"
          defaultvalue="outros"
        />
        <label classname="form-check-label" htmlfor="outros">
          Outros
        </label>
      </div>
      <div classname="form-check form-check-inline">
        <input
          classname="form-check-input"
          type="radio"
          id="prefiro_nao_dizer"
          name="genero"
          defaultvalue="prefiro_nao_dizer"
        />
        <label classname="form-check-label" htmlfor="prefiro_nao_dizer">
          Prefiro não dizer
        </label>
      </div>
    </div>
    <div classname="botoes mb-5 pb-4">
      <a href="index.html"> </a>
      <button type="submit" classname="botaop mb-2 mt-4 ml-3">
        <a href="index.html">Continuar </a>
      </button>
      <a href="login.html" />
      <button type="button" classname="botaop ml-3">
        <a href="login.html">Voltar</a>
      </button>
    </div>
  </div>
</form>

    </div>
  )
}
