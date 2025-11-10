import styled from 'styled-components';


export const colors = {
  primary: "#362589",
  secondary: "#1a0450",
  background: "#fff8f0",
  success: "#00b894",
};

// Container principal do modal
export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1050;
`;

// Caixa do modal
export const ModalContent = styled.div`
  background-color: white;
  border-radius: 16px;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 700px;
  overflow: hidden;
`;

// Cabeçalho
export const ModalHeader = styled.div`
  background-color: ${({ color }) => color || colors.primary};
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eee;
  
  h5 {
    color: ${({ color }) => color || colors.background};
    font-weight: bold;
    margin: 0;
    align-items: center;
    font-family: "Bungee", sans-serif;
  }

  button {
    background: none;
    border: none;
    font-size: 2rem;
    cursor: pointer;
    opacity: 0.7;
    transition: 0.2s;

    &:hover {
      opacity: 1;
    }
  }
`;

// Corpo
export const ModalBody = styled.div`
  padding: 24px;

  p {
    color: #555;
  }

  label {
    font-weight: 500;
    color: ${colors.secondary};
    margin-right: 1rem;
  }

  input {
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 8px 10px;
    width: 10%;
    background-color: ${colors.secondary}95;
    text-align: center;

    &:focus {
      outline: none;
      border-color: ${colors.primary};
      box-shadow: 0 0 0 3px ${colors.primary}33;
    }
  }
`;

// Alerta de resultado
export const ResultAlert = styled.div`
  background-color: ${colors.success}22;
  color: ${colors.success};
  border: 1px solid ${colors.success}55;
  border-radius: 8px;
  text-align: center;
  padding: 12px;
  font-weight: bold;
  margin-top: 16px;
`;