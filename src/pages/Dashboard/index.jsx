import React from 'react';
import { useAuth } from '../../hooks/AuthContext';

export function Dashboard() {
  const { logout, user } = useAuth();

  const pageStyle = {
    color: 'white',
    padding: '2rem',
    fontFamily: 'Arial, sans-serif'
  };

  const buttonStyle = {
    padding: '0.5rem 1rem',
    fontSize: '1rem',
    cursor: 'pointer'
  }

  return (
    <div style={pageStyle}>
      <h1>Bem-vindo à POPCORN Store!</h1>
      <p>Este é o seu dashboard. (Página em Construção)</p>
      {user && <p>Logado como: {user.name || 'Usuário'}</p>}

      <button onClick={logout} style={buttonStyle}>
        Sair
      </button>
    </div>
  );
}