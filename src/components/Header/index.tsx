import {
  NavContainer,
  ButtonLocationContainer,
  ButtonShopCartContainer,
} from './styles'

import { ShoppingCart, MapPin } from 'phosphor-react'

import logo from '../../assets/logo.png'

import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'

import { ShoppingCartContext } from '../../context/shopCartContext'

export function Header() {
  const { shopCart }: any = useContext(ShoppingCartContext)

  const { shopCartList } = shopCart

  const navigate = useNavigate()

  function handleNavigateCheckout() {
    navigate('/checkout')
  }

  function handleNavigateHome() {
    navigate('/')
  }

  return (
    <NavContainer>
      <button onClick={handleNavigateHome}>
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
          <ButtonShopCartContainer onClick={handleNavigateCheckout}>
            <ShoppingCart size={22} weight="fill" />
            <div>{shopCartList.length}</div>
          </ButtonShopCartContainer>
        </li>
      </ul>
    </NavContainer>
  )
}
