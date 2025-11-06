import axios from 'axios';

const baseURL = import.meta.env.VITE_TMDB_BASE_URL

const apiKey = import.meta.env.VITE_TMDB_API_KEY

export const Api = axios.create({
    baseURL: baseURL,

    params: {
        api_Key: apiKey,
        language: 'pt-BR'
    }
});

