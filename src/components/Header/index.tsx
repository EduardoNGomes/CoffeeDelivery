import {
  NavContainer,
  ButtonLocationContainer,
  ButtonShopCartContainer,
} from './styles'

import { ShoppingCart, MapPin } from 'phosphor-react'

import logo from '../../assets/logo.png'

import { useContext } from 'react'

import { ShoppingCartContext } from '../../context/shopCartContext'

export function Header() {
  const data = useContext(ShoppingCartContext)

  function handleClick() {
    console.log(data)
  }

  return (
    <NavContainer>
      <button>
        <img src={logo} alt="" />
      </button>
      <ul>
        <li>
          <ButtonLocationContainer>
            <MapPin size={22} weight="fill" />
            Porto Alegre, RS
          </ButtonLocationContainer>
        </li>
        <li>
          <ButtonShopCartContainer onClick={handleClick}>
            <ShoppingCart size={22} weight="fill" />
            <div>2</div>
          </ButtonShopCartContainer>
        </li>
      </ul>
    </NavContainer>
  )
}
