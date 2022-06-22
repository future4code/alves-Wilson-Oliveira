import React from "react";
import {CriarUsuario} from "./componentes/Criarusuario"
import {Editarusuario} from "./componentes/Editarusuario"

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
     {this.state.tela ? (<CriarUsuario mudarTela={this.mudarTela}></CriarUsuario>):(<Editarusuario mudarTela={this.mudarTela}></Editarusuario>)}
     
    </div>
  );
}
}

