import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { HeaderComp } from "./components/Header/Header";
import { CadastroPage } from "./components/Pages/CadastroPage/CadastroPage";
import { FeedPage } from "./components/Pages/FeedPage/FeedPage";
import { LoginPage } from "./components/Pages/LoginPage/LoginPage";
import { PostPage } from "./components/Pages/PostPage/PostPage";
import GlobalStyled from "./styled/StyledGlobal";


const PaginaTotal=styled.div`

`

function App() {
  return (
    <PaginaTotal >
    <BrowserRouter>
    <Routes>
      <Route index  element={<LoginPage/>}/>
      <Route path ={"/Cadastro"} element={<CadastroPage/>}/>
      <Route path ={"/Feed"} element={<FeedPage/>}/>
      <Route path ={"/Post"} element={<PostPage/>}/>
    </Routes>
    <GlobalStyled/>
    </BrowserRouter>
    </PaginaTotal>
  );
}

export default App;
