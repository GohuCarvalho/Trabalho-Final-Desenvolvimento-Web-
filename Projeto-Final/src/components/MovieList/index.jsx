import React from 'react'
import { Api } from '../../services/Api';
import { Moviecard } from '../MovieCard';

export function MovieList () {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const fetchMovies = async() => {
            try{
                const resposta = await Api.get('/movie/popular')
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