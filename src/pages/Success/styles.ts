import styled from 'styled-components'

export const Container = styled.div`
  margin: 9.4rem 16rem;

  @media (max-width: 400px) {
    padding: 20px;
    margin: 9.4rem 0;
  }
`
export const TextBox = styled.div`
  h1 {
    font-family: ${({ theme }) => theme['font-2']};
    font-weight: 800;
    font-size: 3.2rem;
    line-height: 130%;

    color: ${({ theme }) => theme['yellow-dark']};
  }

  p {
    font-weight: 400;
    font-size: 2rem;
    line-height: 130%;

    /* Base/Subtitle */

    color: ${({ theme }) => theme['base-subtitle']};
  }
`

export const PageContent = styled.div`
  display: flex;
  gap: 14.8rem;

  margin: 40px;

  @media (max-width: 1280px) {
    margin: 40px 0;

    gap: 3rem;
    justify-content: center;
    align-items: center;

    img {
      width: 400px;
    }
  }

  @media (max-width: 768px) {
    margin: 40px 0;

    flex-direction: column;
  }

  @media (max-width: 500px) {
    img {
      width: 300px;
    }
  }
`

export const DetailsContent = styled.div`
  padding: 40px;

  border-radius: 6px 36px;
  border: 1px solid ${({ theme }) => theme.purple};

  ul {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  ul li {
    display: flex;
    gap: 12px;
    align-items: center;

    color: ${({ theme }) => theme.white};

    .map {
      background-color: ${({ theme }) => theme.purple};
      padding: 8px;
      border-radius: 50%;
    }

    .timer {
      background-color: ${({ theme }) => theme.yellow};
      padding: 8px;
      border-radius: 50%;
    }

    .dollar {
      background-color: ${({ theme }) => theme['yellow-dark']};
      padding: 8px;
      border-radius: 50%;
    }
  }

  ul li p {
    font-weight: 400;
    font-size: 1.6rem;

    color: ${({ theme }) => theme['base-text']};
  }

  ul li p span {
    font-weight: 700;
    font-size: 1.6rem;

    color: ${({ theme }) => theme['base-text']};
  }
`
