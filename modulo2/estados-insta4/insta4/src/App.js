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
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
        <Post
          nomeUsuario={'will'}
          fotoUsuario={'https://scontent.fssz4-1.fna.fbcdn.net/v/t1.6435-9/119117956_1748731211941762_3820579248462519706_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHZqANDsBvtGkV1IYwXTbC7cjxwEX8wB9lyPHARfzAH2bze9znF3MecXYaeQz-efE8rz0Col4mkEUN5SPXWGFIV&_nc_ohc=VdIaNoWUwwQAX-rqCPc&_nc_ht=scontent.fssz4-1.fna&oh=00_AT-5ZNNLOcABlqGpBNLE81Tbo12rNZbBbVB_C91zvNIq0A&oe=62C6084A'}
          fotoPost={'https://midias.correiobraziliense.com.br/_midias/jpg/2022/03/28/675x450/1_df7e01901219539857256031001ffe5a-7652703.jpg?20220328001410?20220328001410'}
        />
        <Post
          nomeUsuario={'rick'}
          fotoUsuario={'https://pm1.narvii.com/6697/4ef4b30be9ee74e97054112ff6b9b03d19fdc816_hq.jpg'}
          fotoPost={'https://www.fatosdesconhecidos.com.br/wp-content/uploads/2020/05/rick-e-morty-3.jpg'}
        />
      </MainContainer>
      
      
    );
  }
}

export default App;
