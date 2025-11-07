import React from 'react';
import {
    HeroWrapper,
    HeroBackdrop,
    HeroOverlay,
    HeroContent,
    Title,
    Overview
} from './style';

const BACKDROP_BASE_URL = "https://image.tmdb.org/t/p/w1280";

export function Hero({ movie }) {
    
    const backdropUrl = movie.backdrop_path  ? `${BACKDROP_BASE_URL}${movie.backdrop_path}`: "";

    return (
        <HeroWrapper>
            {backdropUrl && <HeroBackdrop src={backdropUrl} alt={movie.title} />}
            <HeroOverlay />
            <HeroContent>
                <Title>{movie.title}</Title>
                <Overview>{movie.overview}</Overview>
            </HeroContent>
        </HeroWrapper>
    );
}