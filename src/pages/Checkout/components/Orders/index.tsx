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
import { useContext } from 'react'
import {
  CardItemsToOrderProps,
  ShoppingCartContext,
} from '../../../../context/shopCartContext'
import { AddressContext } from '../../../../context/addressContext'
import { useNavigate } from 'react-router-dom'
import { PaymentContext } from '../../../../context/paymentContext'

export function Orders() {
  const { updateItem, removeItem, shopCart } = useContext(ShoppingCartContext)
  const { shopCartList } = shopCart

  const { cep, city, district, houseNumber, street, uf } =
    useContext(AddressContext)

  const { credit, debit, money } = useContext(PaymentContext)

  const navigate = useNavigate()

  function handleRemoveItemFromShopList(id: string) {
    removeItem(id)
  }

  function calcTotalValue(value: number) {
    const initialValue = 0
    const allPrices = shopCartList.reduce(function (
      acc: number,
      currentValue: CardItemsToOrderProps,
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

  function handleQuantityMinus(item: CardItemsToOrderProps) {
    if (item.quantity === 1) {
      return alert('Quantidade mínima atingida')
    }
    const totalPrice =
      Number(item.price.replace(',', '.')) * (item.quantity - 1)

    const itemSelected = {
      id: item.id,
      img: item.img,
      name: item.name,
      quantity: item.quantity - 1,
      price: item.price,
      totalPrice,
    }
    updateItem(itemSelected)
  }
  function handleQuantityPlus(item: CardItemsToOrderProps) {
    const totalPrice =
      Number(item.price.replace(',', '.')) * (item.quantity + 1)

    const itemSelected = {
      id: item.id,
      img: item.img,
      name: item.name,
      quantity: item.quantity + 1,
      price: item.price,
      totalPrice,
    }
    updateItem(itemSelected)
  }

  function handleConfirm() {
    if (!credit && !debit && !money) {
      return alert('Escolha um opção de pagamento')
    }
    if (!cep || !city || !district || !houseNumber || !street || !uf) {
      return alert('Verifique os dados preenchidos')
    }
    navigate('/success')
  }

  return (
    <BoxContainer>
      <h2>Cafés selecionados</h2>

      <OrdersBoxContainer>
        {shopCartList.map((item: CardItemsToOrderProps) => (
          <OrdersContent key={item.id}>
            <img src={item.img} alt="" />
            <div>
              <p>{item.name}</p>
              <DetailsContent>
                <QuantityContainer>
                  <button onClick={() => handleQuantityMinus(item)}>
                    <Minus size={14} weight="fill" />
                  </button>
                  <p>{item.quantity}</p>
                  <button onClick={() => handleQuantityPlus(item)}>
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

        <ButtonConfirm onClick={handleConfirm}>confirmar pedido</ButtonConfirm>
      </OrdersBoxContainer>
    </BoxContainer>
  )
}
