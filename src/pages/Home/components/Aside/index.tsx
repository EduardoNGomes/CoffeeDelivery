import { AsideContainer, ContentLayoutAside } from './styles'

import { CardsItems } from '../../../../components/CardsItems'

import { data } from '../../../../utils/data'

export function Aside() {
  return (
    <AsideContainer>
      <h2>Nossos café</h2>

      <ContentLayoutAside>
        {data.map((item) => (
          <CardsItems
            id={item.id}
            key={item.id}
            img={item.img}
            type={item.type}
            name={item.name}
            description={item.description}
            price={item.price}
          />
        ))}
      </ContentLayoutAside>
    </AsideContainer>
  )
}
