import React from "react";
import axios from "axios";
import "./style.css"

export class Editarusuario extends React.Component {
    state = {
        usuario:[],
        erro:"",
        name:"",
        email:""

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
        .then((respota)=>{
            this.setState({usuario:respota.data})
         
        })
        .catch((erro)=>{
           this.setState({erro:erro.response.data})
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

    procurarUsuario=()=>{
        const buscarUsuario = {
            name: this.state.name,
            email: this.state.email
        };
        axios
        .get(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/search?name=${buscarUsuario.name}&email=${buscarUsuario.email}`,{
            headers: {
                Authorization: "wilson-santos-de-oliveira-alves"
            }
        }
    )
    .then((resposta)=>{
        
        console.log(resposta)})

}



    render() {

        return(
            <main>
            <button onClick={this.props.mudarTela}>Trocar de sala</button>
            <div>{ this.state.usuario.map((item)=>{return <div key={item.id}>{item.name}<button></button></div>})}</div>
          <div className="traco"></div>
          <h3>Procurar Usuario</h3>
          
          <input onChange={this.BuscaUsuarioValeu} value ={this.state.name} placeholder="nome" ></input>
          <input onChange={this.BuscaEmailValeu} value={this.state.email}placeholder="email"></input>
          <button onClick={this.procurarUsuario}>enviar</button>

            </main>
        )
    }

}