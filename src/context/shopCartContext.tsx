import { createContext, ReactNode } from 'react'

export const ShoppingCartContext = createContext({})

interface ShoppingCartContextProviderProps {
  children: ReactNode
}

export function ShoppingCartContextProvider({
  children,
}: ShoppingCartContextProviderProps) {
  const Hello = 'hello'

  return (
    <ShoppingCartContext.Provider value={Hello}>
      {children}
    </ShoppingCartContext.Provider>
  )
}
