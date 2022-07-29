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

export const Inputs = styled.div`
margin-top: 5vh;
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
`
export const Buttons = styled.button`
background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
height: 51px;
width: 85vw;
border-radius: 27px;
padding: 13px, 133px, 13px, 133px;
text{
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
  width: 80%;
  height: 7em;
  background-color: #EDEDED;
  border: none;
  border-radius: 0.7em;
  padding: 0.5em;
`
export const  TopFeedPost=styled.section`
display:flex;
flex-direction: column;
gap: 2rem;
align-items: center;
`