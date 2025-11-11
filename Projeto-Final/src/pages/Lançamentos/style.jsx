import styled from 'styled-components';

export const LancamentoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
  margin-top: 2.5rem;

  @media (max-width: 770px) {
    margin-top: 1.5rem;
    padding: 1rem;
  }
`;

export const Header = styled.header`
  text-align: center;
  font-family: 'Bungee', 'sans-serif';
  
  @media (max-width: 770px) {
    margin-bottom: 0;
  }
`;

export const PageTitle = styled.h1`
    font-size: 2.5rem;
    color: #fff;
    font-weight: 600;
    line-height: 1.1;
    font-family: "Bungee", sans-serif;

    @media (max-width: 770px) {
    margin-bottom: 1.5rem;
    font-size: 2rem;
    text-align: center;
    }
`;
