import styled from 'styled-components'

export const Container = styled.div`
  margin: 9.4rem 16rem;

  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 1fr 448px;
  grid-template-areas:
    'address address orders'
    'address address orders'
    'payment payment orders';
`
