import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { ApiProvider } from '../hooks/AuthContext'
import { ApiProvider } from './../hooks/AuthContext';
import { Login } from '../pages/Login/index';
import { Maratonas } from '../pages/Maratonas';
import { Home } from './../pages/Home/index';


export const Routers = () => {

    return (
        <BrowserRouter>
        <ApiProvider>
        <Routes>

            <Route path="/Login" element={<Login />}>
            <Route path="/Home" elemennt={<Home />} />
            <Route path="/Maratonas" elemennt={<Maratonas />} />
            </Route>
            
        </Routes>
        </ApiProvider>
        </BrowserRouter>
    )
}
