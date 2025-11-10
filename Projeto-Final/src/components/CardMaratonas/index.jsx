import React from 'react';
import {
    CardContainer,
    CardContent,
    CardText,
    Titulo,
    Contador,
    Label,
    CardMiniaturas,
    Miniatura,
} from './styles';


const filmeData = {
    quantidade: 5,
    tempoTotal: '5.5h',
    miniaturas: [
        'https://via.placeholder.com/70x100/000000/FFFFFF?text=3',
        'https://via.placeholder.com/70x100/000000/FFFFFF?text=2',
        'https://via.placeholder.com/70x100/000000/FFFFFF?text=1',
    ],
};

const TMDB_IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

const CardMaratonas = ( {categoria, quantidade , tempoTotal , filmes } ) => {
    return (
        <CardContainer>

            <Titulo>{categoria}</Titulo>
            <CardContent>
                <CardText>
                    <Contador>
                        {/* Remove o texto da Label e coloca no JSX */}
                        <Label>QUANTIDADE:</Label> 
                        {quantidade}
                    </Contador>
                    <Contador>
                        <Label>TOTAL:</Label>
                        {tempoTotal} min
                    </Contador>
                </CardText>
                <CardMiniaturas>
                        {filmes.slice(0, 5).map((filme, index) => (
                        <Miniatura
                            key={index}
                            src={TMDB_IMAGE_BASE_URL.concat(filme.backdrop_path)}
                            alt={`Miniatura Filme ${filme.title}`}
                            $index={index}
                        />
                        ))}
                </CardMiniaturas>
            </CardContent>
            
        </CardContainer>
    );
};

export default CardMaratonas;