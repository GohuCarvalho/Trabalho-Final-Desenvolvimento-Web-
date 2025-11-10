import React from "react";
import { InputContainer } from "./styles";

export default function MainContent({ children }) {
  return (
    <InputContainer>
      {children}
    </InputContainer>
  );
}
