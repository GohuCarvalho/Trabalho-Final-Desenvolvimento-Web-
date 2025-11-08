import React from 'react';
import {
    CardWrapper,
    Poster,
    MovieDetails,
    Title,
    Rating
} from './style';

const TMDB_IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

export function Moviecard({ movie, onClick }) {

    const imageUrl = movie.poster_path
        ? `${TMDB_IMAGE_BASE_URL}${movie.poster_path}`
        : 'https://via.placeholder.com/500x750?text=Sem+Imagem';

 
    const movieRating = (typeof movie.vote_average === 'number')
        ? movie.vote_average.toFixed(1)
        : 'N/A';
        
    const title = movie.title || movie.name;

    return (
        <CardWrapper onClick={onClick}>
            <Poster
                src={imageUrl}
                alt={`Capa de ${title}`} 
            />
            <MovieDetails>
                <Title>{title}</Title> 
                <Rating>
                    <strong>Avaliação: </strong> {movieRating}
                </Rating>
            </MovieDetails>
        </CardWrapper>
    );
}