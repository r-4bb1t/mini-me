import { createGlobalStyle } from "styled-components/macro";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'HSSummer';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/HSSummer.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  * {
    //font-family: 'NanumSquare', sans-serif;
    font-family: 'HSSummer', sans-serif;
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
