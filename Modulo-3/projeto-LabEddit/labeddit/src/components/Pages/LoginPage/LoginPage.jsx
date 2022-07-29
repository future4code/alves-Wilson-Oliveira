import { useNavigate } from "react-router-dom"
import Logo from "../../../Img/imglogin.png"
import { Buttons, Inputs,Traco } from "../../../styled/StyledGlobal"
import { goToCadastro, goToFeed } from "../../Cordenation/Cordenation"
import { ButoesStyled, LoginPageStyled, TituloLogoStyled } from "./LoginPageStyled"

export function LoginPage() {
    const navigate=useNavigate()



    return <LoginPageStyled>
        <TituloLogoStyled>
        <img src={Logo}/>
        <h1>LabEddit</h1>
        <p>o projeto de rede social da labenu</p>
        </TituloLogoStyled>
        <Inputs>
        <input placeholder="Nome"/>
        <input placeholder="Senha"/>
        </Inputs>
        <ButoesStyled>
        <Buttons onClick={()=>goToFeed(navigate)}><text>Continuar</text></Buttons>
        <Traco></Traco>
        <Buttons onClick={()=>goToCadastro(navigate)}><text>Criar conta</text></Buttons>
        </ButoesStyled>
    </LoginPageStyled>

}