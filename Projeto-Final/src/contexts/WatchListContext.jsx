import { createContext, useState, useCallback, useEffect } from "react";

const TMDB_BEARER_TOKEN = import.meta.env.VITE_TMDB_BEARER_TOKEN;
const MOCK_API_URL = "https://68dda4dad7b591b4b78d011a.mockapi.io/watchlist/watchlist";
const TMDB_BASE_URL = 'https://api.themoviedb.org/3';


export const WatchListContext = createContext();

export function WatchListProvider({ children }) {
  const [watchList, setWatchList] = useState([]);
  const [movieList, setMovieList] = useState([]);
  const [tvList, setTvList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  const fetchTMDBDetails = useCallback(async (id, mediaType) => {
    const url = `${TMDB_BASE_URL}/${mediaType}/${id}?language=pt-BR`;
    const config = {
      headers: {
        'Authorization': `Bearer ${TMDB_BEARER_TOKEN}`,
        'accept': 'application/json'
      }
    };

    try {
      const response = await fetch(url, config);
      if (!response.ok) {
        throw new Error(`Falha TMDB: ${mediaType} ID ${id}, Status ${response.status}`);
      }
      return await response.json();
    } catch (e) {
      console.error(`Erro ao buscar ${mediaType} ID ${id}:`, e.message);
      return null;
    }
  }, [TMDB_BEARER_TOKEN]);


  const fetchWatchlistAndDetails = useCallback(async () => {
    setLoading(true);
    setError(null);

    const userString = localStorage.getItem('@POPCORNSTORE:user');

    if (!userString) {
      console.error("Usuário não encontrado no Local Storage.");
      setError("Usuário não encontrado. Faça login novamente.");
      setLoading(false);
      return;
    }

    let userEmail;
    try {
      const user = JSON.parse(userString);
      userEmail = user.email;
    } catch (e) {
      setError("Erro ao analisar dados do usuário no Local Storage.");
      setLoading(false);
      return;
    }

    if (!userEmail || !TMDB_BEARER_TOKEN || TMDB_BEARER_TOKEN === 'SEU_TOKEN_TMDB_AQUI') {
      setLoading(false);
      return;
    }

    try {
      const mockResponse = await fetch(MOCK_API_URL);
      if (!mockResponse.ok) {
        throw new Error("Falha ao buscar dados da Mock API. Status: " + mockResponse.status);
      }
      const rawWatchlist = await mockResponse.json();

      const userWatchlist = rawWatchlist.filter(item => item.email === userEmail);

      const movieIds = userWatchlist.map(item => Number(item.id_movie)).filter(id => id && id !== 0);
      const tvIds = userWatchlist.map(item => Number(item.id_tv)).filter(id => id && id !== 0);

      const movieMap = userWatchlist.reduce((acc, item) => {
        if (item.id_movie) acc[Number(item.id_movie)] = item.id;
        return acc;
      }, {});
      const tvMap = userWatchlist.reduce((acc, item) => {
        if (item.id_tv) acc[Number(item.id_tv)] = item.id;
        return acc;
      }, {});

      setWatchList({ movieMap, tvMap });

      const moviePromises = movieIds.map(id => fetchTMDBDetails(id, 'movie'));
      const tvPromises = tvIds.map(id => fetchTMDBDetails(id, 'tv'));

      const allResults = await Promise.allSettled([...moviePromises, ...tvPromises]);

      const successfulResults = allResults
        .filter(result => result.status === 'fulfilled' && result.value !== null)
        .map(result => result.value);

      setMovieList(successfulResults.filter(item => item && item.hasOwnProperty('runtime')));
      setTvList(successfulResults.filter(item => item && item.hasOwnProperty('number_of_episodes')));

    } catch (err) {
      console.error("Erro geral no fetch:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [fetchTMDBDetails]);

  useEffect(() => {
    fetchWatchlistAndDetails();
  }, [fetchWatchlistAndDetails]);

  const toggleWatchlistItem = useCallback(async (id, mediaType) => {
    const userString = localStorage.getItem('@POPCORNSTORE:user');
    const user = userString ? JSON.parse(userString) : null;
    const userEmail = user ? user.email : null;

    if (!userEmail) {
      setError("Erro: E-mail do usuário não disponível para modificar a watchlist.");
      return;
    }

    const currentMap = mediaType === 'movie' ? watchList.movieMap : watchList.tvMap;
    const mockApiRecordId = currentMap ? currentMap[Number(id)] : undefined;

    try {
      setLoading(true);

      if (mockApiRecordId) {
        const deleteUrl = `${MOCK_API_URL}/${mockApiRecordId}`;
        const response = await fetch(deleteUrl, { method: 'DELETE' });

        if (!response.ok) {
          throw new Error(`Falha ao remover item da Mock API. Status: ${response.status}`);
        }

      } else {
        const payload = {
          email: userEmail,
          id_movie: mediaType === 'movie' ? Number(id) : 0,
          id_tv: mediaType === 'tv' ? Number(id) : 0,
        };

        const response = await fetch(MOCK_API_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });

        if (!response.ok) {
          throw new Error(`Falha ao adicionar item à Mock API. Status: ${response.status}`);
        }
      }

      await fetchWatchlistAndDetails();

    } catch (e) {
      console.error("Erro ao alternar item:", e);
      setError(e.message);
      setLoading(false);
    } finally {}

  }, [fetchWatchlistAndDetails, watchList]);

  const isItemOnWatchlist = (id, mediaType) => {
    const currentMap = mediaType === 'movie' ? watchList.movieMap : watchList.tvMap;
    return currentMap ? !!currentMap[Number(id)] : false;
  };

  return (
    <WatchListContext.Provider
      value={{
        movieList,
        tvList,
        loading,
        error,
        toggleWatchlistItem, 
        isItemOnWatchlist 
      }}
    >
      {children}
    </WatchListContext.Provider>
  );
}
