import MainBody from '../../components/MainBody';
import MainContent from '../../components/MainContent';

import { MovieList } from '../../components/MovieList';
import { Moviecard } from './../../components/MovieCard/index';
    
export function HomePage (){

        return (
        <>
        <MainBody>
            <MainContent>
                <h1>Flimes Populares</h1>

                <MovieList />


            </MainContent>
        </MainBody>
        </>
)
}

