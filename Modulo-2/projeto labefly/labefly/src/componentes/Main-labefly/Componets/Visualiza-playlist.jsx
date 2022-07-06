import axios from "axios"
import React from "react"
import styled from "styled-components"
import { Detalhesplaylist } from "./Detalhes-Musicas"

const Playlist=styled.div`
    display:flex;
    border-bottom: 1px solid ;
    flex-direction: column;
    align-items: center;
    p{
        font-size:25px;
        font-style: italic;
        text-decoration: underline;
        margin: 8px;
       
    }
    `
const Botoes=styled.div`
    display: flex ;
    gap:5px;
    button{
        width: 100px;
        margin-bottom: 2px;
    }
`
const Musicas=styled.div`
    align-self: flex-start;
    font-size: 16px;
    font-style: italic;
    font-weight: 500;
    width: 100%;

`

export class Visualizarplaylist extends React.Component {
    state = {
        idDetalhe: ""
    }

    componentDidMount() {
        this.props.visualizarTodasPlaylists()
    }



    pegaId = (id) => {
        this.setState({
            idDetalhe: id
        })
     
    }

    exibirDetalhes=(id)=>{
if(this.state.idDetalhe=== id){ 
    return <Detalhesplaylist id={this.state.idDetalhe}/>
}

    }



deletarPlaylist = (id) => {
    axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`, {
        headers: {
            Authorization: "wilson-santos-de-oliveira-alves"
        }
    })
        .then((resposta) => {
            alert("Playlist deletada!")
            this.props.visualizarTodasPlaylists()


        }).catch((erro) => {
            alert("ocorreu um erro, tente novamente")
        })
}



render(){
    const listaDePlaylists = this.props.arrayDePlaylist.map((item) => {
        return <Playlist key={item.id}>
            <p> {item.name}</p>
            <Botoes>
            <button onClick={() => (window.confirm("Tem certeza que deseja deletar a playlist?") ? this.deletarPlaylist(item.id) : this.props.visualizarTodasPlaylists())}>deletar</button>
            <button onClick={() => this.pegaId(item.id)}>detalhes</button>
            </Botoes>
            <Musicas>
            {this.exibirDetalhes(item.id)}
            </Musicas>



        </Playlist>
    })

    return <div>

        {listaDePlaylists}
    </div>
}
}