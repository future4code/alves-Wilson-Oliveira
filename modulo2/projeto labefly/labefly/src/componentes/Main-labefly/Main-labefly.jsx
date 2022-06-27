import React from "react"
import { Criarplaylist } from "./Componets/Criar-playlist"
import { Visualizarplaylist } from "./Componets/Visualiza-playlist"
import styled from "styled-components"
import axios from "axios"

const Principal = styled.main`
display:grid;
grid-template-columns: 1fr 5fr;
background-color: #91919159
`
const ListaDeOpicoes = styled.nav`
    border: 1px solid;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #8b8b8b;
`
const MenuLateral= styled.button`
    padding: 0;
  margin: 0;
  border: 0;
 
  border-bottom: 1px solid black;
  width: 100%;
  height: 15%;
  font-size: 17px;
  font-style: italic;

   &:hover {
    background-color: #bbbbc7;
    transition: 0.7s;
  }
  &:active {
    background-color: #707070d0;
    transition: 0.2s;
   border: 2px solid black;
    border-bottom: 2px solid #010114d0 ;
    border-left: 1px;
    color: black;
  } 
  

`


export class Mainlabefly extends React.Component {
    state = {
        tela: "Criar",
        nomeDaPlaylist: "",
        arrayDePlaylist:[]
    }

    componentDidMount() {
        this.visualizarTodasPlaylists()
    }

mudaTela=(telaM)=>{
this.setState({
tela:telaM
})

}

trocarComponente = () => {
if(this.state.tela==="Criar"){
return <Criarplaylist nomeDaPlaylistValue={this.nomeDaPlaylistValue} nomeDaPlaylist={this.state.nomeDaPlaylist} enviarPlaylist={this.enviarPlaylist} />
}else{
    return <Visualizarplaylist arrayDePlaylist={this.state.arrayDePlaylist} visualizarTodasPlaylists={this.visualizarTodasPlaylists}  />
}
}

    nomeDaPlaylistValue = (e) => {
        this.setState({
            nomeDaPlaylist: e.target.value
        })
    }

    enviarPlaylist = async () => {
        const novaPlaylist = { name: this.state.nomeDaPlaylist }

        try {
            const response = await axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", novaPlaylist, {
                headers: {
                    Authorization: "wilson-santos-de-oliveira-alves"
                }
            })
            alert("Playlist criada com sucesso!")
        } catch (erro) {
            alert(`ERRO: ${erro.response.data.message}`)
        }
        this.setState({ nomeDaPlaylist: "" })
    }

    visualizarTodasPlaylists = () =>{
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",{
            headers:{
                Authorization: "wilson-santos-de-oliveira-alves"
            }
        }).then((resposta)=>{
           
            this.setState({arrayDePlaylist:resposta.data.result.list})
        }).catch((erro)=>{
            alert("Ocorreu um erro, tente novamente")
        })
    }



    render() {

        return <Principal>
            <ListaDeOpicoes>
                <MenuLateral onClick={()=>this.mudaTela("Criar")} >Criar playlist</MenuLateral>
                <MenuLateral onClick={()=>this.mudaTela ("Visualizar")} >Visualizar playlists</MenuLateral>
            </ListaDeOpicoes>
            <div>
               {this.trocarComponente()}
            </div>
        </Principal>
    }
}