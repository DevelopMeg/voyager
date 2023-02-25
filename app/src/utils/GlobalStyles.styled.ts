import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyles = createGlobalStyle`
  ${normalize}

  *, *::before, *::after {
    box-sizing: border-box;
  } 

  html {
    font-size: 0.625rem;
  }

  body {
    font-size: 1.6rem;
    font-family: 'Roboto', sans-serif;
    background-color: #fff;
  }

  h2, h3, h4, h5, p {
    cursor: default;
  }

  a {
    text-decoration: none;
    color: #000;
  }

  ul {
    padding: 0;
  }

  #root {
    margin: 0 auto;
    max-width: 1300px;
  }
`;
