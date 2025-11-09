import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Login from '../pages/Login';
import LoadingPage from '../pages/LoadingPage';
import { Home } from './../pages/Home';

import { Maratonas } from '../pages/Maratonas/index';
import { FilmesPopulares } from '../pages/FilmesPopulares';
import { NotFound } from '../pages/PageNotFound';

export const Routers = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const handleSearchChange = (novoTermo) => {
        console.log('Routers handleSearchChange:', novoTermo);
        setSearchTerm(novoTermo);
    };

    return (
        <>
            <Routes>
                <Route path="/" element={<Login />} />
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