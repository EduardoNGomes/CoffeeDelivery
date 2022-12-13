import styled from 'styled-components'

export const BoxContainer = styled.section`
  grid-area: address;

  h1 {
    font-family: ${({ theme }) => theme['font-2']};
    font-weight: 700;
    font-size: 1.8rem;

    line-height: 130%;

    color: ${({ theme }) => theme['base-subtitle']};
  }
`

export const AddressContainer = styled.div`
  margin-top: 15px;
  background-color: ${({ theme }) => theme['base-card']};
  border-radius: 6px;

  padding: 40px;
`

export const AddressText = styled.div`
  display: flex;
  gap: 8px;

  svg {
    color: ${({ theme }) => theme['yellow-dark']};
  }

  > div {
    h2 {
      font-family: ${({ theme }) => theme['font-1']};
      font-size: 1.6rem;
      font-weight: 400;
      line-height: 130%;

      color: ${({ theme }) => theme['base-subtitle']};
    }

    p {
      font-family: ${({ theme }) => theme['font-1']};
      font-weight: 400;
      font-size: 1.4rem;

      line-height: 130%;
      color: ${({ theme }) => theme['base-text']};
    }
  }
`

export const FormContainer = styled.div`
  margin-top: 3.2rem;

  display: grid;

  grid-template-columns: 1fr 1fr 1fr 1fr 60px;

  grid-template-areas:
    'a a . . .'
    'b b b b b'
    'c c d d d'
    'e e f f g';

  gap: 12px;

  input:nth-child(1) {
    grid-area: a;
  }
  input:nth-child(2) {
    grid-area: b;
  }
  input:nth-child(3) {
    grid-area: c;
  }
  input:nth-child(4) {
    grid-area: d;
  }
  input:nth-child(5) {
    grid-area: e;
  }
  input:nth-child(6) {
    grid-area: f;
  }
  input:nth-child(7) {
    grid-area: g;
  }

  input {
    background-color: ${({ theme }) => theme['base-input']};
    border: 1px solid ${({ theme }) => theme['base-button']};
    border-radius: 4px;
    padding: 12px;
    outline: none;

    :focus {
      border-color: ${({ theme }) => theme['yellow-dark']};
    }
  }
`
