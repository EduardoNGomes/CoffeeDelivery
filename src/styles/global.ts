import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

  
* {
  font-size: 66.5%;
  margin: 0;
  padding: 0;

  box-sizing: border-box;

 }

  body {
    background: ${({ theme }) => theme['background-theme']};
    max-width: 144rem;
    margin: 0 auto;

    transition: .3s all ease-in-out;
  
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


  #theme-button {
    position: absolute;
    top: 25px;

    left: 48%;
    right: 50%;
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
