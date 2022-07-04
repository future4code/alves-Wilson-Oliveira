import React from "react";
import axios from "axios";
import "./style.css"

export class Cadastro extends React.Component {
  state = {
    nomeUsuario: "",
    emailUsuario: "",
  }

  EnviaUsuario = () => {
    const novoUsuario = {
      name: this.state.nomeUsuario,
      email: this.state.emailUsuario
    };
    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", novoUsuario,
      {
        headers: {
          Authorization: "wilson-santos-de-oliveira-alves"
        }
      })
      .then((resposta) => {
        resposta.status === 201 && alert("Seu usuario foi criado com sucesso");
        this.setState({nomeUsuario:"",emailUsuario:""})
      })
      .catch((erro) => {
        alert(erro.response.data.message)

      })
  }

  Peganome = (e) => {
    this.setState({
      nomeUsuario: e.target.value
    })
  }

  Pegaemail = (e) => {
    this.setState({
      emailUsuario: e.target.value
    })
  }



  render() {

    return (
      <main>
        <button onClick={()=>this.props.mudarTela("usuarios")}>Avaçar</button>
        <h2>Crie seu usuario:</h2>
        <div >
          <h3>nome do usuario:</h3>
          <input
            onChange={this.Peganome} value={this.state.nomeUsuario} placeholder="Usuario:"/>
          <h3>email do usuario:</h3>
          <input
            onChange={this.Pegaemail} value={this.state.emailUsuario} placeholder="Email"/>
            <p></p>
          <button onClick={this.EnviaUsuario} >enviar</button>
        </div>
      </main>)
  }
}