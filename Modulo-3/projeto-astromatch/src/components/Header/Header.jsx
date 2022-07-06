import { useState } from "react";
import styled from "styled-components";

const Headerstyle=styled.div`
    border-bottom: 1px solid;
    padding: 5px;
`

export function Header(props) {
  const [mudaTela,setMudatela]=useState("")



    return (
      <Headerstyle >
        <h1><strong>AstroMatch</strong></h1>
        <br></br>
        <button onClick={props.atualizaTela} >ir para {props.mudaBotao}</button>
        
      </Headerstyle>
    );
  }
  
