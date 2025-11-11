import React, { useState, useEffect, useContext } from 'react';
import { Api } from '../../services/Api';
import { DetailsModal } from '../DetailsModal';
import {
    ListWrapper,
    LoadingMessage,
    ErrorMessage
} from './style';
import { WatchListContext } from '../../contexts/WatchListContext';
import { MovieDetails } from '../MovieCard/style';
import { Tvcard } from '../TvCard';

export function WatchlistTv() {
    const {tvList} = useContext(WatchListContext);
    const [selectedItem, setSelectedItem] = useState(null);

    const handleCardClick = (series) => {
        setSelectedItem(series);
    };

    const handleCloseModal = () => {
        setSelectedItem(null);
    };


    return (
        <>
            <ListWrapper>
                {tvList.map((series) => (
                    <Tvcard
                        key={series.id}
                        movie={series}
                        onClick={() => handleCardClick(series)}
                    />
                ))}
            </ListWrapper>

            {selectedItem && (
                <DetailsModal item={selectedItem} onClose={handleCloseModal} />
            )}
        </>
    );
}
