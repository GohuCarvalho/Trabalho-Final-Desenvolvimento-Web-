import React, { useState, useEffect } from "react";
import {useAuth} from "../../hooks/UserContext";
import {ActionButton} from "../../components/Button";
import {Container, ProfileBox, Label, Input, Message} from "./style";


export function Perfil () {
    const {user} = useAuth();
    const [Email, setEmail] = useState("");
    const [Name, setName] = useState("");
    const [Password, setPassword] = useState("");
    const [ConfirmPassword, setConfirmPassword] = useState("");
    const [message, setmessage] = useState("");

    useEffect(() => {
        if (user) {
            setEmail(user.email);
            setName(user.name);
        }
    }, [user]);

    const handleUpdateProfile = async (e) => {
        if (Password && Password !== ConfirmPassword) {
      setmessage("As senhas não coincidem. Verifique e tente novamente.");
      
      return;
    }
        try {
            const payload = {};
                if (Name) payload.name = Name;
                if (Password) payload.password = Password;

            const response = await fetch(`https://68dda422d7b591b4b78cfdd4.mockapi.io/usuarios/${user.id}`, 
                {
                    method: "PUT",
                    headers: { "content-type": "application/json" },
                    body: JSON.stringify(payload),
                }
            );

            if (!response.ok) {
                throw new Error("Erro ao atualizar o perfil. Tente novamente.");
            }
            setmessage("Perfil atualizado com sucesso!");
            setPassword("");
        } catch (error) {
            console.error(error);
            setmessage(error.message || "Ocorreu um erro ao atualizar o perfil.");
        }
            };
            return (
                <Container>
                    <ProfileBox>
                        <h1>Perfil do Usuário</h1>

                        <Label>Nome: </Label>
                        <Input type="text" value={Name} onChange={(e) => setName(e.target.value)} placeholder="Digite seu nome " />
                        <Label>Email: </Label>
                        <Input type="text" value={Email} desabled />
                        <Label>Senha: </Label>
                        <Input type="password" value={Password} onChange={(e) => setPassword(e.target.value)} placeholder="Digite sua nova senha " />
                        <Label>Confirmar Senha: </Label>
                        <Input type="password" value={ConfirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirme sua nova senha"
        />

                        <ActionButton onClick={handleUpdateProfile}>Atualizar Perfil</ActionButton>

                        {message && <Message>{message}</Message>}
                    </ProfileBox>
                </Container>
            );
}


