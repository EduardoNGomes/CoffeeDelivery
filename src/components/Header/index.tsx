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
import { AddressContext } from '../../context/addressContext'

export function Header() {
  const { shopCart } = useContext(ShoppingCartContext)

  const { shopCartList } = shopCart
  const { city, uf } = useContext(AddressContext)
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
            {city ? `${city}, ${uf} ` : 'Brasil'}
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
