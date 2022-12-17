import { createContext, ReactNode, useState } from 'react'

interface darkThemeContextProps {
  darkTheme: boolean
  changeTheme: () => void
}

export const darkThemeContext = createContext({} as darkThemeContextProps)

interface DarkThemeContextProviderProps {
  children: ReactNode
}

export function DarkThemeContextProvider({
  children,
}: DarkThemeContextProviderProps) {
  const [darkTheme, setDarkTheme] = useState(true)

  function changeTheme() {
    setDarkTheme(!darkTheme)
  }

  return (
    <darkThemeContext.Provider value={{ darkTheme, changeTheme }}>
      {children}
    </darkThemeContext.Provider>
  )
}
