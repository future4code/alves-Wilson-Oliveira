import React from "react";
import axios from "axios";
export class Detalhes extends React.Component{
state={
    nome:"",
    email:""

}

Detalhesdousuario=(id)=>{
    id=this.props.id
    
axios
.get(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
{ headers:
    {
    Authorization: "wilson-santos-de-oliveira-alves"
    }
})
.then((resposta)=>{
    this.setState({
        
    })
})

}

render(){

    return<div>
     <button onClick={()=>this.Detalhesdousuario()}></button>

          



    </div>
}


}