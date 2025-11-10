import React, { useState, useEffect, useCallback, useContext } from "react"
import MainContent from "../../components/MainContent"
import { MaratonaContentContainer, MaratonaContentRight, MaratonaH2, MaratonaParagraph, MaratonaContentLeft, GridWatchlist, ButtonMaratonar } from './style';
import CardMaratonas from "../../components/CardMaratonas";
import { CalculadoraModal } from "../../components/CalculadoraModal"
import { WatchListContext } from "../../contexts/WatchListContext";
import { useNavigate } from "react-router-dom";

const TMDB_BEARER_TOKEN = import.meta.env.VITE_TMDB_BEARER_TOKEN;
const MOCK_API_URL = "https://68dda4dad7b591b4b78d011a.mockapi.io/watchlist/watchlist";
const TMDB_BASE_URL = 'https://api.themoviedb.org/3';

export function Maratonas() {

    const { movieList , tvList } = useContext(WatchListContext);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalMediaType, setModalMediaType] = useState(null);
    const navigate = useNavigate();

    const calculateTotalRuntime = (items, type) => {
        return items.reduce((total, item) => {
            if (type === 'movie') {
                return total + (item.runtime || 0);
            } else if (type === 'tv') {
                const episodeTime = item.episode_run_time?.[0] || 45;
                const totalEpisodes = item.number_of_episodes || 1;
                return total + (episodeTime * totalEpisodes);
            }
            return total;
        }, 0);
    };


    const openModal = (mediaType) => {
        setModalMediaType(mediaType);
        console.log('clicou');
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setModalMediaType(null);
    };

    const handleCardClick = (type) => {
        navigate(`/maratonar${type}`);
    };
    const totalMovieRuntime = calculateTotalRuntime(movieList, 'movie');
    const totalTvRuntime = calculateTotalRuntime(tvList, 'tv');



return (
    <>
        <MainContent>
            <MaratonaContentContainer>
                <MaratonaContentRight>
                    <MaratonaH2>Luzes, câmera... Maratona!</MaratonaH2>
                    <MaratonaParagraph>
                        Cansado de levar spoilers? Então prepare sua pipoca que vamos preparar seu planejamento!
                        Informe quantas horas reais você tem por dia para maratonar e nossa
                        ferramenta calculará quando você vai zerar sua lista. Calcule o tempo de maratona e comece
                        a contagem regressiva para o grand finale de tudo que você precisa assistir!
                    </MaratonaParagraph>
                    <ButtonMaratonar onClick={() => openModal('movie')}>Quero maratonar filmes</ButtonMaratonar>
                    <ButtonMaratonar onClick={() => openModal('tv')}>Quero maratonar séries</ButtonMaratonar>
                </MaratonaContentRight>

                <MaratonaContentLeft>
                    <GridWatchlist>
                        <CardMaratonas 
                            onClick={() => handleCardClick("filmes")}
                            categoria="Filmes"
                            quantidade= {movieList.length}
                            tempoTotal= {totalMovieRuntime}
                            filmes={movieList}
                        />
                        <CardMaratonas
                            onClick={() => handleCardClick("tv")}
                            categoria="Séries"
                            quantidade= {tvList.length}
                            tempoTotal= {totalTvRuntime}
                            filmes={tvList}
                        />
                    </GridWatchlist>
                </MaratonaContentLeft>
            </MaratonaContentContainer>
        </MainContent>

        {isModalOpen && (
                <CalculadoraModal
                    isOpen={isModalOpen}
                    onClose={closeModal}
                    totalMinutes={modalMediaType === 'movie' ? totalMovieRuntime : totalTvRuntime}
                    mediaType={modalMediaType}
                />
            )}
    </>
)
}
