import React, { useState, useEffect, useContext } from 'react';
import { Api } from '../../services/Api';
import { DetailsModal } from '../DetailsModal';
import {
    ListWrapper,
    LoadingMessage,
    ErrorMessage
} from './style';
import { WatchListContext } from '../../contexts/WatchListContext';
// import { MovieDetails } from '../MovieCard/style';
// import { Moviecard } from '../MovieCard';

export function WatchlistTv() {
    const {tvList} = useContext(WatchListContext);
    const [selectedItem, setSelectedItem] = useState(null);

    const handleCardClick = (tv) => {
        setSelectedItem(tv);
    };

    const handleCloseModal = () => {
        setSelectedItem(null);
    };


    return (
        <>
            <ListWrapper>
                {tvList.map((tv) => (
                    <Tvcard
                        key={tv.id}
                        tv={tv}
                        onClick={() => handleCardClick(tv)}
                    />
                ))}
            </ListWrapper>

            {selectedItem && (
                <DetailsModal item={selectedItem} onClose={handleCloseModal} />
            )}
        </>
    );
}
