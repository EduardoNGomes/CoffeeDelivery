import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { Container, DetailsContent, PageContent, TextBox } from './styles'

import img from '../../assets/delivery.png'
import { useContext } from 'react'
import { PaymentContext } from '../../context/paymentContext'
import { AddressContext } from '../../context/addressContext'

export function Success() {
  const { city, district, houseNumber, street, uf } = useContext(AddressContext)

  const { credit, debit, money } = useContext(PaymentContext)

  return (
    <Container>
      <TextBox>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </TextBox>
      <PageContent>
        <DetailsContent>
          <ul>
            <li>
              <div className="map">
                <MapPin size={16} weight="fill" />
              </div>

              <div>
                <p>
                  Entrega em{' '}
                  <span>
                    {street}, {houseNumber}{' '}
                  </span>{' '}
                </p>
                <p>
                  {district} - {city}, {uf}
                </p>
              </div>
            </li>

            <li>
              <div className="timer">
                <Timer size={16} weight="fill" />
              </div>

              <div>
                <p>Previsão de entrega</p>
                <p>
                  <span>20 min - 30 min</span>
                </p>
              </div>
            </li>

            <li>
              <div className="dollar">
                <CurrencyDollar size={16} weight="fill" />
              </div>

              <div>
                <p>Pagamento na entrega</p>
                <p>
                  <span>
                    {credit
                      ? 'Cartão de Crédito'
                      : debit
                      ? 'Cartão de Débito'
                      : 'Dinheiro'}
                  </span>
                </p>
              </div>
            </li>
          </ul>
        </DetailsContent>
        <img src={img} alt="" />
      </PageContent>
    </Container>
  )
}
