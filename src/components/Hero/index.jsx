import React from 'react';
import {
    HeroWrapper,
    HeroOverlay,
    HeroContent,
    Title,
    Overview
} from './style';

const BACKDROP_BASE_URL = "https://image.tmdb.org/t/p/w1280";
const POSTER_BASE_URL = "https://image.tmdb.org/t/p/w500";

export function Hero({ movie }) {
    const backdropUrl = movie?.backdrop_path
        ? `${BACKDROP_BASE_URL}${movie.backdrop_path}`
        : movie?.poster_path
            ? `${POSTER_BASE_URL}${movie.poster_path}`
            : null;

    return (
        <HeroWrapper backdrop={backdropUrl}>
            <HeroOverlay />
            <HeroContent>
                <Title>{movie?.title || movie?.name || 'Título indisponível'}</Title>
                <Overview>{movie?.overview || 'Sem descrição disponível.'}</Overview>
            </HeroContent>
        </HeroWrapper>
    );
}