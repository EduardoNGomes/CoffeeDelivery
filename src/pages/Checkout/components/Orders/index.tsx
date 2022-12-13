import {
  BoxContainer,
  OrdersBoxContainer,
  OrdersContent,
  DetailsContent,
  ButtonRemoveContainer,
  ValuesContainer,
  LastValuesContainer,
  ButtonConfirm,
} from './styles'

import img from '../../../../assets/images/Type=Americano.png'
import { Trash } from 'phosphor-react'

import { QuantityButtons } from '../../../../components/QuantityButtons'

export function Orders() {
  return (
    <BoxContainer>
      <h2>Cafés selecionados</h2>

      <OrdersBoxContainer>
        <OrdersContent>
          <img src={img} alt="" />
          <div>
            <p>Expresso Tradicional</p>
            <DetailsContent>
              <QuantityButtons />
              <ButtonRemoveContainer>
                <Trash size={16} />
                <span>remover</span>
              </ButtonRemoveContainer>
            </DetailsContent>
          </div>
          <p>R$ 9,90</p>
        </OrdersContent>

        <ValuesContainer>
          <p>Total de itens</p>
          <p>R$ 29,70</p>
        </ValuesContainer>
        <ValuesContainer>
          <p>Entrega</p>
          <p>R$ 3,50</p>
        </ValuesContainer>
        <LastValuesContainer>
          <p>Total</p>
          <p>R$ 33,20</p>
        </LastValuesContainer>

        <ButtonConfirm>confirmar pedido</ButtonConfirm>
      </OrdersBoxContainer>
    </BoxContainer>
  )
}
