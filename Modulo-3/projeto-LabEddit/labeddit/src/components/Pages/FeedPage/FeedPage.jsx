import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Buttons, CaixaDeTexto, TopFeedPost, Traco } from "../../../styled/StyledGlobal";
import { BaseURl } from "../../Constantes/BaseURL";
import { Card } from "./Card";
import { goToLogin } from "../../Cordenation/Cordenation";
import { HeaderComp } from "../../Header/Header";
import { TituloStyled } from "./FeedPageStyled";

export function FeedPage() {
    const [posts, setPosts] = useState([])
    const [postagem, setPostagem] = useState("")
    const [titulo, setTitulo] = useState("")
    const navigate = useNavigate()



    useEffect(() => {
        mostraFeed()
    }, [])


    const mostraFeed = () => {
        axios
            .get(`${BaseURl}/posts`, {
                headers: {
                    Authorization: localStorage.getItem("token")
                },
                params: {
                    page: 1,
                    size: 10
                },

            }).then((resposta) => {
                setPosts(resposta.data)
            }).catch((err) => {
                alert(err.response.statusText)
                console.log(err)
                if (err.response.statusText == "Unauthorized") { Logado() }
            })
    }

    const criaPost = (event) => {
        event.preventDefault()
        const body = {
            title: titulo,
            body: postagem
        }
        axios
            .post(`${BaseURl}/posts`, body, {
                headers: {
                    Authorization: localStorage.getItem("token")
                }
            }).then((resposta) => {
                console.log(resposta)
                mostraFeed()
            }).catch((err) => { console.log(err) })
    }

    const pegaPostagem = (e) => {
        setPostagem(e.target.value)
    }

    const pegaTitulo = (e) => {
        setTitulo(e.target.value)
    }

    const Logado = () => {
        localStorage.setItem("token", "")
        goToLogin(navigate)
    }

    const postsMap = posts.map((post) => {
        return <Card key={post.id} post={post} mostraFeed={mostraFeed} navigate={navigate}></Card>
    })

    return <div>
        <HeaderComp />
        <TopFeedPost onSubmit={criaPost}>
            <TituloStyled onChange={pegaTitulo} placeholder="Titulo do post"></TituloStyled>
            <CaixaDeTexto onChange={pegaPostagem} placeholder="Escreva seu post..."></CaixaDeTexto>
            <Buttons ><span>Postar</span></Buttons>
            <Traco></Traco>
        </TopFeedPost>
        {postsMap}


    </div>
}