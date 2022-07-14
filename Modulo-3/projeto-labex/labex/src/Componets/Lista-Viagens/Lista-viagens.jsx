import axios from "axios";
import { useEffect } from "react";

export function ListaViagens() {
  useEffect(()=>{
    axios.
    get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/wilson-santos-oliveira-alves/trips")
    .then((resposta)=>{console.log(resposta)})
    .catch((erro)=>{console.log(erro)})
  },[]);

    return <div >
        lista de viagens
      </div>
    ;
  }
  
