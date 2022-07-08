import { useState } from "react";
import { Header } from "./components/Header/Header";
import { TelaInicial } from "./components/TelaInicial/TelaInicial";
import { TelaMatch } from "./components/TelaMatch/TelaMatch";



function App() {
 const [mudaTela,setMudatela]= useState(true)
 const [mudaBotao,setMudaBotao]= useState("matches")

  function atualizaTela () {
setMudatela(!mudaTela)
if (mudaTela==true){return setMudaBotao("perfis")}else{return setMudaBotao("matches")}

  }

  function Pagina (){
  if(mudaTela==true){
    return<TelaInicial/>
  }else if(mudaTela == false){
    return<TelaMatch />
  }
}
  return (
    <div >
      <Header atualizaTela={atualizaTela} mudaBotao={mudaBotao}/>
      {Pagina()}
      
    </div>
  );
}

export default App;
