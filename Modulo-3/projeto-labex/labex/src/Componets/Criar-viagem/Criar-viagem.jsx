import axios from "axios";
import { useNavigate } from "react-router-dom";

export function CriarViagem() {
  const navigate = useNavigate()
  const novaViagem =() =>{
    const body={
      name: "Ano novo em Mercúrio",
      planet: "Mercúrio",
      date: "31/12/2019",
      description: "Venha passar a virada pertinho do Sol!",
      durationInDays: 7
    }
    axios
    .post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/wilson-santos-alves/trips",body,{
      headers: {
        auth: localStorage.getItem("token")
      }
    }).then((resposta)=>{console.log(resposta)})
    .catch((error)=>{console.log(error)})
  }
    return (
      <div >
        <button onClick={novaViagem} >teste</button>
      </div>
    );
  }
  
