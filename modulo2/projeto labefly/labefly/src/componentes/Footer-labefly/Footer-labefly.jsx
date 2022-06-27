import React from "react"
import styled from "styled-components"
import facebook2 from "./imagens/facebook2.png"
import instagram2 from "./imagens/Instagram2.png"
import whatsapp from "./imagens/whatsapp.png"

const Footerstyle=styled.footer`
display:flex;  
align-items: center;
justify-content: space-around;  
background-color: #bdbdbd;
h2{
    text-shadow: 4px 3px 3px #333;
    font-style: italic;
    font-size: 3rem;
    margin: 0
}

`

const DivRedes = styled.div`
display:grid;
grid-template-columns: 200px 50px 50px 50px;

`

const Img = styled.img`
height: 3rem;
`
export class Footerlabefly extends React.Component{

render(){

return<Footerstyle>
     <h2>Labefly</h2>
        <p>Crie playlists com suas musicas favoritas</p>
        <DivRedes>
      <h4>Siga-nos nas redes sociais:</h4>
        <a href="https://www.facebook.com/" target="_blank"><Img src={facebook2} alt="" /></a>
        <a href="https://www.instagram.com/" target="_blank"><Img src={instagram2} alt="" /></a>
        <a href="https://web.whatsapp.com/" target="_blank"><Img src={whatsapp} alt="" /></a>
      </DivRedes>
</Footerstyle>
}
}