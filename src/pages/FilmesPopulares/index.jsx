import React from 'react';
import { MovieList } from '../../components/MovieList';
import { MainContent, PageTitle } from './style';


export function FilmesPopulares({ searchTerm = '' }) {
    return (
        <MainContent>
            <PageTitle>Filmes Populares</PageTitle>
            <MovieList searchTerm={searchTerm} />
        </MainContent>
    );
}
