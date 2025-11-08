import React, { useState, useEffect } from 'react';
import { Api } from '../../services/Api'; 
import { Hero } from '../../components/Hero'; 
import { MovieRow } from '../../components/MovieRow'; 
import { DetailsModal } from '../../components/DetailsModal';
import { MovieRow } from '../../components/MovieRow';
import { Api } from '../../services/Api';
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
    const [loading, setLoading] = useState(true);
    const [selectedItem, setSelectedItem] = useState(null);
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

    return (

        <div>
            {heroMovie && <Hero movie={heroMovie} />}

            <MovieRow 
             title="Populares" 
            fetchUrl={tmdbRequests.fetchPopular} 
            onSelectItem={setSelectedItem}
            />

            <MovieRow 
            title="Mais Votados" 
            fetchUrl={tmdbRequests.fetchTopRated} 
            onSelectItem={setSelectedItem}
            />

            <MovieRow 
            title="Em Alta" 
            fetchUrl={tmdbRequests.fetchTrending} 
            onSelectItem={setSelectedItem}
            /> 

            <DetailsModal 
            item={selectedItem} 
            onClose={() => setSelectedItem(null)} 
            />    
        </div>
);

        <>
            {loadingHero && <LoadingMessage>Carregando...</LoadingMessage>}
            {errorHero && <ErrorMessage>[ERRO HERO]: {errorHero}</ErrorMessage>}
            
            {heroMovie && (
                <HeroWrapper 
                    $backgroundImage={`${TMDB_IMAGE_BASE_URL}${heroMovie.backdrop_path}`}
                >
                
                    <HeroTitle>{heroMovie.title}</HeroTitle>
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