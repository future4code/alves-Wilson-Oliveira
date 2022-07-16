import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { Fottercomp } from "../Home-Pagina/Fotter-comp";
import { Headercomp } from "../Home-Pagina/Header-comp";

const Formulariostyle=styled.div`
  display:flex;
  flex-direction: column;
    align-items: center;
`
const Appstyled=styled.div`
 display: grid;
 grid-template-rows: 1fr 1fr 1fr;
 width: 100%;
 min-height: 100vh;
 height: 100%;
 background-color: #a192927a;
 `

export function FormularioViagem(props) {
  const navigate = useNavigate
  const pathParams=useParams()
const candidatos=()=>{
  const body={
    name: "Astrodev",
    age: 20,
    applicationText: "Quero muuuuuuito ir!!!",
    profession: "Chefe",
    country: "Brasil"
  }
  axios
  .post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/wilson-santos-alves/trips/${pathParams}/apply`,body)
  .then((resposta)=>{console.log(resposta)})
  .catch((error)=>{console.log(error)})
}

    return (<Appstyled>
      <Headercomp/>
      <Formulariostyle >
        nome:
        <input></input>
        idade:
        <input></input>
        profissão:
        <input></input>
        pais:
        <input></input>
        Mensagen:
        <input></input>
        <button onClick={candidatos}>enviar</button>
       
      </Formulariostyle>
      <Fottercomp/>
      </Appstyled>
    );
  }
  
