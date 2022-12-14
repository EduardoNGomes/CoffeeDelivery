import { actions } from './action'

interface ShopCartListProps {
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
      console.log(state)
      return { ...state, shopCartList: [...state.shopCartList, action.payload] }
    }
  }

  return { ...state }
}
