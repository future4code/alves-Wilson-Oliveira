import React from "react";
import { PerguntasAbertas } from "./perguntaAberta";




export function FormularioEM (){

    return(
    <div>
        <h1>ETAPA 1 - DADOS GERAIS</h1>
        <PerguntasAbertas pergunta={"5. Por que você não terminou um curso de graduação?"}/>
        <h3>6. Você fez algum curso complementar?</h3>
        <select>
        <option value="Curso técnico"> Curso técnico </option>
        <option value="Cursos de inglês"> Cursos de inglês </option>
        <option value="Não fiz nem curso complementar"> Não fiz nem curso complementar </option>
        </select>
        
    </div>
    )
}
