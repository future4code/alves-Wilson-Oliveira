import React from "react";
import {Cadastro} from "./componentes/Cadastro"
import {Usuarios} from "./componentes/Usuarios"
import { Detalhes } from "./componentes/Detalhes";
import Labenu from "./componentes/Labenu.jpg"

export class App extends React.Component {
  state={
  tela:"cadastro"

  }

escolheTela=()=>{
switch(this.state.tela){
  case "cadastro":
    return<Cadastro mudarTela={this.mudarTela}/>
    case "usuarios":
      return <Usuarios mudarTela={this.mudarTela}/>
        default:
          return<Cadastro mudarTela={this.mudarTela}/>
          
}



}


  mudarTela=(nomedatela)=>{
    this.setState({tela:nomedatela})
  }
  
  


  render(){
  return (

    <div className="App">
      <h1 className="headerMain">Bem vindo a Labenuser</h1>
     {this.escolheTela()}
     <div className="divisoria"> <img className="back" src={Labenu}/></div>
    </div>
  );
}
}

