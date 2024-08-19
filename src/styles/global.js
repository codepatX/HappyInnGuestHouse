import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Arial, sans-serif;
    background-color: #f5f5f5;
    color: #333;
  }

  h1, h2, h3 {
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 1.5rem;
  }
`;

export default GlobalStyle;
