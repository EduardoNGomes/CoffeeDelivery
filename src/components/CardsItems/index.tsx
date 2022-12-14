import {
  CardContainer,
  TypeContainer,
  ItemsDescription,
  ItemsDetail,
  ButtonShopCartContainer,
} from './styles'

import { QuantityButtons } from '../QuantityButtons'

import { ShoppingCart } from 'phosphor-react'

interface TypesProps {
  id: string
  name: string
}

interface CardsItemsProps {
  id: string
  img: string
  type: TypesProps[]
  name: string
  description: string
  price: string
}

export function CardsItems({
  img,
  type,
  name,
  description,
  price,
}: CardsItemsProps) {
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

        <QuantityButtons />

        <ButtonShopCartContainer>
          <ShoppingCart size={20} weight="fill" />
        </ButtonShopCartContainer>
      </ItemsDetail>
    </CardContainer>
  )
}
