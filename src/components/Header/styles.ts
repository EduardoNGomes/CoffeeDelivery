import styled from 'styled-components'

export const NavContainer = styled.nav`
  margin: 0 16rem;

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

export const ButtonLocationContainer = styled.div`
  background-color: ${({ theme }) => theme['purple-light']};

  font-size: 1.4rem;
  color: ${({ theme }) => theme['purple-dark']};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  padding: 8px;

  border-radius: 8px;
`
export const ButtonShopCartContainer = styled(ButtonDefault)`
  position: relative;

  background-color: ${({ theme }) => theme['yellow-light']};

  font-size: 1.4rem;
  color: ${({ theme }) => theme['yellow-dark']};

  > div {
    position: absolute;
    width: 20px;
    height: 20px;
    right: -8.35px;
    top: -8px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${({ theme }) => theme['yellow-dark']};

    color: ${({ theme }) => theme.white};
    font-weight: 700;
    font-size: 1.2rem;

    border-radius: 50%;
  }
`
