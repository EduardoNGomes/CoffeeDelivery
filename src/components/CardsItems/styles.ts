import styled from 'styled-components'

export const CardContainer = styled.div`
  background: ${({ theme }) => theme['base-card']};
  border-radius: 6px 36px;
  padding: 20px;

  display: flex;
  gap: 20px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    margin-top: -40px;
    width: 120px;
    height: 120px;
  }
`

export const TypeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;

  p {
    color: ${({ theme }) => theme['yellow-dark']};
    border-radius: 100px;
    background: ${({ theme }) => theme['yellow-light']};

    font-size: 1rem;
    font-weight: 700;
    line-height: 130%;

    padding: 4px 8px;
    text-transform: uppercase;
  }
`

export const ItemsDescription = styled.div`
  p {
    text-align: center;
    font-family: ${({ theme }) => theme['font-2']};
    font-weight: 700;
    font-size: 2rem;

    line-height: 130%;

    color: ${({ theme }) => theme['base-subtitle']};
  }

  p:last-child {
    text-align: center;

    font-family: ${({ theme }) => theme['font-1']};
    font-weight: 400;
    font-size: 1.4rem;

    line-height: 130%;

    color: ${({ theme }) => theme['base-label']};
  }
`
export const ItemsDetail = styled.div`
  display: flex;
  gap: 8px;

  p:nth-child(1) {
    display: inline-block;
    margin-right: 20px;
    font-size: 1.4rem;
    line-height: 130%;

    color: ${({ theme }) => theme['base-text']};
  }

  p span {
    font-size: 14px;
    line-height: 130%;

    font-family: ${({ theme }) => theme['font-2']};
    font-weight: 800;
    font-size: 2.4rem;
    line-height: 130%;
  }
`

export const QuantityContainer = styled.div`
  display: flex;
  gap: 4px;

  align-items: center;

  background: ${({ theme }) => theme['base-button']};
  border-radius: 6px;

  padding: 8px;

  p {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.background};
  }
  button {
    color: ${({ theme }) => theme.purple};

    :hover {
      color: ${({ theme }) => theme['purple-dark']};
    }
  }
`

export const ButtonShopCartContainer = styled.button`
  display: flex;
  align-items: center;
  padding: 8px;
  background: ${({ theme }) => theme['purple-dark']};

  color: ${({ theme }) => theme.white};

  border-radius: 6px;

  :hover {
    background: ${({ theme }) => theme.purple};
  }
`
