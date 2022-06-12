import Listademens from './componets/Listademens';
import HeaderLab from './componets/Headerlab';
import styled from 'styled-components';

const ContainerMax=styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-rows: 16% 1fr;
    background-color: #1517522e;
    min-width: 800px

`



function App() {
  return (
    <ContainerMax>
      <HeaderLab />      
      <Listademens/>                     
      </ContainerMax>
  );
}

export default App;
