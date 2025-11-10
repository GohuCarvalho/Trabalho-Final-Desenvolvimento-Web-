import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #2F246D;
  color: white;
`;

export const ProfileBox = styled.div`
  background: #1e1e1e;
  padding: 2rem;
  border-radius: 8px;
  width: 400px;
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;


export const Label = styled.label`
  display: block;
  margin-top: 1rem;
  font-weight: bold;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin-top: 0.5rem;
  border-radius: 4px;
  border: none;
`;

export const ActionButton = styled.button`
  margin-top: 20px;
  padding: 0.7rem 1.2rem;
  background-color: #2F246D;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #7d74ff;
  }
`;


export const Message = styled.p`
  margin-top: 1rem;
  color: #F0F0F0;
`;
