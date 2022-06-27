
import React from "react";
import styled from "styled-components";
import { Footerlabefly } from "./componentes/Footer-labefly/Footer-labefly";
import { Headerlabefly } from "./componentes/Header-labefly/Header-labefly";
import { Mainlabefly } from "./componentes/Main-labefly/Main-labefly";

const Paginaprincipal=styled.div`
width: 100vw;
height:auto;
min-height: 100vh;
overflow: hidden;
display:grid;
border: 1px solid;
grid-template-rows: 1fr 4fr 1fr;
`

function App() {
  return (
    <Paginaprincipal >
      <Headerlabefly/>
      <Mainlabefly/>
      <Footerlabefly/>
    </Paginaprincipal>
  );
}

export default App;
