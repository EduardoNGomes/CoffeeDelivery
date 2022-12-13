import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'

import {
  PaymentContainer,
  PaymentText,
  ButtonsBoxContainer,
  PaymentButton,
} from './styles'

export function Payment() {
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
        <PaymentButton>
          <CreditCard size={18} /> <span>cartao de crédito</span>
        </PaymentButton>
        <PaymentButton>
          <Bank size={18} /> <span>cartao de débito</span>
        </PaymentButton>
        <PaymentButton>
          <Money size={18} /> <span>dinheiro</span>
        </PaymentButton>
      </ButtonsBoxContainer>
    </PaymentContainer>
  )
}
