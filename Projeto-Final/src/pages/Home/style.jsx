import styled from 'styled-components';

export const MainContent = styled.main`
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    padding: 20px;
    box-sizing: border-box;
    overflow-x: hidden;
`;

export const LoadingMessage = styled.p`
    color: #fff;
    text-align: center;
    margin-top: 50px;
`;
export const ErrorMessage = styled.p`
    color: red;
    text-align: center;
    margin-top: 50px;
`;