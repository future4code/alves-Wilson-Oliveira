import React from 'react';
import './App.css';
import { Formulario1 } from './componentes/formulario1';
import { Formulario2 } from './componentes/formulario2';
import {Formulario3} from './componentes/formulario3'
import { Formulario4 } from './componentes/formulario4';
import styled from 'styled-components'

let ButtonPagina=styled.button`
display: none;
`
let ButtonPagina1=styled.button`
display: inline;
`


class App extends React.Component {
  state={
    etapa:1,
  }
  
  onClickMudarPagina = () => {
this.setState({
  etapa:this.state.etapa+1
})

  }


  
  mudarPagina = () => {
    switch(this.state.etapa){
      case 1:return <Formulario1/>;
      case 2:return <Formulario2/>;
      case 3: return <Formulario3/>;
      case 4: return <Formulario4/>;
    }
    
  }
  ultimoForm = () =>{
    if(this.state.etapa==3){ButtonPagina1=ButtonPagina}
  }
  
  render(){




  return (
    <div className="App">
      {this.mudarPagina()}
      <ButtonPagina1 onClick={this.onClickMudarPagina}>Próxima etapa</ButtonPagina1>
      {this.ultimoForm()}
    </div>
  );
  }
}

export default App;
