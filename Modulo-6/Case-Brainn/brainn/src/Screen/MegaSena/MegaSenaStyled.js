import styled from "styled-components";
import sidebar from "../../Image/Sidebar.png"

export const Desktop = styled.main`
position: relative;
width: 1600px;
height: 1080px;


`

export const Sidebar = styled.div`
position: absolute;
left: 0%;
right: 61.69%;
top: 0%;
bottom: 0%;
min-width: 200px;
background-image: url(${sidebar});
background-size: 100% ;


`
export const SelectLoto = styled.div`
position: absolute;
left: 6%;
right: 80.51%;
top: 8.52%;
bottom: 87.3%;
filter: drop-shadow(0px 2px 6px rgba(0, 0, 0, 0.05));

;
    `

export const Loto = styled.div`


font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 25px;
line-height: 37px;

color: #FFFFFF;
    `

export const Concurso = styled.p`
position: absolute;
left: 6%;
right: 84.83%;
top: 86.76%;
bottom: 11.84%;

font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 17px;
letter-spacing: 0.135em;

color: #FFFFFF;
`

export const Informativo = styled.p`
position: absolute;
left: 47.62%;
right: 11.75%;
top: 89.17%;
bottom: 8.98%;

font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 9px;
line-height: 20px;


color: #000000;
`

export const Data = styled.p`

position: absolute;
left: 6%;
right: 77.69%;
top: 89.49%;
bottom: 8.59%;

font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 24px;

color: #FFFFFF;

`

export const Path2 = styled.img`
position: absolute;
width: 40px;
height: 40px;

;
`
export const Path3 = styled.img`
position: absolute;
width: 40px;
height: 40px;

`

export const Logo = styled.div`
display: flex;
width: 100%;
position: relative;
left: 5.99%;
right: 90.31%;
top: 47.41%;
bottom: 47.47%;
justify-content: flex-start;
gap: 23%;
`

export const Bola = styled.div`
  height: 100px;
  width: 100px;
  border-radius: 50%;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
`;
