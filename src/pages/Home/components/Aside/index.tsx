import { AsideContainer, ContentLayoutAside } from './styles'

import { CardsItems } from '../../../../components/CardsItems'

export function Aside() {
  return (
    <AsideContainer>
      <h2>Nossos café</h2>

      <ContentLayoutAside>
        <CardsItems />
        <CardsItems />
        <CardsItems />
        <CardsItems />
      </ContentLayoutAside>
    </AsideContainer>
  )
}
