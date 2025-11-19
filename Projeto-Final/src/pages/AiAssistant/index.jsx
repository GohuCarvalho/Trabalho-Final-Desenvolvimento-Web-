import React, { useState } from "react";
import { getRecommendations } from "../../services/AiService";
import { 
  Container,
  Content,
  Title,
  Subtitle,
  Form,
  TextArea,
  Button,
  ResponseBox,
  ResponseTitle
} from "./styled.jsx";

const AiAssistant = () => {
  const [userInput, setUserInput] = useState("");
  const [recommendations, setRecommendations] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    setIsLoading(true);
    setRecommendations("");

    const result = await getRecommendations(userInput);
    
    setRecommendations(result);
    setIsLoading(false);
  };

  return (
    <Container>
      <Content>
        <Title>🤖 Assistente IA</Title>
        <Subtitle>
          Conte como você se sente e vou te sugerir o filme perfeito!
        </Subtitle>

        <Form onSubmit={handleSubmit}>
          <TextArea
            placeholder="Ex: Quero algo leve para relaxar..."
            disabled={isLoading}
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />

          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Buscando..." : "Buscar Recomendações"}
          </Button>
        </Form>

        {recommendations && (
          <ResponseBox>
            <ResponseTitle>💡 Sugestões da IA</ResponseTitle>
            {recommendations.split("\n").map((line, i) => (
              <p
                key={i}
                dangerouslySetInnerHTML={{
                  __html: line.replace(/\*\*(.*?)\*\*/g, "<b>$1</b>")
                }}
              />
            ))}
          </ResponseBox>
        )}
      </Content>
    </Container>
  );
};

export default AiAssistant;

