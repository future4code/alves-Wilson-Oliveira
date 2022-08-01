import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    margin: 0px;
    padding: 0;
    box-sizing: border-box
}

body, input, button {
    font-size: large;
    font-family: sans-serif
  }

  body{
    min-width: 100vw;
  }

    
`

export const Inputs = styled.form`
margin-top: 5vh;
margin-bottom: 3vh;
display: flex;
flex-direction: column;
align-items: center;
gap:1em;
input{
background: #FFFFFF;
border: 1px solid #D5D8DE;
border-radius: 4px;
width: 80%;
height: 3em;
padding: 10px;
&::placeholder{
font-size: large;
}
}
div{
  height: 3vh;
}
`
export const Buttons = styled.button`
background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
height: 51px;
width: 85vw;
border-radius: 27px;
padding: 13px, 133px, 13px, 133px;
span{
height: 25px;
width: 91px;
border-radius: nullpx;
font-family: Noto Sans;
font-size: 1.2em;
font-weight: 700;
line-height: 25px;
letter-spacing: 0em;
text-align: center;
color: #FFFFFF;
}
`
export const Traco = styled.div`
  background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
  width: 80vw;
  height: 1px;
  `
export const CaixaDeTexto = styled.textarea`
  width: 90%;
  height: 8rem;
  background-color: #EDEDED;
  border: none;
  border-radius: 0.7em;
  padding: 0.5em;
  font-size: x-large;
`
export const TopFeedPost = styled.form`
display:flex;
flex-direction: column;
gap: 2rem;
align-items: center;
`
export const CardStyled = styled.section`
height: auto;
width: 90%;
left: 0px;
top: 0px;
border-radius: 12px;
background: #FBFBFB;
border: 1px solid #E0E0E0;
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 9px 10px;
gap: 18px;
margin: 1rem;
section{
  width: 100%;
  display: flex;
flex-direction: column;
align-items: flex-start;
padding: 9px 10px;
gap: 18px;
}
h6{
  font-size: 1em;
    font-family: sans-serif;
}
p{
  font-size: 1.2em;
}
`
export const ImgCard = styled.img`
    cursor: pointer;
`

export const BarraBotoes = styled.div`
    display :flex;
    width: 50%;
    justify-content: space-between;
    div{
        padding: 5px;
        width: 5rem;
        display: flex;
        gap: 20%;
        border: 1px solid #00000061;
        justify-content: space-around;
    align-items: center;
    border-radius: 2em;
    }
`