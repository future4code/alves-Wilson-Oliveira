import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
 state={
   PostsArray :[
    {nomeUsuario:'paulinha',fotoUsuario:'https://picsum.photos/50/50',fotoPost:'https://picsum.photos/200/150' },
   {nomeUsuario:'will',fotoUsuario:'https://scontent.fssz4-1.fna.fbcdn.net/v/t1.6435-9/119117956_1748731211941762_3820579248462519706_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHZqANDsBvtGkV1IYwXTbC7cjxwEX8wB9lyPHARfzAH2bze9znF3MecXYaeQz-efE8rz0Col4mkEUN5SPXWGFIV&_nc_ohc=VdIaNoWUwwQAX-rqCPc&_nc_ht=scontent.fssz4-1.fna&oh=00_AT-5ZNNLOcABlqGpBNLE81Tbo12rNZbBbVB_C91zvNIq0A&oe=62C6084A',fotoPost:'https://midias.correiobraziliense.com.br/_midias/jpg/2022/03/28/675x450/1_df7e01901219539857256031001ffe5a-7652703.jpg?20220328001410?20220328001410'},
   {nomeUsuario:'rick',fotoUsuario:'https://pm1.narvii.com/6697/4ef4b30be9ee74e97054112ff6b9b03d19fdc816_hq.jpg',fotoPost:'https://www.fatosdesconhecidos.com.br/wp-content/uploads/2020/05/rick-e-morty-3.jpg'},
   
   ],
   valorInputNomeUsuario:"",
   valorInputFotoUsuario:"",
   valorInputFotoPost:""
 }




  addPost = () => {
    const novopost= {
      nomeUsuario:this.state.valorInputNomeUsuario,
      fotoUsuario:this.state.valorInputFotoUsuario,
      fotoPost:this.state.valorInputFotoPost
    }

    
    const novoposts = [...this.state.PostsArray, novopost];



   
   
   this.setState({
     PostsArray:novoposts, valorInputNomeUsuario:"",valorInputFotoUsuario:"",valorInputFotoPost:""
   })
  };
  onChangeInputNomeUsuario = (event) => {
    this.setState({ valorInputNomeUsuario: event.target.value })
  }

    onChangeInputFotoUsuario = (event) => {
      this.setState({ valorInputFotoUsuario: event.target.value })
    }
    onChangeInputFotoPost = (event) => {
      this.setState({ valorInputFotoPost: event.target.value })
    }

  




  render() {

    const listaDeComponentes = this.state.PostsArray.map((post)=>{
      return (<Post
        nomeUsuario={post.nomeUsuario}
        fotoUsuario={post.fotoUsuario}
        fotoPost={post.fotoPost}
        
        />
        
      )
      
    })

    return (
      <MainContainer>
        <div>
        <input 
        value={this.state.valorInputNomeUsuario}
        onChange={this.onChangeInputNomeUsuario}
        placeholder="Nome de Usuário"
        />
        <input
        value={this.state.valorInputFotoUsuario}
        onChange={this.onChangeInputFotoUsuario}
        placeholder="foto"
        />
        <input
        value={this.state.valorInputFotoPost}
        onChange={this.onChangeInputFotoPost}
        placeholder="post"
        />
        <button onClick={this.addPost}> Postar</button>
        </div>
        <div>{listaDeComponentes}</div>
      </MainContainer>
      
      
    );
  }
}

export default App;
