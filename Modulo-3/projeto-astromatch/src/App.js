import { useState } from "react";
import styled from "styled-components";
import { Header } from "./components/Header/Header";
import { TelaInicial } from "./components/TelaInicial/TelaInicial";
import { TelaMatch } from "./components/TelaMatch/TelaMatch";

const Telatotal = styled.div`
min-height: 100%;
display: grid;
grid-template-rows: 140px 1fr;
`

function App() {
  const [mudaTela, setMudatela] = useState(true)
  const [mudaBotao, setMudaBotao] = useState("matches")

  function atualizaTela() {
    setMudatela(!mudaTela)
    if (mudaTela == true) {
      return setMudaBotao("perfis")
    } else {
      return setMudaBotao("matches")
    }
  }
  function Pagina() {
    if (mudaTela == true) {
      return <TelaInicial />
    } else if (mudaTela == false) {
      return <TelaMatch />
    }
  }
  return (
    <Telatotal >
      <Header atualizaTela={atualizaTela} mudaBotao={mudaBotao} />
      {Pagina()}

    </Telatotal>
  );
}

export default App;
