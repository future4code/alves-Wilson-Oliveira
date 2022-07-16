import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { irParaFormularioViagem } from "../Cordenação/Cordenacao";
import { Fottercomp } from "../Home-Pagina/Fotter-comp";
import { Headercomp } from "../Home-Pagina/Header-comp";

const Appstyled=styled.div`
 display: grid;
 grid-template-rows: 1fr 1fr 1fr;
 width: 100%;
 min-height: 100vh;
 height: 100%;
 background-color: #a192927a;
 `


export function ListaViagens() {
  const navigate = useNavigate()
  const [vigens, setViagens]=useState([])
  

  useEffect(()=>{
    axios.
    get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/wilson-santos-alves/trips")
    .then((resposta)=>{
    setViagens(resposta.data.trips)
  })
    .catch((erro)=>{console.log(erro)})
  },[]);
  
  function mostraViagens ( ) {
    const viagensMap =vigens.map((item)=>{
      
      return<div key={item.id}>
        <div>nome: {item.name}</div>
        <div>descrição: {item.description}</div>
        <div>planeta: {item.planet}</div>
        <div>duração: {item.durationInDays}</div>
        <div>data: {item.date}</div>
        <button onClick={()=>irParaFormularioViagem (navigate,item.id)}>candidatar</button>
        </div>
      })
      return viagensMap
  }
    return <Appstyled >
      <Headercomp/>
        {mostraViagens()}
        <Fottercomp/>
      </Appstyled>
    ;
  }
  
