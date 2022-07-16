import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { irParaAdminLogin, irParaHome, irParaListaViagens } from "../Cordenação/Cordenacao";
import { Fottercomp } from "./Fotter-comp";
import { Headercomp } from "./Header-comp";
import Imghome from "./imagens/imagenHome2.jpg"

const Appstyled=styled.div`
 display: grid;
 grid-template-rows: 1fr 6fr 1fr;
 width: 100%;
 height: 100vh;
 background-color: #a192927a;
 `
 const Homestyled=styled.div`
 display:grid;
 grid-template-columns: 1fr 1fr;
 align-items: center;
    justify-items: center;
img{
  max-height: 250px;
  border-radius: 10%
}
div{
  width: 150px;
  font-size: 20px;
  
}
 `

export function HomePagina() {
  const navigate = useNavigate()



    return (<Appstyled>
      <Headercomp/>
      <Homestyled >
        <img src={Imghome} alt="Astronauta"/>
        <div>
          <p>Somo uma empresa especializada em realizar o sonho da população em ir para o espaço</p>
        <button onClick={()=>irParaListaViagens(navigate)}>click aqui e confira</button>
        </div>
        </Homestyled>
        <Fottercomp/>
      </Appstyled>
    );
  }
