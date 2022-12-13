import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
 * {
  margin: 0;
  padding: 0;

  box-sizing: border-box;

  font-size: 66.5%;
 }

  body {
    background: ${({ theme }) => theme.background};
    max-width: 144rem;
    margin: 0 auto;
  
  }


 body,input, textarea, button {
    font-family: ${({ theme }) => theme['font-1']};
    font-weight: 400;
    font-size: 1.6rem;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;

    transition: all .3s;
  }

  li{
    list-style: none;
  }
`
