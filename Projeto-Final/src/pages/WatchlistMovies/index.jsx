import React from 'react';
import { MainContent, PageTitle , PageSubtitle } from './style';
import { WatchlistMovie } from '../../components/WatchlistMovie';


export function WatchlistMoviePage() {
    return (
        <MainContent>
            <PageTitle>Maratona de filmes</PageTitle>
            <PageSubtitle>O ministério da PopcornTv adverte: Maratonar com uma pipoquinha faz bem à saúde.</PageSubtitle>
            <WatchlistMovie />
        </MainContent>
    );
}
