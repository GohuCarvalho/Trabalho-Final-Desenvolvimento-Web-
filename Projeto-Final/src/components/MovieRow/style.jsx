import styled from 'styled-components';

export const RowWrapper = styled.div`
    margin-bottom: 30px;
    width: 100%;
    overflow: hidden; /* Garante que nada vaze */
`;

export const RowTitle = styled.h2`
    color: white;
    font-size: 1.8rem;
    margin: 0 0 15px 40px; /* Alinha com o padding do Hero */
`;

export const CardContainer = styled.div`
    display: flex;
    overflow-y: hidden;
    overflow-x: scroll; /* AQUI ESTÁ A MÁGICA: scroll horizontal */
    padding: 10px 0 10px 40px; /* Padding inicial à esquerda */

    /* Esconde a barra de scroll (funciona na maioria dos navegadores) */
    &::-webkit-scrollbar {
        display: none; 
    }
    -ms-overflow-style: none;  /* IE e Edge */
    scrollbar-width: none;  /* Firefox */

    /* Aqui estamos mirando o CardWrapper (que é o 'div' 
      exportado pelo Moviecard) para garantir que ele 
      não encolha e tenha a margem correta.
    */
    > div {
        flex-shrink: 0; /* Impede que os cards encolham */
        margin: 0 10px 0 0; /* Ajusta a margem SÓ na direita */
    }
`;

export const LoadingMessage = styled.div`
    color: #888;
    font-size: 1rem;
    padding: 20px 40px;
`;