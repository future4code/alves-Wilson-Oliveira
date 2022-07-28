import { useNavigate } from "react-router-dom"
import Logo from "../../../Img/imglogin.png"
import { goToCadastro, goToFeed } from "../../Cordenation/Cordenation"
import { ButoesStyled, InputsLogin, LoginPageStyled, TituloLogoStyled } from "./LoginPageStyled"

export function LoginPage() {
    const navigate=useNavigate()



    return <LoginPageStyled>
        <TituloLogoStyled>
        <img src={Logo}/>
        <h1>LabEddit</h1>
        <p>o projeto de rede social da labenu</p>
        </TituloLogoStyled>
        <InputsLogin>
        <input placeholder="Nome"/>
        <input placeholder="Senha"/>
        </InputsLogin>
        <ButoesStyled>
        <button onClick={()=>goToFeed(navigate)}><text>Continuar</text></button>
        <div></div>
        <button onClick={()=>goToCadastro(navigate)}><text>Criar conta</text></button>
        </ButoesStyled>
    </LoginPageStyled>

}