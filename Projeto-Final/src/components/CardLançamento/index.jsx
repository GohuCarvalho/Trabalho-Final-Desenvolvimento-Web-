import React from 'react';
import {
  CardWrapper,
  ImageContainer,
  PosterImage,
  ContentWrapper,
  Title,
  Tagline,
  Divider,
  SynopsisTitle,
  SynopsisText,
} from './style';

const CardLancamento = ({ imagemUrl, titulo, tagline, sinopse }) => {
  return (
    <CardWrapper>
      <ImageContainer>
        <PosterImage src={imagemUrl} alt={`Pôster de ${titulo}`} />
      </ImageContainer>

      <ContentWrapper>
        <Title>{titulo}</Title>
        <Tagline>{tagline}</Tagline>

        <Divider />
        <div>
          <SynopsisTitle>Sinopse</SynopsisTitle>
          <SynopsisText>{sinopse}</SynopsisText>
        </div>
      </ContentWrapper>
    </CardWrapper>
  );
};

export default CardLancamento;