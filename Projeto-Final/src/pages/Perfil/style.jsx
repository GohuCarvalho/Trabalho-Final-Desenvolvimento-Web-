import styled from "styled-components";

const PRIMARY_COLOR = "#2F246D"; 
const SECONDARY_COLOR = "#007BFF"; 
const CARD_BACKGROUND = "#cbcbcbff"; 
const INPUT_BACKGROUND = "#3a3a3a"; 
const TEXT_COLOR = "#F0F0F0"; 

export const Container = styled.div`
  background: ${PRIMARY_COLOR}; 
  min-height: 100vh;
  padding: 2rem;
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

export const ProfileBox = styled.div`
  width: 100%;
  max-width: 500px;
  background-color: ${CARD_BACKGROUND}; 
  padding: 2.5rem; 
  border-radius: 12px;
  box-shadow:
    0 8px 24px rgba(0, 0, 0, 0.4), 
    0 0 40px rgba(78, 48, 203, 0.6); 
  
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  color: ${TEXT_COLOR};
`;

export const Label = styled.label`
  display: block;
  margin-top: 1rem;
  font-weight: bold;
  align-self: flex-start; 
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.9rem; 
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  border-radius: 8px;
  border: 1px solid #555; 
  background-color: ${INPUT_BACKGROUND}; 
  color: ${TEXT_COLOR}; 
  font-size: 1rem;

  &::placeholder {
    color: #bbb; 
  }

  &:focus {
    outline: none;
    border-color: ${SECONDARY_COLOR}; 
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
  }
`;

export const ActionButton = styled.button`
  width: 100%;
  padding: 1rem; 
  border-radius: 8px; 
  border: none;
  background-color: ${SECONDARY_COLOR}; 
  color: #fff;
  font-weight: bold;
  font-size: 1.1rem; 
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 20px;

  &:hover {
    background-color: #0056b3; 
  }
`;

export const Message = styled.p`
  margin-top: 1rem;
  color: #bbb; 
  text-align: center;
`;