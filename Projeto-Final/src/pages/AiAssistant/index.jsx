import React, { useState } from 'react';
import { getRecommendations } from '../../services/AiService';

const AiAssistant = () => {
  const [userInput, setUserInput] = useState('');
  const [recommendations, setRecommendations] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    setIsLoading(true);
    setRecommendations('');

    const result = await getRecommendations(userInput);
    
    setRecommendations(result); 
    setIsLoading(false);
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>🎬 Assistente de Recomendações de Filmes por IA</h1>
      <p style={{ color: '#555' }}>Diga como você se sente ou o que você quer assistir. Ex: "Estou triste e quero chorar comendo sorvete" ou "Tenho só 2 horas e quero algo leve."</p>

      <form onSubmit={handleSubmit} style={{ marginBottom: '30px' }}>
        <textarea
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Digite seu estado de espírito ou pedido..."
          disabled={isLoading}
          style={{ 
            width: '100%', 
            height: '100px', 
            padding: '10px', 
            fontSize: '16px', 
            borderRadius: '5px', 
            border: '1px solid #ccc',
            boxSizing: 'border-box',
            marginBottom: '10px'
          }}
        />
        <button 
          type="submit" 
          disabled={isLoading}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: isLoading ? '#aaa' : '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: isLoading ? 'not-allowed' : 'pointer'
          }}
        >
          {isLoading ? 'Buscando Recomendações...' : 'Buscar Recomendações'}
        </button>
      </form>

    
      {recommendations && (
        <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '5px', backgroundColor: '#f9f9f9', whiteSpace: 'pre-wrap' }}>
          <h2>💡 Sugestões da IA:</h2>
          {recommendations.split('\n').map((line, index) => (
            <p key={index} dangerouslySetInnerHTML={{ __html: line.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>') }} style={{ margin: '5px 0' }} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AiAssistant;