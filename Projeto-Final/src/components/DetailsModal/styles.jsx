import styled from "styled-components";
import { Link } from "react-router-dom";

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.65);
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(2px);
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: #111;
  color: #fff;
  padding: 24px;
  border-radius: 12px;
  max-width: 400px;
  width: 100%;
  position: relative;

  @media (max-width: 768px) {
    max-width: 90%;
    padding: 16px;
  }

  @media (max-width: 480px) {
    max-width: 100%;
    height: 100vh;
    max-height: 100vh;
    border-radius: 0;
    padding: 12px;
    overflow-y: auto;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  background: transparent;
  border: none;
  color: #fff;
  font-size: 20px;
  cursor: pointer;

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

export const Poster = styled.img`
  width: 50%;
  max-height: 300px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 16px;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

export const Title = styled.h1`
  margin: 0 0 12px;
  font-size: 1.2rem;
  text-align: center;
  word-break: break-word;
  line-height: 1.3;
  font-weight: 700;
  color: #FFD700;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;


export const InfoText = styled.p`
  margin: 8px 0;
  font-size: 0.95rem;
  line-height: 1.4;

  @media (max-width: 480px) {
    font-size: 0.85rem;
    text-align: justify;
  }
`;

export const Actions = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 12px;
  justify-content: center;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 8px;
    align-items: center;
  }
`;
