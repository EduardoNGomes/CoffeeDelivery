import { GlobalStyle } from './styles/global'
import { LightTheme, DarkTheme } from './styles/themes/default'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'

import { ShoppingCartContextProvider } from './context/shopCartContext'
import { AddressContextProvider } from './context/addressContext'
import { PaymentContextProvider } from './context/paymentContext'

import { Router } from './Router'
import { useState } from 'react'
import { Moon, Sun } from 'phosphor-react'

export function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  return (
    <ThemeProvider theme={isDarkTheme ? DarkTheme : LightTheme}>
      <BrowserRouter>
        <ShoppingCartContextProvider>
          <button
            onClick={() => setIsDarkTheme(!isDarkTheme)}
            id="theme-button"
          >
            {isDarkTheme ? (
              <Sun size={32} weight="fill" color="#8047f8" />
            ) : (
              <Moon size={32} weight="fill" color="#8047f8" />
            )}
          </button>
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
