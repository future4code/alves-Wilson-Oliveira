import React from "react";
import styled from "styled-components";

const Mensagensnovas = styled.div`

width: 100%;
height: 100%;
min-width: 750px;
background-color: #1015aa2d;
display: flex;
flex-direction: column;
align-items: center;


`
const AreadeMsg = styled.div`
width: 70%;
height: 100%;
min-width: 750px;
display: grid;
grid-template-rows: 1fr 25px;
grid-template-areas: '.'
'final' ;
background-color: #1719633e;
border: 1px solid;

`


const Caixademensagem = styled.div`
max-width: 40%;
height: auto;
padding: 10px 15px;
border-radius: 5px;
text-align: left;
align-self: flex-start;
display: flex;
flex-direction: column;
margin: 5px;
background-color: rgb(255, 255, 255);
box-shadow: rgb(0 0 0 / 13%) 0px 1px 0.5px;
`

const CaixademensagemEU = styled.div`
max-width: 40%;
height: auto;
padding: 10px 15px;
border-radius: 5px;
text-align: left;
align-self: flex-end;
display: flex;
flex-direction: column;
margin: 5px;
background-color: rgb(255, 255, 255);
box-shadow: rgb(0 0 0 / 13%) 0px 1px 0.5px;
`

const MsgsDiferentes= styled.div`
display: flex;
flex-direction: column;
`




const Nomedosuario = styled.div`
width: 100%;
`

const Input = styled.input`
width: auto;
height: auto;
`

const InputMsg = styled.input`
width: 400px
`
const Button=styled.button`
`
const Inputs=styled.div`
grid-area: final;
justify-self: center;
`



document.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    const btn = document.querySelector("#enviar");
    btn.click();
  }


})





export default class Listademens extends React.Component {
  state = {

    arrayDeMsg: [
    ],
    nomeInputvalor: "",
    mensagenInputValor: "",
  };



  adicionaNome = (event) => {
    this.setState({ nome: event.target.value });
  };
  adicionaIdade = (event) => {
    this.setState({ mensagen: event.target.value });
  };

  adicionaMensagem = () => {
    const novaMensagem = {
      nome: this.state.nome,
      mensagen: this.state.mensagen
    };
    const novoArray = [...this.state.arrayDeMsg, novaMensagem];
    this.setState({
      arrayDeMsg: novoArray, nome: "", mensagen: ""

    });
  };

  render() {
    return (
      <Mensagensnovas>
        <AreadeMsg>
        <MsgsDiferentes>

          {this.state.arrayDeMsg.map((Mensagem, indice) => {
            if(Mensagem.nome==="eu"){
              return <CaixademensagemEU key={indice}>
                <p> {Mensagem.mensagen}</p>
              </CaixademensagemEU>}
            return (
              
              <Caixademensagem key={indice}>
                <Nomedosuario>{Mensagem.nome} diz:</Nomedosuario>
                <p> {Mensagem.mensagen}</p>
              </Caixademensagem>
            );
          })}
          </MsgsDiferentes>
          <Inputs>
          <Input name={"nome usuario"} onChange={this.adicionaNome} placeholder="Usuario" value={this.state.nome} />
          <InputMsg name={"mensagem do usuario"} onChange={this.adicionaIdade} placeholder="Mensagem" value={this.state.mensagen} />
          <Button id="enviar" onClick={this.adicionaMensagem}>Enviar</Button>
          </Inputs>
          </AreadeMsg>
      </Mensagensnovas>
    );
  }
}
