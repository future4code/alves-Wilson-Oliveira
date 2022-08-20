import React from "react";
import styled from "styled-components";



export function PerguntasAlternativa (props){



    return(
    <div>
       <h4>{props.perguntas}</h4>
       <select>
            <option value="Ensino médio incompleto">{props.ensinoMI}</option>
            <option value="Ensino médio completo">{props.ensinoMC}</option>
            <option value="Ensino superior incompleto">{props.ensinoSI}</option>
            <option value="Ensino superior completo">{props.ensinoSC}</option>
        </select>
    </div>
    )
}
