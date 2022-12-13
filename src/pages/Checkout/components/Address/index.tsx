import { MapPinLine } from 'phosphor-react'
import {
  AddressContainer,
  AddressText,
  BoxContainer,
  FormContainer,
} from './styles'

export function Address() {
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
          <input type="text" placeholder="CEP" />
          <input type="text" placeholder="Rua" />
          <input type="text" placeholder="Número" />
          <input type="text" placeholder="Complemento" />
          <input type="text" placeholder="Bairro" />
          <input type="text" placeholder="Cidade" />
          <input type="text" placeholder="UF" />
        </FormContainer>
      </AddressContainer>
    </BoxContainer>
  )
}
