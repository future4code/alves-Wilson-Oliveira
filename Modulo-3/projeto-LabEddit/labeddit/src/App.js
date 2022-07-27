import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { HeaderComp } from "./components/Header/Header";
import { LoginPage } from "./components/Pages/LoginPage";


const PaginaTotal=styled.div`
min-width: 100vw;
min-height: 100vh;
`

function App() {
  return (
    <PaginaTotal >
    <BrowserRouter>
    <Routes>
      <Route index  element={<LoginPage/>}/>
      {/* <Route path ={""} element={""}/>
      <Route path ={""} element={""}/>
      <Route path ={""} element={""}/> */}
    </Routes>
    </BrowserRouter>
    </PaginaTotal>
  );
}

export default App;
