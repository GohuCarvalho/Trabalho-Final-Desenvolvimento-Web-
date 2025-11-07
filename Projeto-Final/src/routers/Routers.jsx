import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { ApiProvider } from '../hooks/AuthContext'
import Login from '../pages/Login';
import { Home } from './../pages/Home/index';
import Header from '../components/Header';
import { Maratonas } from '../pages/Maratonas/index';
import { FilmesPopulares } from '../pages/FilmesPopulares';


export const Routers = () => {

    return (
        <BrowserRouter>
            <ApiProvider>
                <Header />
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path='/home' element= {<Home />} />
                    <Route path="/filmes" element={<FilmesPopulares/>} />
                    <Route path="/maratonas" element={<Maratonas/>} />
                </Routes>
            </ApiProvider>
        </BrowserRouter>
    )
}