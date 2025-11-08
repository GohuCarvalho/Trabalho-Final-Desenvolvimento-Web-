import styled from 'styled-components';

export const HeroWrapper = styled.div`
  width: 100%;
  height: 40vh; 
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.8) 100%
    ),
    url(${(props) => props.$backgroundImage});
  background-size: cover;
  background-position: center center; 
  background-repeat: no-repeat;

  display: flex;
  flex-direction: column;
  justify-content: flex-end; 
  align-items: center;
  text-align: center;

  color: white;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8);
  padding: 30px 60px;

  margin: 0;
  position: relative;
  left: 0;
  top: 0;

  h1 {
    font-size: 2.4rem;
    margin-bottom: 10px;
  }

  p {
    max-width: 900px;
    font-size: 1rem;
    line-height: 1.6;
  }
`;

export const HeroTitle = styled.h2`
    font-size: 10rem;
    margin: 0 0 10px 0;
`;

export const HeroDescription = styled.p`
    font-size: 1.1rem;
    max-width: 60%;
    margin: 0;
`;

export const MainContent = styled.main`
  
    padding-top: 20px;
`;

export const LoadingMessage = styled.p`
    color: #fff;
    text-align: center;
    margin-top: 50px;
`;
export const ErrorMessage = styled.p`
    color: red;
    text-align: center;
    margin-top: 50px;
`;