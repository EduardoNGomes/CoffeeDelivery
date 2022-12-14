import {
  BoxContainer,
  OrdersBoxContainer,
  OrdersContent,
  DetailsContent,
  ButtonRemoveContainer,
  ValuesContainer,
  LastValuesContainer,
  ButtonConfirm,
  QuantityContainer,
} from './styles'

import img from '../../../../assets/images/Type=Americano.png'
import { Minus, Plus, Trash } from 'phosphor-react'
import { useContext, useState } from 'react'
import { ShoppingCartContext } from '../../../../context/shopCartContext'

export function Orders() {
  const [quantity, setQuantity] = useState(1)

  const data = useContext(ShoppingCartContext)

  const { removeItem }: any = data

  function handleRemoveItemFromShopList() {
    removeItem('id')
  }

  return (
    <BoxContainer>
      <h2>Cafés selecionados</h2>

      <OrdersBoxContainer>
        <OrdersContent>
          <img src={img} alt="" />
          <div>
            <p>Expresso Tradicional</p>
            <DetailsContent>
              <QuantityContainer>
                <button onClick={() => setQuantity(quantity - 1)}>
                  <Minus size={14} weight="fill" />
                </button>
                <p>{quantity}</p>
                <button onClick={() => setQuantity(quantity + 1)}>
                  <Plus size={14} weight="fill" />
                </button>
              </QuantityContainer>
              <ButtonRemoveContainer onClick={handleRemoveItemFromShopList}>
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
