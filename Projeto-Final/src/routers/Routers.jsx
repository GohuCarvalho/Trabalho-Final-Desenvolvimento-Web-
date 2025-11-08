import React, { useState } from 'react'; 
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Login from '../pages/Login';
import { Home } from './../pages/Home';
import Header from '../components/NavBar';
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
        <BrowserRouter>
            <Header
                searchTerm={searchTerm}
                onSearchChange={handleSearchChange}
            />
            <Routes>
                <Route path="/" element={<Login />} />
                <Route 
                    path='/home' 
                    element={<Home searchTerm={searchTerm} />} 
                />
                    <Route path="/filmes" element={<FilmesPopulares searchTerm={searchTerm} />} />
                <Route path="/maratonas" element={<Maratonas/>} />

                 <Route path='*' element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
};