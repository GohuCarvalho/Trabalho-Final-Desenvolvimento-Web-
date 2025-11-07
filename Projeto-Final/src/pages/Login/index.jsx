import React, { useState } from "react";
import {
  Container,
  Content,
  Title,
  VibeSelector,
  VibeButton,
  Form,
  Input,
  SubmitButton,
  TicketFooter,
} from "./style";

export default function Login() {
  const [vibe, setVibe] = useState(null);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const vibes = [
    { label: "Relaxar ✌️", key: "Relaxar" },
    { label: "Rir 😂", key: "Rir" },
    { label: "Me inspirar 💡", key: "Me inspirar" },
  ];

  const vibeStyles = {
    Relaxar: {
      background: "linear-gradient(to right, #a8edea, #fed6e3)",
      buttonColor: "#6dd5ed",
      message: "Respire fundo, você está em casa ✌️ ",
    },
    Rir: {
      background: "linear-gradient(to right, #fbc2eb, #a6c1ee)",
      buttonColor: "#ff6f61",
      message: "Prepare-se para dar boas risadas 😂",
    },
    "Me inspirar": {
      background: "linear-gradient(to right, #fdfbfb, #ebedee)",
      buttonColor: "#ffb347",
      message: "Hoje é dia de criar algo incrível 💡",
    },
  };

  const currentStyle = vibe ? vibeStyles[vibe] : {};

  return (
    <Container background={currentStyle.background}>
      <Content>
        <Title>{vibe ? currentStyle.message : "Escolha sua vibe para entrar"}</Title>

        <VibeSelector>
          {vibes.map((v) => (
            <VibeButton key={v.key} onClick={() => setVibe(v.key)}>
              {v.label}
            </VibeButton>
          ))}
        </VibeSelector>

        <Form>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          <SubmitButton color={currentStyle.buttonColor}>Entrar</SubmitButton>
          <TicketFooter>
            Não tem ingresso? <a href="/cadastro">Cadastre-se</a>
          </TicketFooter>
        </Form>
      </Content>
    </Container>
  );
}
