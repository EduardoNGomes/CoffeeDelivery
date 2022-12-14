import { createContext, ReactNode, useReducer } from 'react'

import { shopCartReducer } from '../reducers/ShopCart/reducer'
import { actions } from '../reducers/ShopCart/action'

export const ShoppingCartContext = createContext({})

interface ShoppingCartContextProviderProps {
  children: ReactNode
}

export function ShoppingCartContextProvider({
  children,
}: ShoppingCartContextProviderProps) {
  const [cart, dispatch] = useReducer(shopCartReducer, { shopCartList: [] })

  function addNewItem(payload: any) {
    dispatch({ type: actions.ADD_NEW_ITEM, payload })
  }

  return (
    <ShoppingCartContext.Provider value={{ addNewItem, cart }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}
