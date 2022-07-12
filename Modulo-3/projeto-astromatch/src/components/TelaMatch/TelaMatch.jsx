import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import Mensagem from "./imagen/Mensagem2.png"



const ImgMatch = styled.img`
width: 50px;
height: 50px;
border-radius: 50%;
`
const ImgMensagem = styled.img`
width: 25px;
height: 25px;
background-color: transparent;
&:hover{
  cursor: pointer;
  background-color: #8d8d8d;
}
`

const Matchsstyled = styled.button`
display: flex;
margin: 20px 0;
gap: 20px;
align-items: center;
width: 100%;
border: none;
justify-content: space-between;
background-color: white;
font-size: 1rem;
&:hover {
  background-color: #e6e4e4;
}
`
const TelaMatchstyled = styled.main`
width: 100%;
display: grid;
grid-template-columns: 1fr 4fr 1fr;
`

const Lateralback = styled.div`
background-color: #333333;;
min-height: 77vh;
`
export function TelaMatch() {
  const [match, setMacth] = useState([])
  function requisitarMatchs() {
    axios.
      get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/will/matches")
      .then((resposta) => {
        setMacth(resposta.data.matches)
      })
      .catch((erro) => { console.log(erro) })
  }

  function mostraMatch() {
    const novoMatch = match.map((item) => {
      return <Matchsstyled key={item.id}>
        <ImgMatch src={item.photo} />
        <p>{item.name} , {item.age}</p>
        <ImgMensagem src={Mensagem} alt="mensagem" />
      </Matchsstyled>
    })
    return novoMatch
  }

  useEffect(() => {
    requisitarMatchs()
  }, [])

  return (
    <TelaMatchstyled >
      <Lateralback></Lateralback>
      <div>
        <h1>Seus Matches:</h1>
        {mostraMatch()}
      </div>
      <Lateralback></Lateralback>
    </TelaMatchstyled>
  );
}