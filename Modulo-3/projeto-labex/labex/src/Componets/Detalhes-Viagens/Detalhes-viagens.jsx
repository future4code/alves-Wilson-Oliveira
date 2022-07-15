import axios from "axios";
import { useNavigate } from "react-router-dom";

export function DetalhesViagem() {
  const navigate = useNavigate()
  const verDetalhes = ( ) =>{
    axios
    .get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/wilson-santos-alves/trip/XPl4md94ByEHVfVD64c1",{
      headers: {
        auth: localStorage.getItem("token")
  }
}).then((resposta)=>{console.log(resposta)})
.catch((error)=>{console.log(error)})
  }
    return (
      <div >
        <button onClick={verDetalhes}>teste</button>
      </div>
    );
  }
  
