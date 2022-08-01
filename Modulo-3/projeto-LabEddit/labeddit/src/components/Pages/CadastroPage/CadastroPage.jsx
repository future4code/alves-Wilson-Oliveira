

import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Buttons, Inputs } from "../../../styled/StyledGlobal"
import { BaseURl } from "../../Constantes/BaseURL"
import { goToFeed } from "../../Cordenation/Cordenation"
import { HeaderComp } from "../../Header/Header"
import { CadastroStyled, Checkbox, Paragrafo, TituloCadastro } from "./CadastroStyled"



export function CadastroPage() {
    const [nomeUsuario, setNomeUsuario] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const navigate = useNavigate()

    const Cadastro = (event) => {
        event.preventDefault()
        const body = {
            username: nomeUsuario,
            email: email,
            password: senha
        }
        axios
            .post(`${BaseURl}/users/signup`, body)
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

    const pegaUsuario = (e) => {
        setNomeUsuario(e.target.value)
    }

    return <div>
        <HeaderComp />
        <TituloCadastro>Olá, boas vindas ao LabEddit ;)</TituloCadastro>
        <Inputs onSubmit={Cadastro}>
            <input
                value={nomeUsuario}
                placeholder="Nome de usuário"
                onChange={pegaUsuario}
            />
            <input
                value={email}
                type={"email"}
                placeholder="E-mail"
                onChange={pegaEmail}
            />
            <input
                value={senha}
                type={"password"}
                placeholder="Senha"
                onChange={pegaSenha}
                pattern={"^.{8,30}"}
                title={"A senha deve conter de 8 a 30 caracteres"}
            />
            <CadastroStyled>
                <Paragrafo>Ao continuar, você concorda com o nosso<a href="" > Contrato de usuário</a > e nossa<a href=""> Política de Privacidade </a></Paragrafo>
                <Paragrafo><input type={"checkbox"} required /> Eu concordo em receber emails sobre coisas legais no Labeddit</Paragrafo>
                <Buttons><text>Cadastrar</text></Buttons>
            </CadastroStyled>
        </Inputs>

    </div>
}