import styled from 'styled-components';

export const MaratonaTitleContainer  = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;


export const MaratonaContentContainer  = styled.div`
    display: flex;
    flex-direction: row;    
    padding: 2rem;
    margin-top: rem;

    @media (max-width: 770px) {
    flex-direction: column;
    }
`;

export const MaratonaContentRight  = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    text-align: left;
    gap: 1rem;
    color:#fff;
    font-size: 3rem;
    font-weight: 700;
    width: 45%;

    @media (max-width: 770px) {
    width: 100%;
    align-items: center;
    }
`;


export const MaratonaH2  = styled.h2`
    color:#fff;
    font-size: 3rem;
    font-weight: 600;
    line-height: 1.1;
    width:90%;
    font-family: "Bungee", sans-serif;

    @media (max-width: 770px) {
    font-size: 2.5rem;
    font-weight: 400;
    text-align: center;
    }
`;

export const MaratonaParagraph  = styled.div`
    display: flex;
    align-items: left;
    color:#fff;
    font-size: 1rem;
    font-weight: 400;
    width: 90%;
    padding: 0.5rem 0;
`;

export const MaratonaContentLeft  = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    gap: 1rem;
    border-color:#fff;
    font-size: 3rem;
    font-weight: 700;
    width: 55%;

    @media (max-width: 770px) {
    width: 100%;
    margin-top: 2rem;
    }
`;

export const GridWatchlist  = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;
    gap: 2rem;
`;

export const ButtonMaratonar  = styled.button`
    display: grid;
    width: 65%;
    color: #fff;
    font-size: 1rem;
    font-weight: 600;
    justify-content: center;
    padding: 0.75rem 1rem;
    background-color: #5333c1;
    border: none;
    border-radius: 2.5rem;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #6b4ce3;
    }

     @media (max-width: 820px) {
    width: 80%;
    }
`;



    // border: 0.03rem solid #929292ff;
    // border-radius: 6px;