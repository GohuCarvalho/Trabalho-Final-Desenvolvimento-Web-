import React, { useState, useEffect } from 'react';
import { Api } from '../../services/Api'; 
import { Hero } from '../../components/Hero'; 
import { MovieRow } from '../../components/MovieRow'; 

const TMDB_BEARER_TOKEN = import.meta.env.VITE_TMDB_BEARER_TOKEN;

const tmdbRequests = {
  fetchPopular: '/movie/popular',
  fetchTopRated: '/movie/top_rated',
  fetchTrending: '/trending/movie/week',
};

export function Home() {
    const [heroMovie, setHeroMovie] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchHeroMovie = async () => {
            const config = {
                headers: {
                    'Authorization': `Bearer ${TMDB_BEARER_TOKEN}`,
                    'accept': 'application/json'
                }
            };
            try {
                const resposta = await Api.get(tmdbRequests.fetchPopular, config);
                const movies = resposta.data.results;
                
                const randomMovie = movies[Math.floor(Math.random() * movies.length)];
                setHeroMovie(randomMovie);
                
            } catch (err) {
                console.error("Erro ao buscar filme para o Hero:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchHeroMovie();
    }, []); 

    if (loading) {
        return <div>Carregando...</div>; 
    }

    return (
        <div>
            {heroMovie && <Hero movie={heroMovie} />}

            <MovieRow 
                title="Populares" 
                fetchUrl={tmdbRequests.fetchPopular} 
            />

            <MovieRow 
                title="Mais Votados" 
                fetchUrl={tmdbRequests.fetchTopRated} 
            />

             <MovieRow 
                title="Em Alta" 
                fetchUrl={tmdbRequests.fetchTrending} 
            /> 
            
        </div>
    );
}