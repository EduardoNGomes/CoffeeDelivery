import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { Container, DetailsContent, PageContent, TextBox } from './styles'

import img from '../../assets/delivery.png'

export function Success() {
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
                  Entrega em <span>Rua João Daniel Martinelli, 102 </span>{' '}
                </p>
                <p>Farrapos - Porto Alegre, RS</p>
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
                  <span>Cartão de Crédito</span>
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
