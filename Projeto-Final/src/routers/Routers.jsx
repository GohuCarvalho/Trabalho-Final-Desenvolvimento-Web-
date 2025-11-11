import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import LoadingPage from '../pages/LoadingPage';
import { Home } from './../pages/Home';
import { Maratonas } from '../pages/Maratonas/index';
import { FilmesPopulares } from '../pages/FilmesPopulares';
import { NotFound } from '../pages/PageNotFound';
import Cadastro from '../pages/Cadastro'; 
import { WatchlistMoviePage } from '../pages/WatchlistMovies';
import { WatchlistTvPage } from '../pages/WatchlistTv/index';
import { Perfil } from '../pages/Perfil';
import { SeriesPopulares } from '../pages/SeriesPopulares';
import Lancamento from '../pages/Lançamentos'; 
import { ProtectedRoute } from '../components/ProtectedRoute';

export const Routers = ({ searchTerm = '' }) => {
    return (
        <>
        <Routes>
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/" element={<Login />} />

                <Route path="/loading" element={<LoadingPage />} />
                <Route
                    path='/home'
                    element={<Home searchTerm={searchTerm} />}
                />
                <Route path="/filmes" element={<FilmesPopulares searchTerm={searchTerm} />} />
                <Route path="/maratonas" element={<Maratonas />} />
                
                <Route path="/perfil" element={<Perfil />} />

                <Route path='/lancamento' element={<Lancamento />}/> 

                <Route path="/maratonar-filmes" element={<WatchlistMoviePage />} />
                <Route path="/maratonar-series" element={<WatchlistTvPage />} />
                
                <Route path="/series" element={<SeriesPopulares/>} />
                <Route path='*' element={<NotFound />} />
            </Routes>

        {/* <Routes>
            <Route path="/" element={<Cadastro />} />
            <Route path="/login" element={<Login />} />
            <Route path='*' element={<NotFound />} />
            
            <Route element={<ProtectedRoute />}>
                <Route path='/home' element={<Home searchTerm={searchTerm} />} />
                <Route path="/loading" element={<LoadingPage />} />
                <Route path="/filmes" element={<FilmesPopulares searchTerm={searchTerm} />} />
                <Route path="/series" element={<SeriesPopulares/>} />
                <Route path="/maratonas" element={<Maratonas />} />
                <Route path='/lancamento' element={<Lancamento />}/> 
                <Route path="/maratonar-filmes" element={<WatchlistMoviePage />} />
                <Route path="/maratonar-series" element={<WatchlistTvPage />} />
                <Route path="/perfil" element={<Perfil />} />
            </Route>
        </Routes> */}
        </>
    );
};

{/* <Routes>
                <Route path="/" element={<Cadastro />} />
                <Route path="/login" element={<Login />} />

                <Route path="/loading" element={<LoadingPage />} />
                <Route
                    path='/home'
                    element={<Home searchTerm={searchTerm} />}
                />
                <Route path="/filmes" element={<FilmesPopulares searchTerm={searchTerm} />} />
                <Route path="/maratonas" element={<Maratonas />} />
                
                <Route path="/perfil" element={<Perfil />} />

                <Route path='/lancamento' element={<Lancamento />}/> 

                <Route path="/maratonar-filmes" element={<WatchlistMoviePage />} />
                <Route path="/maratonar-series" element={<WatchlistTvPage />} />
                
                <Route path="/series" element={<SeriesPopulares/>} />
                <Route path='*' element={<NotFound />} />
            </Routes> */}