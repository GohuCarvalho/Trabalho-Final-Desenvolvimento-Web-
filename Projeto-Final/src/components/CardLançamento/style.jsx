import styled from 'styled-components';

export const CardWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center; 
    padding: 2rem;
    gap: 2rem;
    width: 100%;
    color: #ffffff;
    text-align: center;
    
    @media (max-width: 770px) {
    flex-direction: column;
    }
`;

export const ImageContainer = styled.div`
  width: 22rem;
  height: 27.5rem; 
  margin: 0 auto 1.5rem auto;
  overflow: hidden;
  border-radius: 1rem;
  box-shadow: 0 0.5rem 1rem rgba(254, 254, 254, 0.5);

  @media (max-width: 770px) {
    width: 18rem;
    height: 23rem; 
    margin: 0 auto 1rem auto;
    align-items: center;
    }
  `;
  
  export const PosterImage = styled.img`
  width: 100%;
  height: auto; 
  max-height: 450px; 
  object-fit: contain; 
  display: block;
  border-radius: 1rem;
`;

export const ContentWrapper = styled.div`
  padding-right: 3rem;
  padding-left: 3rem;
  width: 70%;

  @media (max-width: 770px) {
  width: 100%;
  padding: 0;
  }
`;

export const Title = styled.h2`
  color: #ffffff;
  font-size: 2em;
  margin-bottom: 5px;
  font-family: 'Bungee', 'sans-serif';
`;

export const Tagline = styled.p`
  color: #cccccc;
  font-size: 1.1em;
  margin-bottom: 15px;
  margin-top: 5px;
`;

export const Divider = styled.hr`
  border: none;
  border-top: 1px solid #fff;
  width: 80%;
  margin: 25px auto;
`;

export const SynopsisTitle = styled.h3`
  color: #fff;
  font-size: 1.3em;
  font-family: 'Bungee', 'sans-serif';
  margin-top: 30px;
  margin-bottom: 10px;
  text-transform: uppercase;
  font-weight: bold;
`;

export const SynopsisText = styled.p`
  color: #e0e0e0;
  font-size: 1rem;
  line-height: 1.6;
  text-align: center;
  padding: 0 1rem;

  @media (max-width: 770px) {
    padding: 0.1rem;
  }
`;
