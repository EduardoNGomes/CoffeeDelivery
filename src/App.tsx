import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'

import { ShoppingCartContextProvider } from './context/shopCartContext'

import { Router } from './Router'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <ShoppingCartContextProvider>
          <GlobalStyle />
          <Router />
        </ShoppingCartContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}
