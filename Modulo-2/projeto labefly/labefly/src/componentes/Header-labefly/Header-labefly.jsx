import React from "react"
import styled from "styled-components"
import Labenu from "./imagens/Labenu.png"

const Headermain=styled.header`
    background-color: black;
    h2{
        color: white;
        font-size: 52px;
        letter-spacing: 10px;
        margin: 0;
        text-shadow: 4px 3px 3px #949191;
    font-style: italic;
       }
       display: flex;
       align-items: center;
    justify-content: center;
`
const Imagenlabenu=styled.img`
       height: 60px;
     
`

export class Headerlabefly extends React.Component{

render(){

return<Headermain>
<Imagenlabenu src={Labenu} alt="labenu" />
<h2>Labefly</h2>


</Headermain>
}
}