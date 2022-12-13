import { Container } from './styles'

import { Address } from './components/Address'
import { Payment } from './components/Payment'
import { Orders } from './components/Orders'

export function Checkout() {
  return (
    <Container>
      <Address />
      <Payment />
      <Orders />
    </Container>
  )
}
