import React, { useState, useEffect } from 'react';
import { Api } from '../../services/Api';
import { DetailsModal } from '../DetailsModal';
import { Moviecard } from '../MovieCard';
import {
    ListWrapper,
    LoadingMessage,
    ErrorMessage
} from './style';

const TMDB_BEARER_TOKEN = import.meta.env.VITE_TMDB_BEARER_TOKEN;

export function SeriesList() {
    const [series, setSeries] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchSeries = async () => {
            const config = {
                headers: {
                    'Authorization': `Bearer ${TMDB_BEARER_TOKEN}`,
                    'accept': 'application/json'
                }
            };

            try {
                const resposta = await Api.get('/tv/popular', config);
                setSeries(resposta.data.results);
            } catch (err) {
                console.error("Erro ao buscar séries:", err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchSeries();
    }, []);

    const handleCardClick = (serie) => {
        setSelectedItem(serie);
    };

    const handleCloseModal = () => {
        setSelectedItem(null);
    };

    if (loading) return <LoadingMessage>Carregando...</LoadingMessage>;
    if (error) return <ErrorMessage>Erro: {error}</ErrorMessage>;

    return (
        <>
            <ListWrapper>
                {series.map((serie) => (
                    <Moviecard
                        key={serie.id}
                        movie={serie}
                        onClick={() => handleCardClick(serie)}
                    />
                ))}
            </ListWrapper>

            {selectedItem && (
                <DetailsModal item={selectedItem} onClose={handleCloseModal} />
            )}
        </>
    );
}
