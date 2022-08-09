import React from "react";
import axios from "axios";
export class Detalhes extends React.Component{
state={
    nome:"",
    email:""

}
componentDidMount() {
    this.Detalhesdousuario();
    
}

Detalhesdousuario=()=>{
    const id=this.props.id
    
axios
.get(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
{ headers:
    {
    Authorization: "wilson-santos-de-oliveira-alves"
    }
})
.then((resposta)=>{
    this.setState({
        nome:resposta.data.name,
        email: resposta.data.email
    })  
    })
    .catch((erro)=>{})
}

deletarUsuario = () => {
    const id=this.props.id

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

render(){

    return<div>
     <div>nome:{this.state.nome}</div>
     <div>email:{this.state.email}</div>
     <button onClick={() => (window.confirm("Tem certeza que deseja deletar o usuario?") ? this.deletarUsuario() : this.deletarUsuario)}>Deletar</button>

          



    </div>
}


}