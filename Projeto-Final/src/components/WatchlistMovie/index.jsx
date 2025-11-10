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
import { Moviecard } from '../MovieCard';

export function WatchlistMovie() {
    const {movieList} = useContext(WatchListContext);
    const [selectedItem, setSelectedItem] = useState(null);

    const handleCardClick = (movie) => {
        setSelectedItem(movie);
    };

    const handleCloseModal = () => {
        setSelectedItem(null);
    };


    return (
        <>
            <ListWrapper>
                {movieList.map((movie) => (
                    <Moviecard
                        key={movie.id}
                        movie={movie}
                        onClick={() => handleCardClick(movie)}
                    />
                ))}
            </ListWrapper>

            {selectedItem && (
                <DetailsModal item={selectedItem} onClose={handleCloseModal} />
            )}
        </>
    );
}
