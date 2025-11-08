import React, { useState, useEffect } from 'react';
import { Api } from '../../services/Api';
import { Moviecard } from '../MovieCard';
import { RowWrapper, RowTitle, CardContainer, LoadingMessage } from './style';
const TMDB_BEARER_TOKEN = import.meta.env.VITE_TMDB_BEARER_TOKEN;

export function MovieRow({ title, fetchUrl, onSelectItem, searchTerm = '' }) {
	const [movies, setMovies] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchMovies = async () => {
			const config = {
				headers: {
					Authorization: `Bearer ${TMDB_BEARER_TOKEN}`,
					accept: 'application/json',
				},
			};

			try {
				const resposta = await Api.get(fetchUrl, config);
				setMovies(resposta.data.results || []);
			} catch (err) {
				console.error('Erro ao buscar filmes (MovieRow):', err);
				setError(err.message);
			} finally {
				setLoading(false);
			}
		};

		fetchMovies();
	}, [fetchUrl]);

	if (loading) return <LoadingMessage>Carregando...</LoadingMessage>;
	if (error) return <LoadingMessage>Erro: {error}</LoadingMessage>;

	const normalize = (s = '') =>
		s.toString().toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, '');

	const search = normalize(searchTerm);

	const filtered = movies.filter((m) => {
		const titleStr = normalize(m.title || m.name || m.original_title || '');
		return search === '' || titleStr.includes(search);
	});

	return (
		<RowWrapper>
			<RowTitle>{title}</RowTitle>
			<CardContainer>
				{filtered.map((movie) => (
					<Moviecard key={movie.id} movie={movie} onClick={() => onSelectItem && onSelectItem(movie)} />
				))}
			</CardContainer>
		</RowWrapper>
	);
}