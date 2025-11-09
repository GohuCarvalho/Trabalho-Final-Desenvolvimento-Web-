import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    place-items: center;
    margin: 0;
    padding: 0;
    height: 100vh;
    width: 100%;
    background: linear-gradient(180deg, #362589 0%, #1a0450 20%, #000000 80%);
    background-attachment: fixed;

     @media (max-width: 820px) {
    height: fit-content;
    }
`
