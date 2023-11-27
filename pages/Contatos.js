import React from 'react'

export default function Contatos() {
  return (
    <div>
<main className="container">
  <p className="fs-2 text-center"> Entre em contato conosco!</p>
  <section
    className="row gap-3 row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-1 text-center"
    id="area-contato"
  >
    <div className="col ">
      <i className="bi bi-geo-alt" />
      <div id="endereco">
        <p> Praça Senador Salgado Filho, s/n° – Rio de Janeiro – RJ</p>
      </div>
    </div>
    <div className="col ">
      <i className="bi bi-telephone" />
      <p>Atendimento ao cliente: (21) 98705-1725</p>
    </div>
    <div className="col ">
      <i className="bi bi-envelope" />
      <div id="email">
        <p>renato.david@aluno.org.br</p>
      </div>
    </div>
    <p className="mt-5 fw-bold">
      * Atendimento de segunda à sexta em horário comercial
    </p>
  </section>
  <hr />
  <section className="mb-5">
    <p className="fs-3">Deixe sua mensagem</p>
    <div className="mb-3 ">
      <label htmlFor="exampleFormControlInput1" className="form-label">
        Nome
      </label>
      <input
        type="text"
        className="form-control"
        style={{ borderColor: "#000" }}
        id="exampleFormControlInput1"
        placeholder="Digite o seu nome"
      />
    </div>
    <div className="mb-3">
      <label htmlFor="exampleFormControlInput1" className="form-label">
        E-mail
      </label>
      <input
        type="email"
        className="form-control"
        style={{ borderColor: "#000" }}
        id="exampleFormControlInput1"
        placeholder="Digite seu melhor e-mail"
      />
    </div>
    <div className="mb-3  ">
      <label htmlFor="exampleFormControlTextarea1" className="form-label ">
        Mensagem
      </label>
      <textarea
        className="form-control"
        style={{ borderColor: "#000" }}
        id="exampleFormControlTextarea1"
        rows={6}
        placeholder="Digite sua mensagem"
        defaultValue={""}
      />
    </div>
    <button type="button" className="botaop">
      Enviar
    </button>
  </section>
</main>


    </div>
  )
}
