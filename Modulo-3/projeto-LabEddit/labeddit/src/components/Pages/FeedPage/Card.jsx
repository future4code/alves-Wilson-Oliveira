
import likeInativo from "../../../Img/like.png"
import likeAtivo from "../../../Img/likeAtivo.png"
import dislikeInativo from "../../../Img/deslike.png"
import dislikeAtivo from "../../../Img/deslikeAtivo.png"
import comentario from "../../../Img/comentario.png"
import { useState } from "react"
import axios from "axios"
import { BaseURl } from "../../Constantes/BaseURL"
import { useEffect } from "react"
import { goToPost } from "../../Cordenation/Cordenation"
import { BarraBotoes, CardStyled, ImgCard } from "../../../styled/StyledGlobal"



export const Card = (props) => {
    const [like, setLike] = useState(false)
    const [disLike, setDisLike] = useState(false)


    useEffect(() => {
        if (props.post.userVote === 1) {
            setLike(true)
        } else if (props.post.userVote === -1) {
            setDisLike(true)
        }
    }, [])



    const pegaLike = () => {
        setLike(!like)
        setDisLike(false)

        if (like === false) {
            const body = {
                direction: 1
            }
            axios
                .post(`${BaseURl}/posts/${props.post.id}/votes`, body, {
                    headers: {
                        Authorization: localStorage.getItem("token")
                    }
                }).then((resposta) => {
                    props.mostraFeed()
                }).catch((err) => { alert(err.data) })
        } else {
            axios
                .delete(`${BaseURl}/posts/${props.post.id}/votes`, {
                    headers: {
                        Authorization: localStorage.getItem("token")
                    }
                }).then((resposta) => {
                    props.mostraFeed()
                }).catch((err) => alert(err.data))

        }
    }

    const pegaDisLike = () => {
        setDisLike(!disLike)
        setLike(false)

        if (disLike === false) {
            const body = {
                direction: -1
            }
            axios
                .post(`${BaseURl}/posts/${props.post.id}/votes`, body, {
                    headers: {
                        Authorization: localStorage.getItem("token")
                    }
                }).then((resposta) => {
                    props.mostraFeed()
                }).catch((err) => { alert(err.data) })
        } else {
            axios
                .delete(`${BaseURl}/posts/${props.post.id}/votes`, {
                    headers: {
                        Authorization: localStorage.getItem("token")
                    }
                }).then((resposta) => {
                    props.mostraFeed()
                }).catch((err) => alert(err.data))

        }
    }

    const comentar = () => {
        goToPost(props.navigate, props.post.id)
        localStorage.setItem("Comentario", JSON.stringify(props.post))

    }

    return <CardStyled>
        <h6>Enviado por: {props.post.username}</h6>
        <h4>{props.post.title}</h4>
        <p>{props.post.body}</p>
        <BarraBotoes>
            <div>
                <ImgCard src={like ? likeAtivo : likeInativo} onClick={pegaLike} />
                <span>{props.post.voteSum ? props.post.voteSum : 0}</span>
                <ImgCard src={disLike ? dislikeAtivo : dislikeInativo} onClick={pegaDisLike} />
            </div>
            <div>
                <ImgCard src={comentario} onClick={comentar} />
                <span>{props.post.commentCount ? props.post.commentCount : 0}</span>
            </div>
        </BarraBotoes>
    </CardStyled>
}