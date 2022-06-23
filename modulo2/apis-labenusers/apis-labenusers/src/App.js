import React from "react";
import {CriarUsuario} from "./componentes/Criarusuario"
import {Editarusuario} from "./componentes/Editarusuario"
import Labenu from "./componentes/Labenu.jpg"

export class App extends React.Component {
  state={
  tela:true

  }
  mudarTela=()=>{
    this.setState({tela:!this.state.tela})
  }
  
  


  render(){
  return (

    <div className="App">
      <h1 className="headerMain">Bem vindo a Labenuser</h1>
     {this.state.tela ? (<CriarUsuario mudarTela={this.mudarTela}></CriarUsuario>):(<Editarusuario mudarTela={this.mudarTela}></Editarusuario>)}
     <div className="divisoria"> <img className="back" src={Labenu}/></div>
    </div>
  );
}
}

