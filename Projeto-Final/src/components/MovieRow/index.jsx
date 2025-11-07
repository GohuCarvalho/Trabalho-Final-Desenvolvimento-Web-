import React, { useState, useEffect } from 'react';
import { Api } from '../../services/Api';
import { Moviecard } from '../MovieCard';
import { RowWrapper, RowTitle, CardContainer, LoadingMessage } from './style';

const TMDB_BEARER_TOKEN = import.meta.env.VITE_TMDB_BEARER_TOKEN;

export function MovieRow({ title, fetchUrl, searchTerm }) {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null); 

    useEffect(() => {
        setLoading(true);
        setError(null); 

        if (!TMDB_BEARER_TOKEN) {
            setError("Token (VITE_TMDB_BEARER_TOKEN) não encontrado.");
            setLoading(false);
            return;
        }

        const fetchMovies = async () => {
            const config = {
                headers: {
                    'Authorization': `Bearer ${TMDB_BEARER_TOKEN}`,
                    'accept': 'application/json'
                }
            };
            try {
                const resposta = await Api.get(fetchUrl, config);
                const normalizedMovies = resposta.data.results.map(movie => ({
                    ...movie,
                    title: movie.title || movie.name || movie.original_name,
                }));
                setMovies(normalizedMovies);
            } catch (err) {
                console.error(`[${title}] ERRO ao buscar filmes:`, err); 
                setError(err.message);
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

    if (error) {
        return (
            <RowWrapper>
                <RowTitle>{title}</RowTitle>
                <LoadingMessage style={{ color: 'red' }}>Erro: {error}</LoadingMessage>
            </RowWrapper>
        );
    }

    const safeSearchTerm = searchTerm || ""; 
    const filteredMovies = movies.filter(movie =>
        movie.title && movie.title.toLowerCase().includes(safeSearchTerm.toLowerCase())
    );

    return (
        <RowWrapper>
            <RowTitle>{title}</RowTitle>
            <CardContainer>
                {filteredMovies.length > 0 ? (
                    filteredMovies.map((movie) => (
                        <Moviecard key={movie.id} movie={movie} />
                    ))
                ) : (
                    <LoadingMessage>
                        {safeSearchTerm ? `Nenhum resultado para "${safeSearchTerm}"` : `Não há filmes nesta categoria.`}
                    </LoadingMessage>
                )}
            </CardContainer>
        </RowWrapper>
    );
}