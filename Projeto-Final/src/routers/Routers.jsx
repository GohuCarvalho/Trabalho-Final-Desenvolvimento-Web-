import React, { useState } from 'react'; 
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { ApiProvider } from '../hooks/AuthContext';
import Login from '../pages/Login';
import { Home } from './../pages/Home';
import Header from '../components/Header';
import { Maratonas } from '../pages/Maratonas/index';
import { FilmesPopulares } from '../pages/FilmesPopulares';

export const Routers = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const handleSearchChange = (novoTermo) => {
        setSearchTerm(novoTermo);
    };

    return (
        <BrowserRouter>
            <ApiProvider>
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
                    
                    <Route path="/filmes" element={<FilmesPopulares/>} />
                    <Route path="/maratonas" element={<Maratonas/>} />
                </Routes>
            </ApiProvider>
        </BrowserRouter>
    );
};