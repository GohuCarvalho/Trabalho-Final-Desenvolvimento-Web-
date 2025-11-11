import React from 'react';
import CardLancamento from '../../components/CardLançamento';
import { LancamentoContainer, Header, PageTitle } from './style';

import EraDoReact from '../../assets/integrantes/assets/EraDoReact.png'

const Lancamento = () => {
  const dadosFilme = {
    titulo: "A Era do React",
    tagline: "O fim está próximo. O Estado da Arte nunca foi tão volátil.",
    sinopse: "Em um mundo onde frameworks nascem e morrem em semanas, os 6 maiores desenvolvedores de front-end se unem para lutar contra a tirania do 'Legacy Code' e evitar que o Thanos do JavaScript apague metade dos componentes da web. Prepare-se para a batalha final entre hooks, componentes de classe e a persistência de estado!"
  };

  return (
    <LancamentoContainer>
        <Header>
          <PageTitle>Lançamento da Semana</PageTitle>
        </Header>

        <CardLancamento
            imagemUrl={EraDoReact}
            titulo={dadosFilme.titulo}
            tagline={dadosFilme.tagline}
            sinopse={dadosFilme.sinopse}/>         
    </LancamentoContainer>
  );
};

export default Lancamento;