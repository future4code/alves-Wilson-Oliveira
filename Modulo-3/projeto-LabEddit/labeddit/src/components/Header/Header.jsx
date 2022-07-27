import styled from "styled-components"
import Logo from "../../img/Logo.png"
import Imgheader from "../../img/imgheader.png"

const Headerstyled=styled.header`
    height: 6vh;
    background-color: #ededed;
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
    align-items: center;
    margin-top: 5vh;
    max-height: 6vh;
`

const ImagemLogo=styled.img`
    height:6vh;
`
const Login=styled.div`

height: 100%;
width: 100%;
font-family: 'Noto Sans';
font-style: normal;
font-weight: 600;
text-align: center;
align-self: center;
color: #4088CB;
font-size: 2em;
    cursor: pointer;
`



export function HeaderComp() {

    return <Headerstyled>
        <p></p>
        <ImagemLogo src={Imgheader} alt="logo" />
        <Login >Entrar</Login>
    </Headerstyled>
}