import { actions } from './action'

export interface ShopCartListProps {
  id: string
  img: string
  name: string
  quantity: number
  price: number
}

interface ShopCarLists {
  shopCartList: ShopCartListProps[]
}

export function shopCartReducer(state: ShopCarLists, action: any) {
  switch (action.type) {
    case actions.ADD_NEW_ITEM: {
      return { ...state, shopCartList: [...state.shopCartList, action.payload] }
    }

    case actions.REMOVE_ITEM: {
      const newShopCartList = state.shopCartList.filter(
        (item) => item.id !== action.payload,
      )
      return { ...state, shopCartList: newShopCartList }
    }

    case actions.UPDATE_ITEM: {
      const itemToUpdate = state.shopCartList.filter(
        (item) => item.id === action.payload.id,
      )
      const newItem = {
        ...itemToUpdate[0],
        quantity: action.payload.quantity,
        totalPrice: action.payload.totalPrice,
      }
      const newShopCartList = state.shopCartList.filter(
        (item) => item.id !== action.payload.id,
      )
      return { ...state, shopCartList: [...newShopCartList, newItem] }
    }
    case actions.CLEAR: {
      return { shopCartList: [] }
    }
  }

  return { ...state }
}
