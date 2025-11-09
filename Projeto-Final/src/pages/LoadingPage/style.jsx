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
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: #000;
  overflow: hidden; 
  position: relative; 
`;

export const LogoContainer = styled.div`
  position: relative;
  width: 350px; 
  height: 350px; 
  display: flex;
  align-items: flex-end; 
  justify-content: center;
  animation: ${bucketZoom} 2.5s ease-out forwards;
`;

export const PopcornBucket = styled.img`
  width: 100%;
  height: auto;
  position: absolute;
  bottom: 0; 
  z-index: 1; 
`;

export const AnimatedPopcorn = styled.img`
  position: absolute;
  width: 50px; 
  height: auto;
  bottom: 80px; 
  
  animation: ${popcornScatter} 2s ease-out infinite; 
  animation-delay: ${({ $delay }) => $delay}; 
  opacity: 0; 

  --x-mid: ${({ index }) => (index % 2 === 0 ? '20px' : '-20px')}; 
  --y-mid: -50px;
  --rotate-mid: ${({ index }) => (index * 15)}deg;

  --x-end: ${({ index }) => {    
    const rand = Math.random() * 200 - 100; 
    return `${rand}px`;
  }};
  --y-end: ${({ index }) => {   
    const rand = Math.random() * 100 + 150; 
    return `-${rand}px`;
  }};
  --rotate-end: ${({ index }) => (index * 30 + Math.random() * 90)}deg; 
`;