import { useNavigate } from 'react-router-dom';
import { ActionButton } from '../../components/Button';

export function NotFound() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: 'center', padding: '2rem', color: 'white' }}>
      <h1>404 — Página não encontrada</h1>
      <p>Desculpe, essa rota não existe.</p>
      <ActionButton onClick={() => navigate('/Home')}>
        Voltar para a Home
      </ActionButton>
    </div>
  );
}
