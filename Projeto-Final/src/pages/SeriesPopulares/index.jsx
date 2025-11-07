import React from 'react';
import { SeriesList } from '../../components/SeriesList';
import { MainContent } from './style';

export function SeriesPopulares() {
    return (
        <MainContent>
            <h1>Séries Populares</h1>
            <SeriesList />
        </MainContent>
    );
}