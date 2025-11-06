import React from 'react'

TMDB_IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

export function Moviecard ({movie}){

    const imageUrl = movie.poster_path ? `${TMDB_IMAGE_BASE_URL}${movie.poster_path}` : '';

    return(
        <div className="movie-card">
            <img
              src={imageUrl}
              alt={`Capa do Filme ${movie.title}`}
              className='movie-poster'
            />
            <div className='movie-details'>
                <h2>{movie.title}</h2>
                <p className='movie-assessment'>
                    <strong>Avaliação: </strong> {movie.vote_average.toFixed(1)}
                </p>
            </div>
        </div>
    )
}

