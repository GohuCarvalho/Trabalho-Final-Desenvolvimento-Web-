import styled from 'styled-components';

export const HeroWrapper = styled.div`
    width: 100%;
    height: 70vh; /* Altura responsiva baseada na altura da viewport */
    max-height: 600px; /* Altura máxima para telas grandes */
    min-height: 400px; /* Altura mínima para telas pequenas */
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    position: relative;
    margin: 0;
    padding: 0;
    background: ${({ $backdrop }) => 
        $backdrop 
            ? `url(${$backdrop})`
            : 'linear-gradient(180deg, #362589 0%, #1a0450 100%)'};
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.3);
    }
`;

export const HeroOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
        to right,
        rgba(0, 0, 0, 0.8) 20%,
        rgba(0, 0, 0, 0.4) 60%,
        rgba(0, 0, 0, 0.8) 100%
    );
    z-index: 2;
`;

export const HeroContent = styled.div`
    position: relative;
    z-index: 3;
    max-width: 800px; /* Largura máxima menor para o conteúdo */
    padding: 20px;
    text-align: center; /* Centraliza o texto */
    margin: 0 auto;
`;

export const Title = styled.h1`
    font-size: clamp(1.5rem, 2.5vw + 1rem, 2.8rem); /* Fonte um pouco menor */
    font-weight: 700;
    margin-bottom: 16px;
    text-align: center;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

export const Overview = styled.p`
    font-size: 1rem;
    max-width: 600px;
    line-height: 1.5;
    margin: 0 auto; /* Centraliza o texto */
    text-align: center;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
`;