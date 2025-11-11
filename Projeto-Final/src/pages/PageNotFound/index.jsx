import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ActionButton } from '../../components/Button';
import { Title404 , Paragraph404 } from './styles';
import pipocaTriste from '../../assets/Video/pipoca-triste-404.mp4'


export function NotFound() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: 'center', padding: '2rem', color: 'white' }}>
      <Title404>404 — Página não encontrada</Title404>
      <Paragraph404>Desculpe, essa rota não existe.</Paragraph404>

      <video autoplay muted loop playsInline width={600}>
        <source src={pipocaTriste} type='video/mp4'/>
      </video>
      <br/>
      <ActionButton onClick={() => navigate('/Home')}>
        Voltar para a Home
      </ActionButton>
    </div>
  );
}
