import React from 'react'
import { Api } from '../../services/Api';
import { Moviecard } from '../MovieCard';

TMDB_BEARER_TOKEN="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYTJkYjk0MzBiMGI5ZDY5MTU5MDIzMjdlZTQ2ODJkOCIsIm5iZiI6MTc2MjM5MzM0Ni40MTQsInN1YiI6IjY5MGJmZDAyYzRiNTU3NjA0NGQ3MzZmZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DxqYUDbTa4zFNL7PTVnrD9HtzQqCgi1YzP_5ez1fc14"

export function MovieList () {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const fetchMovies = async() => {
            const config={
                headers: {
                    'Authorization': TMDB_BEARER_TOKEN,
                    'accept': application/json
                }
            };
            try{
                const resposta = await Api.get('/movie/popular', config)
                setMovies(resposta.data.results);
            } catch (err){
                console.error("Erro ao buscar filme", err);
                setError(err.message);
            } finally{
                setLoading(false)
            }
        }
        fetchMovies();
    }, []);


if (loading){
    return <div className="loading">Carregando...</div>;
}

if(error){
    return <div className="error">Erro: {error}</div>;
}

return(
    <div Container>
        {movies.map((movie) => (
            <Moviecard key={movie.id} movie={movie}/>
        ))}
    </div>
    );
}