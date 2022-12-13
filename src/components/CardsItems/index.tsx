import {
  CardContainer,
  TypeContainer,
  ItemsDescription,
  ItemsDetail,
  ButtonShopCartContainer,
} from './styles'

import { QuantityButtons } from '../QuantityButtons'

import { ShoppingCart } from 'phosphor-react'

import img from '../../assets/images/Type=Americano.png'

export function CardsItems() {
  return (
    <CardContainer>
      <img src={img} alt="" />
      <TypeContainer>
        <p>Tradicional</p>
      </TypeContainer>

      <ItemsDescription>
        <p>Expresso Tradicional</p>
        <p>O tradicional café feito com água quente e grãos moídos</p>
      </ItemsDescription>

      <ItemsDetail>
        <p>
          R$ <span>9,90</span>
        </p>

        <QuantityButtons />

        <ButtonShopCartContainer>
          <ShoppingCart size={20} weight="fill" />
        </ButtonShopCartContainer>
      </ItemsDetail>
    </CardContainer>
  )
}
