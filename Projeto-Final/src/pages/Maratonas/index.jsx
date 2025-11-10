import React, { useState, useEffect, useCallback } from "react"
import MainContent from "../../components/MainContent"
import { MaratonaContentContainer, MaratonaContentRight, MaratonaH2, MaratonaParagraph, MaratonaContentLeft, GridWatchlist, ButtonMaratonar } from './style';
import CardMaratonas from "../../components/CardMaratonas";
import { CalculadoraModal } from "../../components/CalculadoraModal"

const TMDB_BEARER_TOKEN = import.meta.env.VITE_TMDB_BEARER_TOKEN;
const MOCK_API_URL = "https://68dda4dad7b591b4b78d011a.mockapi.io/watchlist/watchlist";
const TMDB_BASE_URL = 'https://api.themoviedb.org/3';

export function Maratonas() {

    const [movieList, setMovieList] = useState([]);
    const [tvList, setTvList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalMediaType, setModalMediaType] = useState(null);

    const calculateTotalRuntime = (items, type) => {
        return items.reduce((total, item) => {
            if (type === 'movie') {
                return total + (item.runtime || 0); // runtime em minutos
            } else if (type === 'tv') {
                // Para séries, somamos a média do episode_run_time. Isso é uma simplificação.
                const episodeTime = item.episode_run_time?.[0] || 45; // 45min como fallback
                // Usamos 'number_of_episodes' do objeto de detalhes da série
                const totalEpisodes = item.number_of_episodes || 1;
                return total + (episodeTime * totalEpisodes);
            }
            return total;
        }, 0);
    };

    const fetchTMDBDetails = useCallback(async (id, mediaType) => {
        const url = `${TMDB_BASE_URL}/${mediaType}/${id}?language = pt - BR`;

        const config = {
            headers: {
                'Authorization': `Bearer ${TMDB_BEARER_TOKEN}`,
                'accept': 'application/json'
            }
        };

        try {
            const response = await fetch(url, config);
            if (!response.ok) {
                // Lança um erro para que Promise.all possa capturá-lo
                throw new Error(`Falha TMDB: ${mediaType} ID ${id}, Status ${response.status}`);
            }
            const data = await response.json();
            return data;
        } catch (e) {
            console.error(`Erro ao buscar ${mediaType} ID ${id}:`, e.message);
            // Retorna null para que o item com erro seja filtrado depois
            return null;
        }
    }, []);

    useEffect(() => {
        const fetchWatchlistAndDetails = async () => {
            setLoading(true);
            setError(null);

            // 1. Obter e-mail do Local Storage
            const user = JSON.parse(localStorage.getItem('@POPCORNSTORE:user'))
            const userEmail = user.email;
            if (!userEmail) {
                setError("Erro: E-mail não encontrado no Local Storage. Defina um valor, ex: localStorage.setItem('userEmail', 'seu@email.com');");
                setLoading(false);
                return;
            }

            // Verifica se o token está definido (prevenção de erro)
            if (TMDB_BEARER_TOKEN === 'SEU_TOKEN_TMDB_AQUI') {
                setError("ATENÇÃO: Por favor, defina o TMDB_BEARER_TOKEN.");
                setLoading(false);
                return;
            }

            try {
                // 2. Fazer fetch na Mock API (Lista de IDs)
                const mockResponse = await fetch(MOCK_API_URL);
                if (!mockResponse.ok) {
                    throw new Error("Falha ao buscar dados da Mock API. Verifique se o URL está correto e acessível.");
                }
                const rawWatchlist = await mockResponse.json();

                // 3. Filtrar e Separar IDs
                const userWatchlist = rawWatchlist.filter(item => item.email === userEmail);

                const movieIds = userWatchlist
                    .map(item => item.id_movie)
                    .filter(id => id && id !== 0); // Filtra IDs válidos e não-zero

                const tvIds = userWatchlist
                    .map(item => item.id_tv)
                    .filter(id => id && id !== 0); // Filtra IDs válidos e não-zero

                // 4. Fazer chamadas paralelas ao TMDB para detalhes
                const moviePromises = movieIds.map(id => fetchTMDBDetails(id, 'movie'));
                const tvPromises = tvIds.map(id => fetchTMDBDetails(id, 'tv'));

                // Executa todas as promises de forma paralela e aguarda
                // Usando Promise.allSettled para garantir que todas sejam resolvidas, mesmo com falhas individuais.
                const allResults = await Promise.allSettled([
                    ...moviePromises,
                    ...tvPromises
                ]);

                const successfulResults = allResults
                    .filter(result => result.status === 'fulfilled' && result.value !== null)
                    .map(result => result.value);

                // 5. Separar os resultados detalhados
                const finalMovieList = successfulResults.filter(item => item && item.hasOwnProperty('runtime')); // Filmes geralmente têm 'runtime'
                const finalTvList = successfulResults.filter(item => item && item.hasOwnProperty('number_of_episodes')); // Séries geralmente têm 'number_of_episodes'

                setMovieList(finalMovieList);
                setTvList(finalTvList);

            } catch (err) {
                console.error("Erro geral no fetch:", err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchWatchlistAndDetails();
    }, [fetchTMDBDetails]);



    const openModal = (mediaType) => {
        setModalMediaType(mediaType);
        console.log('clicou');
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setModalMediaType(null);
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
                            categoria="Filmes"
                            quantidade= {movieList.length}
                            tempoTotal= {totalMovieRuntime}
                            filmes={movieList}
                        />
                        <CardMaratonas
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
