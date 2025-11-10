import React from 'react';
import { MainContent, PageTitle , PageSubtitle } from './style';
import { WatchlistTv } from '../../components/WatchlistTv';


export function WatchlistTvPage() {
    return (
        <MainContent>
            <PageTitle>Maratona de séries</PageTitle>
            <PageSubtitle>O ministério da PopcornTv adverte: O combo séries + pipoca estimulam a liberação dos hormônios da felicidade.".</PageSubtitle>
            <WatchlistTv />
        </MainContent>
    );
}
