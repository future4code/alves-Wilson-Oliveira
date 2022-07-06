import axios from "axios";
import React from "react";
import styled from "styled-components";

const PLayerdemusica=styled.div`
    
    width:95%;
    padding: 10px;
    display: flex;
    justify-content: space-between;
`
const Inputsadd=styled.div`
    display:flex;
    flex-direction: column;
    align-items: flex-start;

`
export class Detalhesplaylist extends React.Component{
    state={
        addMusica:false,
        musicasDetalhes:[],
        nome:"",
        artista:"",
        url:""
    }

    componentDidMount() {
        this.musicaDaPlaylist()
    }

musicaDaPlaylist=(id)=>{
    id=this.props.id
axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`,{
     headers:{
        Authorization: "wilson-santos-de-oliveira-alves"
     }
     }).then((resposta)=>{
       this.setState({musicasDetalhes:resposta.data.result.tracks})
       
     }).catch((erro)=>{
        alert("Ocorreu um erro, tente novamente")
     })
}

pegaNome=(e)=>{
this.setState({
    nome:e.target.value
})
}

pegaArtista=(e)=>{
    this.setState({
        artista:e.target.value
    })
}

pegaUrl=(e)=>{
    this.setState({
        url:e.target.value
    })
}

adicionarMusica = (id) => {
    id=this.props.id
const body={
    name:this.state.nome,
    artist:this.state.artista,
    url:this.state.url
}
axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`,body,{
    headers:{
        Authorization: "wilson-santos-de-oliveira-alves"
    }
})
.then((resposta)=>{
    resposta.status === 200 && alert("Sua musica foi adicionada com sucesso");
    this.musicaDaPlaylist();
})
.catch((erro)=>{
    alert(erro.response.data.message);
})
this.setState({
    addMusica:!this.state.addMusica,
    nome:  "",
    artista: "",
    url:""
})
}

mudaTela=()=>{
this.setState({
    addMusica:!this.state.addMusica
})
console.log(this.state.addMusica)

}

inputsAddMusicas=()=>{
    if(this.state.addMusica===true){
        return<Inputsadd>
            nome:
            <input onChange={this.pegaNome} value={this.state.nome} placeholder="musica"/>
            artista:
            <input onChange={this.pegaArtista} value={this.state.artista} placeholder="artista"/>
            url:
            <input onChange={this.pegaUrl} value={this.state.url} placeholder= "url"/>
            <button onClick={()=>{this.adicionarMusica()}}>enviar</button>
        </Inputsadd>
    }
}


    render(){
        const musicasmapeadas=this.state.musicasDetalhes.map((item)=>{
            return<PLayerdemusica key={item.id}>
                <div>
                musica:{item.name}
                <p></p>
                artista:{item.artist}
                <p></p>
                </div>
                <div>
                <audio controls="controls" 
                        src={item.url} type = "audio/mp3"></audio>
                <p></p>
                </div>
            </PLayerdemusica>
        })
        
        return<div>
            {musicasmapeadas}
            <button onClick={()=>this.mudaTela()}> adicionar musica</button>
            {this.inputsAddMusicas()}
            



        </div>
}
}