import React from 'react';
import { MovieList } from '../../components/MovieList';
import { MainContent } from './style';

export function Home() {
    return (
        <MainContent>
            <h1>Filmes Populares</h1>
            <MovieList />
        </MainContent>
    );
}