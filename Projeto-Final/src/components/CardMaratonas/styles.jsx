import styled, { css } from 'styled-components';

export const CardContainer = styled.div`
    border: 0.1rem solid #fff;
    border-radius: 20px;
    padding: 1.5rem;
    color: white;    
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 40rem;
    max-width: 90%;
    height: 20rem;
    transition: all 0.3s ease-in-out;

    &:hover {
        background-color: #ffffff;
        box-shadow: 0 0 10px 2px rgba(161, 118, 252, 0.8);
        color: #362589;
        transform: translateY(-5px);
    }
`;

export const Titulo = styled.h1`
    font-size: 30px;
    padding: 0.5rem;
    line-height: 1;
    font-family: Bungee, sans-serif;
    text-align: center;
    justify-content: center;
`;

export const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    padding-top: 0.5rem;
`;

export const CardText = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 2rem;
    font-family: Bungee, sans-serif;
`;

export const Contador = styled.p`
    font-size: 1.2rem;
    margin: 0;
    @media (max-width: 820px) {
    font-size: 0.9rem;
    }

`;

export const Label = styled.span`
    margin-right: 5px; 
`;

export const CardMiniaturas = styled.div`
    position: relative;
    width: 90%; 
    height: 9rem;
    margin-top: 1.5rem;
`;

export const Miniatura = styled.img`
    position: absolute;
    width: 23%;
    aspect-ratio: 3 / 4;
    border: 1px solid #fff;
    box-shadow: rgba(50, 50, 93, 0.25) 0 0.375rem 0.75rem -0.125rem, rgba(0, 0, 0, 0.3) 0 0.1875rem 0.4375rem -0.1875rem;
    object-fit: cover;
    transform-origin: center center;

    ${({ $index }) => {
    let top = 0; 
    let left = 0;
    let rotate = 0;
    let zIndex = $index + 1;

    switch ($index) {
        case 0:
            left = 80; 
            rotate = -10;
            break;                      
        case 1:
            left = 0; 
            rotate = -15;
            break;            
        case 2:
            left = 60;
            rotate = 10;
            break;
        case 3:
            left = 20;
            rotate = 5;        
            break;
        case 4:
            left = 40; 
            rotate = -5;
            break;  
    }
    
    return css`
        top: ${top}rem;
        left: ${left}%;
        z-index: ${zIndex};
        transform: rotate(${rotate}deg);
    `;
    }}
`;

