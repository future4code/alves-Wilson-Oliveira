import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { irParaFormularioViagem } from "../Cordenação/Cordenacao";

export function ListaViagens() {
  const navigate = useNavigate()
  useEffect(()=>{
    axios.
    get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/wilson-santos-alves/trips")
    .then((resposta)=>{console.log(resposta)})
    .catch((erro)=>{console.log(erro)})
  },[]);

    return <div >
        lista de viagens
        <button onClick={()=>irParaFormularioViagem(navigate)}>candidatar</button>
      </div>
    ;
  }
  
