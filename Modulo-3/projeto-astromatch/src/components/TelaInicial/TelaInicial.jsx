import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import Like from "./imagens/like.png"
import Dislike from "./imagens/dislike.png"
import Emoji from "./imagens/Emojichorando.png"

const ImgMatch = styled.img`
  width: 200px;
  height: 200px;
  border: 1px solid;
`
const ImgEmoji = styled.img`
  width: 50%;
  height: 50%;
`
const ImgButton = styled.img`
  max-width: 50px;
  max-height: 50px;
  border-radius: 50%;
`
const Buttonlike = styled.button`
  border-radius: 25%;
  border-color: #00bf00;
  color: #fff;
  box-shadow: 0 0 40px 40px #00bf00 inset, 0 0 0 0 #00bf00;
  -webkit-transition: all 150ms ease-in-out;
  transition: all 150ms ease-in-out;

&:hover {
  box-shadow: 0 0 10px 0 #00bf00 inset, 0 0 10px 4px #00bf00;
}

`

const Buttondislike = styled.button`
  border-radius: 25%;
  border-color: #bd0000;
  color: #fff;
  box-shadow: 0 0 40px 40px #bd0000 inset, 0 0 0 0 #bd0000;
  -webkit-transition: all 150ms ease-in-out;
  transition: all 150ms ease-in-out;

&:hover {
  box-shadow: 0 0 10px 0 #bd0000 inset, 0 0 10px 4px #bd0000;
}

`
const Buttons = styled.div`
  display: flex;
  gap: 6rem;

`
const TelaInicialstyled = styled.div`
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;

`
const TelaCentral = styled.div`
  display:flex;
  align-items: center;
  flex-direction: column;
  h1{
    font-size: 4rem;
    }
`
const Telabackgroud = styled.main`
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
`
const Lateralback = styled.div`
  background-color: #333333;;
  min-height: 77vh;
`
export function TelaInicial() {
  const [novoperfil, setNovoPerfil] = useState("")
  const [idPerfil, setIdPerfil] = useState("")

  function mostrarPerfils() {
    axios.
      get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/will/person",)
      .then((resposta) => {
        setNovoPerfil(resposta.data.profile)
        setIdPerfil(resposta.data.profile.id)
      })
      .catch((erro)=>console.log(erro))
  }

  useEffect(() => {
    mostrarPerfils()
  },[])

  function likeDislike(valor) {
    const body = {
      id: idPerfil,
      choice: valor
    }
    axios.
      post(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/will/choose-person`, body)
      .then((resposta) => {
        mostrarPerfils()
        if (resposta.data.isMatch == true) { 
          alert("Você e " + novoperfil.name + " deram match") 
        }
      })
      .catch((erro) => {
        alert("Ocorreu um erro!") 
      })
  }

  function resetarPerfis() {
    axios.
      put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/will/clear"
      ).then(alert("Perfis resetados com sucesso!"))
      .catch((erro) => {
        alert("Ocorreu um erro!")
        })
    mostrarPerfils()
  }

  function semPerfil() {
    if (novoperfil) {
      return <TelaInicialstyled >
        <h1>{novoperfil.name}</h1>
        <ImgMatch src={novoperfil.photo} />
        <p> Idade: {novoperfil.age}</p>
        <p>Descrição: {novoperfil.bio}</p>
        <Buttons>
          <Buttonlike onClick={() => likeDislike(true)}><ImgButton src={Like} /></Buttonlike>
          <Buttondislike onClick={() => likeDislike(false)}><ImgButton src={Dislike} /></Buttondislike>
        </Buttons>
      </TelaInicialstyled>
    } else {
      return <TelaCentral>
        <h1>Acabou os perfis!!!</h1>
        <ImgEmoji src={Emoji} alt="emoji" />
        <h3>click aqui para resetar:</h3>
        <button onClick={resetarPerfis}>resetar</button>
      </TelaCentral>
    }
  }
  return <Telabackgroud>
    <Lateralback></Lateralback>
    {semPerfil()}
    <Lateralback></Lateralback>
  </Telabackgroud>
}