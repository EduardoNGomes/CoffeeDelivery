import styled from 'styled-components'

export const NavContainer = styled.nav`
  width: 100%;
  margin: 0 auto;
  max-width: 1440px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px 0;

  ul {
    display: flex;
    gap: 12px;
    justify-content: center;
    align-items: center;
  }
`

const ButtonDefault = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  padding: 8px;

  border-radius: 8px;
`

export const ButtonLocationContainer = styled(ButtonDefault)`
  background-color: ${({ theme }) => theme['purple-light']};

  font-size: 1.4rem;
  color: ${({ theme }) => theme['purple-dark']};
`
export const ButtonShopCartContainer = styled(ButtonDefault)`
  background-color: ${({ theme }) => theme['yellow-light']};

  font-size: 1.4rem;
  color: ${({ theme }) => theme['yellow-dark']};
`
