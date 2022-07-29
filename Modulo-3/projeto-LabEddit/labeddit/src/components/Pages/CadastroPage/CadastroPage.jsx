

import { Buttons, Inputs } from "../../../styled/StyledGlobal"
import { HeaderComp } from "../../Header/Header"
import { CadastroStyled, Paragrafo, TituloCadastro } from "./CadastroStyled"



export function CadastroPage() {

    return <div>
        <HeaderComp />
        <TituloCadastro>Olá, boas vindas ao LabEddit ;)</TituloCadastro>
        <Inputs>
            <input placeholder="Nome de usuário" />
            <input placeholder="Email" />
            <input placeholder="Senha" />
        </Inputs>
        <CadastroStyled>
            <Paragrafo>Ao continuar, você concorda com o nosso<a href="" > Contrato de usuário</a > e nossa<a href=""> Política de Privacidade </a></Paragrafo>
            <Paragrafo><input type={"checkbox"} /> Eu concordo em receber emails sobre coisas legais no Labeddit</Paragrafo>
            <Buttons><text>Cadastrar</text></Buttons>
        </CadastroStyled>
    </div>
}