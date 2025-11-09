import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, LogoContainer, PopcornBucket, AnimatedPopcorn, WelcomeMessage } from './style'; 
import { useAuth } from '../../hooks/UserContext';
import logoPopcornBucket from '../../assets/Logos/popcornTv-logo-hovered.svg'; 
import singlePopcorn from '../../assets/Logos/LogoItems/POP.png'; 
import popcornSound from '../../assets/audio/popcorn.mp3'; 

export default function LoadingPage() {
  const navigate = useNavigate();
  const audioRef = useRef(null);
  const { user } = useAuth();
  
  useEffect(() => {
    console.log('LoadingPage - Dados do usuário:', user);
  }, [user]);

  useEffect(() => {   
    if (audioRef.current) {
      audioRef.current.play().catch(error => {        
        console.log('Autoplay do áudio bloqueado.', error);
      });
    }

    const timer = setTimeout(() => {
      navigate('/home');
    }, 4000); 

    return () => {
      clearTimeout(timer);     
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    }; 
  }, [navigate]);

  return (
    <Container>      
      <audio ref={audioRef} src={popcornSound} loop preload="auto" />
      
      <WelcomeMessage>
        Bem-Vindo
        <span>{user?.name || user?.nome || 'Visitante'}</span>
      </WelcomeMessage>
      
      <LogoContainer> 
        <PopcornBucket src={logoPopcornBucket} alt="Balde de Pipoca" />
        
        {[...Array(5)].map((_, i) => ( 
          <AnimatedPopcorn 
            key={i}
            src={singlePopcorn} 
            alt="Pipoca" 
            $delay={`${i * 0.4}s`} 
            index={i} 
          />
        ))}
      </LogoContainer>
    </Container>
  );
}