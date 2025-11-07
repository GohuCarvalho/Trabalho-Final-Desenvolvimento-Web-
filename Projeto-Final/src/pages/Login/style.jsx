import styled from "styled-components";

export const Container = styled.div`
  background: ${({ background }) => background || "#fff"};
  min-height: 100vh;
  padding: 2rem;
  transition: all 0.5s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 600px) {
    padding: 1rem;
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 500px;
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
  font-size: 1.8rem;
  color: #333;

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
  background-color: #eee;
  font-weight: bold;
  font-size: 1rem;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export const Form = styled.form`
  background-color: rgba(255, 255, 255, 0.85);
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-left: 10px dotted #ccc;
  border-right: 10px dotted #ccc;
  position: relative;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 1rem;
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  border-radius: 6px;
  border: none;
  background-color: ${({ color }) => color || "#333"};
  color: #fff;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    opacity: 0.9;
  }
`;

export const TicketFooter = styled.div`
  margin-top: 1rem;
  text-align: center;
  font-size: 0.9rem;
  color: #333;

  a {
    color: #0077aa;
    font-weight: bold;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;
