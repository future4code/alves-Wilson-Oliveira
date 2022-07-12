import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AdminHome } from "./Componets/AdminHome/AdminHome";
import { AdminLogin } from "./Componets/AdminLogin/AdminLogin";
import { CriarViagem } from "./Componets/Criar-viagem/Criar-viagem";
import { DetalhesViagem } from "./Componets/Detalhes-Viagens/Detalhes-viagens";
import { FormularioViagem } from "./Componets/Formularios-de-viagem/Formulario-de-viagem";
import { HomePagina } from "./Componets/Home-Pagina/Home-pagina";
import { ListaViagens } from "./Componets/Lista-Viagens/Lista-viagens";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route index element ={<HomePagina/>}/>
      <Route path = "adminLogin" element ={<AdminLogin/>}/>
      <Route path = "adminHome" element ={<AdminHome/>}/>
      <Route path = "listaViagens" element ={<ListaViagens/>}/>
      <Route path = "formularioViagem" element ={<FormularioViagem/>}/>
      <Route path = "criarViagem" element ={<CriarViagem/>}/>
      <Route path = "detalhesViagem" element ={<DetalhesViagem/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
