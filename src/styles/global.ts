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
  -webkit-font-smoothing: antialiased;

  
 }


 body,input, textarea, button {
    font-family: ${({ theme }) => theme['font-1']};
    font-weight: 400;
    font-size: 1.6rem;
  }
`
