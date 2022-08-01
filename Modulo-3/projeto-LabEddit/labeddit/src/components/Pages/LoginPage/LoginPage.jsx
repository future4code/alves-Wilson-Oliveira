import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Logo from "../../../Img/imglogin.png"
import { Buttons, Inputs, Traco } from "../../../styled/StyledGlobal"
import { BaseURl } from "../../Constantes/BaseURL"
import { goToCadastro, goToFeed } from "../../Cordenation/Cordenation"
import { ButoesStyled, LoginPageStyled, TituloLogoStyled } from "./LoginPageStyled"

export function LoginPage() {
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const navigate = useNavigate()

    useEffect(() => {
        Logado()
    }, [])
    const Login = (event) => {
        event.preventDefault()
        const body = {
            email: email,
            password: senha
        }
        axios
            .post(`${BaseURl}/users/login`, body)
            .then((respota) => {
                localStorage.setItem("token", respota.data.token)
                goToFeed(navigate)
            })
            .catch((err) => alert(err.response.data))
    }

    const pegaEmail = (e) => {
        setEmail(e.target.value)
    }

    const pegaSenha = (e) => {
        setSenha(e.target.value)
    }

    const Logado = () => {
        if (localStorage.getItem("token") !== "") { goToFeed(navigate) }
    }


    return <LoginPageStyled>
        {Logado()}
        <TituloLogoStyled>
            <img src={Logo} />
            <h1>LabEddit</h1>
            <p>o projeto de rede social da labenu</p>
        </TituloLogoStyled>
        <Inputs onSubmit={Login}>
            <input
                value={email}
                placeholder="E-mail"
                onChange={pegaEmail}
            />
            <input
                value={senha}
                type={"password"}
                placeholder="Senha"
                onChange={pegaSenha}
            />
            <div></div>
            <Buttons><span>Continuar</span></Buttons>
        </Inputs>
        <ButoesStyled>
            <Traco></Traco>
            <Buttons onClick={() => goToCadastro(navigate)}><span>Criar conta</span></Buttons>
        </ButoesStyled>

    </LoginPageStyled>

}