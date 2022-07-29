import styled from "styled-components";
import { Buttons, CaixaDeTexto, TopFeedPost, Traco } from "../../../styled/StyledGlobal";
import { HeaderComp } from "../../Header/Header";


const TituloStyled = styled.textarea`
    width: 80%;
    background-color: #EDEDED;
    border: none;
    border-radius: 0.7em;
    padding: 0.5em;
`


export function FeedPage (){

    return <div>
        <HeaderComp/>
        <TopFeedPost>
        <TituloStyled placeholder="Titulo do post"></TituloStyled>
        <CaixaDeTexto placeholder="Escreva seu post..."></CaixaDeTexto>
        <Buttons><text>Postar</text></Buttons>
        <Traco></Traco>
        </TopFeedPost>
        <div>card post</div>

    </div>
}