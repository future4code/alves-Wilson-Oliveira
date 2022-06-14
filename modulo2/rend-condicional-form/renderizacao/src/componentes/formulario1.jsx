import React from "react";
import { PerguntasAbertas } from "./perguntaAberta";
import { PerguntasAlternativa } from "./perguntaAlternada";


export function Formulario1 (){

    return(
    <div>
        <h1>ETAPA 1 - DADOS GERAIS</h1>

        
        <PerguntasAbertas pergunta={"1. Qual o seu nome?"}/>
        <PerguntasAbertas pergunta={"2. Qual sua idade?"}/>
        <PerguntasAbertas pergunta={"3. Qual seu email?"}/>
        <PerguntasAlternativa perguntas={"4. Qual a sua escolaridade?"}
        ensinoMI={"Ensino médio incompleto"}
        ensinoMC={"Ensino médio completo"}
        ensinoSI={"Ensino superior incompleto"}
        ensinoSC={"Ensino superior completo"}/>
        
        
    </div>
    )
}
