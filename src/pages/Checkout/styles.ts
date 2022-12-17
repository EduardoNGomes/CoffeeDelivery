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

  @media (max-width: 1024px) {
    margin: 0;
    padding: 20px;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      'address address '
      'payment payment '
      'orders orders ';
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      'address  '
      'payment  '
      'orders ';
  }
`
