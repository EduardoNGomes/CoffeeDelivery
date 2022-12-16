import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { useState } from 'react'

import {
  PaymentContainer,
  PaymentText,
  ButtonsBoxContainer,
  PaymentButton,
} from './styles'

export function Payment() {
  const [credit, setCredit] = useState(false)
  const [debit, setDebit] = useState(false)
  const [money, setMoney] = useState(false)

  function handlePaymentMethod(option: string) {
    switch (option) {
      case 'credit': {
        setCredit(true)
        setDebit(false)
        setMoney(false)
        break
      }
      case 'debit': {
        setDebit(true)
        setCredit(false)
        setMoney(false)
        break
      }
      case 'money': {
        setMoney(true)
        setCredit(false)
        setDebit(false)
        break
      }
    }
  }

  return (
    <PaymentContainer>
      <PaymentText>
        <CurrencyDollar size={22} weight="fill" />
        <div>
          <h2>Pagamento</h2>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </div>
      </PaymentText>

      <ButtonsBoxContainer>
        <PaymentButton
          className={credit ? 'active' : ''}
          onClick={() => handlePaymentMethod('credit')}
        >
          <CreditCard size={18} /> <span>cartao de crédito</span>
        </PaymentButton>
        <PaymentButton
          className={debit ? 'active' : ''}
          onClick={() => handlePaymentMethod('debit')}
        >
          <Bank size={18} /> <span>cartao de débito</span>
        </PaymentButton>
        <PaymentButton
          className={money ? 'active' : ''}
          onClick={() => handlePaymentMethod('money')}
        >
          <Money size={18} /> <span>dinheiro</span>
        </PaymentButton>
      </ButtonsBoxContainer>
    </PaymentContainer>
  )
}
