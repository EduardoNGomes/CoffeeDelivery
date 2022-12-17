import styled from 'styled-components'

export const MainContainer = styled.main`
  display: flex;
  gap: 56px;
  align-items: center;

  img {
    width: 476px;
    height: 360px;
  }
  @media (max-width: 1024px) {
    flex-direction: column-reverse;
    justify-content: center;
    img {
      width: 276px;
      height: 180px;
    }
  }
`

export const TextsContainer = styled.div`
  h1 {
    font-family: ${({ theme }) => theme['font-2']};
    font-weight: 800;
    font-size: 4.8rem;

    line-height: 130%;

    color: ${({ theme }) => theme['base-title']};
  }

  p {
    font-family: ${({ theme }) => theme['font-1']};
    font-size: 2rem;
    line-height: 130%;
    font-stretch: 100;
    color: ${({ theme }) => theme['base-subtitle']};
  }

  ul {
    margin-top: 7.1rem;
    display: flex;
    gap: 40px;
    flex-wrap: wrap;
  }

  ul li {
    display: flex;
    align-items: center;
    gap: 12px;

    font-size: 1.6rem;
  }

  ul li span {
    padding: 8px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.white};
  }
  ul li:nth-child(1) span {
    background: ${({ theme }) => theme['yellow-dark']};
  }
  ul li:nth-child(2) span {
    background: ${({ theme }) => theme['base-text']};
  }
  ul li:nth-child(3) span {
    background: ${({ theme }) => theme.yellow};
  }
  ul li:nth-child(4) span {
    background: ${({ theme }) => theme.purple};
  }
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
  }
`
