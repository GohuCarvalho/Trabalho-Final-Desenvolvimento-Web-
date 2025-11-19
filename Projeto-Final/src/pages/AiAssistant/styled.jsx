import styled from "styled-components";

export const Container = styled.div`
  background: #2F246D; 
  min-height: 100vh;
  padding: 2.5rem 1rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  @media (max-width: 600px) {
    padding: 1rem;
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 900px;
  background-color: #2e2e2e;
  padding: 2.5rem;
  border-radius: 14px;
  box-shadow:
    0 8px 24px rgba(0,0,0,0.45),
    0 0 35px rgba(103, 58, 183, 0.55);
  animation: fadeIn 0.5s ease;

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(15px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

export const Title = styled.h1`
  font-family: "Bungee", sans-serif;
  font-size: 2.3rem;
  text-align: center;
  color: #fff;
  margin-bottom: 1rem;
`;

export const Subtitle = styled.p`
  text-align: center;
  color: #bbb;
  font-size: 1rem;
  margin-bottom: 2rem;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 140px;
  padding: 1rem;
  border-radius: 10px;
  border: 1px solid #555;
  background-color: #3a3a3a;
  color: #f0f0f0;
  font-size: 1rem;
  resize: none;

  &::placeholder {
    color: #bbb;
  }

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 1rem;
  border-radius: 10px;
  border: none;
  background-color: ${({ disabled }) => disabled ? "#555" : "#007BFF"};
  color: #fff;
  font-weight: bold;
  font-size: 1.1rem;
  cursor: ${({ disabled }) => disabled ? "not-allowed" : "pointer"};
  transition: 0.25s ease;

  &:hover {
    background-color: ${({ disabled }) => disabled ? "#555" : "#0056b3"};
  }
`;

export const ResponseBox = styled.div`
  margin-top: 2rem;
  background-color: #333;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow:
    0 8px 20px rgba(0,0,0,0.35),
    0 0 25px rgba(103, 58, 183, 0.45);
  animation: fade 0.4s ease;

  @keyframes fade {
    from { opacity: 0; transform: translateY(15px); }
    to { opacity: 1; transform: translateY(0); }
  }

  p {
    color: #ddd;
    margin: 6px 0;
  }
`;

export const ResponseTitle = styled.h2`
  font-family: "Bungee", sans-serif;
  color: #fff;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

