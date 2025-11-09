import { Route, Routes, BrowserRouter , useLocation } from 'react-router-dom'
import { ApiProvider } from '../hooks/AuthContext'

import Login from '../pages/Login';

import Header from '../components/Header';
import { Maratonas } from '../pages/Maratonas/index';
import { FilmesPopulares } from '../pages/FilmesPopulares';
import { Home } from '../pages/Home';


export const Routers = () => {

    const location = useLocation();

    const exibirHeader = location.pathname != "/";

    return (
        
            <ApiProvider>
                {exibirHeader && <Header />}
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<Login />} />
                    <Route path='/home' element= {<Home />} />
                    <Route path="/filmes" element={<FilmesPopulares/>} />
                    <Route path="/maratonas" element={<Maratonas/>} />
                </Routes>
            </ApiProvider>
        
    )
}
