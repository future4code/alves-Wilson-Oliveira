import { useNavigate } from "react-router-dom";
import { irParaAdminLogin, irParaHome, irParaListaViagens } from "../Cordenação/Cordenacao";

export function HomePagina() {
  const navigate = useNavigate()



    return (
      <div >
        <button onClick={()=>irParaAdminLogin(navigate)}>login</button>
        <button onClick={()=>irParaListaViagens(navigate)}>lista</button>
        
      </div>
    );
  }
