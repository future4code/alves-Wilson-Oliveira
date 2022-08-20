import React from "react";
import styled from "styled-components";

const Topo= styled.div`
    width: 100vw;
    height: 100px;
    min-width: 100%;
    background-color: #ff6200ee;
    display:flex;
    font-size:xxx-large;
    align-items: center;
    justify-content: center;
    letter-spacing: 4px;
`




function HeaderLab(){

return(
    <Topo>
        Whats-Labs
    </Topo>
)
}

export default HeaderLab