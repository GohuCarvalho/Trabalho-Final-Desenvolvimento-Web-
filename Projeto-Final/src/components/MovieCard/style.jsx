import styled from 'styled-components';

export const CardWrapper = styled.div`
    background-color: #2b2b2b;
    border-radius: 8px;
    overflow: hidden;
    align-items: center;
    margin: 0;
    width: 250px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: transform 0.2s ease-in-out;

    &:hover {
        transform: scale(1.05);
    }
`;

export const Poster = styled.img`
    width: 100%;
    height: 375px;
    object-fit: cover;
    display: block;
`;

export const MovieDetails = styled.div`
    padding: 16px;
    color: #ffffff;
`;

export const Title = styled.h2`
    font-size: 1.2rem;
    margin: 0 0 10px 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const Rating = styled.p`
    font-size: 0.9rem;
    margin: 0;
    color: #f5c518;
    
    strong {
        color: #e0e0e0;
    }
`;