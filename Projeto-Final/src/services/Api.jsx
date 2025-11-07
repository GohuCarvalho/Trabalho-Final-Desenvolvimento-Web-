import axios from 'axios';

const baseURL = import.meta.env.VITE_TMDB_BASE_URL;

export const Api = axios.create({
    baseURL: baseURL
    
});