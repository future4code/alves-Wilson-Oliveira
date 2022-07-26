import { BrowserRouter, Router, Routes } from "react-router-dom";
import styled from "styled-components";
import { HeaderComp } from "./components/Header/Header";

const PaginaTotal=styled.div`
min-width: 100vw;
min-height: 100vh;
`

function App() {
  return (
    <PaginaTotal >
    {/* <BrowserRouter>
    <Routes>
      <Router path ={""} element={""}/>
      <Router path ={""} element={""}/>
      <Router path ={""} element={""}/>
      <Router path ={""} element={""}/>
    </Routes>
    </BrowserRouter> */}
    <HeaderComp/>
    </PaginaTotal>
  );
}

export default App;
