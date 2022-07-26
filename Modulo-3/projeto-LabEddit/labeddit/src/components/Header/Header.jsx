import styled from "styled-components"
import Logo from "../../img/Logo.png"

const Headerstyled=styled.header`
    height: 10vh;
    background-color: #d5d7d9;
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
    align-items: center;
`

const ImagemLogo=styled.img`
    width: 50%;
`
const Login=styled.div`
    color: #4444eb;
    font-size: 1.5em;
    cursor: pointer;
`



export function HeaderComp() {

    return <Headerstyled>
        <p></p>
        <ImagemLogo src={Logo} alt="logo" />
        <Login >LOGIN</Login>
    </Headerstyled>
}