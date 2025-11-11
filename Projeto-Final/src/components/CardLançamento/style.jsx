import styled from 'styled-components';

export const CardWrapper = styled.div`
  max-width: 800px;
  margin: 40px auto;
  padding: 30px;
  background-color: #210d32;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
  text-align: center;
  color: #ffffff;
`;

export const ImageContainer = styled.div`
  width: 100%;
  max-width: 600px;
  height: auto; 
  margin: 0 auto 20px auto;
  overflow: hidden;
`;

export const PosterImage = styled.img`
  width: 100%;
  height: auto; 
  max-height: 450px; 
  object-fit: contain; 
  display: block;
  border-radius: 4px;
`;

export const ContentWrapper = styled.div`
  padding: 0 15px;
`;

export const Title = styled.h2`
  color: #ffffff;
  font-size: 2.5em;
  margin-bottom: 5px;
`;

export const Tagline = styled.p`
  color: #cccccc;
  font-size: 1.1em;
  margin-bottom: 15px;
  margin-top: 5px;
`;

export const Divider = styled.hr`
  border: none;
  border-top: 1px solid #4a2b63;
  width: 80%;
  margin: 25px auto;
`;

export const SynopsisTitle = styled.h3`
  color: #ff4d94;
  font-size: 1.3em;
  margin-top: 30px;
  margin-bottom: 10px;
  text-transform: uppercase;
  font-weight: bold;
`;

export const SynopsisText = styled.p`
  color: #e0e0e0;
  font-size: 1em;
  line-height: 1.6;
  text-align: center;
  padding: 0 20px;
`;