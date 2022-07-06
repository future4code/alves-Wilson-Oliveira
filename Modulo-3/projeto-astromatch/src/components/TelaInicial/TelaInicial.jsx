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
    // useEffect(()=>{},[])
    function mostrarPerfils () {
      axios.
      get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/will/person",)
      .then((resposta)=>{
        setNovoPerfil (resposta.data.profile)
      })
      .catch((erro)=>{console.log(erro)})  
    }
    useEffect(()=>{
      mostrarPerfils()
    },[])



   
    return (
      <TelaInicialstyled >
        <h1>Perfil</h1>
        <ImgMatch src={novoperfil.photo}/>
        <p>{novoperfil.name} , {novoperfil.age}</p>
        <p>{novoperfil.bio}</p>
        <button onClick={mostrarPerfils}>teste</button>
      </TelaInicialstyled>
    );
  }