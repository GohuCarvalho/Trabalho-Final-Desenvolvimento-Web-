import React, { useState, useEffect } from 'react';
import { Api } from '../../services/Api';
import { Moviecard } from '../MovieCard';
import {
    ListWrapper,
    LoadingMessage,
    ErrorMessage
} from './style';

const TMDB_BEARER_TOKEN = import.meta.env.VITE_TMDB_BEARER_TOKEN;

export function MovieList({ searchTerm = '' }) {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedSearchTerm(searchTerm); 
        }, 500); 
        return () => {
            clearTimeout(timerId);
        };
    }, [searchTerm]); 


    useEffect(() => {
        const fetchMovies = async () => {
            setLoading(true); 
            setError(null);   
            
            const config = {
                headers: {
                    'Authorization': `Bearer ${TMDB_BEARER_TOKEN}`,
                    'accept': 'application/json'
                },
                params: {} 
            };

            let endpoint = '';
            if (debouncedSearchTerm) {
                endpoint = '/search/movie';
                config.params.query = debouncedSearchTerm;
            } else {
                endpoint = '/movie/popular';
            }

            try {
                const resposta = await Api.get(endpoint, config);
                setMovies(resposta.data.results);
            } catch (err) {
                console.error("Erro ao buscar filmes:", err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchMovies();
    }, [debouncedSearchTerm]);

    if (loading) {
        return <LoadingMessage>Carregando...</LoadingMessage>;
    }

    if (error) {
        return <ErrorMessage>Erro: {error}</ErrorMessage>;
    }
    if (!loading && movies.length === 0) {
        return <ErrorMessage>Nenhum filme encontrado.</ErrorMessage>;
    }

    return (
        <ListWrapper>
            {movies.map((movie) => (
                <Moviecard key={movie.id} movie={movie} />
            ))}
        </ListWrapper>
    );
}