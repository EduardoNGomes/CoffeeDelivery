import { Container } from './styles'

import { Address } from './components/Address'
import { Payment } from './components/Payment'

export function Checkout() {
  return (
    <Container>
      <Address />
      <Payment />
    </Container>
  )
}
