import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const MOCKAPI_URL = "https://68dda422d7b591b4b78cfdd4.mockapi.io";

import {
  Container,
  Content,
  Title,
  Form,
  Input,
  SubmitButton,
  TicketFooter,
  Logo,
} from "./style.jsx"; 

import logoPopcorn from '../../assets/Logos/popcornTv-logo-hovered.svg';

export default function Cadastro() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmSenha, setConfirmSenha] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const currentStyle = {
    message: "Crie sua conta para entrar",
    buttonColor: "#007BFF", 
    textColor: "#FFFFFF", 
  };


  const handleCadastro = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!name || !email || !senha || !confirmSenha) {
      alert("Por favor, preencha todos os campos.");
      setLoading(false);
      return;
    }
    if (senha !== confirmSenha) {
      alert("As senhas não coincidem.");
      setLoading(false);
      return;
    }

    try {

      const checkResponse = await fetch(`${MOCKAPI_URL}/usuarios`);
      const allUsers = await checkResponse.json();


      const userExists = allUsers.find(user => 
        user.email.toLowerCase() === email.toLowerCase()
      );


      if (userExists) {
        throw new Error("Este e-mail já está cadastrado.");
      }


      const newUser = {
        name: name,
        email: email,
        password: senha, 
      };

      const createResponse = await fetch(`${MOCKAPI_URL}/usuarios`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });

      if (!createResponse.ok) {
        throw new Error("Erro ao criar a conta. Tente novamente.");
      }

      alert("Cadastro realizado com sucesso!");
      navigate('/login'); 

    } catch (error) {
      console.error("Erro no cadastro:", error);
      alert(error.message || "Ocorreu um erro ao tentar cadastrar.");
    } finally {
      setLoading(false);
    }
  };


  return (
    <Container>
      <Content>
        <Logo src={logoPopcorn} alt="Logo PopCorn TV" />
        <Title color={currentStyle.textColor}>
          {currentStyle.message}
        </Title>

        <Form onSubmit={handleCadastro}>
          <Input
            type="text"
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={loading}
          />
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
          <Input
            type="password"
            placeholder="Confirme sua Senha"
            value={confirmSenha}
            onChange={(e) => setConfirmSenha(e.target.value)}
            disabled={loading}
          />

          <SubmitButton
            type="submit"
            color={currentStyle.buttonColor} 
            disabled={loading}
            style={{ opacity: loading ? 0.7 : 1, cursor: loading ? 'not-allowed' : 'pointer' }}
          >
            {loading ? "Cadastrando..." : "Cadastrar"}
          </SubmitButton>

          <TicketFooter color={currentStyle.textColor}>
            Já tem ingresso? <Link to="/login">Faça login</Link>
          </TicketFooter>
        </Form>
      </Content>
    </Container>
  );
}