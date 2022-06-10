import React from 'react';
import styled from 'styled-components'
const EstiloBigCard= styled.div`

display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
    `
    const EstiloBigCardh4=styled.h4`
     margin-bottom: 15px;
    `
    const EstiloBigCardimg=styled.img`
      width: 70px;
    margin-right: 10px;
    border-radius: 50%;
    `
    const EstiloBigCarddiv=styled.div`
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
    `

function CardGrande(props) {
    return (
        <EstiloBigCard>
            <EstiloBigCardimg src={ props.imagem } />
            <EstiloBigCarddiv>
                <EstiloBigCardh4>{ props.nome }</EstiloBigCardh4>
                <p>{ props.descricao }</p>
            </EstiloBigCarddiv>
        </EstiloBigCard>
    )
}

export default CardGrande;