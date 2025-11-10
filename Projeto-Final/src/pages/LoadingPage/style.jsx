import styled, { keyframes } from 'styled-components';

const bucketZoom = keyframes`
  0% {
    transform: scale(0.9);
    opacity: 0.8;
  }
  100% {
    transform: scale(1.0);
    opacity: 1;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const float = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-15px);
  }
`;

const glow = keyframes`
  0%, 100% {
    filter: drop-shadow(0 0 15px #1a0030);
  }
  50% {
    filter: drop-shadow(0 0 25px rgba(241, 227, 234, 1));
  }
`;

const popcornScatter = keyframes`
  0% {
    transform: translate(0, 0) scale(0.5) rotate(0deg);
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  50% {
    transform: translate(var(--x-mid), var(--y-mid)) scale(1) rotate(var(--rotate-mid));
    opacity: 1;
  }
  80% {
    transform: translate(var(--x-end), var(--y-end)) scale(1.2) rotate(var(--rotate-end));
    opacity: 0.8;
  }
  100% {
    transform: translate(var(--x-end), var(--y-end)) scale(0.8) rotate(var(--rotate-end));
    opacity: 0;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background: radial-gradient(circle, #4a148c 0%, #1a0030 50%, #000000 90%);
  overflow: hidden;
  position: relative;
`;

export const WelcomeMessage = styled.h1`
  font-weight: 300;
  color: #f0f0f0;
  text-align: center;
  margin-bottom: 2rem;
  animation: ${fadeIn} 1.5s ease-out forwards;
  animation-delay: 0.5s;
  font-size: 2.5rem;

  span {
    display: block;
    margin-top: 5px;
    font-weight: 600;
    color: #FFD700;
    font-size: 3rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
    span {
      font-size: 2.2rem;
    }
  }
`;

export const LogoContainer = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  animation: ${float} 4s ease-in-out infinite;
  width: 90%;
  max-width: 350px;
  aspect-ratio: 1 / 1;
  height: auto;
`;

export const PopcornBucket = styled.img`
  width: 100%;
  height: auto;
  position: absolute;
  bottom: 0;
  z-index: 1;
  animation: ${glow} 3s ease-in-out infinite;
`;

export const AnimatedPopcorn = styled.img`
  position: absolute;
  width: 15%;
  max-width: 50px;
  height: auto;
  bottom: 30%;
  animation: ${popcornScatter} 2s ease-out infinite;
  animation-delay: ${({ $delay }) => $delay};
  opacity: 0;

  --x-mid: ${({ index }) => (index % 2 === 0 ? '20px' : '-20px')};
  --y-mid: -50px;
  --rotate-mid: ${({ index }) => index * 15}deg;

  --x-end: ${({ index }) => {
    const rand = Math.random() * 200 - 100;
    return `${rand}px`;
  }};
  --y-end: ${({ index }) => {
    const rand = Math.random() * 100 + 150;
    return `-${rand}px`;
  }};
  --rotate-end: ${({ index }) => index * 30 + Math.random() * 90}deg;
`;