import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { irParaAdminLogin, irParaHome, irParaListaViagens } from "../Cordenação/Cordenacao";
import Logo from "./imagens/icone.jpg"
import Backheader from "./imagens/backheader.jpg"
import Visa from "./imagens/Visa.jpg"
import Master from "./imagens/mastercard.png"



const Fotterstyle=styled.footer`
    border: 1px solid;
    background-color: #a5ced1;
    max-height:100px ;
    display: flex ;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
    background-image:url(${Backheader});

`
const Visastyle=styled.img`
  height: 60px;
  
  
`
const Masterstyle=styled.img`
  height: 70px;
  border-radius: 20%;
  
`
const ContainerLogo=styled.div`
display: flex;
align-items: center;
gap: 10px;
h1{
  color: white;
  letter-spacing: 15px;
  font-size: 80px;
  margin: 0;
}
p{
  color: white;
 font-size: 20px;
}
`

export function Fottercomp() {
    const navigate = useNavigate()
  
  
  
      return (
        <Fotterstyle >
          <ContainerLogo>
          <h1>Labex</h1>
          <p>Ao infinito e além!!</p>
          </ContainerLogo>
          <div>
            <Visastyle src={Visa} alt="Visa"/>
            <Masterstyle src={Master} alt="mastercard"/>
          </div>
        
        </Fotterstyle>
      );
    }