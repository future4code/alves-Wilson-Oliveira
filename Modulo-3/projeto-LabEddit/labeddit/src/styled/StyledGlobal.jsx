import { createGlobalStyle } from "styled-components";

export default createGlobalStyle `
*{
    margin: 0px;
    padding: 0;
    box-sizing: border-box
}

body, input, button {
    font-size: large;
    font-family: sans-serif
  }

  body{
    min-width: 100vw;
  }

    
`