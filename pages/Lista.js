"use client"
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';


export default function Lista() {
  const [usuarios, setUsuarios] = useState([]);
    const [isLoading, setIsLoading]= useState(true);

  useEffect(() => {
    axios.get('https://localhost:7026/api/Usuario')
    .then((response)=>{
        if(response.status === 200 ){
            setUsuarios(response.data);
            setIsLoading(false);
            return;
        }
        return alert("erro ao buscar usuarios")
    }).catch((err)=> alert(`erro ao buscar usuarios. ${err} `))
    }, []);

  if(isLoading){
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <form action="#" method="post" className="containerC">
      </form>
      {/* Tabela para exibir dados da API */}
      <div className="container mt-4">
        <h2 className="text-center">Usuários Cadastrados</h2>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>CPF</th>
              <th>E-mail</th>
              <th>Celular</th>
              <th>senha</th>
              <th>Gênero</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map(usuario => (
              <tr key={usuario.usuarioId}>
                <td>{usuario.usuarioId}</td>
                <td>{usuario.nome}</td>
                <td>{usuario.cpf}</td>
                <td>{usuario.email}</td>
                <td>{usuario.celular}</td>
                <td>{usuario.senha}</td>
                <td>{usuario.genero}</td>
              </tr>
                ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
