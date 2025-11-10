import React from "react";
import {
  CardContainer,
  Capa,
  Overlay,
  Conteudo,
  Tagline,
  Titulo,
  Sinopse,
} from "./style.jsx";

const CardLancamento = ({ capaUrl, tagline, titulo, sinopse }) => {
  return (
    <CardContainer>
      <Capa src={capaUrl} alt={`Capa de ${titulo}`} />
      <Overlay />

      <Conteudo>
        <Tagline>{tagline || "Lançamento da Semana PopcornTV!"}</Tagline>
        <Titulo>{titulo || "Nome do Grande Lançamento"}</Titulo>
        <Sinopse>
          {sinopse ||
            "Uma sinopse curta e impactante para prender a atenção do usuário."}
        </Sinopse>
      </Conteudo>
    </CardContainer>
  );
};

export default CardLancamento;
