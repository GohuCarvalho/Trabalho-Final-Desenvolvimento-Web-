import React, { useState, useEffect } from "react";
import { Api } from '../../services/Api';
import MainBody from "../../components/MainBody";

// TMDB_IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";



export function Home() {
    const [movies, setMovies] = useState([""]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const resposta = await Api.get('/movie/popular')
                setMovies(resposta.data.result);
            } catch { };
        }
    }
    )


    return (<>

        <MainContent>

        </MainContent>

    </>)

}


