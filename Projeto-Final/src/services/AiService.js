const API_KEY = "AIzaSyDrMBrXl3ypBwfcOCbG_VaRT43aGPO0jPw"; 

const MODEL_NAME = "gemini-2.5-flash"; 

export async function getRecommendations(userInput) {
  console.log(`🚀 Iniciando busca com o modelo: ${MODEL_NAME}...`);

  const url = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL_NAME}:generateContent?key=${API_KEY}`;

  const requestBody = {
    contents: [{
      parts: [{
        text: `
        Você é um assistente de filmes. 
        Recomende 3 filmes ou séries para o seguinte pedido: "${userInput}".
        Responda com uma lista simples: Título (Ano) - Curta justificativa.
        `
      }]
    }]
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("❌ Erro da API:", errorData);
      throw new Error(errorData.error?.message || `Erro ${response.status}`);
    }

    const data = await response.json();
    
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
    
    if (!text) {
      throw new Error("A IA respondeu, mas não enviou texto.");
    }

    console.log("✅ Sucesso! Texto recebido.");
    return text;

  } catch (error) {
    console.error("❌ FALHA NO SERVIÇO:", error);
    throw error; 
  }
}