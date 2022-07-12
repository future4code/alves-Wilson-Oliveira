import { useState } from "react";
import styled from "styled-components";
import Backheader from "./imagens/header-fundo.png"
import Coracaovermelho from "./imagens/coraçãovermelho.png"

const Headerstyle = styled.div`
min-width:750px;
padding: 5px;
text-align: center;
background-image: url(${Backheader});
background-size : 100% 100% ;
background-repeat: no-repeat;
h1{
  margin: 0;
  font-family: emoji;
  font-style: italic;
  font-weight: 500;
  text-decoration: underline;
  font-size: 2.5rem;
  }
`
const ButtonMuda = styled.button`
display: inline-flex;
align-items: center;
background-color: #ffaec9;
mix-blend-mode: difference;
background-position-x: right;
padding: 15px;
border-radius: 3em;
border: 0 solid;
box-shadow: inset 0 0 20px rgba(255, 255, 255, 0);
outline: 1px solid;
outline-color: rgba(255, 255, 255, .5);
outline-offset: 0px;
text-shadow: none;
transition: all 500ms cubic-bezier(0.19, 0, 0.22, 0);
font-size: 16px;
font-style: italic;
font-weight: 900;
&:hover {
  border: 1px solid;
  box-shadow: inset 0 0 20px rgba(255, 255, 255, .5), 0 0 20px rgba(255, 255, 255, .2);
  outline-color: rgba(255, 255, 255, 0);
  outline-offset: 15px;
  text-shadow: 1px 1px 2px #427388; 
}
img{
  width: 30px;
}
`

export function Header(props) {
  return (
    <Headerstyle >
      <h1>AstroMatch</h1>
      <br></br>
      <div>
        <ButtonMuda onClick={props.atualizaTela} >ir para {props.mudaBotao} <img src={Coracaovermelho} /></ButtonMuda>
      </div>
    </Headerstyle>
  );
}

