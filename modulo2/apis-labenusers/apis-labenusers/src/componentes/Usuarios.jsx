import React from "react";
import axios from "axios";
import "./style.css"
import { Detalhes } from "./Detalhes";



export class Usuarios extends React.Component {
    state = {
        usuario: [],
        erro: "",
        name: "",
        email: "",
        tela:false,
        id:""
    }

    componentDidMount() {
        this.mostraUsuario();
        
    }

    mostraUsuario = () => {
        axios
            .get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
                {
                    headers: {
                        Authorization: "wilson-santos-de-oliveira-alves"
                    }
                }
            )
            .then((respota) => {
                this.setState({ usuario: respota.data })

            })
            .catch((erro) => {
                alert(this.setState({ erro: erro.response.data }))
            })

    }

    BuscaUsuarioValeu = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    BuscaEmailValeu = (e) => {
        this.setState({
            email: e.target.value
        })
    }

    procurarUsuario = () => {
        const buscarUsuario = {
            name: this.state.name,
            email: this.state.email
        };
        axios
            .get(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/search?name=${buscarUsuario.name}&email=${buscarUsuario.email}`, {
                headers: {
                    Authorization: "wilson-santos-de-oliveira-alves"
                }
            }
            )
    }

    deletarUsuario = (id) => {


        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
            {
                headers:
                {
                    Authorization: "wilson-santos-de-oliveira-alves"
                }

            }
        )
            .then((resposta) => {
                alert("Usuario deletado")
                this.mostraUsuario()
            }).catch((erro) => {
                alert("Ocorreu um erro, tente novamente")
            })




    }

    pegarid=(id)=>{
this.setState({
    id:id,
    tela:!this.state.tela
    
})
}


mudaTela=()=>{
    this.setState({
        tela:!this.state.tela
    })
}

    escolheTelaUsuario = () => {
        if(this.state.tela===false){ return(
            <main>
                <div>
                    <button onClick={()=>this.props.mudarTela("cadastro")}>Trocar de sala</button>
                    <h3>Procurar Usuario</h3>
                    <input onChange={this.BuscaUsuarioValeu} value={this.state.name} placeholder="nome" ></input>
                    <input onChange={this.BuscaEmailValeu} value={this.state.email} placeholder="email"></input>
                    <button onClick={this.procurarUsuario}>enviar</button>
                    <p></p>
                    <div className="traco"></div>
                    <h2>Lista de usuarios</h2>
                    <div>{
                        this.state.usuario.map((item) => {
                            return <div className="listaDeUsuarios" key={item.id} >
                                {item.name}
                                <div>
                                    <button onClick={()=>this.pegarid(item.id)}>Detalhes</button>
                                    <button onClick={() => (window.confirm("Tem certeza que deseja deletar o usuario?") ? this.deletarUsuario(item.id) : this.mostraUsuario)}>X</button>
                                </div>
                            </div>
                        })}</div>
                </div>


            </main>
        )} 
        else{
                    {return(<div>
                    <button onClick={this.mudaTela}>Voltar</button>
            <Detalhes id={this.state.id}  ></Detalhes>
                </div>
                )}
             }
    }


    render() {

        return <div >{this.escolheTelaUsuario()}</div>
        
    }

}