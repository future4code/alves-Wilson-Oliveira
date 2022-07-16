import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { irParaAdminLogin, irParaHome, irParaListaViagens } from "../Cordenação/Cordenacao";
import Logo from "./imagens/icone.jpg"
import Backheader from "./imagens/backheader.jpg"

const Headerstyle=styled.header`
    border: 1px solid;
    background-color: #a5ced1;
    max-height:100px ;
    display: flex ;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
    background-image:url(${Backheader});

`
const Logostyle=styled.img`
  height: 70px;
  border-radius: 50%;
  cursor: pointer;
`
const ContainerLogo=styled.div`
display: flex;
align-items: center;
gap: 10px;
h1{
  color: white;
  letter-spacing: 5px;
}
`

export function Headercomp() {
    const navigate = useNavigate()
  
  
  
      return (
        <Headerstyle >
          <ContainerLogo>
          <Logostyle src={Logo} alt= "ir para home" onClick={()=>irParaHome(navigate)}/>
          <h1>Labex</h1>
          </ContainerLogo>
          <button onClick={()=>irParaAdminLogin(navigate)}>Área administrativa</button>
          
          
        </Headerstyle>
      );
    }