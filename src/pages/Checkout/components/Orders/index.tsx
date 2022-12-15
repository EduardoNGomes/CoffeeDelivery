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

import { Minus, Plus, Trash } from 'phosphor-react'
import { useContext, useState } from 'react'
import { ShoppingCartContext } from '../../../../context/shopCartContext'

export function Orders() {
  const { removeItem, shopCart }: any = useContext(ShoppingCartContext)
  const { shopCartList } = shopCart

  const [quantity, setQuantity] = useState(1)

  function handleRemoveItemFromShopList(id: string) {
    removeItem(id)
  }

  function calcTotalValue(value: number) {
    const initialValue = 0
    const allPrices = shopCartList.reduce(function (
      acc: number,
      currentValue: number,
    ) {
      return acc + currentValue.totalPrice
    },
    initialValue)

    const newPrice = allPrices + value

    return newPrice
  }

  function numberToString(totalPrice: number) {
    const strPrice = String(totalPrice.toFixed(2))
    const newStrPrice = strPrice.replace('.', ',').split(',')

    const response = `${newStrPrice[0]},${newStrPrice[1].padEnd(2, '0')}`

    return response
  }

  return (
    <BoxContainer>
      <h2>Cafés selecionados</h2>

      <OrdersBoxContainer>
        {shopCartList.map((item: any) => (
          <OrdersContent key={item.id}>
            <img src={item.img} alt="" />
            <div>
              <p>{item.name}</p>
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
                <ButtonRemoveContainer
                  onClick={() => handleRemoveItemFromShopList(item.id)}
                >
                  <Trash size={16} />
                  <span>remover</span>
                </ButtonRemoveContainer>
              </DetailsContent>
            </div>
            <p>
              R$
              {numberToString(item.totalPrice)}
            </p>
          </OrdersContent>
        ))}

        <ValuesContainer>
          <p>Total de itens</p>
          <p>
            R$ {shopCartList.length > 0 ? numberToString(calcTotalValue(0)) : 0}
          </p>
        </ValuesContainer>
        <ValuesContainer>
          <p>Entrega</p>
          <p>R$ 3,50</p>
        </ValuesContainer>
        <LastValuesContainer>
          <p>Total</p>
          <p>
            R${' '}
            {shopCartList.length > 0 ? numberToString(calcTotalValue(3.5)) : 0}
          </p>
        </LastValuesContainer>

        <ButtonConfirm>confirmar pedido</ButtonConfirm>
      </OrdersBoxContainer>
    </BoxContainer>
  )
}
