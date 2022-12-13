import styled from 'styled-components'

export const QuantityContainer = styled.div`
  display: flex;
  gap: 4px;

  align-items: center;

  background: ${({ theme }) => theme['base-button']};
  border-radius: 6px;

  padding: 8px;

  p {
    font-size: 1.6rem;
    color: ${({ theme }) => theme['base-title']};
  }
  button {
    color: ${({ theme }) => theme.purple};

    :hover {
      color: ${({ theme }) => theme['purple-dark']};
    }
  }
`
