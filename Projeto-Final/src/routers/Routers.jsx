import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import LoadingPage from '../pages/LoadingPage';
import { Home } from './../pages/Home';
import { Maratonas } from '../pages/Maratonas/index';
import { FilmesPopulares } from '../pages/FilmesPopulares';
import { NotFound } from '../pages/PageNotFound';
import Cadastro from '../pages/Cadastro'; 

export const Routers = ({ searchTerm = '' }) => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Cadastro />} />
                <Route path="/login" element={<Login />} />

                <Route path="/loading" element={<LoadingPage />} />
                <Route
                    path='/home'
                    element={<Home searchTerm={searchTerm} />}
                />
                <Route path="/filmes" element={<FilmesPopulares searchTerm={searchTerm} />} />
                <Route path="/maratonas" element={<Maratonas />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </>
    );
};
