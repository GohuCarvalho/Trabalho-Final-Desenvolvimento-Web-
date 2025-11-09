import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const MOCKAPI_URL = "https://68dda422d7b591b4b78cfdd4.mockapi.io";

const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false); 
    const navigate = useNavigate();
  
    useEffect(() => {
        const storedUser = localStorage.getItem('@POPCORNSTORE:user');
        
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []); 

    const login = async (email, password) => {
        setLoading(true);
        try {
           
            const response = await fetch(`${MOCKAPI_URL}/usuarios?email=${email}`);
            
            if (!response.ok) {
                throw new Error("Email ou senha incorretos.");
            }

            const usersFound = await response.json();

            if (usersFound.length === 0) {
               
                throw new Error("Email ou senha incorretos.");
            }

            const userFound = usersFound[0]; 

            if (userFound.password !== password) {               
                throw new Error("Email ou senha incorretos.");
            }
            console.log("Login bem-sucedido:", userFound);
           
            setUser(userFound);

            localStorage.setItem('@POPCORNSTORE:user', JSON.stringify(userFound));

            navigate('/loading')

        } catch (error) {
            console.error("Erro no login:", error);
            alert(error.message || "Ocorreu um erro ao tentar logar.");
        } finally {
            setLoading(false);
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('@POPCORNSTORE:user');
        navigate('/'); 
    };

    return (
        <UserContext.Provider 
            value={{ 
                user, 
                isAuthenticated: !!user, 
                loading,
                login, 
                logout
            }}
        >
            {children}
        </UserContext.Provider>
    );
};

export const useAuth = () => {
    const contexto = useContext(UserContext);

    if (!contexto) {
        throw new Error("useAuth deve ser usado dentro de um UserProvider.");
    }

    return contexto;
};