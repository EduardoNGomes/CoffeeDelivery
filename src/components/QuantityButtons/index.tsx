import { Minus, Plus } from 'phosphor-react'
import { QuantityContainer } from './styles'

export function QuantityButtons() {
  return (
    <QuantityContainer>
      <button>
        <Minus size={14} weight="fill" />
      </button>
      <p>1</p>
      <button>
        <Plus size={14} weight="fill" />
      </button>
    </QuantityContainer>
  )
}
