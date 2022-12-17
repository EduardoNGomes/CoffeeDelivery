import { MainContainer, TextsContainer } from './styles'

import { ShoppingCart, Timer, Coffee, Package } from 'phosphor-react'
import mainImg from '../../../../assets/main_image.png'

export function Main() {
  return (
    <MainContainer>
      <TextsContainer>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>

        <ul>
          <li>
            <span>
              <ShoppingCart weight="fill" size={20} />
            </span>
            Compra simples e segura
          </li>
          <li>
            <span>
              <Package weight="fill" size={20} />
            </span>
            Embalagem mantém o café intacto
          </li>
          <li>
            <span>
              <Timer weight="fill" size={20} />
            </span>
            Entrega rápida e rastreada
          </li>
          <li>
            <span>
              <Coffee weight="fill" size={20} />
            </span>
            O café chega fresquinho até você
          </li>
        </ul>
      </TextsContainer>
      <img
        src={mainImg}
        alt="Copo de café com um fundo amarelho, onde há diferentes tipos de grãos de café"
      />
    </MainContainer>
  )
}
