import React from 'react';
import { StyledButton } from './style';

export function ActionButton({ children, onClick, disabled = false }) {
  return (
    <StyledButton onClick={onClick} disabled={disabled}>
      {children}
    </StyledButton>
  );
}
