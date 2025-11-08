import React, { useState, useEffect } from 'react';
import { Api } from '../../services/Api'; 
import { MovieRow } from '../../components/MovieRow'; 
// Removidas importações não utilizadas: Hero, DetailsModal
import {
    HeroWrapper,
    HeroTitle,
    HeroDescription,
    MainContent,
    LoadingMessage,
    ErrorMessage
} from './style'; 

const TMDB_BEARER_TOKEN = import.meta.env.VITE_TMDB_BEARER_TOKEN;
const TMDB_IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original';

const requests = {
    fetchOriginais: '/discover/tv?with_networks=213&language=pt-BR', 
    fetchRecomendados: '/trending/all/week?language=pt-BR',        
    fetchEmAlta: '/movie/top_rated?language=pt-BR',                
};

export function Home({ searchTerm }) {
    const [heroMovie, setHeroMovie] = useState(null);
    const [loadingHero, setLoadingHero] = useState(true);
    const [errorHero, setErrorHero] = useState(null);

    useEffect(() => {
        if (!TMDB_BEARER_TOKEN) {
            setErrorHero("Token (VITE_TMDB_BEARER_TOKEN) não encontrado.");
            setLoadingHero(false);
            return;
        }

        const fetchHeroMovie = async () => {
            const config = {
                headers: {
                    'Authorization': `Bearer ${TMDB_BEARER_TOKEN}`,
                    'accept': 'application/json'
                },
                params: {
                    language: 'pt-BR'
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

    // Este é o bloco de 'return' que estava comentado, mas é o correto
    // pois usa o estado (loadingHero, errorHero) e as props (searchTerm)
    return (
        <>
            {loadingHero && <LoadingMessage>Carregando...</LoadingMessage>}
            {errorHero && <ErrorMessage>[ERRO HERO]: {errorHero}</ErrorMessage>}
            
            {heroMovie && (
                <HeroWrapper 
                    // Garante que heroMovie.backdrop_path exista antes de construir a URL
                    $backgroundImage={heroMovie.backdrop_path ? `${TMDB_IMAGE_BASE_URL}${heroMovie.backdrop_path}` : ''}
                >
                    <HeroTitle>{heroMovie.title || heroMovie.name}</HeroTitle>
                    <HeroDescription>{heroMovie.overview}</HeroDescription>
                </HeroWrapper>
            )}
            
            <MainContent>
                <MovieRow title="Originais PopcornTV" fetchUrl={requests.fetchOriginais} searchTerm={searchTerm} />
                <MovieRow title="Recomendados para Você" fetchUrl={requests.fetchRecomendados} searchTerm={searchTerm} />
                <MovieRow title="Em Alta" fetchUrl={requests.fetchEmAlta} searchTerm={searchTerm} />
            </MainContent>
        </>
    );
}