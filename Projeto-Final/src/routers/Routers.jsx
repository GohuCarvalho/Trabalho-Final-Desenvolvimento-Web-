import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { ApiProvider } from '../hooks/AuthContext'
import { Login } from '../pages/Login/index';

import { Home } from './../pages/Home/index';
import Header from '../components/Header';
import { Maratonas } from '../pages/Maratonas/index';


export const Routers = () => {

    return (
        <BrowserRouter>
            <ApiProvider>
                <Header />
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/maratonas" element={<Maratonas/>} />
                </Routes>
            </ApiProvider>
        </BrowserRouter>
    )
}
