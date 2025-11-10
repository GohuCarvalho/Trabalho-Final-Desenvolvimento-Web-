import styled from 'styled-components';

export const MainContent = styled.main`
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  `

export const PageTitle = styled.h1`
  color: #fff;
  font-size: 2rem;
  text-align: center;
  margin-bottom: 25px;
  font-weight: bold;
  transition: all 0.3s ease;
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

export const PageSubtitle = styled.p`
  color: #fff;
  font-size: 1.2rem;
  text-align: center;
  margin: 0 auto 20px auto;
  transition: all 0.3s ease;
  font-family: "Arial", sans-serif;
  width: 80%;
  padding: 0.5rem;
  background-color: #362589;
  border-radius: 50px;

  @media (max-width: 768px) {
    font-size: 01rem;
  }

`;