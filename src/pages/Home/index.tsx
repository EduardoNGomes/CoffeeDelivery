import { Container } from './styles'

import { Main } from './components/Main'
import { Aside } from './components/Aside'

export function Home() {
  return (
    <Container>
      <Main />
      <Aside />
    </Container>
  )
}
