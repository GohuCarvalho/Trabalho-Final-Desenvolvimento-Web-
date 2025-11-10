import React from 'react';
import Lottie from 'lottie-react';
import logoAnimationData from '../../assets/Animacao-logo-popcorntv-2.json';
import {
    FooterContainer,
    FooterContent,
    LogoWrapper,
    SiteMap,
    MapTitle,
    MapLink,
    CopyrightTxt
} from './styles'; 

const LogoPopcornLottie = () => {
    return (
        <LogoWrapper>
            <Lottie 
                animationData={logoAnimationData} 
                loop={true} 
                autoplay={true} 
                style={{ width: '100%', height: '100%' }}
            />
        </LogoWrapper>
    );
};

const Footer = () => {
    return (
        <FooterContainer>

            <FooterContent>
                <LogoPopcornLottie />
                <SiteMap>
                        <MapTitle>Mapa do Site</MapTitle>
                        <MapLink href="/home">Início</MapLink>
                        <MapLink href="/filmes">Filmes Populares</MapLink>
                        <MapLink href="/series">Séries</MapLink>
                        <MapLink href="/maratonas">Minhas Maratonas</MapLink>
                        <MapLink href="/desenolvedores">Desenvolvedores</MapLink>
                </SiteMap>
            </FooterContent>

            <CopyrightTxt>
                Todos os direitos reservados à equipe 2 da disciplina de React da residência TIC/ Software do Serratec 2025.2.
            </CopyrightTxt>
        </FooterContainer>
    );
};

export default Footer;