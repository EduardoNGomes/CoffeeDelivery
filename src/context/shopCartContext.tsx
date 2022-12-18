import { createContext, ReactNode, useReducer } from 'react'

import { shopCartReducer } from '../reducers/ShopCart/reducer'
import { actions } from '../reducers/ShopCart/action'

interface ShoppingCartContextProviderProps {
  children: ReactNode
}
export interface CardItemsToOrderProps {
  id: string
  img: string
  name: string
  price: string
  totalPrice: number
  quantity: number
}

interface ShopCartListProps {
  shopCartList: CardItemsToOrderProps[]
}

interface ShopCartProviderProps {
  addNewItem: (payload: CardItemsToOrderProps) => void
  updateItem: (payload: CardItemsToOrderProps) => void
  removeItem: (payload: string) => void
  cleanShopCartList: () => void
  shopCart: ShopCartListProps
}
export const ShoppingCartContext = createContext({} as ShopCartProviderProps)

const initialState = {
  shopCartList: [] as CardItemsToOrderProps[],
}

export function ShoppingCartContextProvider({
  children,
}: ShoppingCartContextProviderProps) {
  const [shopCart, dispatch] = useReducer(shopCartReducer, initialState)

  function addNewItem(payload: CardItemsToOrderProps) {
    dispatch({ type: actions.ADD_NEW_ITEM, payload })
  }

  function updateItem(payload: CardItemsToOrderProps) {
    dispatch({ type: actions.UPDATE_ITEM, payload })
  }

  function removeItem(payload: string) {
    dispatch({ type: actions.REMOVE_ITEM, payload })
  }

  function cleanShopCartList() {
    dispatch({ type: actions.CLEAR })
  }
  return (
    <ShoppingCartContext.Provider
      value={{
        addNewItem,
        removeItem,
        updateItem,
        cleanShopCartList,
        shopCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}
