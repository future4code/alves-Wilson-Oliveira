import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";

const ImgMatch=styled.img`
  width: 250px;
  height: 250px;
`
const TelaInicialstyled=styled.div`
  padding: 5px;

`

export function TelaInicial(props) {
    const [match,setMacth] = useState("")
    const [novoperfil,setNovoPerfil] = useState("")
    const [idPerfil,setIdPerfil] = useState("")

    function mostrarPerfils () {
      axios.
      get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/will/person",)
      .then((resposta)=>{
        setNovoPerfil (resposta.data.profile)
        setIdPerfil (resposta.data.profile.id)
        
      })
      .catch((erro)=>{console.log(erro)})  
    }

    useEffect(()=>{
      mostrarPerfils()
    },[])

    function likeDislike (valor) {
      const body={
        id:idPerfil,
        choice: valor
      }
      axios.
      post(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/will/choose-person`,body)
      .then(mostrarPerfils())
      .catch((erro)=>{console.log(erro)})
    }

    function resetarPerfis ( ) {
axios.
put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/will/clear"
).then(mostrarPerfils())
.catch((erro)=>{console.log(erro)}) 


    }

    function semPerfil ( ) {
    if(novoperfil){return <TelaInicialstyled >
      <h1>Perfil</h1>
      <ImgMatch src={novoperfil.photo}/>
      <p>{novoperfil.name} , {novoperfil.age}</p>
      <p>{novoperfil.bio}</p>
      <button onClick={()=>likeDislike(true)}>like</button>
      <button onClick={()=>likeDislike(false)}>dislike</button>
    </TelaInicialstyled> 
    }else{
      return <div>
        <h3>Acabou os perfis</h3>
        
        </div>
    }

    }

   
    return<div>
     {semPerfil()}
     <button onClick={resetarPerfis}>resetar</button>
     </div>
  }