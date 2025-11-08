import React from 'react';
import { MovieList } from '../../components/MovieList';
import { MainContent } from './style';

export function FilmesPopulares({ searchTerm = '' }) {
    return (
        <MainContent>
            <h1>Filmes Populares</h1>
            <MovieList searchTerm={searchTerm} />
        </MainContent>
    );
}