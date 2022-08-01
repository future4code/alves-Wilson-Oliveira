import styled from "styled-components"

export const TituloCadastro = styled.h2`
    margin:  0 0 5% 5%;
    font-family: 'IBM Plex Sans';
font-style: normal;
font-weight: 700;
font-size: 33px;
line-height: 43px;
color: #373737;
`
export const Paragrafo = styled.p`
    font-family: 'serif';
font-style: normal;
font-weight: 400;
font-size: x-large;
padding: 5vw;
a{
    text-decoration:none;
}
input{
    width: 20px;
    height: 20px;
    margin-right:2px ;
}
`
export const Checkbox = styled.input`
height: 2.5vh;
`
export const CadastroStyled = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`