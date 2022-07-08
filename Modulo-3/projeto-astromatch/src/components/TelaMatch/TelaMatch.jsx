import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

export function TelaMatch() {
    const [match,setMacth] = useState([])

    function requisitarMatchs () {
      axios.
      get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/will/matches")
      .then((resposta)=>{
        setMacth (resposta.data.matches)})
      .catch((erro)=>{console.log(erro)})
    }
    
    function mostraMatch () {
const novoMatch=match.map((item)=>{
  return<div>
<p>{item.name} , {item.age}</p>
        <p>{item.bio}</p>
  </div>
})
return novoMatch
    }
    useEffect(()=>{
      requisitarMatchs()
      
    },[])


    return (
      <div >
      {mostraMatch()}
      <button onClick={mostraMatch}>teste</button>
      </div>
    );
  }