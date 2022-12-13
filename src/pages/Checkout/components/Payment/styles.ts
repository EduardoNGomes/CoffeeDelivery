import styled from 'styled-components'

export const PaymentContainer = styled.section`
  padding: 40px;

  background: ${({ theme }) => theme['base-card']};
  border-radius: 6px;
`

export const PaymentText = styled.div`
  display: flex;
  gap: 8px;

  svg {
    color: ${({ theme }) => theme.purple};
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

export const ButtonsBoxContainer = styled.div`
  display: flex;
  gap: 12px;

  margin-top: 3.2rem;
`

export const PaymentButton = styled.button`
  display: flex;
  align-items: center;
  gap: 12px;

  padding: 16px;

  background: ${({ theme }) => theme['base-button']};

  border-radius: 6px;

  svg {
    color: ${({ theme }) => theme.purple};
  }

  span {
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 160%;

    text-transform: uppercase;

    color: ${({ theme }) => theme['base-text']};
  }
`
