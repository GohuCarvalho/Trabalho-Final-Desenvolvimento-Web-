import React, { useState, useEffect } from 'react';
import { Api } from '../../services/Api';
import MainContent from '../../components/MainContent'; 
import { Hero } from '../../components/Hero';
import { MovieRow } from '../../components/MovieRow';
import { LoadingMessage } from './style'; 

const TMDB_BEARER_TOKEN = import.meta.env.VITE_TMDB_BEARER_TOKEN

export function Home() {
    const [heroMovie, setHeroMovie] = useState(null);
    const [loadingHero, setLoadingHero] = useState(true);
    const [errorHero, setErrorHero] = useState(null);

    useEffect(() => {
        const fetchHeroMovie = async () => {
            const config = {
                headers: {
                    'Authorization': `Bearer ${TMDB_BEARER_TOKEN}`,
                    'accept': 'application/json'
                }
            };
            try {
                const resposta = await Api.get('/movie/now_playing', config);
                const featuredMovie = resposta.data.results.find(m => m.backdrop_path);
                setHeroMovie(featuredMovie || resposta.data.results[0]);
            } catch (err) {
                setErrorHero(err.message);
            } finally {
                setLoadingHero(false);
            }
        };
        fetchHeroMovie();
    }, []);

    
    return (
        <>
        {loadingHero && <LoadingMessage>Carregando...</LoadingMessage>}
        {errorHero && <LoadingMessage>Erro ao carregar destaque.</LoadingMessage>}
        {heroMovie && <Hero movie={heroMovie} />}

            <MainContent>
                <MovieRow 
                    title="Populares" 
                    fetchUrl="/movie/popular" 
                    />
                <MovieRow 
                    title="Mais Votados" 
                    fetchUrl="/movie/top_rated" 
                />
                <MovieRow 
                    title="Próximos Lançamentos" 
                    fetchUrl="/movie/upcoming" 
                    />
            </MainContent>
         </>
    );
}