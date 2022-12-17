import { MapPinLine } from 'phosphor-react'
import React, { useContext } from 'react'
import { AddressContext } from '../../../../context/addressContext'
import {
  AddressContainer,
  AddressText,
  BoxContainer,
  FormContainer,
} from './styles'

export function Address() {
  const {
    changeState,
    cep,
    uf,
    street,
    city,
    district,
    houseNumber,
    complement,
  } = useContext(AddressContext)

  return (
    <BoxContainer>
      <h1>Complete seu pedido</h1>

      <AddressContainer>
        <AddressText>
          <MapPinLine size={22} weight="thin" />
          <div>
            <h2>Endereço de Entrega</h2>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </div>
        </AddressText>

        <FormContainer>
          <input
            type="text"
            placeholder="CEP(apenas numeros)"
            onChange={(e) => changeState('cep', e)}
            value={cep}
            required
          />
          <input
            type="text"
            placeholder="Rua"
            onChange={(e) => changeState('cep', e)}
            value={street}
            required
          />
          <input
            type="text"
            placeholder="Número"
            value={houseNumber}
            onChange={(e) => changeState('houseNumber', e)}
            required
          />
          <input
            type="text"
            placeholder="Complemento"
            value={complement}
            onChange={(e) => changeState('complement', e)}
          />
          <input
            type="text"
            placeholder="Bairro"
            onChange={(e) => changeState('district', e)}
            value={district}
            required
          />
          <input
            type="text"
            placeholder="Cidade"
            onChange={(e) => changeState('city', e)}
            value={city}
            required
          />
          <input
            type="text"
            placeholder="UF"
            onChange={(e) => changeState('uf', e)}
            value={uf}
            required
          />
        </FormContainer>
      </AddressContainer>
    </BoxContainer>
  )
}
