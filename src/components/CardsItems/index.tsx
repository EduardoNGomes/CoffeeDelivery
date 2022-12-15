import {
  CardContainer,
  TypeContainer,
  ItemsDescription,
  ItemsDetail,
  ButtonShopCartContainer,
  QuantityContainer,
} from './styles'
import { Minus, Plus, ShoppingCart } from 'phosphor-react'

import { CardsItemsProps } from './interfaces'
import { useContext, useState } from 'react'
import { ShoppingCartContext } from '../../context/shopCartContext'
import { ShopCartListProps } from '../../reducers/ShopCart/reducer'

export function CardsItems({
  id,
  img,
  type,
  name,
  description,
  price,
}: CardsItemsProps) {
  const [quantity, setQuantity] = useState(1)

  const data = useContext(ShoppingCartContext)

  const { addNewItem, updateItem, shopCart }: any = data

  const { shopCartList } = shopCart

  function handleAdd() {
    setQuantity((prevState) => prevState + 1)
  }

  function handleRemove() {
    if (quantity === 1) {
      setQuantity(1)
    } else {
      setQuantity((prevState) => prevState - 1)
    }
  }

  function handleAddToShopList() {
    const itemSelected = {
      id,
      img,
      name,
      quantity,
      price,
    }
    const itemToUpdate = shopCartList.filter(
      (item: ShopCartListProps) => item.id === itemSelected.id,
    )

    if (itemToUpdate.length > 0) {
      updateItem(itemSelected)
    } else {
      addNewItem(itemSelected)
    }
  }

  return (
    <CardContainer>
      <img src={img} alt="" />
      <TypeContainer>
        {type.map((item) => (
          <p key={item.id}>{item.name}</p>
        ))}
      </TypeContainer>

      <ItemsDescription>
        <p>{name}</p>
        <p>{description}</p>
      </ItemsDescription>

      <ItemsDetail>
        <p>
          R$ <span>{price}</span>
        </p>

        <QuantityContainer>
          <button onClick={handleRemove}>
            <Minus size={14} weight="fill" />
          </button>
          <p>{quantity}</p>
          <button onClick={handleAdd}>
            <Plus size={14} weight="fill" />
          </button>
        </QuantityContainer>

        <ButtonShopCartContainer onClick={handleAddToShopList}>
          <ShoppingCart size={20} weight="fill" />
        </ButtonShopCartContainer>
      </ItemsDetail>
    </CardContainer>
  )
}
