import Imgheader from "../../Img/imgheader.png"
import { Headerstyled, ImagemLogo, Login } from "./HeaderStyled"
import { goToFeed, goToLogin } from "../Cordenation/Cordenation"
import { useNavigate } from "react-router-dom"

export function HeaderComp(props) {
    const navigate = useNavigate()
    const login = () => {
        if (localStorage.getItem("token") === "") {
            return <Login onClick={() => { goToLogin(navigate) }} >Entrar</Login>
        } else {
            return <Login onClick={logout} >Logout</Login>
        }
    }
    const logout = () => {
        localStorage.setItem("token", "")
        goToLogin(navigate)
    }
    const voltar = () => {
        if (props.voltar) { return <Login onClick={() => { goToFeed(navigate) }} >Voltar</Login> } else { return <div></div> }
    }

    return <Headerstyled>
        {voltar()}
        <ImagemLogo src={Imgheader} alt="logo" />
        {login()}

    </Headerstyled>
}