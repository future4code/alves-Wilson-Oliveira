import { Buttons, CaixaDeTexto, Traco, TopFeedPost } from "../../../styled/StyledGlobal";
import { HeaderComp } from "../../Header/Header";
import axios from "axios";
import { BaseURl } from "../../Constantes/BaseURL";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { CardPostFedd } from "./CardpostFedd";
import { CardPost } from "./cardPost";

export const PostPage = () => {
    const pathParams = useParams()
    const [comentario, setComentarios] = useState("")
    const [texto, setTexto] = useState("")
    useEffect(() => {
        mostraComentarios()
    }, [])

    const mostraComentarios = () => {
        axios
            .get(`${BaseURl}/posts/${pathParams.id}/comments`, {
                headers: {
                    Authorization: localStorage.getItem("token")
                }
            }).then((resposta) => {
                setComentarios(resposta.data)
            }).catch((erro) => { console.log(erro) })
    }
    const novoComentario = (event) => {
        event.preventDefault()
        const body = {
            body: texto
        }
        axios
            .post(`${BaseURl}/posts/${pathParams.id}/comments`, body, {
                headers: {
                    Authorization: localStorage.getItem("token")
                }
            }).then((resposta) => {
                mostraComentarios()
                setTexto("")
            }).catch((err) => { alert(err.data) })
    }

    const pegaTexto = (e) => {
        setTexto(e.target.value)
    }
    const ComentariosMap = comentario && comentario.map((post) => {
        return <CardPost key={post.id} post={post} mostraComentarios={mostraComentarios} ></CardPost>
    })

    return <div>
        <HeaderComp voltar={true} />
        <TopFeedPost onSubmit={novoComentario}>
            <CardPostFedd id={pathParams.id} />
            <CaixaDeTexto onChange={pegaTexto} value={texto} ></CaixaDeTexto>
            <Buttons ><span>Responder</span></Buttons>
            <Traco></Traco>
        </TopFeedPost>
        {ComentariosMap}

    </div>
}