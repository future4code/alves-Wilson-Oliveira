import styled from "styled-components";

export const Desktop = styled.main`
min-width: 100vw;
min-height: 100vh;
display: grid;
grid-row: 1fr 1fr;
background-color: #EFEFEF;



`

export const Sidebar = styled.div`
position: absolute;
left: 0%;
right: 61.69%;
top: 0%;
bottom: 0%;
min-width: 200px;
background-image: url(${(props) => props.backgroud});
background-size: 100% ;
@media screen and (min-device-width : 280px) and (max-device-width : 800px) {
width: 100%;
position: absolute;
left: 0%;
right: 61.69%;
top: 0%;
bottom: 54%;
transform: rotate(90deg);
background-position:center;
}
`
export const SelectLoto = styled.div`
position: absolute;
left: 6%;
right: 80.51%;
top: 8.52%;
bottom: 87.3%;
filter: drop-shadow(0px 2px 6px rgba(0, 0, 0, 0.05));
@media screen and (min-device-width : 280px) and (max-device-width : 800px){
  left: 2.67%;
    right: 2.86%;
    top: 41.98%;
    bottom: 60%;
    width:200px;
    height: 40px;
transform: rotate(-90deg);
select{
  height:40px;
  width: 200px;
}
}

;
    `

export const Loto = styled.div`


font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 25px;
line-height: 37px;

color: #FFFFFF;
@media screen and (min-device-width : 280px) and (max-device-width : 800px){
left: 31.68%;
right: 31.68%;
top: 30.12%;
bottom: 65.78%;
transform: rotate(-90deg);
font-size: 35px;
line-height: 25px
}
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

@media screen and (min-device-width : 280px) and (max-device-width : 800px){
  font-weight: 700;
font-size: 35px;
line-height: 25px;
transform: rotate(-90deg);
left: 71%;
    right: 84.83%;
    top: 57.76%;
    bottom: 11.84%;
    width: 10px;
    height: 10px;
}
`

export const Informativo = styled.p`
position: absolute;
left: 47.62%;
right: 11.75%;
top: 92.17%;
bottom: 8.98%;

font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 9px;
line-height: 20px;


color: #000000;

@media screen and (min-device-width : 280px) and (max-device-width : 800px){
  font-size: 18px;
line-height: 25px;
left: 12.62%;

  
}
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
@media screen and (min-device-width : 280px) and (max-device-width : 800px){
  transform: rotate(-90deg)
 
}

`

export const Path2 = styled.img`
position: absolute;
width: 40px;
height: 40px;
@media screen and (min-device-width : 280px) and (max-device-width : 800px){
  
}

;
`
export const Path3 = styled.img`
position: absolute;
width: 40px;
height: 40px;
@media screen and (min-device-width : 280px) and (max-device-width : 800px){
  
}

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

@media screen and (min-device-width : 280px) and (max-device-width : 800px){
  left: 43.91%;
    right: 39.88%;
    top: 47.9%;
    bottom: 71.19%;
flex-wrap: wrap;
    align-content: center;

    gap: 2%;
}
`
export const Sorteio = styled.div`
display: flex;
width: 50%;
height: 100%;
position: absolute;
left: 42.23%;
right: 55.51%;
top: 0;
bottom: 0;
justify-content: space-between;
align-items: center;
align-content: center;
gap: 5px;
@media screen and (min-device-width :280px) and (max-device-width : 800px){
width: 50%;
    height: 50%;
    position: absolute;
    left: 27.23%;
    right: 55.51%;
    top: 45%;
    bottom: 0px;
}


font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 27px;
line-height: 33px;
flex-wrap: wrap;

@media screen and (min-device-width : 280px) and (max-device-width : 800px){
  
}
`

export const Bola = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: #FFFFFF;;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-device-width : 280px) and (max-device-width : 800px){
  
}
`;
