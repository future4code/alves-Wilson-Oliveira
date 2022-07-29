import Imgheader from "../../Img/imgheader.png"
import { Headerstyled, ImagemLogo, Login } from "./HeaderStyled"
import {goToLogin} from "../Cordenation/Cordenation"
import { useNavigate } from "react-router-dom"

export function HeaderComp() {
    const navigate = useNavigate()

    return <Headerstyled>
        <div></div>
        <ImagemLogo src={Imgheader} alt="logo" />
        <Login onClick={()=>{goToLogin(navigate)}} >Entrar</Login>
    </Headerstyled>
}