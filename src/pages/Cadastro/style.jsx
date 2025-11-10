import styled from "styled-components";

export const Container = styled.div`
  background: ${({ background }) => background || "#2F246D"}; 
  min-height: 100vh;
  padding: 2rem;
  transition: all 0.5s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 600px) {
    padding: 1rem;
  }
`;

export const Logo = styled.img`
  width: 200px;
  height: auto;
  margin-bottom: 2rem;  
`;

export const Content = styled.div`
  width: 100%;
  max-width: 500px;
  background-color: #2e2e2e; 
  padding: 2.5rem; 
  border-radius: 12px;
  box-shadow:
  0 8px 24px rgba(0, 0, 0, 0.4), 
    0 0 40px rgba(78, 48, 203, 0.6);  
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
  font-size: 1.8rem;
  color: ${({ color }) => color || "#F0F0F0"};

  @media (max-width: 600px) {
    font-size: 1.4rem;
  }
`;

export const VibeSelector = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
`;

export const VibeButton = styled.button`
  padding: 0.75rem 1.25rem;
  border-radius: 8px;
  border: none;
  cursor: pointer;  
  background-color: #444; 
  color: #f0f0f0; 
  font-weight: bold;
  font-size: 1rem;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.05);
    background-color: #555;
  }
  
  ${({ isSelected }) => isSelected && `
    background-color: #007BFF; 
    color: #fff;
  `}
`;

export const Form = styled.form`
  position: relative;
  width: 100%;
  background-color: transparent; 
  padding: 0; 
  border: none; 
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.9rem; 
  margin-bottom: 1rem;
  border-radius: 8px;
  border: 1px solid #555; 
  background-color: #3a3a3a; 
  color: #f0f0f0; 
  font-size: 1rem;

  &::placeholder {
    color: #bbb; 
  }

  &:focus {
    outline: none;
    border-color: #007BFF; 
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 1rem; 
  border-radius: 8px; 
  border: none;
  background-color: #007BFF; 
  color: #fff;
  font-weight: bold;
  font-size: 1.1rem; 
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3; 
  }
`;

export const TicketFooter = styled.div`
  margin-top: 1.5rem; 
  text-align: center;
  font-size: 0.9rem;
  color: ${({ color }) => color || "#bbb"}; 

  a {
    color: #00aaff; 
    font-weight: bold;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;