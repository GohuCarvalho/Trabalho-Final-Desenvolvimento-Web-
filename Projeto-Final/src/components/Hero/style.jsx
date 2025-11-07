import styled from 'styled-components';

export const HeroWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 60vh; 
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    text-align: left;
    overflow: hidden; 
`;

export const HeroBackdrop = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover; 
    z-index: 1;
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
    max-width: 1200px;
    padding: 0 40px;
`;

export const Title = styled.h1`
    font-size: 3.5rem;
    font-weight: 700;
    margin-bottom: 20px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

export const Overview = styled.p`
    font-size: 1.1rem;
    max-width: 600px; 
    line-height: 1.5;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
`;