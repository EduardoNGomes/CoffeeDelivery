import { createContext, ReactNode, useReducer } from 'react'

import { shopCartReducer } from '../reducers/ShopCart/reducer'
import { actions } from '../reducers/ShopCart/action'

interface ShoppingCartContextProviderProps {
  children: ReactNode
}

// interface ShopCartProviderProps {
//   addNewItem: () => void
//   updateItem: () => void
//   removeItem: () => void
//   shopCart: Object[]
// }
export const ShoppingCartContext = createContext({})

export function ShoppingCartContextProvider({
  children,
}: ShoppingCartContextProviderProps) {
  const [shopCart, dispatch] = useReducer(shopCartReducer, { shopCartList: [] })

  function addNewItem(payload: any) {
    dispatch({ type: actions.ADD_NEW_ITEM, payload })
  }

  function updateItem(payload: any) {
    dispatch({ type: actions.UPDATE_ITEM, payload })
  }

  function removeItem(payload: any) {
    dispatch({ type: actions.REMOVE_ITEM, payload })
  }

  return (
    <ShoppingCartContext.Provider
      value={{ addNewItem, removeItem, updateItem, shopCart }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}
