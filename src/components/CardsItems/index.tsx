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

  const { addNewItem, removeItem }: any = data

  function handleAdd() {
    setQuantity((prevState) => prevState + 1)
  }

  // function handleRemove() {
  //   if (quantity === 1) {
  //     setQuantity(1)
  //   } else {
  //     setQuantity((prevState) => prevState - 1)
  //   }
  // }

  function handleAddToShopList() {
    const itemSelected = {
      id,
      img,
      name,
      quantity,
      price,
    }

    addNewItem(itemSelected)
  }

  function handleRemoveToShopList() {
    removeItem(id)
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
          <button onClick={handleRemoveToShopList}>
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
