import styled from "styled-components";

const COR_PRINCIPAL = "#FFD700";
const COR_SECUNDARIA = "#FFFFFF";

export const CardContainer = styled.div`
  position: relative;
  width: 100%;
  height: 450px;
  margin: 20px 0;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
`;

export const Capa = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  background: linear-gradient(
    to bottom,
    transparent 0%,
    rgba(0, 0, 0, 0.4) 50%,
    rgba(0, 0, 0, 0.8) 100%
  );
`;

export const Conteudo = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 30px;
  width: 100%;
  z-index: 3;
  color: ${COR_SECUNDARIA};
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.8);
`;

export const Tagline = styled.p`
  font-size: 1.1em;
  font-weight: 500;
  color: ${COR_PRINCIPAL};
  margin-bottom: 5px;
`;

export const Titulo = styled.h1`
  font-size: 3.5em;
  margin: 0 0 10px 0;
  line-height: 1.1;
`;

export const Sinopse = styled.p`
  font-size: 1.2em;
  max-width: 60%;
  margin-bottom: 20px;
`;


  

