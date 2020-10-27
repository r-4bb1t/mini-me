import { createGlobalStyle } from "styled-components/macro";

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'NanumSquare', sans-serif;
    font-display: 'block';
    box-sizing : border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    transition: all 0.2s ease;
  }
  html {
    font-size : 10px;
    overflow: hidden;
  }
  
  body {
    width: 100%;
    height: 100%;
    margin: 0;
  }

  button {
    cursor: pointer;
  }
  
  ul {
    list-style-type: none;
    padding : 0;
  }
`;

export default GlobalStyle;
