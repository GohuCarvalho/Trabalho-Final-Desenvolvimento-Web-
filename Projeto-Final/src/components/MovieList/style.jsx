import styled from 'styled-components';

export const ListWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 20px;
`;

export const LoadingMessage = styled.div`
    color: white;
    font-size: 1.5rem;
    padding: 50px;
    text-align: center;
`;

export const ErrorMessage = styled.div`
    color: red;
    font-size: 1.5rem;
    padding: 50px;
    text-align: center;
`;