import styled from 'styled-components'

export const BoxContainer = styled.section`
  grid-area: orders;

  h2 {
    font-size: ${({ theme }) => theme['font-2']};
    font-weight: 700;
    font-size: 1.8rem;
    line-height: 130%;

    color: ${({ theme }) => theme['base-subtitle']};
  }
`

export const OrdersBoxContainer = styled.div`
  margin-top: 15px;
  padding: 40px;

  background: ${({ theme }) => theme['base-card']};
  border-radius: 6px 44px;
`

export const OrdersContent = styled.div`
  display: flex;
  gap: 20px;

  padding-bottom: 24px;
  margin-bottom: 24px;

  border-bottom: 1px solid ${({ theme }) => theme['base-button']};

  img {
    width: 64px;
    height: 64px;
  }

  > div {
    margin-right: 30px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  p {
    font-size: ${({ theme }) => theme['font-1']};
    font-weight: 700;
    font-size: 1.6rem;
    line-height: 130%;

    color: ${({ theme }) => theme['base-text']};
  }
`

export const DetailsContent = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
`

export const ButtonRemoveContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 10px;
  gap: 4px;

  background: ${({ theme }) => theme['base-button']};
  border-radius: 6px;

  svg {
    color: ${({ theme }) => theme.purple};
  }
  span {
    font-weight: 400;
    font-size: 1.2rem;

    text-transform: uppercase;

    color: ${({ theme }) => theme['base-text']};
  }

  :hover {
    color: ${({ theme }) => theme['base-subtitle']};
    background: ${({ theme }) => theme['base-hover']};
  }
`
export const ValuesContainer = styled.div`
  display: flex;
  justify-content: space-between;

  margin: 6px 0;

  p {
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 130%;

    color: ${({ theme }) => theme['base-text']};
  }
`

export const LastValuesContainer = styled(ValuesContainer)`
  p {
    font-weight: 700;
    font-size: 2rem;
    line-height: 130%;

    color: ${({ theme }) => theme['base-subtitle']};
  }
`

export const ButtonConfirm = styled.button`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 24px;
  padding: 12px;

  background: ${({ theme }) => theme.yellow};
  border-radius: 6px;

  font-weight: 700;
  font-size: 1.4rem;
  line-height: 160%;

  text-transform: uppercase;

  color: ${({ theme }) => theme.white};
  font-stretch: 100;

  :hover {
    background: ${({ theme }) => theme['yellow-dark']};
  }
`
