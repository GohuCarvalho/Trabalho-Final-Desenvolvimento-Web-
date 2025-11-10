import React from 'react';
import { SeriesList } from '../../components/SeriesList';
import { MainContent, PageTitle } from './style';


export function SeriesPopulares({ searchTerm = '' }) {
    return (
        <MainContent>
            <PageTitle>Series Populares</PageTitle>
            <SeriesList searchTerm={searchTerm} />
        </MainContent>
    );
}