import styled from 'styled-components'

export const AsideContainer = styled.aside`
  margin: 9.4rem 0;

  h2 {
    font-family: ${({ theme }) => theme['font-2']};
    font-weight: 800;
    font-size: 3.2rem;
    line-height: 130%;

    color: ${({ theme }) => theme['base-subtitle']};
  }
`

export const ContentLayoutAside = styled.div`
  margin-top: 5.4rem;
  display: grid;
  gap: 32px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`
