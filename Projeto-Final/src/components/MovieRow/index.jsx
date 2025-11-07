import React, { useState, useEffect } from 'react';
import { Api } from '../../services/Api';
import { Moviecard } from '../MovieCard';
import { RowWrapper, RowTitle, CardContainer, LoadingMessage } from './style';

const TMDB_BEARER_TOKEN = import.meta.env.VITE_TMDB_BEARER_TOKEN

export function MovieRow({ title, fetchUrl }) {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true); 

        const fetchMovies = async () => {
            const config = {
                headers: {
                    'Authorization': `Bearer ${TMDB_BEARER_TOKEN}`,
                    'accept': 'application/json'
                }
            };

            try {
                const resposta = await Api.get(fetchUrl, config);
                setMovies(resposta.data.results);
            } catch (err) {
                console.error(`Erro ao buscar ${title}:`, err);
            } finally {
                setLoading(false);
            }
        };

        fetchMovies();

    }, [fetchUrl, title]); 

    if (loading) {
        return (
            <RowWrapper>
                <RowTitle>{title}</RowTitle>
                <LoadingMessage>Carregando...</LoadingMessage>
            </RowWrapper>
        );
    }

    return (
        <RowWrapper>
            <RowTitle>{title}</RowTitle>
            <CardContainer>
                {movies.map((movie) => (
                    <Moviecard key={movie.id} movie={movie} />
                ))}
            </CardContainer>
        </RowWrapper>
    );
}