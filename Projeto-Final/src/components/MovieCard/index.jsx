import React from 'react';
import {
    CardWrapper,
    Poster,
    MovieDetails,
    Title,
    Rating
} from './style';

const TMDB_IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

export function Moviecard({ movie }) {
    const imageUrl = movie.poster_path
        ? `${TMDB_IMAGE_BASE_URL}${movie.poster_path}`
        : 'https://via.placeholder.com/500x750?text=Sem+Imagem';

  
    const movieRating = (typeof movie.vote_average === 'number')
        ? movie.vote_average.toFixed(1)
        : 'N/A';                      


    return (
        <CardWrapper>
            <Poster
                src={imageUrl}
                alt={`Capa do Filme ${movie.title}`}
            />
            <MovieDetails>
                <Title>{movie.title}</Title>
                <Rating>
                    <strong>Avaliação: </strong> {movieRating}
                </Rating>
            </MovieDetails>
        </CardWrapper>
    );
}