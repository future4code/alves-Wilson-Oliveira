import styled from "styled-components"

export const LoginPageStyled=styled.section`
margin-top:15vh;
`
export const TituloLogoStyled=styled.div`
display:flex;
flex-direction: column;
align-items: center;
flex-direction: column;
justify-content: center;
h1{
font-family: sans-serif;
font-style: normal;
font-weight: 700;
color: #373737;
margin: 2px;
font-size: 2.5em;
}
p{
font-family: sans-serif;
font-style: normal;
font-weight: 300;
margin: 2px;
font-size: 1.1em;
}
img{
height: 6em;
}
`

export const InputsLogin=styled.div`
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
export const ButoesStyled = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 10vh;
gap:3vh;

button{
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
}
div{
background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
width: 80vw;
height: 1px;
}
`