import styled from 'styled-components';

export const ListWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    padding: 20px;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    box-sizing: border-box;
    min-height: 300px;

    > * {
        flex: 0 0 auto;
        width: 200px;
        margin: 0;
    }
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