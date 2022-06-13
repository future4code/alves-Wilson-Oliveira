import React from "react";



export function Formulario1 (){

    return(
    <div>
        <h1>ETAPA 1 - DADOS GERAIS</h1>
        <h4>1. Qual o seu nome?</h4>
        <input/>
        <h4>2. Qual sua idade?</h4>
        <input/>
        <h4>3. Qual seu email?</h4>
        <input/>
        <h4>4. Qual a sua escolaridade?</h4>
        <select>
            <option value="Ensino médio incompleto">Ensino médio incompleto</option>
            <option value="Ensino médio completo">Ensino médio completo</option>
            <option value="Ensino superior incompleto">Ensino superior incompleto</option>
            <option value="Ensino superior completo">Ensino superior completo</option>
        </select>
        
    </div>
    )
}
