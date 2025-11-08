import styled from 'styled-components';

export const StyledButton = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: #140246ff;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #8b77ffff;
  }

  &:disabled {
    background-color: #999;
    cursor: not-allowed;
  }
`;
