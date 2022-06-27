import React from "react"
import styled from "styled-components"

const CriarPlayliststyle=styled.div`
    margin: 10px;

`

export class Criarplaylist extends React.Component {




    render() {

        return <CriarPlayliststyle>
            <h3>Insira o nome da nova playlist:</h3>
            <input name="nome da playlist" value={this.props.nomeDaPlaylist} onChange={this.props.nomeDaPlaylistValue} placeholder="Nova playlist"/>
            <button onClick={this.props.enviarPlaylist} >Enviar</button>
        </CriarPlayliststyle>
    }
}
