import { css } from '@emotion/react';

export const lancamentoStyle = css`
  .lancamento {
    background: linear-gradient(to bottom, #4b2e83, #ffcc00);
    color: #fff;
    text-align: center;
    padding: 80px 20px;
    font-family: 'Poppins', sans-serif;
  }

  .lancamento h1 {
    font-size: 3rem;
    margin-bottom: 20px;
  }

  .lancamento p {
    font-size: 1.5rem;
    margin-bottom: 30px;
  }

  .lancamento button {
    background-color: #fff;
    color: #4b2e83;
    border: none;
    padding: 15px 30px;
    font-size: 1rem;
    border-radius: 8px;
    cursor: pointer;
    transition: transform 0.2s ease;
  }

  .lancamento button:hover {
    transform: scale(1.05);
  }
`;
