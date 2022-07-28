import Imgheader from "../../Img/imgheader.png"
import { Headerstyled, ImagemLogo, Login } from "./HeaderStyled"

export function HeaderComp() {

    return <Headerstyled>
        <div></div>
        <ImagemLogo src={Imgheader} alt="logo" />
        <Login >Entrar</Login>
    </Headerstyled>
}