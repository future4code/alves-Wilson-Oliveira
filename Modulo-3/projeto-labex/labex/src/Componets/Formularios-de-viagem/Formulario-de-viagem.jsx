import axios from "axios";
import { useNavigate } from "react-router-dom";

export function FormularioViagem() {
  const navigate = useNavigate
const candidatos=()=>{
  const body={
    name: "Astrodev",
    age: 20,
    applicationText: "Quero muuuuuuito ir!!!",
    profession: "Chefe",
    country: "Brasil"
  }
  axios
  .post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/wilson-santos-alves/trips/XPl4md94ByEHVfVD64c1/apply",body)
  .then((resposta)=>{console.log(resposta)})
  .catch((error)=>{console.log(error)})
}

    return (
      <div >
        
        <input></input>
        <input></input>
        <input></input>
        <input></input>
        <input></input>
        <button onClick={candidatos}>enviar</button>
       
      </div>
    );
  }
  
