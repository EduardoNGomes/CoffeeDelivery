import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

  
* {
  font-size: 66.5%;
  margin: 0;
  padding: 0;

  box-sizing: border-box;

 }

  body {
    background: ${({ theme }) => theme};
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

  .dark-theme-background {
    background-color:${({ theme }) => theme['background-dark']};
    
  }
  .dark-theme-box {
    background-color:${({ theme }) => theme['purple-light']};
  }

  .dark-theme-text {
    color: ${({ theme }) => theme.white}
  }

  @media (max-width: 1024px) {
    *{
      font-size:60%;
    }
  }

  @media (max-width: 768px) {
    *{
      font-size:50%;
    }
  }
`
