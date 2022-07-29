import { Buttons, CaixaDeTexto, Traco,TopFeedPost } from "../../../styled/StyledGlobal";
import { HeaderComp } from "../../Header/Header";

export function PostPage() {

    return <div>
        <HeaderComp />
        <TopFeedPost>
            <div>card post</div>
            <CaixaDeTexto ></CaixaDeTexto>
            <Buttons><text>Responder</text></Buttons>
            <Traco></Traco>
        </TopFeedPost>
        <div>card resp</div>

    </div>
}