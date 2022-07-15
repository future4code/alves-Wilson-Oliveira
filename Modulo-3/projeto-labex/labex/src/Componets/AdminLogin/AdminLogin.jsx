import axios from "axios";
import { useState } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { AdminHome } from "../AdminHome/AdminHome";
import { irParaAdminHome } from "../Cordenação/Cordenacao";

export function AdminLogin() {
  const navigate = useNavigate()
  const [usuario, setUsuario] = useState("will@hotmail.com")
  const [senha, setSenha] = useState("123456")
  const [token, settoken] = useState()

  const pegaUsuario = (event) => {
    setUsuario(event.target.value)
  }

  const pegaSenha = (event) => {
    setSenha(event.target.value)
  }

  const pegaToken =()=>{
    const body={
      email:usuario,
      password:senha
    }
    axios.
    post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/wilson-santos-alves/login",body)
    .then((resposta)=>{
      localStorage.setItem("token",resposta.data.token)
      irParaAdminHome(navigate)
    })
    .catch((error)=>{console.log(error)})
      
    
  }


    return (
      <div >
        <form>
        <input value={usuario} onChange={pegaUsuario} placeholder="usuario" />
        <input  value={senha} onChange={pegaSenha} placeholder="senha" />
        </form>
        <button type={"submit"} onClick={pegaToken}>enviar</button>
        </div>
    );
  }

