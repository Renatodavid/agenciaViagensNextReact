import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

export default function Cadastro() {

  const [newUsuario, setNewUsuario] = useState({ nome: "", cpf: "", email: "", celular: "", genero: "", senha: "" });
  const router = useRouter();

  const InputChange = (value, propriedade) => {
      setNewUsuario({
        ...newUsuario,
        [propriedade]:value
      });
  };
  const AddUsuario = () => {
      axios
          .post("https://localhost:7026/api/Usuario", newUsuario)
          .then((response) => {
              router.push("Usuario");
          })
          .catch((error) => {
              alert("Erro ao inserir Usuario:" + error);
          });
  };
  return (

<>
 
  <form action="#" method="post" className="containerC">
    <div className="container mt-4">
      <img src="../img/logo_preto.png" id="logocadastro" alt="renatour" />
      <h2 className="text-center">Cadastre-se</h2>
      <div className="form-group">
        <label htmlFor="nome"> Nome Completo:</label>
        <input
          type="text"
          className="form-control"
          id="nome"
          name="nome"
          onChange={(event) => InputChange(event.target.value,"nome")}
        />
      </div>
      <div className="form-group">
        <label htmlFor="cpf">CPF:</label>
        <input type="text"
        className="form-control" 
        id="cpf"
        name="cpf"
        onChange={(event) => InputChange(event.target.value,"cpf")}
           />
      </div>
      <div className="form-group">
        <label htmlFor="email">E-mail:</label>
        <input type="email" 
        className="form-control"
        id="email"
        name="email" 
        onChange={(event)=> InputChange(event.target.value,"email")}
        />
      </div>
      <div className="form-group">
        <label htmlFor="celular">Celular:</label>
        <input
          type="tel"
          className="form-control"
          id="celular"
          name="celular"
          onChange={(event) => InputChange(event.target.value, "celular")}
        />
      </div>
      <div className="form-group">
        <label htmlFor="senha">Senha:</label>
        <input
          type="password"
          className="form-control"
          id="senha"
          name="senha"
          onChange={(event) => InputChange(event.target.value,"senha")}
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
            onChange={(event) => InputChange(event.target.value,"genero")}
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
            onChange={(event) => InputChange(event.target.value, "genero")}
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
            onChange={(event) => InputChange(event.target.value,"genero")}
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
            onChange={(event) => InputChange(event.target.value,"genero")}
          />
          <label className="form-check-label" htmlFor="prefiro_nao_dizer">
            Prefiro não dizer
          </label>
        </div>
      </div>
      <div className="botoes mb-5 pb-4">
        <button type="submit" onClick={() => AddUsuario()} className="botaop mb-2 mt-4 ml-3">
         Continuar
        </button>
        <button type="button" className="botaop ml-3">
          Voltar
        </button>
      </div>
    </div>
  </form>
</>

  )
}
