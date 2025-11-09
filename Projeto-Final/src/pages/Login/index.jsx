import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useAuth } from "../../hooks/UserContext";

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
  Logo,
} from "./style.jsx";

import logoPopcorn from '../../assets/Logos/popcornTv-logo-hovered.svg';

export default function Login() {
  const { login, loading } = useAuth();

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
      message: "Respire fundo, você está em casa",
      textColor: "#a8edea"
    },
    Rir: {
      background: "linear-gradient(to right, #fbc2eb, #a6c1ee)",
      buttonColor: "#ff6f61",
      message: "Prepare-se para dar boas risadas",
      textColor: "#fbc2eb"
    },
    "Me inspirar": {
      background: "linear-gradient(to right, #f7eab2ff, #a8e2ecff)",
      buttonColor: "#ffb347",
      message: "Hoje é dia de criar algo incrível",
      textColor: "#f7eab2ff"
    },
  };

  const currentStyle = vibe ? vibeStyles[vibe] : {
    message: "Escolha sua vibe para entrar",
    buttonColor: "#007BFF",
    textColor: "#FFFFFF",
    // background: "#2F246D" 
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (email && senha) {
      await login(email, senha);
    } else {
      alert("Por favor, preencha seu e-mail e senha.");
    }
  };

  return (
    <Container background={currentStyle.background}>
      <Content>
        <Logo src={logoPopcorn} alt="Logo PopCorn TV" />
        <Title color={currentStyle.textColor}>
          {currentStyle.message}
        </Title>

        <VibeSelector>
          {vibes.map((v) => (
            <VibeButton
              key={v.key}
              onClick={() => setVibe(v.key)}
              $isSelected={vibe === v.key}
              disabled={loading}
            >
              {v.label}
            </VibeButton>
          ))}
        </VibeSelector>

        <Form onSubmit={handleLogin}>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading}
          />
          <Input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            disabled={loading}
          />

          <SubmitButton
            type="submit"
            color={currentStyle.buttonColor}
            disabled={loading}
            style={{ opacity: loading ? 0.7 : 1, cursor: loading ? 'not-allowed' : 'pointer' }}
          >

            {loading ? "Entrando..." : "Entrar"}
          </SubmitButton>

          <TicketFooter color={currentStyle.textColor}>
            Não tem ingresso? <Link to="/cadastro">Cadastre-se</Link>
          </TicketFooter>
        </Form>
      </Content>
    </Container>
  );
}