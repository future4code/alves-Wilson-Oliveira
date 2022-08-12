import React from "react";
import { PerguntasAbertas } from "./perguntaAberta";



export function FormularioES (){

    return(
    <div>
        <h1>ETAPA 1 - DADOS GERAIS</h1>
        <PerguntasAbertas pergunta={"5. Qual curso?"}/>
        <PerguntasAbertas pergunta={"6. Qual a unidade de ensino?"}/>
        
    </div>
    )
}
