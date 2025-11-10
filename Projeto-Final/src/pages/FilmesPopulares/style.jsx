import styled from 'styled-components';

export const MainContent = styled.main`
    max-width: 1200px;
    margin: 2.5rem auto;
    padding: 20px;
  `

export const PageTitle = styled.h1`
  color: #fff;
  font-size: 2rem;
  text-align: center;
  margin-bottom: 25px;
  font-weight: bold;
  font-family: "Bungee", sans-serif;
  
  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }

  @media (max-width: 480px) {
    font-size: 1.4rem;
  }
`;
