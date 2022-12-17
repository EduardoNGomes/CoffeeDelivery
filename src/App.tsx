import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'

import { ShoppingCartContextProvider } from './context/shopCartContext'
import { AddressContextProvider } from './context/addressContext'
import { PaymentContextProvider } from './context/paymentContext'

import { Router } from './Router'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <ShoppingCartContextProvider>
          <AddressContextProvider>
            <PaymentContextProvider>
              <GlobalStyle />
              <Router />
            </PaymentContextProvider>
          </AddressContextProvider>
        </ShoppingCartContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}
