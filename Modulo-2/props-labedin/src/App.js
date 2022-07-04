import React from 'react';
import styled from 'styled-components'
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import Cardpequeno from './components/CardPequeno/CardPequeno';

const EstiloCardpequeno = styled.div`
    display: flex;
    align-items: center;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 50px;
    border: 1px solid ;
    justify-content: center;
    `





function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem="https://media-exp2.licdn.com/dms/image/C4D03AQH6sC6caDZ0vw/profile-displayphoto-shrink_800_800/0/1538444132304?e=1660176000&v=beta&t=HVubjMTaZye6JYxBxrcEB2fvZH3Z_pu7yAcNY8zLalI"
          nome="Wilson Santos de Oliveira"
          descricao="Prazer, me chamo wilson  e sou determinado a alcançar meus objetivos pessoais tendo como principal o desejo de obter conhecimentos e realizar descobertas cientificas significantes para a sociedade."
        />
        <ImagemButton
          imagem="https://cdn-icons-png.flaticon.com/512/271/271208.png"
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
      <EstiloCardpequeno>
      <h4>Endereço</h4>
        <Cardpequeno
          endereco=": Rua coentral Nº367" />
      </EstiloCardpequeno>
      <EstiloCardpequeno>
      <h4>E-mail</h4>
        <Cardpequeno
          email= ": w.s.oliveira@hotmail.com" />
      </EstiloCardpequeno>
      </div>


      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande
          imagem="https://media-exp2.licdn.com/dms/image/C4D0BAQElq5OqCUcJaw/company-logo_200_200/0/1645452942710?e=1662595200&v=beta&t=5ULXb6xMewsSVK23Ww2AJhNagz1Gfbnb5GhPWDsyM6Y"
          nome="Petz"
          descricao="Responsável pela a alimentação, hidratação, medicamento e avaliação de todos os animais da loja!"
        />

        <CardGrande
          imagem="https://media-exp2.licdn.com/dms/image/C4E0BAQENAYkya0v4Xw/company-logo_200_200/0/1636053553049?e=1662595200&v=beta&t=uwGoM1xVy15FAGsKvPqyhlsBSL3CA6Wryf2K9Zc0iSg"
          nome="Hospital Santa Paula"
          descricao="Entregar a medicações da farmácia central até o setor de enfermagem."
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook"
        />

        <ImagemButton
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
          texto="Twitter"
        />
      </div>
    </div>
  );
}

export default App;
