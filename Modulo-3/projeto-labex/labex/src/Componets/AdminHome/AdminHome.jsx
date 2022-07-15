import axios, { Axios } from "axios";
import { useNavigate } from "react-router-dom";
import { irParaCriarViagem, irParaDetalhesViagem } from "../Cordenação/Cordenacao";

export function AdminHome() {
    const navigate = useNavigate()


    const listaDeViagens=()=>{
axios.
get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/wilson-santos-alves/trips")
.then((resposta)=>{console.log(resposta)})
.catch((error)=>{console.log(error)})


    } 
    return (
      <div >
        adminhome
        <button onClick={listaDeViagens}>teste</button>
        <button onClick={()=>irParaCriarViagem(navigate)}>Criar viagem</button>
        <button onClick={()=>irParaDetalhesViagem(navigate)}> Detalhe da viagem</button>
      </div>
    );
  }
  
  